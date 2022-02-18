import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import { Grid } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./RemainingTeams.module.css";
import TeamCard from "./TeamCard";
import ValidIcons from "./ValidIcons";

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
    const teams = props.remainingTeams.map((team) => {
        return (
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
                <Grid item xs={3} md={1} key={team.name}>
                    <TeamCard
                        invalid={
                            validTeams && validTeamNames.indexOf(team.name) < 0
                        }
                        height="50"
                        team={team}
                    >
                        {props.homeTeam ? (
                            <ValidIcons team={team} />
                        ) : (
                            <NotListedLocationIcon
                                sx={{
                                    color: "DarkGrey",
                                    fontSize: "inherit",
                                }}
                            />
                        )}
                    </TeamCard>
                </Grid>
            </CSSTransition>
        );
    });
    return (
        <>
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    marginTop: "10px",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                }}
                wrap="nowrap"
            >
                <TransitionGroup component={null} className="remainders">
                    {teams}
                </TransitionGroup>
            </Grid>
        </>
    );
};

export default RemainingTeams;
