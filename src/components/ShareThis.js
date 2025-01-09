import React from "react";
import "./ShareThis.css";

function ShareThis({ onClose }) {
  return (
    <div className="sharethis">
      <img className="exit" src="exit.png" onClick={onClose} alt="Close" />
      <div className="sharethiscontent">
        <h3 className="sharethis-h">SHARE THIS & WIN</h3>
        <p>
          For the person who manages to get the most friends to sign up for this case, we will pick
          a winner of 15 trees being planted in the Amazon rainforest.
        </p>
        <div className="referral">
          <span>Your referral URL</span> <button>Copy</button>
        </div>
        <br />
        <div className="referrallinkdiv">
          <a className="referrallink" href="">
            https://www.seayou.com/event/referral/#134319807
          </a>
        </div>
        <h4>SHARE ON SOCIAL MEDIA</h4>
        <div className="socialmedia">
          <img className="icons facebook" src="facebook.png" alt="Facebook" />
          <img className="icons instagram" src="instagram.png" alt="Instagram" />
          <img className="icons linkedin" src="linkedin.png" alt="LinkedIn" />
          <img className="icons x" src="x.png" alt="X" />
        </div>
      </div>
    </div>
  );
}

export default ShareThis;
