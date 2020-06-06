import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import Resume from './components/resume.js';
import Music from './components/music.js';
import League from './components/league.js';
import colors from './config/colors';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: colors.darkBlue,
          color: colors.white,
          fontFamily: "'Poppins', sans-serif",
        }
      }
    }
  }
});

const useStyles = makeStyles((theme) => ({
  main: {
    counterReset: "section 0",
    minHeight: "100vh",
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
          <Resume />
          <Music />
          <League />
        </div>
      </ThemeProvider>
    </React.Fragment>
    
  );
}