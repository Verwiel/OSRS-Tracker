from flask import Blueprint
import requests
from bs4 import BeautifulSoup
from csv import reader
import pandas as pd

# can add static_folder="" and template_folder="" as params below
quests = Blueprint("quests", __name__)

urls = []
titles = []

# // need to scrape base website to get the urls first
# // then check against a csv that exists, if its new append it

with open('quests.csv', 'r') as f:
  csv_reader = reader(f)
  for row in csv_reader:
    urls.append(row[0])

def transform(url):
  r = requests.get(str(url))
  soup = BeautifulSoup(r.content, 'html.parser')
  title = soup.find('h1').text
  titles.append(title)
  print(title)
  return

for url in urls: 
  transform(url)

print(len(titles))

df = pd.DataFrame(titles)
df.to_csv('titles.csv', index=False)
print('Complete')
