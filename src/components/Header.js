import React from "react";
import "./Header.css";
import Wave1 from "./Wave1";
import CustomButton from "./ReusableComponents/CustomButton";
import ToggleSwitch from "./ToggleSwitch";

function Header({ isOn, setIsOn }) {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <header>
      <div class="navigation">
        <ToggleSwitch isOn={isOn} setIsOn={setIsOn} />
        {/* <img class="toggle" src="toggle.png"></img> */}
        <img class="burgermenu" src="burgerwave.png"></img>
      </div>
      <div class="logo">
        <img class="seayoulogo" src="seayoulogo.png"></img>
      </div>
      <CustomButton text="Try Experience" onClick={handleClick} />
      <img class="liberty" src="libertyweb.png"></img>
      <img class="eiffeltower" src="eiffeltowerweb.png"></img>
      <Wave1 />
    </header>
  );
}

export default Header;
