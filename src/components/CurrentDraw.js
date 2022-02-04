import { ButtonGroup, Card } from "@mui/material";
import Button from "@mui/material/Button";
import { drawAwayTeam, drawHomeTeam } from "../utils/drawTeam";
import TeamCard from "./TeamCard";
const CurrentDraw = (props) => {
    const drawHomeTeamHandler = () => {
        const homeTeam = drawHomeTeam(props.teams.remainingTeams);
        props.onHomeDraw(homeTeam);
    };

    const drawAwayTeamHandler = () => {
        let awayTeam = drawAwayTeam(
            props.currHomeTeam,
            props.teams.remainingTeams
        );
        // check forced draws for home team
        if (props.teams.forcedDraws.hasOwnProperty(props.currHomeTeam.name)) {
            const awayTeamName =
                props.teams.forcedDraws[props.currHomeTeam.name];
            awayTeam = props.teams.remainingTeams.filter(
                (team) => team.name === awayTeamName
            )[0];
        }

        // check forced draws for away team
        while (
            props.teams.forcedDraws.hasOwnProperty(awayTeam.name) &&
            props.teams.forcedDraws[awayTeam.name] !== props.currHomeTeam.name
        ) {
            // keep searching new away team if home team is not forced draw
            awayTeam = drawAwayTeam(
                props.currHomeTeam,
                props.teams.remainingTeams
            );
        }
        props.onFixtureDraw(props.currHomeTeam, awayTeam);
    };

    return (
        <>
            <Card
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: `linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0.5),
                        rgba(0, 0, 0, 0.5)
                        ),url(${
                            props.currHomeTeam && props.currHomeTeam.stadium
                        })`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    color: "white",
                }}
            >
                {props.currHomeTeam ? (
                    <TeamCard team={props.currHomeTeam} />
                ) : (
                    ""
                )}
                <div>vs</div>
                {props.currAwayTeam ? (
                    <TeamCard team={props.currAwayTeam} />
                ) : (
                    ""
                )}
            </Card>

            <ButtonGroup variant="contained">
                <Button
                    disabled={!!props.currHomeTeam}
                    onClick={drawHomeTeamHandler}
                >
                    Draw Home Team
                </Button>

                <Button
                    disabled={!(props.currHomeTeam && !props.currAwayTeam)}
                    onClick={drawAwayTeamHandler}
                >
                    Draw Away Team
                </Button>

                <Button
                    disabled={!(props.currHomeTeam && props.currAwayTeam)}
                    onClick={props.onReset}
                >
                    Next Draw
                </Button>
            </ButtonGroup>
        </>
    );
};

export default CurrentDraw;
