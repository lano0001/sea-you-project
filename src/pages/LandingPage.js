import React from "react";

import Whoisseayou from "../components/Whoisseayou";
import Whatyoucando from "../components/Whatyoucando";
import Whyyoushouldcare from "../components/Whyyoushouldcare";
import TakeAction from "../components/TakeAction";
import Events from "../components/Events";
import Footer from "../components/Footer";

import "./LandingPage.css";

import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="">
      <Link to="/">Home</Link>

      <Link to="/takeaction">Take Action!</Link>

      <Whoisseayou />
      <Whyyoushouldcare />
      <Whatyoucando />
      <TakeAction />
      <Events />
      <Footer />
    </div>
  );
}

export default LandingPage;
