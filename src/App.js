import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
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
// import BackgroundVideo from './Assets/Videos/background-1.mp4'
import LightVideo from './Assets/Videos/bg-white.mp4'
import DarkVideo from './Assets/Videos/bg-dark.mp4'

function App() {

  return (
    <BrowserRouter>
      <div>
      <div className="LightVideo-background">
      <video autoPlay loop muted className="fullscreen-video">
          <source src={LightVideo} type="video/mp4"></source>
        </video>
        </div>
        <div className="DarkVideo-background">
      <video autoPlay loop muted className="fullscreen-video">
          <source src={DarkVideo} type="video/mp4"></source>
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
