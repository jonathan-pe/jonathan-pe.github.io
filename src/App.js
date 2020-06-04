import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import Resume from './components/resume.js';
import Music from './components/music.js';
import League from './components/league.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="main">
          <Hero />
          <Resume />
          <Music />
          <League />
        </div>
      </div>
    );
  }
}
