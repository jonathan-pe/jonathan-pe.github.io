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
import Link from '@material-ui/core/Link';
import resume from '../docs/Resume.pdf';

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
    <Button className={styles.navButton} href="#aboutMe" onClick={() => setTitle("Jonathan Pe | Person")}>
      Person
    </Button>
  );
  const softwareEngineer = (
    <Button className={styles.navButton} href="#softwareEngineer" onClick={() => setTitle("Jonathan Pe | Software Engineer")}>
      Software Engineer
    </Button>
  );
  const DJ = (
    <Button className={styles.navButton} href="#dj" onClick={() => setTitle("Jonathan Pe | DJ")}>
      DJ
    </Button>
  );
  const gamer = (
    <Button className={styles.navButton} href="#gamer" onClick={() => setTitle("Jonathan Pe | Gamer")}>
      Gamer
    </Button>
  );

  const navItems = [aboutMe, softwareEngineer, DJ, gamer];

  return (
    <ElevationScroll {...props} className={styles.navbar}>
      <Slide appear={false} direction="down" in={!useScrollTrigger()}>
          <AppBar className={styles.appBar}>
            <Toolbar>
              <Fade in={true} timeout={500} style={{ transitionDelay: 1000 }}>
                <div className={styles.logo}>
                  <Link href="/">
                    <Logo />
                  </Link>
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
