import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

export default function Nav() {
  return (
    <header>
      <nav className="header-nav">
          <ul>
            <li className={classes["nav-link"]}><Link to="/groups">👥</Link></li>
            <li className={classes["nav-link"]}><Link to="/events">📆</Link></li>
            <li className={classes["nav-link"]}><Link to="/profile">👤</Link></li>
          </ul>
      </nav>
    </header>
  );
}
