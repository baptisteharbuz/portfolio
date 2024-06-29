import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
// Components
import NavBar from './Components/NavbarComponent';
import Grain from "./Components/GrainComponent";
// import Cursor from './Components/CursorComponent';
// Pages
import HomePage from './Pages/HomePage';
import CV from './Pages/CvPage';
import MesProjets from './Pages/MesProjetsPage';
import Contact from './Pages/ContactPage';
// Styles
import './Styles/Style.css';
import AnimatedBackground from './Components/AnimatedBackground';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <HashRouter>
      <div className={theme}>
        <NavBar toggleTheme={toggleTheme} theme={theme} />
        <div className="Background">
          <AnimatedBackground theme={theme} />
        </div>
        {/* <Cursor /> */}
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/accueil"} element={<HomePage />} />
          <Route path={"/cv"} element={<CV />} />
          <Route path={"/mesprojets"} element={<MesProjets />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
        <Grain />
      </div>
    </HashRouter>
  );
}

export default App;