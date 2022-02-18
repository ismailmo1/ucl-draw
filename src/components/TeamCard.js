import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { CSSTransition, SwitchTransition } from "react-transition-group";
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
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={!!props.team}
                    timeout={500}
                    classNames={{
                        enter: styles.teamBadgeEnter,
                        enterActive: styles.teamBadgeEnterActive,
                        exit: styles.teamBadgeExit,
                        exitActive: styles.teamBadgeExitActive,
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
            </SwitchTransition>
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
