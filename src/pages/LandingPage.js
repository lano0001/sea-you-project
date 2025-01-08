import React, { useState } from "react";

import Header from "../components/Header";
import Whoisseayou from "../components/Whoisseayou";
import Whatyoucando from "../components/Whatyoucando";
import Whyyoushouldcare from "../components/Whyyoushouldcare";
import TakeAction from "../components/TakeAction";
import Events from "../components/Events";
import Footer from "../components/Footer";
import HeyYou from "../components/HeyYou";
import ShareThis from "../components/ShareThis";
import Interface from "../components/Interface";

import "./LandingPage.css";

import { Link } from "react-router-dom";

function LandingPage() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/takeaction">Take Action!</Link>
      <Header />
      <Whoisseayou />
      <Whyyoushouldcare />
      <Whatyoucando />
      <TakeAction />
      <Events />
      <Footer bgColor={"blue1"} />
      <HeyYou />
      <ShareThis />
      <Interface />
    </div>
  );
}

export default LandingPage;
