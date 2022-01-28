import { useState } from "react";
import Fixtures from "./components/Fixtures";
import RemainingTeams from "./components/RemainingTeams";
import Stage from "./components/Stage";
import allTeams from "./utils/teamData";

function App() {
    const [remainingTeams, setRemainingTeams] = useState(allTeams);
    const [fixtures, setFixtures] = useState([]);

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
    };

    return (
        <>
            <h1 style={{ display: "flex", justifyContent: "center" }}>
                UCL DRAW SIMULATOR
            </h1>
            {remainingTeams.length > 0 && (
                <>
                    <RemainingTeams remainingTeams={remainingTeams} />
                    <Stage
                        remainingTeams={remainingTeams}
                        onTeamDraw={teamDrawHandler}
                        onFixtureDraw={createFixtureHandler}
                    />
                </>
            )}
            <Fixtures fixtures={fixtures} />
        </>
    );
}

export default App;
