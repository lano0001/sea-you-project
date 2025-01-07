import React from "react";

import ActionCard from "../ActionCard";

import "./ImageContainer.css";

function ImageContainer({
  title,
  subText1,
  subText2,
  link1,
  linkText1,
  link2,
  linkText2,
  link3,
  linkText3,
}) {
  return (
    <div className="image_container">
      <img src="/norway.webp"></img>
      <div className="info_container">
        <h3>{title}</h3>
        <p>{subText1}</p>
        <p>{subText2}</p>
        <div>
          <a
            target="_blank"
            href="https://news.mongabay.com/2024/01/really-a-sad-day-as-norway-votes-to-allow-deep-sea-mining-in-arctic-waters/"
          >
            1. “Really a sad day as Norway votes to allow deep-sea mining in
            Arctic waters”, Mongabay
          </a>
          <a
            target="_blank"
            href="https://www.greenpeace.org/international/press-release/69799/arctic-biodiversity-under-threat-from-deep-sea-mining-plans-greenpeace-report-warns/"
          >
            2. Arctic biodiversity under threat from deep-sea mining plans,
            Greenpeace report warns”, Greenpeace
          </a>
          <a
            target="_blank"
            href="https://www.bbc.com/news/science-environment-67893808"
          >
            3. “Deep-sea mining: Norway approves controversial practice”, BBC
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;

<div className="take_more_action_container">
  <h3>Take more action</h3>
  <div className="take_more_action">
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
</div>;
