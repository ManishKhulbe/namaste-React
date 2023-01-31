import React from "react";
import manishLogo from "../../images/manish-low-resolution-logo-black-on-transparent-background.png";
import userLogo from "../../images/user.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header">
      <Link to="/">
      <img src={manishLogo} alt="manish logo" className="mainLogo" />
      </Link>
      <div >
      <ul className="nav-ul">
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      </div>
     
      <img src={userLogo} alt="user logo" className="userLogo" />
    </div>
  );
}
