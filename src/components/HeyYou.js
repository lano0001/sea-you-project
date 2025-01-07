import React from "react";
import "./HeyYou.css";

function HeyYou() {
  return (
    <div class="heyyou">
      <img class="exit" src="exit.png"></img>
      <div class="heyyoutext">
        <h3>HEY YOU!</h3>
        <p>You are right now in DarkMode/Low Power Mode, because its a more sustainable way to show our website. This means that you browsing this site uses less power, and therefore emits less CO2. We did this by making all the colors darker and monochrome and turning down the quality of the photos. If you want the full experience you have to turn the Low Power mode off, to get a more immersive experience.It was important for us to give you the choice!</p>
      </div>
    </div>
  );
}

export default HeyYou;
