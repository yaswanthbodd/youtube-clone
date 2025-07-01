import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SideDrawer from '../../components/sidedrawer/SideDrawer'

const Home = () => {
    return (
        <Box>
            <Navbar />
            <SideDrawer />
        </Box>
    )
}

export default Home