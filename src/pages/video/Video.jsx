import { Avatar, Box, Button, ButtonGroup, Chip, IconButton, Stack, Typography } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import SideDrawer from "../../components/sidedrawer/SideDrawer";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { HiDotsHorizontal } from "react-icons/hi";
import { useState } from "react";





const Video = () => {

    const [more, setMore] = useState(false);

    return (
        <Box>
            <Navbar />
            <Box display="flex">
                <Box sx={{ display: 'flex', mt: 10, ml: 10, gap: 4, px: 2, width: '100%' }}>
                    {/* Left: Main Video */}
                    <Box flex={2}>
                        <video
                            src="video/foodhub-admin.mp4"
                            controls
                            style={{ width: '100%', borderRadius: '10px' }}
                        />
                        <Typography variant="h6" mt={2}>
                            Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024
                        </Typography>

                        {/* User Options */}
                        <Box sx={{display : 'flex' , justifyContent: 'space-between', marginTop : 1}}>
                            <Stack direction={'row'} gap={2}>
                                <Avatar src="images/naruto.png" /> 
                                <Stack direction={'column'}>
                                    <Typography>GreatStack <CheckCircleIcon fontSize="10px" /> </Typography>
                                    <Typography sx={{ fontSize : '12px', color : 'grey.500' }} >1.16M Subscribers</Typography>
                                </Stack>
                                <Chip label='Subscribe' sx={{ fontSize : '1rem', height : 45, px : 1, borderRadius : 8, bgcolor : 'white', color : 'black'}}/>
                            </Stack>
                            <Stack direction={'row'} gap={1}>
                                <ButtonGroup size="small" color="inherit" variant="text" sx={{ bgcolor : 'grey.800', borderRadius : 8}}>
                                    <Button sx={{ '&:hover' : {bgcolor : 'transparent'}}} startIcon={<AiOutlineLike />}>2.5K</Button>
                                    <Button sx={{ '&:hover' : {bgcolor : 'transparent'}}} startIcon={<BiDislike />}></Button>
                                </ButtonGroup>
                                <Chip label='Share' icon={<PiShareFat style={{ fontSize: 20 }} />} sx={{ fontSize : '1rem', height : 45, px : 1, borderRadius : 8}}/>
                                <Chip label='Download' icon={<LiaDownloadSolid style={{ fontSize: 20 }} />} sx={{ fontSize : '1rem', height : 45, px : 1, borderRadius : 8}}/>
                                <IconButton sx={{bgcolor : 'grey.800'}}>
                                    <HiDotsHorizontal />
                                </IconButton>
                            </Stack>
                        </Box>

                        {/* Description */}
                        <Box
                            sx={{
                                bgcolor: 'grey.800',
                                mt: 2,
                                borderRadius: 2,
                                p: 2,
                                maxHeight: more ? '100%' : '105px',         
                                overflowY: 'auto',          
                                color: 'white',            
                                scrollbarWidth: 'none',     
                            }}
                            >
                            <Typography variant="body2" mb={1}>
                                209,506 views • 01 Jul 2025
                            </Typography>

                            {/* Description Title */}
                            <Typography variant="body2">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea perferendis quia exercitationem odio officia odit non beatae cupiditate aliquid dolor.
                            </Typography>
                            
                            

                        </Box>
                    </Box>

                    {/* Right: Recommended Videos */}
                    <Box flex={1}>
                        <Typography variant="h6" mb={2}>
                            Recommended Videos
                        </Typography>
                        {[...Array(10)].map((_, idx) => (
                            <Box key={idx} display="flex" mb={2}>
                                <img
                                    src="images/naruto.png"
                                    alt="thumb"
                                    style={{ width: 120, height: 80, borderRadius: 8 }}
                                />
                                <Box ml={1}>
                                    <Typography variant="subtitle2">
                                        Middle Class Madhu Latest
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        1.5M views • 1 year ago
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Video;
