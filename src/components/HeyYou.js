import React from "react";
import "./HeyYou.css";
import ToggleSwitch from "./ToggleSwitch";

function HeyYou({ onClose, isOn, setIsOn, border }) {
  return (
    <div className="heyyou popup-slide-in">
      <img className="exit" src="exit.png" alt="Close" onClick={onClose} />
      <div className="heyyoutext">
        <h3 className="heyyou-h">HEY YOU!</h3>
        <p>
          You are right now in DarkMode/Low Power Mode, because it's a more sustainable way to show
          our website. This means that you browsing this site uses less power, and therefore emits
          less CO2. We did this by making all the colors darker and monochrome and turning down the
          quality of the photos. If you want the full experience you have to turn the Low Power mode
          off, to get a more immersive experience. It was important for us to give you the choice!
        </p>
      </div>
      <div className="Toggle">
        <ToggleSwitch isOn={isOn} setIsOn={setIsOn} border={"border2"} />
      </div>
    </div>
  );
}

export default HeyYou;
