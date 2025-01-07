import React from "react";
import "./SignupForm.css";

const SignupForm = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign up</h1>
        <p>
          Sign up for this cause and save the woooorld save the woooorld save
          the woooorld save the woooorld save the woooorld up for this cause and
          save the woooorld save the woooorld save the woooorld save the
          woooorld up for this cause and save the woooorld save the woooorld
          save the woooorld save the woooorld.
        </p>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Your name" />

          <label>E-mail</label>
          <input type="email" placeholder="Your email" />

          <label>Phone</label>
          <input type="tel" placeholder="Your phone number" />

          <label>Address</label>
          <input type="text" placeholder="Your address" />

          <label>Signature</label>
          <input type="text" placeholder="Your signature" />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
