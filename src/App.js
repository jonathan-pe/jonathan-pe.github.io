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