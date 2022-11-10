import React from "react";
import DP from "../../UI/dp/DP";
import "./RightHome.css";

const RightHome = () => {
  return (
    <>
      <div className="rightHome">
        <div id="profileShortcut">
          <div className="heading">
            <h6>Your Pages and profiles</h6>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <b style={{ marginLeft: "1.1rem" }}>
            <i className="fa-solid fa-people-roof"></i>Reactjs Developers
          </b>
          <ul>
            <li>
              <i className="fa-regular fa-bell"></i>2 Notifications
            </li>
            <li>
              <i className="fa-solid fa-repeat"></i>Switch Into Page
            </li>
            <li>
              <i className="fa-solid fa-bullhorn"></i>Create Promotion
            </li>
          </ul>
        </div>

        <div className="frndRequest">
          <div className="heading">
            <h6>Friend requests</h6>
            <a href="#">See All</a>
          </div>

          <div className="request">
            <div className="requestDp">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="userRequestInfo">
              <h5>Ishaaq Alam</h5>
              <p>2 mutual friends</p>
              <div className="btnBox">
                <button className="cnf-btn">Confirm</button>
                <button className="dlt-btn">Delete</button>
              </div>
            </div>
          </div>
          <div className="request">
            <div className="requestDp">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="userRequestInfo">
              <h5>Faiz Alam</h5>
              <p>23 mutual friends</p>
              <div className="btnBox">
                <button className="cnf-btn">Confirm</button>
                <button className="dlt-btn">Delete</button>
              </div>
            </div>
          </div>
        </div>

        <div className="birthdays">
          <div className="heading">
            <h6>Birthdays</h6>
          </div>
          <p>
            <i className="fa-solid fa-gift"></i>
            <b>Amir Imam</b>'s birthday is today
          </p>
        </div>

        <div className="contacts">
          <div className="heading h-flex">
            <h6>Contacts</h6>
            <div className="contactCtrl">
              <i className="fa-solid fa-video"></i>
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          </div>

          <div className="contactList">
            <ul>
              <li>
                <i className="fa-regular fa-user"></i>
                Adil Imam
              </li>

              <li>
                <i className="fa-regular fa-user"></i>
                Aquib Imam
              </li>

              <li>
                <i className="fa-regular fa-user"></i>
                Amir Imam
              </li>
              <li>
                <i className="fa-regular fa-user"></i>
                Maleeha Imam
              </li>
              <li>
                <i className="fa-regular fa-user"></i>
                Shaukat Ali
              </li>
              <li>
                <i className="fa-regular fa-user"></i>
                Hanjalah Rahmani
              </li>
              <li>
                <i className="fa-regular fa-user"></i>
                Fahim Alam
              </li>
              <li>
                <i className="fa-regular fa-user"></i>
                Nadeem Model
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div id="onHoverInfo">
        <DP />
        <div className="infoOfUserOnHover">
          <h2>Aquib Khan</h2>
        </div>
      </div> */}
    </>
  );
};

export default RightHome;
