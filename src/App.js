import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import Resume from './components/resume.js';
import Music from './components/music.js';
import League from './components/league.js';
import colors from './config/colors';

const useStyles = makeStyles((theme) => ({
  main: {
      backgroundColor: colors.darkGrey,
      color: colors.white,
      fontSize: "calc(10px + 2vmin)",
      fontFamily: "montserrat, sans-serif"
  },
}));

export default function App() {
  const styles = useStyles();
  
  return (
    <div>
      <Navbar/>
      <div className={styles.main}>
        <Hero />
        <Resume />
        <Music />
        <League />
      </div>
    </div>
  );
}
