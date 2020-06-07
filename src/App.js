import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import AboutMe from './components/aboutMe.js';
import Experience from './components/experience.js';
import Music from './components/music.js';
import League from './components/league.js';
import colors from './config/colors';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundColor: colors.darkBlue,
          color: colors.white,
          fontFamily: "'Poppins', sans-serif",
          lineHeight: 1.2
        },
        a: {
          color: colors.blue,
          textDecoration: "none",
          "&:hover": {
            color: colors.dirtyBlue
          }
        },
        section: {
          padding: "150px 0px",
          margin: "0 auto",
          maxWidth: 1000,
        },
        ".flexCenter": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".flexBetween": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      }
    },
    MuiButton: {
      root: {
        fontFamily: "'Poppins', sans-serif",
        textTransform: "none",
        color: colors.blue,
        "&:hover": {
          color: colors.dirtyBlue
        }
      },
      outlined: {
        borderColor: colors.blue,
        "&:hover": {
          borderColor: colors.dirtyBlue
        }
      }
    }
  }
});

const useStyles = makeStyles((theme) => ({
  main: {
    color: colors.white,
    margin: "0 auto",
    padding: "0px 150px",
    maxWidth: 1600,
    width: "100%",
  },
}));

export default function App() {
  const styles = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <div className={styles.main}>
          <Hero />
          <AboutMe />
          <Experience />
          <Music />
          <League />
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}
