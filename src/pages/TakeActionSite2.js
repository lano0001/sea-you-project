import React from "react";
import SignupForm from "../components/SignUpForm/SignUpForm";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import Footer from "../components/Footer";
import ActionCard from "../components/ActionCard";
import "./TakeActionSite.css";

import { Link } from "react-router-dom";
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
              image={"/boats.webp"}
              title={`Stop slavery at sea and expose the exploitative fishing industry.`}
              subText1={`Overfishing devastates marine life, ecosystems, and the livelihoods of millions. Seafood companies must step up, ensuring ocean sustainability and protecting workers' rights. Every part of the fishing supply chain shares this responsibility. `}
              subText2={`Join the global movement by signing this petition. Urge global tuna trader FCF—earning $45 billion annually—to lead the way in ethical, sustainable fishing and uphold migrant fishers' rights. Where FCF leads, others will follow. Together, we can protect our oceans and those who depend on them.`}
            />
            <SignupForm onSignup={onSignup} />
          </div>
          <div className="bot_container">
            <h3 className="TA_title">TAKE MORE ACTION</h3>
            <div className="bot_action_card_container">
              <ActionCard
                image="ice.webp"
                title="Norway: Stop deep sea mining!"
                description="Norway is preparing to begin deep-sea mining in the Arctic, threatening one of the planet's most remote, ancient, and pristine ecosystems for the sake of profit."
                buttonText="Take Action"
                onAction={() => handleNavigation("/takeaction1")}
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
