import FlagIcon from "@mui/icons-material/Flag";
import GppGoodIcon from "@mui/icons-material/GppGood";
import GroupsIcon from "@mui/icons-material/Groups";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
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
                        {props.homeTeam &&
                            (team.validReasons && !team.validReasons.isValid ? (
                                <Grid
                                    container
                                    justifyContent="center"
                                    sx={{ flexWrap: "nowrap" }}
                                >
                                    {team.validReasons.sameGroup ? (
                                        <Grid item>
                                            <Tooltip
                                                title={`Same Group: ${team.group}`}
                                            >
                                                <GroupsIcon
                                                    sx={{
                                                        color: "DarkRed",
                                                        fontSize: "inherit",
                                                    }}
                                                />
                                            </Tooltip>
                                        </Grid>
                                    ) : (
                                        ""
                                    )}
                                    {team.validReasons.sameLeague ? (
                                        <Grid item>
                                            <Tooltip
                                                title={`Same League: ${team.league}`}
                                            >
                                                <FlagIcon
                                                    sx={{
                                                        color: "DarkRed",
                                                        fontSize: "inherit",
                                                    }}
                                                />
                                            </Tooltip>
                                        </Grid>
                                    ) : (
                                        ""
                                    )}
                                    {team.validReasons.samePosition ? (
                                        <Grid item>
                                            <Tooltip
                                                title={`Same Position: ${team.finalPosition}`}
                                            >
                                                {team.finalPosition === 1 ? (
                                                    <LooksOneIcon
                                                        sx={{
                                                            color: "DarkRed",
                                                            fontSize: "inherit",
                                                        }}
                                                    />
                                                ) : (
                                                    <LooksTwoIcon
                                                        sx={{
                                                            color: "DarkRed",
                                                            fontSize: "inherit",
                                                        }}
                                                    />
                                                )}
                                            </Tooltip>
                                        </Grid>
                                    ) : (
                                        ""
                                    )}
                                </Grid>
                            ) : (
                                <GppGoodIcon
                                    sx={{
                                        color: "DarkGreen",
                                        fontSize: "inherit",
                                    }}
                                />
                            ))}
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
