import React, { useState } from "react";
import "./Header.css";
import dp from "../../../img/dp.jpg";
import Settings from "../settings/Settings";
import Notification from "../notification/Notification";
import Chats from "../chats/Chats";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const showMessagesHandle = () => {
    setShowMessages(!showMessages);
    setShowLogin(false);
    setShowNotice(false);
  };

  const showNotificationHandle = () => {
    setShowNotice(!showNotice);
    setShowMessages(false);
    setShowLogin(false);
  };

  const loginClickHandle = () => {
    setShowLogin(!showLogin);
    setShowNotice(false);
    setShowMessages(false);
  };

  return (
    <>
      <div className="header">
        <div id="logo">
          <h1>facebook</h1>
        </div>
        <div className="search flex-c">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="Search Facebook" />
        </div>
        <div className="hControls flex-c">
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
      {showMessages && <Chats />}
      {showLogin && <Settings />}
      {showNotice && <Notification />}
    </>
  );
};

export default Header;
