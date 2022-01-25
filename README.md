# Uefa Champions League Draw Simulator

React app to simulate a champions league draw and provide some insight on how the rules work.

---

The [UEFA Champions League](https://en.wikipedia.org/wiki/UEFA_Champions_League) is an annual football competition where the top clubs in european football compete to be crowned the champions of europe.

During the latter stages of the competition the teams who qualify from the initial group stages are drawn against eachother to end the tournament in a knock-out format, and it is this draw that the app will simulate.

---

### This app was mostly inspired by the shambles of a draw during the [2021-22 UCL season](https://www.bbc.co.uk/sport/av/football/59644156).

## Implementation Plan

- [ ] Create Team class
  - [ ] Properties: Name, League, Table Position
  - [ ] Methods/Func: findPossOpponents, drawOpponent
- [ ] Implement team match rules
  - [ ] prohibit teams from same group stage
  - [ ] prohibit teams from same league
  - [ ] implement seeding i.e. 1st pos vs 2nd pos
- [ ] Add 2021-22 team data
- [ ] UI elements for knockout stage visuals
  - [ ] create tournament tree (how to optimise for different view widths?)
  - [ ] "stage" for current draw results
  - [ ] visualise opening of result - animation for opening ball?
  - [ ] bowl of remaining teams


