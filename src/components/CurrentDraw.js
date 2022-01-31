import { drawAwayTeam, drawHomeTeam } from "../utils/drawTeam";

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
            <div>
                Home Team: {props.currHomeTeam ? props.currHomeTeam.name : ""}
                <br />
                Away Team: {props.currAwayTeam ? props.currAwayTeam.name : ""}
            </div>

            <div>
                {!props.currHomeTeam && (
                    <button onClick={drawHomeTeamHandler}>
                        Draw Home Team
                    </button>
                )}
                {props.currHomeTeam && !props.currAwayTeam && (
                    <button onClick={drawAwayTeamHandler}>
                        Draw Away Team
                    </button>
                )}
                {props.currHomeTeam && props.currAwayTeam && (
                    <button onClick={props.onReset}>Next Draw</button>
                )}
            </div>
        </>
    );
};

export default CurrentDraw;
