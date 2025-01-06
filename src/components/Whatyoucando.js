import React from "react";
import "./Whatyoucando.css";
import "../App.css";
import Wave4 from "./Wave4";

function Whatyoucando() {
  return (
    <div class="whatyoucando">
      <h2 class="whatyoucando-h">
        WHAT <span class="greenword">YOU</span> CAN DO
      </h2>
      <div class="whatyoucando-grid">
        <div class="personal-action">
          <img class="fist" src="fist.svg"></img>
          <h3 class="personal-action-h">Personal action</h3>
          <p class="personal-action-p">Even though structural change is the most effective to make big scale changes there is a lot YOU can do as an individual. SEA YOU organizes monthly events that you can sign up to, to engage with our vibrant community and take part while making new connections!</p>
        </div>
        <div class="political-action">
          <img class="megaphone" src="megaphone.svg"></img>
          <h3 class="political-action-h">Political action</h3>
          <p class="political-action-p">We have gathered a selection of causes that will help keep sea levels down. By appealing to politicans we can put the issue on the agenda and make big structural changes. For this to happen it does require a lot of signatures including YOURS!</p>
        </div>
      </div>
      <Wave4 />
    </div>
  );
}

export default Whatyoucando;
