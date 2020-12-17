import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { MoveToInbox } from '@material-ui/icons';
import style from '../../src/module/style'

const DrawerMenu = props => {

    return (
        <List>
            <ListItem button key={1}>
                <ListItemIcon><MoveToInbox /> </ListItemIcon>
                <NavLink exact to="/login" >
                    <ListItemText primary={'Login'} />
                </NavLink>
            </ListItem>
            <ListItem button key={2}>
                <ListItemIcon><MoveToInbox /> </ListItemIcon>
                <NavLink exact to="/demo" >
                    <ListItemText primary={'Demo'} />
                </NavLink>
            </ListItem>
            <ListItem button key={3}>
                <ListItemIcon><MoveToInbox /> </ListItemIcon>
                <NavLink exact to="/test" >
                    <ListItemText primary={'test'} />
                </NavLink>
            </ListItem>
            <ListItem button key={4}>
                <ListItemIcon><MoveToInbox /> </ListItemIcon>
                <NavLink exact to="/" >
                    <ListItemText primary={'Home'} />
                </NavLink>
            </ListItem>
        </List>
    )
};

export default withStyles(style)(DrawerMenu);