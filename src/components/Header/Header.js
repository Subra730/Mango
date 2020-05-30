/*eslin t-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";

import { HashRouter, NavLink, Route } from 'react-router-dom';


export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (

    <header className="Header">
    {/*  <img src={require("./src/assets/TM2D.jpg")} className="Logo" alt="logo" />*/}
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit>

        <nav className="Nav">

          <HashRouter>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Pricing</NavLink>
            <NavLink to="/">Test Tips</NavLink>
            <NavLink to="/">Register</NavLink>

            <Route exact path="/" ></Route>
            <Route exact path="/" ></Route>
            <Route exact path="/" ></Route>
            <Route exact path="/" ></Route>

          </HashRouter>

        </nav>

      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
    </header>


  );
}
