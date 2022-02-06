import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Button, Grid } from "@mui/material";
import { useReducer, useState } from "react";
import Fixtures from "./components/Fixtures";
import Stage from "./components/Stage";
import styles from "./index.module.css";
import { default as allTeams, loadTeamData } from "./utils/teamData";
const teamReducer = (state, action) => {
    // state: {team:name of drawn team, remainingTeams:list of team objs left in draw,
    //          forcedDraws:team objs that only have one possible matchup}
    let updatedTeams;
    let updatedForcedDraws;
    switch (action.type) {
        case "homeDraw":
            updatedForcedDraws = { ...state.forcedDraws };
            updatedTeams = [...state.remainingTeams];

            // update teams' validTeams
            updatedTeams.forEach((team) => {
                team.calcValidity(updatedTeams);
                team.validTeams = updatedTeams.filter(
                    (team) => team.validReasons.isValid
                );
                if (team.validTeams.length === 1) {
                    // add both sets of teams to forced draws state
                    const forcedTeam = team.validTeams[0];
                    updatedForcedDraws[team.name] = forcedTeam.name;
                    updatedForcedDraws[forcedTeam.name] = team.name;
                }
            });
            return {
                ...state,
                remainingTeams: updatedTeams,
                forcedDraws: updatedForcedDraws,
            };
        case "awayDraw":
            updatedTeams = state.remainingTeams.filter(
                (team) =>
                    team.name !== action.homeTeam.name &&
                    team.name !== action.awayTeam.name
            );
            return {
                ...state,
                remainingTeams: updatedTeams,
            };
        case "reset":
            return { remainingTeams: loadTeamData(), forcedDraws: {} };
        default:
            throw new Error();
    }
};
function App() {
    const [teamState, dispatch] = useReducer(teamReducer, {
        remainingTeams: allTeams,
        forcedDraws: {},
    });
    const [fixtures, setFixtures] = useState([]);

    const createFixtureHandler = (homeTeam, awayTeam) => {
        setFixtures((prevFixtures) => [
            ...prevFixtures,
            { home: homeTeam, away: awayTeam },
        ]);
        dispatch({ type: "awayDraw", homeTeam: homeTeam, awayTeam: awayTeam });
    };

    const homeDrawHandler = (team) => {
        dispatch({ type: "homeDraw", team: team });
    };

    const restartHandler = () => {
        setFixtures([]);
        dispatch({ type: "reset" });
    };

    return (
        <>
            <div className={styles.overlay}></div>
            <Grid
                container
                justifyContent="center"
                sx={{ maxWidth: "75%", mx: "auto" }}
            >
                <Grid item>
                    <h1>UCL DRAW SIMULATOR</h1>
                </Grid>
                <Grid container xs={12} justifyContent="center">
                    {teamState.remainingTeams.length > 0 && (
                        <Stage
                            teamState={teamState}
                            onHomeDraw={homeDrawHandler}
                            onFixtureDraw={createFixtureHandler}
                        />
                    )}
                    <Grid item xs={12}>
                        <Fixtures fixtures={fixtures} />
                    </Grid>
                    {teamState.remainingTeams.length === 0 && (
                        <Button variant="text" onClick={restartHandler}>
                            <RestartAltIcon
                                sx={{ color: "white", fontSize: "50px" }}
                            />
                        </Button>
                    )}
                </Grid>
            </Grid>
        </>
    );
}

export default App;
