import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const ItemList = ({basicOptions, color}) => {

    const {category, setCategory} = useContext(AppContext)

    return (
        <Box>
            <List>
                {
                    basicOptions.map((item,index)=>(
                        <ListItem component={'button'} onClick={()=>( setCategory(item.linkCategory), console.log("Category : ",category) )} key={index} disablePadding>
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