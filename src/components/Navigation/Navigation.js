import "./Navigation.css";
import ToggleSwitch from "../ToggleSwitch";

function Navigation({ isOn, setIsOn }) {
  return (
    <div class="navigation">
      <ToggleSwitch isOn={isOn} setIsOn={setIsOn} />
      <img class="burgermenu" src="burgerwave.png"></img>
    </div>
  );
}

export default Navigation;
