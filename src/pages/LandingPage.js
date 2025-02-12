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

function LandingPage({ showHeyYou, onCloseHeyYou, isOn, setIsOn }) {
  return (
    <div>
      {showHeyYou && <HeyYou onClose={onCloseHeyYou} isOn={isOn} setIsOn={setIsOn} />}
      <Header />
      <Whoisseayou />
      <Whyyoushouldcare />
      <Whatyoucando />
      <TakeAction />
      <Events />
      <Footer bgColor={"blue1"} />
    </div>
  );
}

export default LandingPage;
