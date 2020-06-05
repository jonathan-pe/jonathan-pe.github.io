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
      backgroundColor: colors.black,
      color: colors.white
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
