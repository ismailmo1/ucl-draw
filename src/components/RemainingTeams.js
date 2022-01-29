import styles from "./RemainingTeams.module.css";

const RemainingTeams = (props) => {
    const validTeamNames = props.validTeams.map((team) => team.name);

    return (
        <>
            <h2>Remaining Teams:</h2>
            <ul>
                {props.remainingTeams.map((team) => (
                    <li
                        className={
                            validTeamNames.indexOf(team.name) >= 0
                                ? ""
                                : styles.invalid
                        }
                        key={team.name}
                    >
                        {team.name}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RemainingTeams;
