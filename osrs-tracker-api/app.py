from flask import Flask
from flask_cors import CORS
import requests
import json 

api = Flask(__name__)
CORS(api)

@api.route('/character/<username>', methods=['GET'])
def get_osrs_profile(username):
    osrs_url = f"https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player={username}"
    r = requests.get(osrs_url)
    rbody = r.text
    rlist = rbody.splitlines()

    osrskeys = ['overall', 'atk', 'def', 'str', 'hp', 'range', 'prayer', 'magic', 'cook', 'wc', 'fletch', 'fish', 'fm', 'craft', 'smith', 'mine', 'herb', 'agility', 'thief', 'slayer', 'farm', 'rc', 'hunt', 'construction', 'leaguePoints', 'bountyHunterHunter', 'bountyHunterRogue', 'cluescrolls', 'cluescrollBeg', 'cluescrollEasy', 'cluescrollMed', 'cluescrollHard', 'cluescrollElite', 'cluescrollMast', 'lms', 'pvpArena', 'soulwars', 'riftsClosed', 'abyssalSire', 'alchemicalHydra', 'barrows', 'bryophyta', 'callisto', 'cerberus', 'cox', 'coxHard', 'chaosEle', 'chaosFanatic', 'zilyana', 'corporealBeast', 'crazyArchaeologist', 'dagPrime', 'dagRex', 'dagSupreme', 'derangedArchaeologist', 'graardor', 'giantMole', 'grotesqueGuardians', 'hespori', 'kq', 'kbd', 'kraken', 'kreeArra', 'krilTsutsaroth', 'mimic', 'nex', 'nightmare', 'phosanisNightmare', 'obor', 'phantomMuspah', 'sarachnis', 'scorpia', 'skotizo', 'tempoross', 'gauntlet', 'corruptedGauntlet', 'tob', 'tobHard', 'thermonuclearSmokeDevil', 'toa', 'toaHard', 'zuk', 'jad', 'venenatis', 'vetion', 'vorkath', 'wintertodt', 'zalcano', 'zulrah']

    def separate_sub_lists(sub_list):
        if len(sub_list) > 2:
            # skill
            return {
                'rank': sub_list[0],
                'level': sub_list[1],
                'exp': sub_list[2]
            }
        else:
            # game
            return {
                'rank': sub_list[0],
                'score': sub_list[1],
            }


    def map_dictionary(keys, values):
        for id, value_list in enumerate(values):
            sub_list = value_list.split(',')
            values[id] = separate_sub_lists(sub_list)

        return dict(zip(keys, values))

    osrsdictionary = map_dictionary(osrskeys, rlist)
    osrsjson = json.dumps(osrsdictionary)
    
    return osrsjson
