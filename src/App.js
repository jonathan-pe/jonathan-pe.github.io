import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/navbar.js';
import AboutMe from './sections/aboutMe.js';
import SoftwareEngineer from './sections/softwareEngineer.js';
import DJ from './sections/dj.js';
import Gamer from './sections/gamer.js';
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
    MuiListItem: {
      root: {
        padding: "0px 0px 0px 20px",
        marginBottom: 10,
        "&::before": {
          content: '"○"',
          position: "absolute",
          left: 0,
          color: colors.blue,
          fontSize: 16,
          lineHeight: 0
        }
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <div className={styles.main}>
        <AboutMe />
        <SoftwareEngineer />
        <DJ />
        <Gamer />
      </div>
    </ThemeProvider>
  );
}
