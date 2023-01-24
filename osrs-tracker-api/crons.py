from flask import Blueprint
import requests
from bs4 import BeautifulSoup
import re
import json

# can add static_folder="" and template_folder="" as params below
crons = Blueprint("crons", __name__)

# HIGHSCORES --------------------------------------------------------------
osrs_api_url = 'https://runescape.wiki/w/Application_programming_interface'

def clean_html_res(element):
    element_list = element.text.splitlines()
    # cleaned_list = [re.sub('[^a-zA-Z0-9]+', '', _).lower() for _ in element_list]
    return element_list

def create_data(list_items, file_name):
    jsonString = json.dumps(list_items)
    jsonFile = open(file_name, "w")
    jsonFile.write(jsonString)
    jsonFile.close()


def fetch_highscores_titles():
    print('Syncing Skills and Minigames')
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

# QUESTS ------------------------------------------------------------------
def fetch_quests():
    quest_list_url = 'https://oldschool.runescape.wiki/w/Quests/List'
    r = requests.get(quest_list_url)
    soup = BeautifulSoup(r.content, 'html.parser')

    table_json = []
    # free quests
    def find_titles(table): 
        for tr in table.find_all('tr')[1:]:
            title = tr.find('a', title=True)['title']
            link = tr.find('a', href=True)['href']
            table_json.append({
                "title": title,
                "link": "https://oldschool.runescape.wiki" + link
            })

    freeQuests = soup.find_all('tbody')[1]
    memberQuests = soup.find_all('tbody')[3]
    minigames = soup.find_all('tbody')[4]

    find_titles(freeQuests)
    find_titles(memberQuests)
    find_titles(minigames)

    return table_json


# Check if any quests have been added by comparing scraped list to stored list
def check_quests():
    print('Checking Quests')
    scraped_quests = fetch_quests()
    with open('quest-names.json', "r") as file:
        quest_json_data = json.load(file)

    if scraped_quests == quest_json_data:
        # Quest lists are the same
        print('No new quests or minigames add. Ending process.')
    else:
        print("Quests changed, updating lists")
        # Quest list has been updated
        jsonString = json.dumps(scraped_quests)
        jsonFile = open('quest-names.json', "w")
        jsonFile.write(jsonString)
        jsonFile.close()
        create_quest_list()


def create_quest_list():
    urls = []
    quest_json_data = []
    with open('quest-names.json', 'r') as f:
        json_data = json.load(f)
        quest_links = [ sub['link'] for sub in json_data ]
        urls = quest_links
    
    def transform(url):
        r = requests.get(str(url))
        soup = BeautifulSoup(r.content, 'html.parser')
        title = soup.find('h1').text
        details = soup.find_all('tbody')
        quick_details = details[1]
        full_details = details[2]

        # Get details from thumbnail section at top
        released = ''
        released_check = quick_details.find('th', text=re.compile("Released"))
        if released_check != None:
            releaseDate = quick_details.find('th', text=re.compile("Released")).find_next_sibling('td').find_all('a')
            released = releaseDate[0].text + ", " + releaseDate[1].get_text(" ",strip=True)

        members_boolean = False
        members_check = quick_details.find('a', text=re.compile("Members"))
        if members_check != None:
            members = quick_details.find('a', text=re.compile("Members")).parent.find_next_sibling('td').get_text(" ",strip=True)
            members_boolean = members == 'Yes'

        series = ''
        seriesCheck = quick_details.find('a', text=re.compile("Quest series"))
        if seriesCheck != None:
            series = quick_details.find('a', text=re.compile("Quest series")).parent.find_next_sibling('td').get_text(" ",strip=True)

        # Get remaining details from large table
        start_point = ''
        start_point_check = full_details.find('th', text=re.compile("Start point"))
        if start_point_check != None:
            start_point = full_details.find('th', text=re.compile("Start point")).find_next_sibling('td').get_text(" ",strip=True)

        difficulty = ''
        difficulty_check = full_details.find('th', text=re.compile("Official difficulty"))
        if difficulty_check != None:
            difficulty = full_details.find('th', text=re.compile("Official difficulty")).find_next_sibling('td').get_text(" ",strip=True)

        description = ''
        description_check = full_details.find('th', text=re.compile("Description"))
        if description_check != None:
            description = full_details.find('th', text=re.compile("Description")).find_next_sibling('td').get_text(" ",strip=True)

        length = ''
        length_check = full_details.find('th', text=re.compile("Official length"))
        if length_check != None:
            length = full_details.find('th', text=re.compile("Official length")).find_next_sibling('td').get_text(" ",strip=True)

        # convert to list, add check for if its a string
        requirements = []
        requirements_exist_check = full_details.find('th', text=re.compile("Requirements"))
        if requirements_exist_check != None:
            requirements_list_check = full_details.find('th', text=re.compile("Requirements")).find_next_sibling('td').find_all('li')
        if requirements_list_check != None:
            requirements_list = full_details.find('th', text=re.compile("Requirements")).find_next_sibling('td').find_all('li')
            for item in requirements_list:
                requirements.append(item.get_text(" ",strip=True))
        else:
            requirements.append(full_details.find('th', text=re.compile("Requirements")).find_next_sibling('td').get_text(" ",strip=True))

        items_required = []
        items_required_check = full_details.find('th', text=re.compile("Items required"))
        if items_required_check != None:
            required_list = full_details.find('th', text=re.compile("Items required")).find_next_sibling('td').find_all('li')
        for item in required_list:
            items_required.append(item.get_text(" ",strip=True))

        recommended= []
        recommended_check = full_details.find('th', text=re.compile("Recommended"))
        if recommended_check != None:
            recommended_list = full_details.find('th', text=re.compile("Recommended")).find_next_sibling('td').find_all('li')
        for item in recommended_list:
            recommended.append(item.get_text(" ",strip=True))

        enemies = ''
        enemies_check = full_details.find('th', text=re.compile("Enemies to defeat"))
        if enemies_check != None:
            enemies = full_details.find('th', text=re.compile("Enemies to defeat")).find_next_sibling('td').get_text(" ",strip=True)

        quest_object = {
            "link": url,
            "name": title,
            "isMembers": members_boolean,
            "series": series,
            "startPoint": start_point,
            "releaseDate": released,
            "difficulty": difficulty,
            "description": description,
            "length": length,
            "requirements": requirements,
            "itemsRequired": items_required,
            "recommended": recommended,
            "enemies": enemies
        }

        quest_json_data.append(quest_object)
        # print('Added: ' + title)
        return

    for url in urls: 
        transform(url)

    # Create JSON
    jsonString = json.dumps(quest_json_data)
    jsonFile = open('quest-list.json', "w")
    jsonFile.write(jsonString)
    jsonFile.close()
    print('Completed Quest Update')
    return