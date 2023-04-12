# OSRS-Tracker
### Webcrawler to display osrs quests and requirements, React app to display quest tracker and character info.

--- 
The styles may look odd but thats because they are based off of OldSchool Runescape, so they need to look oldschool!

Python Crawler scrapes the OSRS wiki quest list everyday to see if any new quests have been added. If a quest has been added it scrapes the guide page for all relevant information to display.

Skills and highscores are grabbed from the official osrs API. I added quick links to the level up table for ease of access.

The front end quest list can be used to mark off quests you have completed and stores that info in your browsers local storage. As with anything stored locally the data can only be accessed on the browser you manipulated it on and if you clear you cache the data will be removed.

---
Backend Deployed on Render

Frontend Deployed on Vercel