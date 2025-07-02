import { Avatar, Box, Button, ButtonGroup, Chip, Divider, IconButton, Stack, TextField, Typography } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { HiDotsHorizontal } from "react-icons/hi";
import { useEffect, useState } from "react";
import SortIcon from '@mui/icons-material/Sort';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { API_KEY, value_counter } from "../../data";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

const Video = () => {
    const { videoId, categoryId } = useParams();

    const [more, setMore] = useState(true);
    const [fetchDataById, setFetchDataById] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);
    const [recommendedVideosData, setRecommendedVideosData] = useState([]);

    // Fetch Video Details
    const fetchVideoData = async () => {
        try {
        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`
        );
        const data = await res.json();
        setFetchDataById(data.items[0]);
        } catch (error) {
        console.error("Error fetching video data", error);
        }
    };

    // Fetch Channel Details + Comments
    const fetchChannelAndComments = async () => {
        if (!fetchDataById?.snippet?.channelId) return;

        try {
        const resChannel = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${fetchDataById.snippet.channelId}&key=${API_KEY}`
        );
        const channelDataJson = await resChannel.json();
        setChannelData(channelDataJson.items[0]);
        } catch (error) {
        console.error("Error fetching channel data", error);
        }

        try {
        const resComments = await fetch(
            `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${API_KEY}`
        );
        const commentsJson = await resComments.json();
        setCommentData(commentsJson.items || []);
        } catch (error) {
        console.error("Error fetching comments", error);
        }
    };

    // Fetch Recommended Videos based on categoryId
    const fetchRecommendedVideo = async () => {
        try {
        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
        );
        const data = await res.json();
        setRecommendedVideosData(data.items || []);
        } catch (error) {
        console.error("Fetching Recommended videos failed:", error);
        }
    };

    // Effects
    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        if (fetchDataById) {
        fetchChannelAndComments();
        }
    }, [fetchDataById, videoId]);

    useEffect(() => {
        fetchRecommendedVideo();
    }, [categoryId]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [videoId]);

    return (
        <Box>
        <Navbar />
        <Box display="flex">
            <Box sx={{ display: "flex", mt: 10, ml: 10, gap: 4, px: 2, width: "100%" }}>
            {/* Left: Main Video */}
            <Box flex={2}>
                <iframe
                style={{ width: "100%", borderRadius: "10px" }}
                height="514"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title={fetchDataById?.snippet?.title || "Video player"}
                ></iframe>

                <Typography variant="h6" mt={2}>
                {fetchDataById?.snippet?.title || "Loading..."}
                </Typography>

                {/* User Options */}
                <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 1 }}>
                <Stack direction={"row"} gap={2}>
                    <Avatar src={channelData?.snippet?.thumbnails?.default?.url || ""} />
                    <Stack direction={"column"}>
                    <Typography>
                        {fetchDataById?.snippet?.channelTitle || "Channel"}{" "}
                        <CheckCircleIcon fontSize="10px" />
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "grey.500" }}>
                        {channelData ? value_counter(channelData.statistics.subscriberCount) : "0"} Subscribers
                    </Typography>
                    </Stack>
                    <Chip
                    label="Subscribe"
                    sx={{ fontSize: "1rem", height: 45, px: 1, borderRadius: 8, bgcolor: "white", color: "black" }}
                    />
                </Stack>

                <Stack direction={"row"} gap={1}>
                    <ButtonGroup size="small" color="inherit" variant="text" sx={{ bgcolor: "grey.800", borderRadius: 8 }}>
                    <Button sx={{ "&:hover": { bgcolor: "transparent" } }} startIcon={<AiOutlineLike />}>
                        {fetchDataById ? value_counter(fetchDataById.statistics.likeCount) : "0"}
                    </Button>
                    <Button sx={{ "&:hover": { bgcolor: "transparent" } }} startIcon={<BiDislike />}></Button>
                    </ButtonGroup>
                    <Chip
                    label="Share"
                    icon={<PiShareFat style={{ fontSize: 20 }} />}
                    sx={{ fontSize: "1rem", height: 45, px: 1, borderRadius: 8 }}
                    />
                    <Chip
                    label="Download"
                    icon={<LiaDownloadSolid style={{ fontSize: 20 }} />}
                    sx={{ fontSize: "1rem", height: 45, px: 1, borderRadius: 8 }}
                    />
                    <IconButton sx={{ bgcolor: "grey.800" }}>
                    <HiDotsHorizontal />
                    </IconButton>
                </Stack>
                </Box>

                {/* Description */}
                <Box
                sx={{
                    bgcolor: "grey.800",
                    mt: 2,
                    borderRadius: 2,
                    p: 2,
                    maxHeight: more ? "108px" : "100%",
                    overflowY: "auto",
                    color: "white",
                    scrollbarWidth: "none",
                }}
                >
                <Typography variant="body2" mb={1}>
                    {fetchDataById ? value_counter(fetchDataById.statistics.viewCount) : "0"} views •{" "}
                    {fetchDataById ? moment(fetchDataById.snippet.publishedAt).fromNow() : "Date"}
                </Typography>

                <Typography variant="body2">
                    {more
                    ? fetchDataById?.snippet?.description.slice(0, 250) + "..."
                    : fetchDataById?.snippet?.description || "Description not available"}
                </Typography>

                <Typography
                    color="primary"
                    component={"button"}
                    onClick={() => setMore(!more)}
                    sx={{ mt: 0 , cursor : 'pointer'}}

                >
                    {more ? "Show more" : "Show less"}
                </Typography>
                </Box>

                {/* Comments */}
                <Box marginTop={3} display={"flex"} gap={2}>
                <Typography variant="h6">
                    {fetchDataById ? value_counter(fetchDataById.statistics.commentCount) : "0"} Comments
                </Typography>
                <Typography>
                    <SortIcon /> Sort by
                </Typography>
                </Box>
                <Box marginTop={2} display={"flex"} gap={2}>
                <Avatar sx={{ bgcolor : 'red'}}>YB</Avatar>
                <TextField sx={{ width: "100%" }} variant="standard" placeholder="Add a comment..." />
                </Box>

                {/* Comments List */}
                <Box marginTop={5}>
                {commentData.map((item, index) => (
                    <Box key={index} display={"flex"} gap={2} marginBottom={1}>
                    <Avatar src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} />
                    <Stack direction={"column"}>
                        <Typography variant="body2">
                        {item.snippet.topLevelComment.snippet.authorDisplayName} •{" "}
                        {moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}
                        </Typography>
                        <Typography variant="body2">{item.snippet.topLevelComment.snippet.textDisplay}</Typography>
                        <Box display={"flex"}>
                        <IconButton sx={{ paddingLeft: 0, "&:hover": { bgcolor: "transparent" } }}>
                            <AiOutlineLike />{" "}
                            <Typography variant="body2" ml={1} color="grey.600">
                            {value_counter(item.snippet.topLevelComment.snippet.likeCount)}
                            </Typography>
                        </IconButton>
                        <IconButton>
                            <BiDislike />
                        </IconButton>
                        <Button size="small" color="inherit" sx={{ "&:hover": { borderRadius: 7 } }}>
                            Reply
                        </Button>
                        </Box>
                    </Stack>
                    <MoreVertIcon sx={{ position: "absolute", right: "33%" }} />
                    </Box>
                ))}
                </Box>
            </Box>

            {/* Right: Recommended Videos */}
            <Box flex={1}>
                <Typography variant="h6" mb={2}>
                Recommended Videos
                <Divider />
                </Typography>

                {recommendedVideosData.map((item, idx) => (
                <Link key={idx} to={`/video/${item.snippet.categoryId}/${item.id}`} style={{ textDecoration: "none" }}>
                    <Box display="flex" alignItems={"center"} sx={{ height: 80 }} mb={2}>
                    <img
                        src={item.snippet.thumbnails.medium.url}
                        alt="Recommend Video image"
                        style={{ width: 150, height: 80, borderRadius: 8 }}
                    />
                    <Box
                        ml={1}
                        sx={{
                        height: "100%",
                        flex: 1,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        }}
                    >
                        <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 500,
                            lineHeight: 1.2,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                        }}
                        >
                        {item.snippet.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {item.snippet.channelTitle} <CheckCircleIcon fontSize="10px" />
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                        {value_counter(item.statistics.viewCount)} views • {moment(item.snippet.publishedAt).fromNow()}
                        </Typography>
                    </Box>
                    <MoreVertIcon sx={{ ml: 1, alignSelf: "flex-start" }} />
                    </Box>
                </Link>
                ))}
            </Box>
            </Box>
        </Box>
        </Box>
    );
    };

    export default Video;
