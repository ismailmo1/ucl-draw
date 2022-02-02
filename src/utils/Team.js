export default class Team {
    constructor(name, league, finalPosition, group) {
        this.name = name;
        this.league = league;
        this.finalPosition = finalPosition;
        this.group = group;
    }

    validateDraw(team) {
        // return dict of reasons for team validity/invalidity
        const isSameLeague = this.league === team.league;
        const isSameGroup = this.group === team.group;
        const isSamePosition = this.finalPosition === team.finalPosition;
        const isValid = !isSameGroup && !isSameLeague && !isSamePosition;
        return {
            isValid: isValid,
            sameGroup: isSameGroup,
            samePosition: isSamePosition,
            sameLeague: isSameLeague,
        };
    }

    calcValidity(remainingTeams) {
        // add  validreason property to remaining teams
        // mutating object in function === side effects (this is a bad idea i think?)
        // need to change this behaviour
        remainingTeams.forEach((team) => {
            const validReasons = this.validateDraw(team);
            team.validReasons = validReasons;
        });
    }
}
