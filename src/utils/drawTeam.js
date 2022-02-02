const drawHomeTeam = (remainingTeams) => {
    // rand num between 0 and 15
    const firstTeamIdx = Math.floor(Math.random() * remainingTeams.length);
    return remainingTeams[firstTeamIdx];
};

const drawAwayTeam = (homeTeam, remainingTeams) => {
    homeTeam.calcValidity(remainingTeams);
    const validTeams = remainingTeams.filter(
        (team) => team.validReasons.isValid
    );
    console.log(validTeams);
    const randDrawIdx = Math.floor(Math.random() * validTeams.length);
    return validTeams[randDrawIdx];
};

export { drawHomeTeam, drawAwayTeam };
