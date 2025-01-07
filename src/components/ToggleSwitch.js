import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ isOn, setIsOn }) => {
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-switch" onClick={handleToggle}>
      <div className={`switch-circle ${isOn ? "on" : "off"}`}></div>
    </div>
  );
};

export default ToggleSwitch;
