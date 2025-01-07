import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Whoisseayou from "./components/Whoisseayou";
import Whyyoushouldcare from "./components/Whyyoushouldcare";
import TakeAction from "./components/TakeAction";
import Whatyoucando from "./components/Whatyoucando";
import Events from "./components/Events";

function App() {
  const [isOn, setIsOn] = useState(true); // Default state is 'on'

  return (
    <div className={`wrapper ${isOn ? "grayscale" : ""}`}>
      <Header isOn={isOn} setIsOn={setIsOn} />
      <Whoisseayou />
      <Whyyoushouldcare />
      <Whatyoucando />
      <TakeAction />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
