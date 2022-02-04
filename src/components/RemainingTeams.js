import styles from "./RemainingTeams.module.css";
import TeamCard from "./TeamCard";

const RemainingTeams = (props) => {
    let validTeams;
    let validTeamNames;
    if (props.homeTeam) {
        // add validreason property
        props.homeTeam.calcValidity(props.remainingTeams);
        validTeams = props.remainingTeams.filter(
            (team) => team.validReasons.isValid
        );

        validTeamNames = validTeams.map((team) => team.name);
    }
    const reasonReducer = (reasons, reason) => {
        const invalidReason = reason[1];
        return invalidReason ? reasons + " " + reason[0] : reasons;
    };
    return (
        <>
            <h2>Remaining Teams:</h2>
            <ul>
                {props.remainingTeams.map((team) => (
                    <li
                        className={
                            validTeams && validTeamNames.indexOf(team.name) < 0
                                ? styles.invalid
                                : ""
                        }
                        key={team.name}
                    >
                        <TeamCard team={team} />
                        {team.validReasons && !team.validReasons.isValid
                            ? Object.entries(team.validReasons).reduce(
                                  reasonReducer,
                                  ""
                              )
                            : ""}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RemainingTeams;
