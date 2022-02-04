import { Card, CardContent, CardMedia, Grid } from "@mui/material";

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
            <CardMedia
                component="img"
                src={props.team ? props.team.badge : "/badge.png"}
                height={props.height}
                sx={{
                    width: "auto",
                    filter: props.invalid ? "grayscale(100%)" : "",
                }}
            />
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
