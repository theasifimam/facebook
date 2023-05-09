import React, { useState } from "react";
import "./Header.css";
import dp from "../../../img/dp.jpg";
import Settings from "../settings/Settings";
import Notification from "../notification/Notification";
import Chats from "../chats/Chats";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {
  const notification = useSelector((state) => state.notification);

  const message = useSelector((state) => state.message);
  const login = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const showMessagesHandle = () => {
    dispatch({ type: "message" });
  };

  const showNotificationHandle = () => {
    dispatch({ type: "notification" });
  };

  const loginClickHandle = () => {
    dispatch({ type: "login" });
  };

  return (
    <>
      <div className="header">
        <div id="logo">
          <Link exact to="/">
            <h1>facebook</h1>
          </Link>
        </div>
        <div className="search flex-c">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="Search Facebook" />
        </div>
        <div className="hControls flex-c">
          <i
            className="fa-sharp fa-solid fa-circle-half-stroke"
            onClick={props.toggleTheme}
          ></i>
          <i
            className="fa-brands fa-facebook-messenger"
            onClick={showMessagesHandle}
          ></i>

          <i className="fa-solid fa-bell" onClick={showNotificationHandle}></i>

          <a>
            <i className="fa-solid fa-angle-down"></i>
            <img src={dp} alt="profile picture" onClick={loginClickHandle} />
          </a>
        </div>
      </div>
      {message && <Chats />}
      {login && <Settings />}
      {notification && <Notification />}
    </>
  );
};

export default Header;
