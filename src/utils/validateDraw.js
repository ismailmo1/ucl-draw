const validateDraw = (teamA, teamB) => {
  const isSameLeague = teamA.league === teamB.league;
  const isSameGroup = teamA.group === teamB.group;
  const isSamePosition = teamA.finalPosition === teamB.Position;
  return !isSameLeague && !isSameGroup && !isSamePosition;
};

export default validateDraw;
