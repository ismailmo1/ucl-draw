import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
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
            <Grid
                item
                xs={3}
                md={1}
                key={team.name}
                component={motion.div}
                layout={true}
            >
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
                {teams}
            </Grid>
        </>
    );
};

export default RemainingTeams;
