import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import LandingPage from "./pages/LandingPage";
import TakeActionSite1 from "./pages/TakeActionSite1";
import TakeActionSite2 from "./pages/TakeActionSite2";
import TakeActionSite3 from "./pages/TakeActionSite3";
import EventSite1 from "./pages/EventSite1";
import EventSite2 from "./pages/EventSite2";
import Interface from "./components/Interface";
import ShareThis from "./components/ShareThis";

function App() {
  const [isOn, setIsOn] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`wrapper ${isOn ? "grayscale" : ""}`}>
      <Navigation isOn={isOn} setIsOn={setIsOn} />
      {showPopup && <ShareThis onClose={handleClosePopup} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage isOn={isOn} setIsOn={setIsOn} />} />
          <Route path="/takeaction1" element={<TakeActionSite1 onSignup={handleShowPopup} />} />
          <Route path="/takeaction2" element={<TakeActionSite2 onSignup={handleShowPopup} />} />
          <Route path="/takeaction3" element={<TakeActionSite3 onSignup={handleShowPopup} />} />
          <Route path="/event1" element={<EventSite1 />} />
          <Route path="/event2" element={<EventSite2 />} />
          <Route path="/experience" element={<Interface />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
