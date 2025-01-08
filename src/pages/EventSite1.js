import Footer from "../components/Footer";
import Logo from "../components/Navigation/Logo";
import Button from "../components/ReusableComponents/Button";
import "./EventSite.css";

import { Link } from "react-router-dom";

function EventSite1() {
  return (
    <div className="">
      <Logo />
      <div className="hero"></div>
      <h1>EVENT // TRASH PICKUP AT THE BEACH</h1>
      <section className="content">
        <p className="txt">
          This month SEA YOU is organizing a trash pickup event at the Carcavelos Beach in Lisboa.
          We encourage you to sign up and secure your spot! <br />
          <br />
          We will gather near the train station and walk to the beach together. We have arranged a
          reservation at one of the beach cafés after the trash pickup where you will have a chance
          to connect with other people in the SEA YOU family.
        </p>
        <h2>Location: Carcavelos Beach, Lisboa</h2>
        <h2>Time: 16:00 </h2>
        <div className="SignUpEvent">
          <h2>Sign up for this event</h2>
          <p>Want to secure YOUR spot for this event? Sign up with YOUR e-mail. </p>
          <input type="email" placeholder="Your email" />
          <Button text="SIGN UP" />
        </div>
      </section>
      <img className="fb" src="fb.svg" alt="Facebook logo"></img>
      <Footer bgColor={"blue2"} />
    </div>
  );
}

export default EventSite1;
