import React from "react";
import manishLogo from "../../images/manish-low-resolution-logo-black-on-transparent-background.png";
import userLogo from "../../images/user.png";



export default function TodoList() {
  return (
    <div id="header">
      <img src={manishLogo} alt="manish logo" className="mainLogo" />
      <img src={userLogo} alt="user logo" className="userLogo" />
    </div>
  );
};


