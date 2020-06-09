import React, { useState, useEffect } from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/navbar.js';
import AboutMe from './sections/aboutMe.js';
import SoftwareEngineer from './sections/softwareEngineer.js';
import DJ from './sections/dj.js';
import Gamer from './sections/gamer.js';
import Loader from './components/loader';
import colors from './config/colors';

const theme = createMuiTheme({
  props: {
    MuiLink: {
      underline: "none",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    lineHeight: 1.2,
    fontSize: 18,
    fontWeight: 400,
    h1: {
      fontSize: 100,
      fontWeight: 700,
      color: colors.blue
    },
    h2: {
      fontSize: 80,
      fontWeight: 700,
      color: colors.white
    },
    h3: {
      fontSize: 50,
      fontWeight: 700
    },
    body1: {
      fontSize: 18,
      color: colors.grey
    }
  },
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
          lineHeight: 1.2,
          fontWeight: 400
        },
        section: {
          padding: "150px 0px",
          margin: "0 auto",
          maxWidth: 1000,
          position: "relative",
          alignItems: "flex-start"
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
        },
        fontSize: 15
      },
      outlined: {
        borderColor: colors.blue,
        "&:hover": {
          borderColor: colors.dirtyBlue
        }
      }
    },
    MuiLink: {
      root: {
        color: colors.blue,
        textDecoration: "none",
        "&:hover": {
          color: colors.dirtyBlue,
          textDecoration: "none"
        },
        "&:focus": {
          color: colors.dirtyBlue,
          textDecoration: "none"
        }
      },
    },
    MuiList: {
      root: {
        display: "grid",
        overflow: "hidden",
      }
    },
    MuiListItemText: {
      root: {
        marginTop: 0,
        marginBottom: 0
      },
      primary: {
        fontSize: 16
      }
    },
    MuiMenu: {
      list: {
        backgroundColor: colors.navyBlue
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
  
  const location = window.location;
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [isLoading, location.hash]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)}/>
      ) : (
        <React.Fragment>
          <Navbar />
          <div className={styles.main}>
            <AboutMe />
            <SoftwareEngineer />
            <DJ />
            <Gamer />
          </div>
        </React.Fragment>
      )}
    </ThemeProvider>
  );
}
