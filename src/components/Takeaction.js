import React from "react";
import "./TakeAction.css";
import ActionCard from "./ActionCard";

const TakeAction = () => {
  const handleAction = () => {
    alert("Thank you for taking action!");
  };

  return (
    <div className="TakeAction">
      <div className="ActionTitle">
        <h2>Take Action</h2>
        <img src="megaphone.svg" alt="Action icon"></img>
      </div>
      <div className="ActionCards">
        <ActionCard image="ice.webp" title="Norway: Stop deep sea mining!" description="Norway is preparing to begin deep-sea mining in the Arctic, threatening one of the planet's most remote, ancient, and pristine ecosystems for the sake of profit." buttonText="Take Action" onAction={handleAction} />
        <ActionCard image="boats.webp" title="Stop slavery at sea!" description="Overfishing devastates marine life, ecosystems, and the livelihoods of millions." buttonText="Take Action" onAction={handleAction} />
        <ActionCard image="seaMining.webp" title="Stop deep sea mining!" description="The deep sea, rich in biodiversity and vital in fighting climate change, faces a new threat: deep sea mining." buttonText="Take Action" onAction={handleAction} />
      </div>
    </div>
  );
};

export default TakeAction;
