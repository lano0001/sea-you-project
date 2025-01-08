import React from "react";
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

function LandingPage({ showPopup, onClosePopup, isOn, setIsOn }) {
  return (
    <div>
      {showPopup && <HeyYou onClose={onClosePopup} isOn={isOn} setIsOn={setIsOn} />}
      <Header />
      <Whoisseayou />
      <Whyyoushouldcare />
      <Whatyoucando />
      <TakeAction />
      <Events />
      <Footer bgColor={"blue1"} />
      <ShareThis />
      <Interface />
    </div>
  );
}

export default LandingPage;
