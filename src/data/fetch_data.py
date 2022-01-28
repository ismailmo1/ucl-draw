import json
from os import environ

import requests

# get api key from https://dashboard.api-football.com/soccer/tester
API_KEY = environ.get("API_KEY")


def call_api(url, api_key=API_KEY):
    """send request to api and return data dictionary"""
    # ucl league id = 2
    headers = headers = {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": api_key,
    }
    res = requests.get(url, headers=headers)

    data = res.json()
    return data


group_data = call_api(
    "https://v3.football.api-sports.io/standings?league=2&season=2021"
)

group_standings = group_data["response"][0]["league"]["standings"][0]


# dump to file
with open("ucl-groups-2021.json", "w+") as f:
    f.write(json.dumps(group_standings))

team_data = call_api(
    "https://v3.football.api-sports.io/teams?league=2&season=2021"
)

# add team id as key of team dict
indexed_team_data = {}
for team in team_data["response"]:
    indexed_team_data[team["team"]["id"]] = team

# dump to file
with open("ucl-teams-2021.json", "w+") as f:
    f.write(json.dumps(indexed_team_data))
