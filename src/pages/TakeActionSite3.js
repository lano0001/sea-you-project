import React from "react";
import SignupForm from "../components/SignUpForm/SignUpForm";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import Footer from "../components/Footer";
import ActionCard from "../components/ActionCard";
import "./TakeActionSite.css";

import { Link } from "react-router-dom";
import Logo from "../components/Navigation/Logo";

function TakeActionSite() {
  return (
    <div>
      <Logo />
      <div className="take_action_container">
        <Link to="/">Home</Link>

        <Link to="/takeaction">Take Action!</Link>

        <div className="margin_container">
          <div className="top_container">
            <ImageContainer
              image={"/seaMining.webp"}
              title={`Stop deep sea mining before it starts`}
              subText1={`The deep sea, rich in biodiversity and vital in fighting climate change, faces a new threat: deep sea mining. Companies are pressuring governments to allow massive machines, heavier than blue whales, to extract metals from fragile ocean floors.`}
              subText2={`This is our chance to prevent a disaster—like stopping offshore drilling before the oil age began. We must act now to protect these pristine ecosystems. Governments must take a stand: reject deep sea mining and safeguard our oceans for future generations.`}
            />
            <SignupForm />
          </div>
          <div className="bot_container">
            <h3 className="TA_title">TAKE MORE ACTION</h3>
            <div className="bot_action_card_container">
              <ActionCard
                image="boats.webp"
                title="Stop slavery at sea!"
                description="Overfishing devastates marine life, ecosystems, and the livelihoods of millions."
                buttonText="Take Action"
              />
              <ActionCard
                image="seaMining.webp"
                title="Stop deep sea mining!"
                description="The deep sea, rich in biodiversity and vital in fighting climate change, faces a new threat: deep sea mining."
                buttonText="Take Action"
              />
            </div>
          </div>
        </div>
        <Footer bgColor={"blue2"} />
      </div>
    </div>
  );
}

export default TakeActionSite;
