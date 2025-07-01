import { Box } from '@mui/material'
import React, { useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'
import SideDrawer from '../../components/sidedrawer/SideDrawer'
import Feed from '../../components/feed/Feed'
import { AppContext } from '../../context/AppContext'


const Home = () => {
    const {toggleClicked} = useContext(AppContext)
    return (
        <Box>
            <Navbar />
            <Box display={'flex'} flexDirection={'row'}>
                <SideDrawer />
                <Box component={'main'} sx={{ flexGrow : 1, transition: 'marginLeft 0.3s', marginLeft: toggleClicked ? '260px' : '80px'}}>
                    <Feed />
                </Box>
            </Box>
        </Box>
    )
}

export default Home