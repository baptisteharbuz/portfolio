import { HashRouter, Routes, Route } from "react-router-dom";
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
// Styles
import './Styles/Style.css';
import LightVideo from './Assets/Videos/bg-white.mp4'
import DarkVideo from './Assets/Videos/bg-dark.mp4'

function App() {

  return (
    <HashRouter>
      <div>
      <div className="LightVideo-background">
      <video ontrols={false} autoPlay loop muted className="fullscreen-video">
          <source src={LightVideo} type="video/mp4"></source>
        </video>
        </div>
        <div className="DarkVideo-background">
      <video controls={false} autoPlay loop muted className="fullscreen-video" >
          <source src={DarkVideo} type="video/mp4"></source>
        </video>
        </div>
        <NavBar />
        <Cursor />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/accueil"} element={<HomePage />} />
          <Route path={"/cv"} element={<CV />} />
          <Route path={"/mesprojets"} element={<MesProjets />} />
          <Route path={"/contact"} element={<Contact />} />
          {/* <Route path={"/menu"} element={<Menu />} /> */}
        </Routes>
      </div>
      <Grain />
    </HashRouter>
  );
}

export default App;
