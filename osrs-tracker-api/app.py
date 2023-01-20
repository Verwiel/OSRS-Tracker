from flask import Flask
from flask_cors import CORS
import requests
import json 
from highscores import highscores

app = Flask(__name__)
CORS(app)

app.register_blueprint(highscores, url_prefix="/highscores")

