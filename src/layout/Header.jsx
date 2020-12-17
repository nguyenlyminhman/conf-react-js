import React from 'react';
import clsx from 'clsx';
import style from '../../src/module/style'

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import {Menu} from '@material-ui/icons';


const Header = props => {
  const { classes, isOpen } = props;
  return (
    <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: isOpen,
            })}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Cyber Logitec VietNam Coporation
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default withStyles(style)(Header);