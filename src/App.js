import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar.js';
import AboutMe from './sections/aboutMe.js';
import SoftwareEngineer from './sections/softwareEngineer.js';
import DJ from './sections/dj.js';
import Gamer from './sections/gamer.js';
import Loader from './components/loader';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  
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
    <React.Fragment>
      <GlobalStyle />
      {/* {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)}/>
      ) : ( */}
        <React.Fragment>
          <Navbar />
          <div>
            <AboutMe />
            <SoftwareEngineer />
            <DJ />
            <Gamer />
          </div>
        </React.Fragment>
      {/* )} */}
    </React.Fragment>
  );
}
