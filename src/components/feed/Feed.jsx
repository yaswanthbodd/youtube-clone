import { Avatar, Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Feed = () => {

    const {toggleClicked} = useContext(AppContext)

    return (
        <Box sx={{ mt: 10, px: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: 'flex-start'
                }}
            >
                {[...Array(10)].map((_, index) => (
                    <Card key={index} sx={{ width: toggleClicked ? 395 : 340 }} elevation={0}>
                        <CardMedia component="img" image="images/naruto.png" height="180"/>
                        <CardContent sx={{ bgcolor : '#111'}}>
                            <Stack direction="row" spacing={1}>
                                <Avatar src="images/naruto.png" />
                                <Stack direction="column" flexGrow={1}>
                                    <Typography fontWeight={600}>
                                        Filmymoji || Middle Class Madhu || Buggi Paalu || MCM
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Channel
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        3.6M Views • 1 year ago
                                    </Typography>
                                </Stack>
                                <MoreVertIcon />
                            </Stack>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Feed;
