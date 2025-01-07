import React from "react";
import "./ShareThis.css";

function ShareThis() {
  return (
    <div class="sharethis">
      <img class="exit" src="exit.png"></img>
      <div class="sharethiscontent">
        <h3 class="sharethis-h">SHARE THIS & WIN</h3>
        <p>For the person who manages to get most friends to sign up for this case, we will pick at winner of 15 trees being planted in the amazon rainforest.</p>
        <div class="referral">
          <span>Your referral URL</span> <button>Hej</button>
        </div>
        <br></br>
        <div class="referrallinkdiv">
          <a class="referrallink" href="">
            https://www.seayou.com/event/referral/#134319807
          </a>
        </div>
        <h4>SHARE ON SOCIAL MEDIA</h4>
        <div class="socialmedia">
          <img class="icons facebook" src="facebook.png"></img>
          <img class="icons instagram" src="instagram.png"></img>
          <img class="icons linkedin" src="linkedin.png"></img>
          <img class="icons x" src="x.png"></img>
        </div>
      </div>
    </div>
  );
}

export default ShareThis;
