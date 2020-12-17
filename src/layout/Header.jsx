import React from 'react';
import clsx from 'clsx';
import style from '../../src/module/style'

import { withStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';

import Menu from '@material-ui/icons/Menu';



const Header = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.isSlide,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: props.isSlide,
            })}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Company Name
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(style)(Header);