import React from "react";
import SignupForm from "../components/SignUpForm/SignUpForm";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import Footer from "../components/Footer";
import ActionCard from "../components/ActionCard";
import "./TakeActionSite.css";

import { Link } from "react-router-dom";

function TakeActionSite() {
  return (
    <div className="take_action_container">
      <Link to="/">Home</Link>

      <Link to="/takeaction">Take Action!</Link>

      <div className="margin_container">
        <div className="top_container">
          <ImageContainer
            title={`Stop slavery at sea and expose the exploitative fishing industry.`}
            subText1={`Overfishing devastates marine life, ecosystems, and the livelihoods of millions. Seafood companies must step up, ensuring ocean sustainability and protecting workers' rights. Every part of the fishing supply chain shares this responsibility. `}
            subText2={`Join the global movement by signing this petition. Urge global tuna trader FCF—earning $45 billion annually—to lead the way in ethical, sustainable fishing and uphold migrant fishers' rights. Where FCF leads, others will follow. Together, we can protect our oceans and those who depend on them.`}
          />
          <SignupForm />
        </div>
        <div className="bot_container">
          <h3>TAKE MORE ACTION</h3>
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
  );
}

export default TakeActionSite;
