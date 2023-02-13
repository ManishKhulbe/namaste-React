import React from "react";
import manishLogo from "../../images/manish-low-resolution-logo-black-on-transparent-background.png";
import userLogo from "../../images/user.png";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
export default function Header() {
  const isOnline = useIsOnline();
  const {user} = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items)
  return (
    <div
      id="header"
      className="flex justify-between bg-gray-200 items-center p-2"
    >
      <Link to="/">
        <img src={manishLogo} alt="manish logo" className="h-12 w-10 ml-3" />
      </Link>
      <div>
        <ul className="flex gap-x-8">
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/instamart">InstaMart</Link>
          </li>
          <li>
            <Link to="/cart">cart - {cartItems.length}</Link>
          </li>
        </ul>
      </div>

      {isOnline ? "🟢" : "🔴"}
      <h1>{user.name}</h1>
      <img src={userLogo} alt="user logo" className="w-10 h-10 mr-3" />
    </div>
  );
}
