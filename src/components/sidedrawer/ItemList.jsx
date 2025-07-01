import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const ItemList = ({basicOptions, color}) => {
    return (
        <Box>
            <List>
                {
                    basicOptions.map((item,index)=>(
                        <ListItem key={index} disablePadding>
                            <ListItemButton sx={{'&:hover' :{ bgcolor : 'grey.900', borderRadius : 3 } }}>
                                <ListItemIcon sx={{minWidth : 40}}>
                                    <item.icon className={`size-6 ${color}`} />
                                </ListItemIcon>
                                <ListItemText  primary={item.primary} sx={{ml:1, '& .MuiTypography-root' : { fontSize : '15px'}}} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )
}

export default ItemList