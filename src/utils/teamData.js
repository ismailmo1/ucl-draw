import GroupData from "../data/ucl-groups-2021.json";
import TeamData from "../data/ucl-teams-2021.json";
import Team from "./Team";

const allTeams = [];

GroupData.forEach((group) => {
    group.forEach((team) => {
        const name = team.team.name;
        const group = team.group;
        const finalPosition = team.rank;
        const league = TeamData[team.team.id].team.country;
        const teamObj = new Team(name, league, finalPosition, group);
        allTeams.push(teamObj);
    });
});

// only top two teams qualify to round of 16
const qualifiedTeams = allTeams.filter((team) => team.finalPosition <= 2);

export default qualifiedTeams;
