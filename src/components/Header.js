import React from "react";
import "./Header.css";
import Wave1 from "./Wave1";

function Header() {
  return (
    <header>
      <div class="navigation">
        <img class="toggle" src="toggle.png"></img>
        <img class="burgermenu" src="burgerwave.png"></img>
      </div>
      <div class="logo">
        <img class="seayoulogo" src="seayoulogo.png"></img>
      </div>
      <div class="divein">
        <img class="diveinimage" src="divein.png"></img>
      </div>
      <img class="liberty" src="libertyweb.png"></img>
      <img class="eiffeltower" src="eiffeltowerweb.png"></img>
    </header>
  );
}

export default Header;
