import React from "react";
import "./Interface.css";

function Interface() {
  return (
    <div class="interface">
      <img class="interfaceexit" src="exit.png"></img>
      <h3 class="chooseamonument">CHOOSE A MONUMENT</h3>
      <div class="interface_grid_1">
        <img class="interfacebutton" src="eiffel_interface.png"></img>
        <img class="interfacebutton" src="interface_coloseum.png"></img>
        <img class="interfacebutton" src="interface_meso.png"></img>
      </div>
      <div class="interface_grid_2">
        <img class="interfacebutton" src="interface_sphinx.png"></img>
        <img class="interfacebutton" src="interface_taj.png"></img>
        <img class="interfacebutton" src="interface_cristo.png"></img>
      </div>
    </div>
  );
}

export default Interface;
