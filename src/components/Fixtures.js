import { Avatar, Grid, List, ListItem } from "@mui/material";

const Fixtures = (props) => {
    console.log(props);
    return (
        <List>
            <Grid container justifyContent="center" alignItems="center">
                <h2>FIXTURES</h2>
                {props.fixtures.map((fixture) => (
                    <ListItem
                        key={fixture.home.name}
                        item
                        xs={13}
                        sx={{
                            background: "rgba(0,0,0,0.5)",
                            textAlign: "center",
                            textJustify: "center",
                            margin: "auto",
                        }}
                    >
                        <Grid item xs={2}>
                            <Avatar src={fixture.home.badge} variant="square" />
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
                        <Grid item xs={2}>
                            <Avatar src={fixture.away.badge} variant="square" />
                        </Grid>
                    </ListItem>
                ))}
            </Grid>
        </List>
    );
};

export default Fixtures;
