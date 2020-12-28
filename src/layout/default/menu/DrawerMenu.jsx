import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, MenuList, Typography, MenuItem } from '@material-ui/core';
import { MoveToInbox, Send, PriorityHigh, Drafts } from '@material-ui/icons';
import style from '../style'

const DrawerMenu = props => {

    return (
        <List>
            <NavLink to="/login"  style={{ textDecoration: 'none' }} >
                <ListItem button key={1}>
                    <ListItemIcon><MoveToInbox /> </ListItemIcon>
                    <ListItemText primary={'Login'} />
                </ListItem>
            </NavLink>
            <Link to="/demo" >
                <ListItem button key={2}>
                    <ListItemIcon><MoveToInbox /> </ListItemIcon>
                    <ListItemText primary={'Demo'} />
                </ListItem>
            </Link>
            <ListItem button key={3}>
                <ListItemIcon><MoveToInbox /> </ListItemIcon>
                <NavLink to="/test" >
                    <ListItemText primary={'test'} />
                </NavLink>
            </ListItem>
            <ListItem button key={4}>
                <ListItemIcon><MoveToInbox /> </ListItemIcon>
                <NavLink to="/" >
                    <ListItemText primary={'Home'} />
                </NavLink>
            </ListItem>
        </List >

        // <MenuList>
        //    <NavLink exact to="/test" > <MenuItem>

        //         <ListItemIcon>
        //             <Send fontSize="small" />
        //         </ListItemIcon>
        //         <Typography variant="inherit">A short message</Typography>

        //     </MenuItem></NavLink>
        //     <MenuItem>
        //         <ListItemIcon>
        //             <PriorityHigh fontSize="small" />
        //         </ListItemIcon>
        //         <Typography variant="inherit">A very long text that overflows</Typography>
        //     </MenuItem>
        //     <MenuItem>
        //         <ListItemIcon>
        //             <Drafts fontSize="small" />
        //         </ListItemIcon>
        //         <Typography variant="inherit" noWrap>
        //             A very long text that overflows
        //   </Typography>
        //     </MenuItem>
        // </MenuList>
    )
};

export default withStyles(style)(DrawerMenu);