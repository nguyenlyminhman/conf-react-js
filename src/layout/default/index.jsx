import React, { Suspense } from 'react';
import clsx from 'clsx';
import { BrowserRouter as Router } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { Drawer, CssBaseline, Typography, IconButton } from '@material-ui/core';
import styles from './style'
import DrawerMenu from './menu/DrawerMenu';
import Header from './header/Header'
import ROUTES from 'router/routes'
import RouteConf from "router/index";


const DefaultLayout = props => {
  const { classes } = props;
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
          <Suspense fallback={false}>
            <RouteConf routes={ROUTES} />
          </Suspense>
        </main>
      </Router>
    </div>
  );
}

export default withStyles(styles)(DefaultLayout)
