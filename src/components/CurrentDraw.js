import HomeIcon from "@mui/icons-material/Home";
import { Button, ButtonGroup, Card, Grid } from "@mui/material";
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
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12}>
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
                        backgroundSize: "cover",
                        color: "white",
                        height: "200px",
                    }}
                >
                    <TeamCard height="100" team={props.currHomeTeam}>
                        {props.currHomeTeam
                            ? props.currHomeTeam.name
                            : "Home Team"}
                    </TeamCard>

                    <div style={{ margin: "20px" }}>V</div>
                    <TeamCard height="100" team={props.currAwayTeam}>
                        {props.currAwayTeam
                            ? props.currAwayTeam.name
                            : "Away Team"}
                    </TeamCard>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <ButtonGroup variant="contained" fullWidth={true}>
                    <Button
                        disabled={!!props.currHomeTeam}
                        onClick={drawHomeTeamHandler}
                    >
                        <HomeIcon />
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
            </Grid>
        </Grid>
    );
};

export default CurrentDraw;
