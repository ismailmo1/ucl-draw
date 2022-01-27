import data from "../data/ucl2021.json";

const teams = data["response"][0]["league"]["standings"];
const teamData = [];

teams.forEach((group) => {
  group.forEach((team) => {
    teamData.push(team);
  });
});

// only top two teams qualify to round of 16
const qualifiedTeams = teamData.filter((team) => team.rank <= 2);

export default qualifiedTeams;
