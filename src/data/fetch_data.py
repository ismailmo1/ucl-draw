import json
from os import environ

import requests

# get api key from https://dashboard.api-football.com/soccer/tester
API_KEY = environ.get("API_KEY")

headers = headers = {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": API_KEY,
}

# ucl league id = 2
res = requests.get(
    "https://v3.football.api-sports.io/standings?league=2&season=2021",
    headers=headers,
)

ucl_data = res.json()
json_string = json.dumps(ucl_data)

# dump to file
with open("ucl2021.json", "w+") as f:
    f.write(json_string)
