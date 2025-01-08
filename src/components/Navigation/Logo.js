import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img className="NavLogo" src="seayoulogo.png" alt="Sea You Logo" />
      </Link>
    </div>
  );
}

export default Logo;
