from flask import Blueprint, request
import requests
from bs4 import BeautifulSoup
import re
import json

# can add static_folder="" and template_folder="" as params below
highscores = Blueprint("highscores", __name__)

osrs_api_url = 'https://runescape.wiki/w/Application_programming_interface'


def clean_html_res(element):
    element_list = element.text.splitlines()
    cleaned_list = [re.sub('[^a-zA-Z0-9]+', '', _).lower() for _ in element_list]
    return cleaned_list


def create_data(list_items, file_name):
    jsonString = json.dumps(list_items)
    jsonFile = open(file_name, "w")
    jsonFile.write(jsonString)
    jsonFile.close()


def fetch_highscores_titles():
    r = requests.get(osrs_api_url)
    soup = BeautifulSoup(r.content, 'html.parser')
    # Narrow down search to osrs section
    osrs_section = soup.find(id="Old_School_Hiscores")
    # find next pre tag, skipping over example response
    skills = osrs_section.find_next("pre").find_next("pre")
    # the pre tag after skills will always be activities
    activities = skills.find_next("pre")

    skills_list = clean_html_res(skills)
    activities_list = clean_html_res(activities)
    create_data(activities_list, 'activities.json')
    create_data(skills_list, 'skills.json')


def get_gamemode_url(mode, username):
    base_url = 'https://secure.runescape.com/m='
    base_url_end = f'/index_lite.ws?player={username}'
    match mode:
        case 'regular':
            return base_url+'hiscore_oldschool'+base_url_end
        case 'ironman':
            return base_url+'hiscore_oldschool_ironman'+base_url_end
        case 'hcim':
            return base_url+'hiscore_oldschool_hardcore_ironman'+base_url_end
        case 'uim':
            return base_url+'hiscore_oldschool_ultimate'+base_url_end
        case _:
            return base_url+'hiscore_oldschool'+base_url_end


@highscores.route('/', methods=['GET'])
def get_osrs_profile():
    username = request.args.get('username')
    gamemode = request.args.get('gamemode')
    game_url = get_gamemode_url(gamemode, username)
    r = requests.get(game_url)

    rbody = r.text
    rlist = rbody.splitlines()

    skills_file = open("skills.json", "r").read()
    skills_keys = json.loads(skills_file)
    skills_data = rlist[:len(skills_keys)]

    activities_file = open("activities.json", "r").read()
    activities_keys = json.loads(activities_file)
    activities_data = rlist[len(activities_keys):]

    def separate_sub_lists(sub_list, key_name):
        if len(sub_list) > 2:
            # skill
            return {
                'skill': key_name,
                'rank': sub_list[0],
                'level': sub_list[1],
                'exp': sub_list[2]
            }
        else:
            # game
            return {
                'activity': key_name,
                'rank': sub_list[0],
                'score': sub_list[1],
            }

    def create_data_lists(list_data, key_data):
        for id, value_list in enumerate(list_data):
            sub_list = value_list.split(',')
            key_name = key_data[id]
            list_data[id] = separate_sub_lists(sub_list, key_name)
        return list_data

    osrs_skills = create_data_lists(skills_data, skills_keys)
    osrs_activities = create_data_lists(activities_data, activities_keys)

    res_data_highscores = {
        'skills': osrs_skills,
        'activites': osrs_activities,
    }
    
    return res_data_highscores


@highscores.route('/check/account', methods=['GET'])
def check_osrs_profile():
    username = request.args.get('username')
    gamemode = request.args.get('gamemode')
    game_url = get_gamemode_url(gamemode, username)

    r = requests.get(game_url)
    soup = BeautifulSoup(r.content, 'html.parser')

    # if there is no character there will be a title in the data
    no_character_exists = soup.find('title')
    if no_character_exists:
        return {
            'status': 404,
            'message': 'character does not exist'
        }
    else :
        return {
            'status': 200,
            'message': 'success'
        }