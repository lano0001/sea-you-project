import React from "react";

import ImageContainer from "../components/ImageContainer/ImageContainer";
import Footer from "../components/Footer";
import ActionCard from "../components/ActionCard";
import SignupForm from "../components/SignUpForm/SignUpForm";
import Wave4 from "../components/Wave4";

import "./TakeActionSite.css";

import { useNavigate } from "react-router-dom";
import Logo from "../components/Navigation/Logo";
import Wave3 from "../components/Wave3";

function TakeActionSite({ onSignup }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div>
      <Logo />
      <div className="take_action_container">
        <div className="margin_container">
          <div className="top_container">
            <ImageContainer
              image={"/norway.webp"}
              title={"STOP NORWAY FROM DEEP SEA MINING"}
              subText1={
                "Norway is preparing to begin deep-sea mining in the Arctic, threatening one of the planets most remote, ancient, and pristine ecosystems for the sake of profit."
              }
              subText2={`Imagine if we could turn back time and prevent the oil industry from ever taking hold. Today, we have a rare chance to stop a new extractive industry before it begins—one that could devastate our oceans. Will you stand against deep-sea mining and help protect our planet's future?`}
            />
            <SignupForm onSignup={onSignup} />
          </div>

          <div className="bot_container">
            <h3 className="TA_title">TAKE MORE ACTION</h3>
            <div className="bot_action_card_container">
              <ActionCard
                image="boats.webp"
                title="Stop slavery at sea!"
                description="Overfishing devastates marine life, ecosystems, and the livelihoods of millions."
                buttonText="Take Action"
                onAction={() => handleNavigation("/takeaction2")}
              />
              <ActionCard
                image="seaMining.webp"
                title="Stop deep sea mining!"
                description="The deep sea, rich in biodiversity and vital in fighting climate change, faces a new threat: deep sea mining."
                buttonText="Take Action"
                onAction={() => handleNavigation("/takeaction3")}
              />
            </div>
          </div>
        </div>
        <div className="bottom">
          <Wave3 />
        </div>
        <Footer bgColor={"blue2"} />
      </div>
    </div>
  );
}

export default TakeActionSite;
