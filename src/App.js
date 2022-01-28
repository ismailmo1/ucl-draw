import { useState } from "react";
import RemainingTeams from "./components/RemainingTeams";
import Stage from "./components/Stage";
import allTeams from "./utils/teamData";

function App() {
    const [remainingTeams, setRemainingTeams] = useState(allTeams);
    const [fixtures, setFixtures] = useState({});

    const teamDrawHandler = (drawnTeam) => {
        setRemainingTeams((remainingTeams) =>
            remainingTeams.filter((team) => drawnTeam.name !== team.name)
        );
    };

    return (
        <>
            <h1 style={{ display: "flex", justifyContent: "center" }}>
                UCL DRAW SIMULATOR
            </h1>
            <h2>remaining teams</h2>
            <RemainingTeams remainingTeams={remainingTeams} />
            <Stage
                remainingTeams={remainingTeams}
                onTeamDraw={teamDrawHandler}
            />
        </>
    );
}

export default App;
