import GroupData from "../data/ucl-groups-2021.json";
import TeamData from "../data/ucl-teams-2021.json";
import Team from "./Team";

export const loadTeamData = () => {
    const allTeams = [];

    GroupData.forEach((group) => {
        group.forEach((team) => {
            const name = team.team.name;
            const group = team.group;
            const finalPosition = team.rank;
            const league = TeamData[team.team.id].team.country;
            const badgeImg = team.team.logo;
            const stadiumImg = TeamData[team.team.id].venue.image;
            const stadiumName = TeamData[team.team.id].venue.name;
            const teamObj = new Team(
                name,
                league,
                finalPosition,
                group,
                badgeImg,
                stadiumImg,
                stadiumName
            );
            allTeams.push(teamObj);
        });
    });

    // only top two teams qualify to round of 16
    const qualifiedTeams = allTeams.filter((team) => team.finalPosition <= 2);
    return qualifiedTeams;
};

const allTeams = loadTeamData();

export default allTeams;
