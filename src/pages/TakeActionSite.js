import React from "react";
import SignupForm from "../components/SignUpForm/SignUpForm";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import "./TakeActionSite.css";

import { Link } from "react-router-dom";

function TakeActionSite() {
  return (
    <div>
      <Link to="/">Home</Link>

      <Link to="/takeaction">Take Action!</Link>
      <div className="take_action_container">
        <div className="top_container">
          <ImageContainer />
          <SignupForm />
        </div>
        <div className="grid_container">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </div>
  );
}

export default TakeActionSite;
