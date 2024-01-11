import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
// Components
import NavBar from './Components/NavbarComponent';
import Grain from "./Components/GrainComponent";
import Cursor from './Components/CursorComponent';
// Pages
import HomePage from './Pages/HomePage';
import CV from './Pages/CvPage';
import MesProjets from './Pages/MesProjetsPage';
import Contact from './Pages/ContactPage';
// import Menu from './Pages/MenuPage';
// Styles
import './Styles/Style.css';
import BackgroundVideo from './Assets/Videos/background-1.mp4'

function App() {
  useEffect(() => {
    // Ajoutez le code JavaScript pour le curseur ici
    const cursorDot = document.querySelector('.cursor-dot');
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
    });

    document.addEventListener('mouseover', () => {
      cursorDot.style.opacity = 1;
      cursor.style.opacity = 1;
    });

    document.addEventListener('mouseout', () => {
      cursorDot.style.opacity = 0;
      cursor.style.opacity = 0;
    });
  }, []);

  return (
    <BrowserRouter>
      <div>
      <div className="video-background">
      <video autoPlay loop muted className="fullscreen-video">
          <source src={BackgroundVideo} type="video/mp4"></source>
        </video>
        </div>
        <NavBar />
        <Cursor />
        <Routes>
          <Route path={"/accueil"} element={<HomePage />} />
          <Route path={"/cv"} element={<CV />} />
          <Route path={"/mesprojets"} element={<MesProjets />} />
          <Route path={"/contact"} element={<Contact />} />
          {/* <Route path={"/menu"} element={<Menu />} /> */}
        </Routes>
      </div>
      <Grain />
    </BrowserRouter>
  );
}

export default App;
