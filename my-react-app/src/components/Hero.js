import classes from "./Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className={classes["home-page"]} >
      <div>
        <img className={classes["home-logo"]} src="who-cares-high-resolution-logo-transparent.png" alt="who cares logo" />
      </div>
      <div className={classes["home-buttons-container"]}>
        <Link to="/groups"><button className={classes["home-button"]}>Join a group</button></Link>
        <Link to="/events"><button className={classes["home-button"]}>Join an event</button></Link>
        <Link to="/signUp"><button className={classes["home-action-button"]}>Sign up now!</button></Link>
      </div>
    </div>
  );
}
