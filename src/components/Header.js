import React from "react";
import "./Header.css";
import Wave1 from "./Wave1";
import CustomButton from "./ReusableComponents/CustomButton";
import Button from "./ReusableComponents/Button";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };
  return (
    <header>
      <div class="logo">
        <img class="seayoulogo" src="seayoulogo.png"></img>
      </div>
      <div className="TryEx">
        <Button text="Try Experience" onClick={() => handleNavigation("/experience")} />
      </div>
      <img class="liberty" src="libertyweb.png"></img>
      <img class="eiffeltower" src="eiffeltowerweb.png"></img>
      <Wave1 />
    </header>
  );
}

export default Header;
