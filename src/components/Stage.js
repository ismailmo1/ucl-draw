import { useState } from "react";
import { drawAwayTeam, drawHomeTeam } from "../utils/drawTeam";

const Stage = (props) => {
    const [homeTeam, setHomeTeam] = useState(null);
    const [awayTeam, setAwayTeam] = useState(null);

    const drawHomeTeamHandler = () => {
        const homeTeam = drawHomeTeam(props.remainingTeams);
        setHomeTeam(homeTeam);
        props.onTeamDraw(homeTeam);
        props.onHomeDraw(homeTeam);
    };

    const drawAwayTeamHandler = () => {
        const awayTeam = drawAwayTeam(homeTeam, props.remainingTeams);
        setAwayTeam(awayTeam);
        props.onTeamDraw(awayTeam);
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
