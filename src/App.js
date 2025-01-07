import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Whoisseayou from "./components/Whoisseayou";
import Whyyoushouldcare from "./components/Whyyoushouldcare";
import TakeAction from "./components/Takeaction";
import Whatyoucando from "./components/Whatyoucando";
import Events from "./components/Events";
import LandingPage from "./pages/LandingPage";
import TakeActionSite from "./pages/TakeActionSite";

function App() {
  const [isOn, setIsOn] = useState(true); // Default state is 'on'

  return (
    <div className={`wrapper ${isOn ? "grayscale" : ""}`}>
      <Header isOn={isOn} setIsOn={setIsOn} />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="/takeaction" element={<TakeActionSite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
