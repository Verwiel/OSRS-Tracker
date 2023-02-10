from flask import Blueprint
from flask_cors import cross_origin
import json

# can add static_folder="" and template_folder="" as params below
quests = Blueprint("quests", __name__)


@quests.route('/list', methods=['GET'])
@cross_origin()
def get_osrs_quests():
    with open('quest-list.json', 'r') as f:
        json_data = json.load(f)
        return json_data


# WIP - grab optimal quest guides

# regular_quest_url = 'https://oldschool.runescape.wiki/w/Optimal_quest_guide'
# iron_man_url = 'https://oldschool.runescape.wiki/w/Optimal_quest_guide/Ironman'

# update_guides(regular_quest_url, "optimal-quest-guide.json")
# update_guides(iron_man_url, "optimal-quest-guide-ironman.json")

# def update_guides(url, fileName):
#   r = requests.get(str(url))
#   soup = BeautifulSoup(r.content, 'lxml')
#   table = soup.find('tbody')
#   trows = table.find_all('tr')[1:]

#   elements = []

#   for row in trows:
#     if row.find('th'):
#       row_elements = {
#         "quest": row.find('th').get_text(" ",strip=True),
#         "guide": row.find('a')['href'],
#         "levels": '',
#         "points": '',
#         "totalpoints": '',
#         "info": [''],
#         "training": True,
#         "full_row": True
#       }
#       elements.append(row_elements)
#     else:
#       columns = row.find_all('td')
#       if len(columns) < 7:
#         # Has rowspan
#         if len(columns) < 3:
#           for item in columns:
#             row_elements = {
#               "quest": item.find('a')['title'],
#               "guide": item.find('a')['href'],
#               "levels": '',
#               "points": '',
#               "totalpoints": '',
#               "info": [''],
#               "training": False,
#               "full_row": True
#             }
#             elements.append(row_elements)
#         else:
#           for item in columns:
#             row_elements = {
#               "quest": item.get_text(" ", strip=True),
#               "guide": '',
#               "levels": '',
#               "points": '',
#               "totalpoints": '',
#               "info": [''],
#               "training": False,
#               "full_row": True
#             }
#             elements.append(row_elements)
#       else:
#         print(len(columns))
#         row_elements = {
#           "quest": columns[0].find('a')['title'],
#           "guide": columns[0].find('a')['href'],
#           "levels": columns[2].get_text(" ", strip=True),
#           "points": columns[3].get_text(" ", strip=True),
#           "totalpoints": columns[4].get_text(" ", strip=True),
#           "info": [columns[5].get_text(" ", strip=True)],
#           "training": False,
#           "full_row": False
#         }
#         elements.append(row_elements)
#   # Create JSON
#   jsonString = json.dumps(elements)
#   jsonFile = open(fileName, "w")
#   jsonFile.write(jsonString)
#   jsonFile.close()
