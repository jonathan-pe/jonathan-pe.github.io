import React from 'react';
import constants from '../config/constants';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../images/logo.svg';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import colors from '../config/colors';
import Button from '@material-ui/core/Button';
import resume from '../docs/Resumé.pdf';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  navbar: {
    flexGrow: 1,
  },
  logo: {
    width: 40,
    height: 30,
    marginLeft: 30,
    alignItems: "flex-start"
  },
  appBar: {
    backgroundColor: colors.darkBlue,
    minHeight: 50
  },
  navButton: {
    padding: 10
  },
  navButtons: {
    flexGrow: 1,
    justifyContent: "flex-end",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
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
              <div className={styles.navButtons}>
                <Button className={styles.navButton} href="#aboutMe">
                  About Me
                </Button>
                <Button className={styles.navButton} href="#experience">
                  Experience
                </Button>
                <Button className={styles.navButton} href="#music">
                  Music
                </Button>
                <Button className={styles.navButton} href="#league">
                  League of Legends
                </Button>
                <Button variant="outlined" target="_blank" rel="noopener noreferrer" href={resume}>
                  Resumé
                </Button>
              </div>
            </Toolbar>
          </AppBar>
      </Slide>
    </ElevationScroll>
  );
}
