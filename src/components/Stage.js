import { useState } from "react";
import { drawAwayTeam, drawHomeTeam } from "../utils/drawTeam";

const Stage = (props) => {
    const [homeTeam, setHomeTeam] = useState(null);
    const [awayTeam, setAwayTeam] = useState(null);

    const drawHomeTeamHandler = () => {
        const homeTeam = drawHomeTeam(props.teams.remainingTeams);
        setHomeTeam(homeTeam);
        props.onHomeDraw(homeTeam);
    };

    const drawAwayTeamHandler = () => {
        let awayTeam = drawAwayTeam(homeTeam, props.teams.remainingTeams);
        // check forced draws for home team
        if (props.teams.forcedDraws.hasOwnProperty(homeTeam.name)) {
            awayTeam = props.teams.forcedDraws[homeTeam.name];
        }

        // check forced draws for away team
        while (
            props.teams.forcedDraws.hasOwnProperty(awayTeam.name) &&
            props.teams.forcedDraws[awayTeam.name] !== homeTeam.name
        ) {
            // keep searching new away team if home team is not forced draw
            awayTeam = drawAwayTeam(homeTeam, props.teams.remainingTeams);
        }
        setAwayTeam(awayTeam);
        props.onFixtureDraw(homeTeam, awayTeam);
    };

    const resetTeamsHandler = () => {
        setAwayTeam(null);
        setHomeTeam(null);
    };
    return (
        <>
            <div>
                Home Team: {homeTeam ? homeTeam.name : ""}
                <br />
                Away Team: {awayTeam ? awayTeam.name : ""}
            </div>

            <div>
                {!homeTeam && (
                    <button onClick={drawHomeTeamHandler}>
                        Draw Home Team
                    </button>
                )}
                {homeTeam && !awayTeam && (
                    <button onClick={drawAwayTeamHandler}>
                        Draw Away Team
                    </button>
                )}
                {homeTeam && awayTeam && (
                    <button onClick={resetTeamsHandler}>Next Draw</button>
                )}
            </div>
        </>
    );
};

export default Stage;
