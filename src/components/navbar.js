import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../images/logo.svg';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import colors from '../config/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  logo: {
    width: 40,
    height: 30,
    marginLeft: 30
  },
  appBar: {
    backgroundColor: colors.black
  }
}));

export default function Navbar(props) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Slide appear={false} direction="down" in={!useScrollTrigger()}>
        <AppBar className={styles.appBar}>
          <Toolbar>
            <img src={logo} alt="logo" className={styles.logo} />
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </div>
  );
}
