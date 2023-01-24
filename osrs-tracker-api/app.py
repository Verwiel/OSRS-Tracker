from flask import Flask
from flask_cors import CORS
import requests
import json 
from highscores import highscores
from quests import quests

app = Flask(__name__)
CORS(app)

app.register_blueprint(highscores, url_prefix="/highscores")
app.register_blueprint(quests, url_prefix="/quests")

# cron check_quests from quests
# cron fetch_highscores_titles from highscores