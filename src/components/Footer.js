import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="backTop">
        <img className="anker" src="Anker.svg" alt="anchor"></img>
        <h2>Back to top</h2>
      </div>
      <div className="contact">
        <h2>SEA YOU</h2>
        <p>E-mail: main@seayou.com</p>
      </div>
      <div className="SoMe">
        <img src="igIcon.svg" alt="Instagram icon"></img>
        <img src="fbIcon.svg" alt="Facebook icon"></img>
      </div>

      <div className="unIcons">
        <img src="fn_13.png" alt=""></img>
        <img src="fn_14.png" alt=""></img>
        <img src="fn_15.png" alt=""></img>
      </div>
    </footer>
  );
}

export default Footer;
