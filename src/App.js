import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Whoisseayou from "./components/Whoisseayou";
import Whyyoushouldcare from "./components/Whyyoushouldcare";
import TakeAction from "./components/TakeAction";
import Whatyoucando from "./components/Whatyoucando";
import Events from "./components/Events";
import LandingPage from "./pages/LandingPage";
import TakeActionSite from "./pages/TakeActionSite";
import Navigation from "./components/Navigation/Navigation";
import EventSite from "./pages/EventSite";

function App() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className={`wrapper ${isOn ? "grayscale" : ""}`}>
      <Navigation isOn={isOn} setIsOn={setIsOn} />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="/takeaction" element={<TakeActionSite />} />
            <Route path="/event" element={<EventSite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
