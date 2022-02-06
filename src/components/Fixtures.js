import { Avatar, Grid, List, ListItem } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./Fixtures.module.css";

const Fixtures = (props) => {
    console.log(props);
    return (
        <List>
            <Grid container justifyContent="center" alignItems="center">
                <h2>FIXTURES</h2>
                <TransitionGroup component={null} className="remainders">
                    {props.fixtures.map((fixture) => (
                        <CSSTransition
                            key={fixture.home.name}
                            timeout={500}
                            classNames={{
                                enter: styles.fixtureEnter,
                                enterActive: styles.fixtureEnterActive,
                                exit: styles.fixtureExit,
                                exitActive: styles.fixtureExitActive,
                            }}
                        >
                            <ListItem
                                key={fixture.home.name}
                                xs={13}
                                sx={{
                                    background: "rgba(0,0,0,0.5)",
                                    textAlign: "center",
                                    textJustify: "center",
                                    margin: "auto",
                                }}
                            >
                                <Grid
                                    container
                                    xs={2}
                                    justifyContent="flex-end"
                                >
                                    <Avatar
                                        src={fixture.home.badge}
                                        variant="square"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    {fixture.home.name.toUpperCase()}(H)
                                </Grid>

                                <Grid item xs={2}>
                                    VS
                                </Grid>
                                <Grid item xs={3}>
                                    {fixture.away.name.toUpperCase()}(A)
                                </Grid>
                                <Grid
                                    container
                                    xs={2}
                                    justifyContent="flex-start"
                                >
                                    <Avatar
                                        src={fixture.away.badge}
                                        variant="square"
                                    />
                                </Grid>
                            </ListItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </Grid>
        </List>
    );
};

export default Fixtures;
