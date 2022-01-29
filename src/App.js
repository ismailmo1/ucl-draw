import { useState } from "react";
import Fixtures from "./components/Fixtures";
import RemainingTeams from "./components/RemainingTeams";
import Stage from "./components/Stage";
import allTeams from "./utils/teamData";

function App() {
    const [remainingTeams, setRemainingTeams] = useState(allTeams);
    const [fixtures, setFixtures] = useState([]);
    const [validTeams, setValidTeams] = useState(allTeams);

    const teamDrawHandler = (drawnTeam) => {
        setRemainingTeams((remainingTeams) =>
            remainingTeams.filter((team) => drawnTeam.name !== team.name)
        );
    };

    const createFixtureHandler = (homeTeam, awayTeam) => {
        setFixtures((prevFixtures) => [
            ...prevFixtures,
            { home: homeTeam, away: awayTeam },
        ]);
        setValidTeams(allTeams);
    };

    const homeDrawHandler = (team) => {
        const teams = team.calcValidTeams(remainingTeams);
        setValidTeams(teams);
    };

    const restartHandler = () => {
        setFixtures([]);
        setRemainingTeams(allTeams);
    };

    return (
        <>
            <h1>UCL DRAW SIMULATOR</h1>
            {remainingTeams.length > 0 && (
                <>
                    <RemainingTeams
                        remainingTeams={remainingTeams}
                        validTeams={validTeams}
                    />
                    <Stage
                        remainingTeams={remainingTeams}
                        onTeamDraw={teamDrawHandler}
                        onHomeDraw={homeDrawHandler}
                        onFixtureDraw={createFixtureHandler}
                    />
                </>
            )}
            <Fixtures fixtures={fixtures} />
            <button onClick={restartHandler}>Restart</button>
        </>
    );
}

export default App;
