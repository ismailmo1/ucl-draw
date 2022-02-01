import { useState } from "react";
import CurrentDraw from "./CurrentDraw";
import RemainingTeams from "./RemainingTeams";

const Stage = (props) => {
    const [homeTeam, setHomeTeam] = useState(null);
    const [awayTeam, setAwayTeam] = useState(null);

    const homeDrawHandler = (homeTeam) => {
        props.onHomeDraw(homeTeam);
        setHomeTeam(homeTeam);
    };

    const fixtureDrawHandler = (homeTeam, awayTeam) => {
        props.onFixtureDraw(homeTeam, awayTeam);
        setAwayTeam(awayTeam);
    };

    const resetHandler = () => {
        setHomeTeam(null);
        setAwayTeam(null);
    };
    return (
        <>
            <RemainingTeams
                remainingTeams={props.teamState.remainingTeams}
                homeTeam={homeTeam}
            />
            <CurrentDraw
                teams={props.teamState}
                onHomeDraw={homeDrawHandler}
                currHomeTeam={homeTeam}
                currAwayTeam={awayTeam}
                onFixtureDraw={fixtureDrawHandler}
                onReset={resetHandler}
            />
        </>
    );
};

export default Stage;
