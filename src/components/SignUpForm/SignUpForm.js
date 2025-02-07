import React from "react";
import "./SignupForm.css";

const SignupForm = ({ onSignup }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSignup();
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h3>Send e-mail</h3>
        <p>
          Remind Jonas Gahr Støre, Norway's Prime Minister, of his duty to safeguard our blue planet
          for the well-being of current and future generations.
        </p>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Your name" />

          <label>E-mail</label>
          <input type="email" placeholder="Your email" />

          <label>Phone</label>
          <input type="tel" placeholder="Your phone number" />

          <label>Mail text</label>
          <textarea
            rows={10}
            cols={50}
            placeholder="Dear Mr Gahr Støre, Prime Minister of Norway,"
          />

          <button className="Signup_card-button" type="submit">
            Send e-mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
