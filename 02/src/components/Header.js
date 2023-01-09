import React from "react";
import manishLogo from "../../images/manish-low-resolution-logo-black-on-transparent-background.png";
import userLogo from "../../images/user.png";
import searchIcon from "../../images/search.png";



export default function TodoList() {
  return (
    <div id="header">
      <img src={manishLogo} alt="manish logo" className="mainLogo" />
      <div className="searchBar">
        <input type="text" placeholder="Search here" className="inputBar" />
        <img src={searchIcon} alt="search icon" className="searchIcon" />
      </div>

      <img src={userLogo} alt="user logo" className="userLogo" />
    </div>
  );
};


