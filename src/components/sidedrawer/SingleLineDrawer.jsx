import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";
import { HiDownload } from "react-icons/hi";

const basicOptions = [
    {
        icon : IoMdHome,
        primary : 'Home'
    },
    {
        icon : SiYoutubeshorts,
        primary : 'Shorts'
    },
    {
        icon : MdOutlineSubscriptions,
        primary : 'Subscriptions'
    },
    {
        icon : SiYoutubemusic,
        primary : 'Youtube Music'
    },
    {
        icon : RxAvatar,
        primary : 'You'
    },
    {
        icon : HiDownload,
        primary : 'Downloads'
    },
]

const SingleLineDrawer = () => {
    return (
        <Box>
            <Drawer anchor='left' open={true} variant='permanent' slotProps={{
                paper : {
                    sx : {
                        width : '80px',
                        top : 64,
                        borderRight : 'none',
                        boxShadow : 'none',
                        //overflow : 'hidden'
                    }
                }
            }}>
                <Box>
                    {
                        basicOptions.map((item,index)=>(
                            <Stack key={index} direction={'column'} mb={3}>
                                <IconButton>
                                    <item.icon fontSize={'25'}/>
                                </IconButton>
                                <Typography fontSize={11} display={'flex'} justifyContent={'center'}>{item.primary}</Typography>
                            </Stack>
                        ))
                    }

                </Box>
            </Drawer>
        </Box>
    )
}

export default SingleLineDrawer