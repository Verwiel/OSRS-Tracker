from flask import Flask
from flask_cors import CORS
from apscheduler.schedulers.background import BackgroundScheduler
from highscores import highscores
from quests import quests
from crons import crons, check_quests, fetch_highscores_titles
import time
import os
from pytz import utc


app = Flask(__name__)
CORS(app)

app.register_blueprint(highscores, url_prefix="/highscores")
app.register_blueprint(quests, url_prefix="/quests")
app.register_blueprint(crons)


# Check if quests or highscores scraped data has updated daily
# if __name__ == '__main__':
scheduler = BackgroundScheduler()
scheduler.configure(timezone=utc)
scheduler.add_job(check_quests, trigger='cron', hour=22, minute=30)
scheduler.add_job(fetch_highscores_titles, trigger='cron', hour=23, minute=30)
scheduler.start()
print('Press Ctrl+{0} to exit'.format('Break' if os.name == 'nt' else 'C'))

try:
    # This is here to simulate application activity (which keeps the main thread alive).
    while True:
        time.sleep(5)
except (KeyboardInterrupt, SystemExit):
    # Not strictly necessary if daemonic mode is enabled but should be done if possible
    scheduler.shutdown()
