import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import Resume from './components/resume.js';
import Music from './components/music.js';
import League from './components/league.js';
import colors from './config/colors';

const styles = (theme) => ({
  main: {
      counterReset: "section 0",
      minHeight: "100vh",
      color: colors.white,
      margin: "0 auto",
      padding: "0px 150px",
      maxWidth: 1600,
      width: "100%"
  },
});

class App extends React.Component {
  render() {
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
}

export default withStyles(styles)(App);