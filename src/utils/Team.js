export default class Team {
    constructor(name, league, finalPosition, group) {
        this.name = name;
        this.league = league;
        this.finalPosition = finalPosition;
        this.group = group;
    }

    validateDraw(team) {
        // return true if draw betweem teams is valid
        const isSameLeague = this.league === team.league;
        const isSameGroup = this.group === team.group;
        const isSamePosition = this.finalPosition === team.finalPosition;
        return !isSameGroup && !isSamePosition && !isSameLeague;
    }

    calcValidTeams(remainingTeams) {
        const validTeams = [];
        remainingTeams.forEach((team) => {
            if (this.validateDraw(team)) {
                validTeams.push(team);
            }
        });
        return validTeams;
    }
}
