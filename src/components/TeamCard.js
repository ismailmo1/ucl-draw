import { Card, CardContent, CardMedia } from "@mui/material";

const TeamCard = (props) => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.1)",
                color: "white",
            }}
        >
            <CardMedia
                component="img"
                src={props.team.badge}
                height="100"
                sx={{ width: "auto" }}
            />
            <CardContent>{props.team.name.toUpperCase()}</CardContent>
        </Card>
    );
};

export default TeamCard;
