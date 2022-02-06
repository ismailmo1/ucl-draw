import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import CSSTransition from "react-transition-group/CSSTransition";
import styles from "./TeamCard.module.css";

const TeamCard = (props) => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "none",
                backgroundColor: "rgba(0,0,0,0)",
                color: "white",
                fontSize: "100%",
                textAlign: "center",
                margin: "5px",
            }}
        >
            <CSSTransition
                in={!!props.team}
                timeout={500}
                classNames={{
                    enter: styles.teamBadgeEnter,
                    enterActive: styles.teamBadgeEnterActive,
                    exit: styles.teamBadgeExit,
                    exitActive: styles.teamBadgeExitActive,
                }}
            >
                <CSSTransition
                    in={props.invalid}
                    timeout={500}
                    classNames={{
                        enter: styles.teamValidEnter,
                        enterActive: styles.teamValidEnterActive,
                        exit: styles.teamValidExit,
                        exitActive: styles.teamValidExitActive,
                    }}
                >
                    <CardMedia
                        className={styles.teamBadge}
                        component="img"
                        src={props.team ? props.team.badge : "/badge.png"}
                        height={props.height}
                        sx={{
                            width: "auto",
                            filter: props.invalid ? "grayscale(100%)" : "",
                        }}
                    />
                </CSSTransition>
            </CSSTransition>
            {props.children && (
                <CardContent>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12}>
                            <div>{props.children}</div>
                        </Grid>
                    </Grid>
                </CardContent>
            )}
        </Card>
    );
};

export default TeamCard;
