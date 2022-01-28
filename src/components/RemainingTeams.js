const RemainingTeams = (props) => {
    return (
        <ul>
            {props.remainingTeams.map((team) => (
                <ul key={team.name}>{team.name}</ul>
            ))}
        </ul>
    );
};

export default RemainingTeams;
