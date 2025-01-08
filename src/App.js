import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Whoisseayou from "./components/Whoisseayou";
import Whyyoushouldcare from "./components/Whyyoushouldcare";
import Whatyoucando from "./components/Whatyoucando";
import Events from "./components/Events";
import LandingPage from "./pages/LandingPage";

import TakeActionSite1 from "./pages/TakeActionSite1";
import TakeActionSite2 from "./pages/TakeActionSite2";
import TakeActionSite3 from "./pages/TakeActionSite3";
import Navigation from "./components/Navigation/Navigation";
import EventSite1 from "./pages/EventSite1";
import EventSite2 from "./pages/EventSite2";

function App() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className={`wrapper ${isOn ? "grayscale" : ""}`}>
      <Navigation isOn={isOn} setIsOn={setIsOn} />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />

            <Route path="/takeaction1" element={<TakeActionSite1 />} />
            <Route path="/takeaction2" element={<TakeActionSite2 />} />
            <Route path="/takeaction3" element={<TakeActionSite3 />} />
            <Route path="/event1" element={<EventSite1 />} />
            <Route path="/event2" element={<EventSite2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
