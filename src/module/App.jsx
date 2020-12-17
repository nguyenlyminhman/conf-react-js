import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import DrawerMenu from '../layout/Drawer.jsx';
import Header from '../layout/Header.jsx';
import clsx from 'clsx';
import './App.jsx';
import Home from './home/index.jsx';
import styles from './style'

import Drawer from '@material-ui/core/Drawer';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

const App = props => {
  const { classes } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        {/* Header Component */}
        <Header isSlide={open} />
        
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
          onMouseLeave={handleDrawerClose}
        >
          <div className={classes.toolbar}>
            {/* <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
            </IconButton> */}
          </div>
          {/* Slider Menu Component */}
          <DrawerMenu />
        </Drawer>
        
        <main className={clsx(classes.contentApp, {
          [classes.contentShift]: open,
        })}>
          <div className={classes.toolbar} />
          {/* Content Component */}
          <Home />
        </main>
      </div>
    </>
  )
};

export default withStyles(styles)(App);
