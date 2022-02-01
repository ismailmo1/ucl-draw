import styles from "./RemainingTeams.module.css";

const RemainingTeams = (props) => {
    let validTeams;
    if (props.homeTeam) {
        validTeams = props.homeTeam
            .calcValidTeams(props.remainingTeams)
            .map((team) => team.name);
    }
    console.log(validTeams);

    return (
        <>
            <h2>Remaining Teams:</h2>
            <ul>
                {props.remainingTeams.map((team) => (
                    <li
                        className={
                            validTeams && validTeams.indexOf(team.name) < 0
                                ? styles.invalid
                                : ""
                        }
                        key={team.name}
                    >
                        {team.name} -{" "}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RemainingTeams;
