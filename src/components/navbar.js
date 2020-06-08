import React, { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './logo';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
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
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 30,
    padding: 5,
    "& a": {
      display: "block",
      width: 40,
      height: 40,
      "&:hover": {
        "& svg": {
          "& g": {
            fill: colors.blue
          }
        }
      },
      "&:focus": {
        "& svg": {
          "& g": {
            fill: colors.blue
          }
        }
      },
      "& svg": {
        width: 40,
        height: 40,
      }
    }
  },
  appBar: {
    backgroundColor: colors.darkBlue,
    minHeight: 50
  },
  navButton: {
    margin: 10
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

  const [title, setTitle] = useState("Jonathan Pe | Person");

  useEffect(() => {
    document.title = `${title}`;
  });

  const aboutMe = (
    <Button Button className={styles.navButton} href="#aboutMe" onClick={() => setTitle("Jonathan Pe | Person")}>
      About Me
    </Button>
  );
  const experience = (
    <Button className={styles.navButton} href="#experience" onClick={() => setTitle("Jonathan Pe | Software Engineer")}>
      Experience
    </Button>
  );
  const music = (
    <Button Button className={styles.navButton} href="#music" onClick={() => setTitle("Jonathan Pe | DJ")}>
      Music
    </Button>
  );
  const league = (
    <Button Button className={styles.navButton} href="#league" onClick={() => setTitle("Jonathan Pe | Gamer")}>
      League
    </Button>
  );
  const resumeButton = (
    <Button variant="outlined" target="_blank" rel="noopener noreferrer" className={styles.navButton} href={resume}>
      Resumé
    </Button>
  );

  const navItems = [aboutMe, experience, music, league, resumeButton]

  return (
    <ElevationScroll {...props} className={styles.navbar}>
      <Slide appear={false} direction="down" in={!useScrollTrigger()}>
          <AppBar className={styles.appBar}>
            <Toolbar>
              <Fade in={true} timeout={500} style={{ transitionDelay: 1000 }}>
                <div className={styles.logo}>
                  <a href="/">
                    <Logo />
                  </a>
                </div>
              </Fade>
              <div className={styles.navButtons}>
                {navItems.map((item, i) => (
                  <Fade in={true} key={i} timeout={500} style={{ transitionDelay: 1000 + i * 100 }}>
                    {item}
                  </Fade>
                ))}
              </div>
            </Toolbar>
          </AppBar>
      </Slide>
    </ElevationScroll>
  );
}
