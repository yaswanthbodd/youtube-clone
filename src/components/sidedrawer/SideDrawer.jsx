import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import ItemList from './ItemList';

import { FaHistory } from "react-icons/fa";
import { CgPlayList } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { SlGraduation } from "react-icons/sl";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { PiGreaterThan } from "react-icons/pi";

import { RxAvatar } from "react-icons/rx";

import { SiLinkfire } from "react-icons/si";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { PiFilmSlate } from "react-icons/pi";
import { HiOutlineSignal } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { MdNewspaper } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";
import { GiTowel } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";

import { IoSettingsOutline } from "react-icons/io5";
import { GoReport } from "react-icons/go";
import { BiHelpCircle } from "react-icons/bi";
import { MdOutlinedFlag } from "react-icons/md";
import { AppContext } from '../../context/AppContext';
import SingleLineDrawer from './SingleLineDrawer';



const basicOptions = [
    {
        icon: IoMdHome,
        primary: 'Home',

    },
    {
        icon: SiYoutubeshorts,
        primary: 'Shorts'
    },
    {
        icon: MdOutlineSubscriptions,
        primary: 'Subscriptions'
    },
    {
        icon: SiYoutubemusic,
        primary: 'YouTube Music'
    }
];

// YOU
const youOptions = [
    {
        icon : FaHistory,
        primary : 'History'
    },
    {
        icon : CgPlayList,
        primary : 'Playlists'
    },
    {
        icon : GoVideo,
        primary : 'Your videos'
    },
    {
        icon : SlGraduation,
        primary : 'Your courses'
    },
    {
        icon : MdOutlineWatchLater,
        primary : 'Watch Later'
    },
    {
        icon : AiOutlineLike,
        primary : 'Liked videos'
    },
    {
        icon : HiDownload,
        primary : 'Downloads'
    },
]

//Subscriptions
const yourSubscriptions = [
    {
        icon : RxAvatar,
        primary : 'Aye Jude'
    },
    {
        icon : RxAvatar,
        primary : 'Raw Talks'
    },
    {
        icon : RxAvatar,
        primary : 'Filmymoji'
    },
    {
        icon : RxAvatar,
        primary : 'Yours Angel'
    },
]

//Explore
const yourExplore = [
    {
        icon : SiLinkfire,
        primary : 'Trending',
        linkCategory : 0
    },
    {
        icon : RiShoppingBag4Line,
        primary : 'Shorts',
        linkCategory : 26
    },
    {
        icon : IoMusicalNotesOutline,
        primary : 'Music',
        linkCategory : 10
    },
    {
        icon : PiFilmSlate,
        primary : 'Films',
        linkCategory : 1
    },
    {
        icon : HiOutlineSignal,
        primary : 'Comedy',
        linkCategory : 23
    },
    {
        icon : SiYoutubegaming,
        primary : 'Gaming',
        linkCategory : 20
    },
    {
        icon : MdNewspaper,
        primary : 'News',
        linkCategory : 25
    },
    {
        icon : MdOutlineSportsCricket,
        primary : 'Sports',
        linkCategory : 17
    },
    {
        icon : SlGraduation,
        primary : 'Science & Technology',
        linkCategory : 28
    },
    {
        icon : GiTowel,
        primary : 'Pets & Animals',
        linkCategory : 15
    },
    {
        icon : MdOutlinePodcasts,
        primary : 'Entertainment',
        linkCategory : 24
    },
]

//More from youtube
const moreFromYoutube = [
    {
        icon : SiYoutubemusic,
        primary : 'YouTube Music'
    },
    {
        icon : SiYoutubestudio,
        primary : 'YouTube Studio'
    },
    {
        icon : SiYoutubekids,
        primary : 'YouTube Kids'
    }
]

// Other Setting 
const otherSettings = [
    {
        icon : IoSettingsOutline,
        primary : 'Settings'
    },
    {
        icon : MdOutlinedFlag,
        primary : 'Report history'
    },
    {
        icon : BiHelpCircle,
        primary : 'Help'
    },
    {
        icon : GoReport,
        primary : 'Send feedback'
    },
]

const SideDrawer = () => {

    const {toggleClicked} = useContext(AppContext);

    return (
        <Box>
            {
                toggleClicked ? 
                <Drawer slotProps={{
                paper : {
                    sx : {
                        //backgroundColor: '#111', 
                        width : "250px", 
                        top : 64, 
                        height: 'calc(100% - 64px)', 
                        borderRight : 'none', 
                        pl : 1.5 , 
                        boxShadow : 'none', 
                        overflow : 'hidden'
                    }
                }
                
            }} anchor='left' open={true} variant='permanent'>
                <Box 
                sx={{
                            height: '100%',
                            overflowY: 'hidden',
                            overflowX: 'hidden',
                            pr: 1,
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#555 #111',
                            scrollBehavior:'smooth',
                            '&:hover' : {
                                overflowY : 'auto'
                            },
                            '&::-webkit-scrollbar': {
                            width: '6px',
                            },
                            '&::-webkit-scrollbar-track': {
                            background: '#111',
                            },
                            '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#555', 
                            borderRadius: '10px',
                            },
                            '&::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: '#777', 
                            },
                        }} >
                    <ItemList basicOptions={basicOptions} />
                    <Divider />
                    <Box display={'flex'} marginTop={3} marginLeft={2.5}>
                            <Typography>You</Typography>
                            <PiGreaterThan className='ml-4 mt-1'/>
                    </Box>
                    <ItemList basicOptions={youOptions} />
                    <Divider />
                    <Typography fontWeight={700} sx={{marginLeft : 2, marginTop : 2}}>Subscriptions</Typography>
                    <ItemList basicOptions={yourSubscriptions} />
                    <Divider />
                    <Typography fontWeight={700} sx={{marginLeft : 2, marginTop : 2}}>Explore</Typography>
                    <ItemList basicOptions={yourExplore} />
                    <Divider />
                    <Typography fontWeight={700} sx={{marginLeft : 2, marginTop : 2}}>More from YouTube</Typography>
                    <ItemList basicOptions={moreFromYoutube} color={'text-red-600'}/>
                    <Divider />
                    <ItemList basicOptions={otherSettings} />
                </Box>
                </Drawer> 
            : <SingleLineDrawer />
            }
            
        </Box>
    )
}

export default SideDrawer