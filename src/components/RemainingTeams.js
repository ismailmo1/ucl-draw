import GppBadIcon from "@mui/icons-material/GppBad";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { Grid, Tooltip } from "@mui/material";
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

    return (
        <>
            <h2>Remaining Teams:</h2>
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {props.remainingTeams.map((team) => (
                    <Grid item xs={6} md={1} key={team.name}>
                        <TeamCard
                            invalid={
                                validTeams &&
                                validTeamNames.indexOf(team.name) < 0
                            }
                            height="50"
                            team={team}
                        >
                            <Tooltip title={team.name}>
                                {team.validReasons &&
                                !team.validReasons.isValid ? (
                                    <GppBadIcon />
                                ) : (
                                    <GppGoodIcon />
                                )}
                            </Tooltip>
                        </TeamCard>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default RemainingTeams;
