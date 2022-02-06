import GppBadIcon from "@mui/icons-material/GppBad";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { Grid, Tooltip } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
    const teams = props.remainingTeams.map((team) => (
        <CSSTransition
            key={team.name}
            timeout={500}
            classNames={{
                enter: styles.remainingTeamEnter,
                enterActive: styles.remainingTeamEnterActive,
                exit: styles.remainingTeamExit,
                exitActive: styles.remainingTeamExitActive,
            }}
        >
            <Grid item xs={6} md={1} key={team.name}>
                <TeamCard
                    invalid={
                        validTeams && validTeamNames.indexOf(team.name) < 0
                    }
                    height="50"
                    team={team}
                >
                    <Tooltip title={team.name}>
                        {team.validReasons && !team.validReasons.isValid ? (
                            <GppBadIcon />
                        ) : (
                            <GppGoodIcon />
                        )}
                    </Tooltip>
                </TeamCard>
            </Grid>
        </CSSTransition>
    ));
    return (
        <>
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ marginTop: "10px" }}
            >
                <TransitionGroup component={null} className="remainders">
                    {teams}
                </TransitionGroup>
            </Grid>
        </>
    );
};

export default RemainingTeams;
