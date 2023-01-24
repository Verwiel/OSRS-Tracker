from flask import Flask
from flask_cors import CORS
from apscheduler.schedulers.blocking import BlockingScheduler
import atexit
from highscores import highscores
from quests import quests
from crons import crons, check_quests, fetch_highscores_titles

app = Flask(__name__)
CORS(app)

app.register_blueprint(highscores, url_prefix="/highscores")
app.register_blueprint(quests, url_prefix="/quests")
app.register_blueprint(crons)


# Check if quests or highscores scraped data has updated daily
scheduler = BlockingScheduler()
scheduler.add_job(check_quests, "interval", days=1)
scheduler.add_job(fetch_highscores_titles, "interval", days=1)
scheduler.start()

# /!\ IMPORTANT /!\ : Shut down the scheduler when exiting the app
atexit.register(lambda: scheduler.shutdown())