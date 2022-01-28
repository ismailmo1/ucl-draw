import { useState } from "react";
import { drawAwayTeam, drawHomeTeam } from "../utils/drawTeam";

const Stage = (props) => {
    const [homeTeam, setHomeTeam] = useState(null);
    const [awayTeam, setAwayTeam] = useState(null);

    const drawHomeTeamHandler = () => {
        const homeTeam = drawHomeTeam(props.remainingTeams);
        setHomeTeam(homeTeam);
        props.onTeamDraw(homeTeam);
    };

    const drawAwayTeamHandler = () => {
        const awayTeam = drawAwayTeam(homeTeam, props.remainingTeams);

        setAwayTeam(awayTeam);
        props.onTeamDraw(awayTeam);
    };
    return (
        <>
            <div>
                Home Team: {homeTeam ? homeTeam.name : ""}
                <br />
                Away Team: {awayTeam ? awayTeam.name : ""}
            </div>

            <div>
                <button
                    disabled={homeTeam ? true : false}
                    onClick={drawHomeTeamHandler}
                >
                    Draw Home Team
                </button>
                <button
                    disabled={homeTeam ? (awayTeam ? true : false) : false}
                    onClick={drawAwayTeamHandler}
                >
                    Draw Away Team
                </button>
            </div>
        </>
    );
};

export default Stage;
