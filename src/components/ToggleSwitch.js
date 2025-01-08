import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ isOn, setIsOn, border }) => {
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-switch" id={border} onClick={handleToggle}>
      <div className={`switch-circle ${isOn ? "on" : "off"}`}></div>
    </div>
  );
};

export default ToggleSwitch;
