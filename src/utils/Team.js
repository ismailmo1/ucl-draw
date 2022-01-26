import validateDraw from "./validateDraw";

export default class Team {
  constructor(name, league, finalPosition, group) {
    this.name = name;
    this.league = league;
    this.finalPosition = finalPosition;
    this.group = group;
  }
  validateDraw(team) {
    return validateDraw(this, team);
  }
}
