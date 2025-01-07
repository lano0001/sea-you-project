import React from "react";

import Whoisseayou from "../components/Whoisseayou";
import Whatyoucando from "../components/Whatyoucando";
import Whyyoushouldcare from "../components/Whyyoushouldcare";
import TakeAction from "../components/Takeaction";
import Footer from "../components/Footer";

import "./LandingPage.css";

import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="">
      <Link to="/">Home</Link>

      <Link to="/takeaction">Take Action!</Link>

      <Whoisseayou />
      <Whatyoucando />
      <Whyyoushouldcare />
      <TakeAction />

      <Footer />
    </div>
  );
}

export default LandingPage;
