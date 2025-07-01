import { Height, Menu, Search } from '@mui/icons-material'
import { AppBar, Avatar, Box, Chip, IconButton, InputAdornment, TextField, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
    const {toggleClicked, setToggleClicked} = useContext(AppContext);
    
    return (
        <Box>
            <AppBar position='fixed' elevation={0}>
                <Toolbar>
                    <Box sx={{flexGrow : 1}}>
                    <IconButton size='small' onClick={()=>setToggleClicked(!toggleClicked)}>
                        <Menu />
                    </IconButton>
                    <IconButton size='large' sx={{ '&:hover' : {bgcolor : 'transparent'}}} >
                        <YouTubeIcon fontSize='large' className='text-red-700' />
                        <Typography fontSize={20}>YouTube</Typography>
                    </IconButton>
                    </Box>
                    <Box sx={{flexGrow : 1}}>
                        <TextField sx={{ width : '500px' , '& .MuiOutlinedInput-root': {borderRadius : '25px',height : 40}}} name='search' placeholder='Search' InputProps={{
                            endAdornment: <InputAdornment><Search /></InputAdornment>,
                        }}/>
                        <IconButton sx={{ml : 2, bgcolor : 'grey.900', color: 'white' }} >
                            <MicIcon />
                        </IconButton>
                    </Box>
                    
                    <Box display={'flex'} flexDirection={'row'} gap={3}>
                        <Chip icon={<AddIcon />} label='Create'/>
                        {/* <IconButton> */}
                            <NotificationsIcon fontSize='large' />
                        {/* </IconButton> */}
                        <Avatar src='' sx={{width : 32, height : 32}}/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar