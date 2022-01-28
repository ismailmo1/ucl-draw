const drawHomeTeam = (remainingTeams) => {
    // rand num between 0 and 15
    const firstTeamIdx = Math.floor(Math.random() * remainingTeams.length);
    return remainingTeams[firstTeamIdx];
};

const drawAwayTeam = (homeTeam, remainingTeams) => {
    const validTeams = homeTeam.calcValidTeams(remainingTeams);
    const randDrawIdx = Math.floor(Math.random() * validTeams.length);
    return validTeams[randDrawIdx];
};

export { drawHomeTeam, drawAwayTeam };
