import React from 'react';
import clsx from 'clsx';
import { BrowserRouter as Router } from 'react-router-dom'
import { withStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './style'
import { Container } from '@material-ui/core';
import DrawerMenu from '../layout/DrawerMenu';
import Header from '../layout/Header'
import Home from './home';
import RouteConf from '../router'


const App = props => {
  const { classes } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <Header isOpen={open} />
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          onMouseOver={handleDrawerOpen}
          onMouseOut={handleDrawerClose}
        >
          <div className={classes.toolbar}>
            <IconButton >
              <Typography variant="h6" noWrap>
                Nguyen Ly Minh Man
          </Typography>
            </IconButton>
          </div>
          <DrawerMenu />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <RouteConf />
        </main>
      </Router>
    </div>
  );
}

export default withStyles(styles)(App)
