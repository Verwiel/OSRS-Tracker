from flask import Flask
from flask_cors import CORS
from flask_apscheduler import APScheduler
from highscores import highscores
from quests import quests
from crons import crons, check_quests, fetch_highscores_titles


app = Flask(__name__)
CORS(app)

app.register_blueprint(highscores, url_prefix="/highscores")
app.register_blueprint(quests, url_prefix="/quests")
app.register_blueprint(crons)

@app.route('/')
def home():
    return 'OSRS Tracker API'

# Check if quests or highscores scraped data has updated daily
scheduler = APScheduler()
scheduler.init_app(app)

@scheduler.task('cron', id='quests_cron', hour='23', minute='30')
def cron_quests():
    print("Starting Quest Cron")
    check_quests()

@scheduler.task('cron', id='highscores_cron', hour='22', minute='30')
def cron_highscores():
    print("Starting Highscores Cron")
    fetch_highscores_titles()

scheduler.start()


if __name__ == '__main__':
    app.run()
