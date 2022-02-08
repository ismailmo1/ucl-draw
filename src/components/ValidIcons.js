import FlagIcon from "@mui/icons-material/Flag";
import GppGoodIcon from "@mui/icons-material/GppGood";
import GroupsIcon from "@mui/icons-material/Groups";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import { Grid, Tooltip } from "@mui/material";

const ValidIcons = (props) => {
    return props.team.validReasons && !props.team.validReasons.isValid ? (
        <Grid container justifyContent="center" sx={{ flexWrap: "nowrap" }}>
            {props.team.validReasons.sameGroup ? (
                <Grid item>
                    <Tooltip title={`Same Group: ${props.team.group}`}>
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
            {props.team.validReasons.sameLeague ? (
                <Grid item>
                    <Tooltip title={`Same League: ${props.team.league}`}>
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
            {props.team.validReasons.samePosition ? (
                <Grid item>
                    <Tooltip
                        title={`Same Position: ${props.team.finalPosition}`}
                    >
                        {props.team.finalPosition === 1 ? (
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
    );
};

export default ValidIcons;
