import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../images/logo.svg';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import colors from '../config/colors';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50
  });

  return React.cloneElement(children, {
    elevation: trigger ? 8 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  navbar: {
    flexGrow: 1
  },
  logo: {
    width: 40,
    height: 30,
    marginLeft: 30
  },
  appBar: {
    backgroundColor: colors.darkBlue,
    minHeight: 50
  }
}));

export default function Navbar(props) {
  const styles = useStyles();

  return (
    <ElevationScroll {...props} className={styles.navbar}>
      <Slide appear={false} direction="down" in={!useScrollTrigger()}>
          <AppBar className={styles.appBar}>
            <Toolbar>
              <img src={logo} alt="logo" className={styles.logo} />
            </Toolbar>
          </AppBar>
      </Slide>
    </ElevationScroll>
  );
}
