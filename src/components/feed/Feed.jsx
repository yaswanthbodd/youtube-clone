import { Avatar, Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { API_KEY, value_counter } from '../../data.js'
import { Link } from "react-router-dom";
import moment from "moment/moment.js";

const Feed = () => {

    const {toggleClicked, category, videoId, setVideoId} = useContext(AppContext)

    // Youtube videos
    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
            const apiKey = API_KEY
            const url = new URL('https://www.googleapis.com/youtube/v3/videos');
            
            url.searchParams.set('part','snippet,contentDetails,statistics');
            url.searchParams.set('chart','mostPopular');
            url.searchParams.set('maxResults',50);
            url.searchParams.set('regionCode',"IN");
            url.searchParams.set('videoCategoryId', category);
            url.searchParams.set('key', apiKey);

            try{
                const res = await fetch(url.toString());
                const data = await res.json();
                console.log(data.items)
                setVideos(data.items || []);
            }catch(error){
                console.error('Failed to fetch videos ',error);
            }
        };

    useEffect(()=>{
        fetchVideos()
    },[category])

    
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
                {videos.map((item, index) => (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} onClick={()=>setVideoId(item.id)} style={{textDecoration : 'none'}}>
                        <Card key={index} sx={{ width: toggleClicked ? 395 : 340 }} elevation={0}>
                            <CardMedia component="img" image={item.snippet.thumbnails.medium.url} alt={item.snippet.title} height="180"/>
                            <CardContent sx={{ bgcolor : '#111'}}>
                                <Stack direction="row" spacing={1}>
                                    <Avatar src={item.snippet.thumbnails.default.url} />
                                    <Stack direction="column" flexGrow={1}>
                                        <Typography fontWeight={600}>
                                            {item.snippet.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.snippet.channelTitle}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {value_counter(item.statistics.viewCount)} Views • {moment(item.snippet.publishedAt).fromNow()}
                                        </Typography>
                                    </Stack>
                                    <MoreVertIcon />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </Box>
        </Box>
    );
};

export default Feed;
