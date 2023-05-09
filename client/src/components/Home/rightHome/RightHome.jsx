import React from "react";
import DP from "../../UI/dp/DP";
import "./RightHome.css";
import { friendsInfoObj } from "../../../assets/postObj";

const RightHome = () => {
  return (
    <>
      <div className="rightHome">
        {/* Profile Shortcut Controls */}
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

        {/* Friend Requests */}

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

        {/* Birthday notice */}

        <div className="birthdays">
          <div className="heading">
            <h6>Birthdays</h6>
          </div>
          <p>
            <i className="fa-solid fa-gift"></i>
            <b>Amir Imam</b>'s birthday is today
          </p>
        </div>

        {/* Friends List */}

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
              {friendsInfoObj.map((friend) => {
                return (
                  <li key={friend.id}>
                    {/* <i className="fa-regular fa-user"></i> */}
                    <img src={friend.img} alt="dp of user" />
                    {friend.name}
                    <div className="onHoverInfo card flex">
                      <div className="rightInfo dp">
                        <img src={friend.img} alt="user dp" />
                      </div>
                      <div className="leftInfo">
                        <h3>{friend.name}</h3>
                        <hr />
                        <p>
                          <b>Works At - </b>
                          {friend.worksAt}
                        </p>
                        <p>Some more Info about this person...</p>
                      </div>
                    </div>
                  </li>
                );
              })}

              {/* <li>
                <i className="fa-regular fa-user"></i>
                Aquib Imam{" "}
                <div className="onHoverInfo card flex">
                  <div className="rightInfo">
                    <DP />
                  </div>
                  <div className="leftInfo">
                    <h3>Aquib Imam</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                      Non optio harum suscipit nemo corrupti, dolorum doloribus
                      quam.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <i className="fa-regular fa-user"></i>
                Amir Imam{" "}
                <div className="onHoverInfo card flex">
                  <div className="rightInfo">
                    <DP />
                  </div>
                  <div className="leftInfo">
                    <h3>Amir Imam</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                      Non optio harum suscipit nemo corrupti, dolorum doloribus
                      quam.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <i className="fa-regular fa-user"></i>
                Maleeha Imam{" "}
                <div className="onHoverInfo card flex">
                  <div className="rightInfo">
                    <DP />
                  </div>
                  <div className="leftInfo">
                    <h3>Maleeha Imam</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                      Non optio harum suscipit nemo corrupti, dolorum doloribus
                      quam.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <i className="fa-regular fa-user"></i>
                Shaukat Ali{" "}
                <div className="onHoverInfo card flex">
                  <div className="rightInfo">
                    <DP />
                  </div>
                  <div className="leftInfo">
                    <h3>Shaukat Ali</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                      Non optio harum suscipit nemo corrupti, dolorum doloribus
                      quam.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <i className="fa-regular fa-user"></i>
                Hanjalah Rahmani{" "}
                <div className="onHoverInfo card flex">
                  <div className="rightInfo">
                    <DP />
                  </div>
                  <div className="leftInfo">
                    <h3>Hanjalah Rahmani</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                      Non optio harum suscipit nemo corrupti, dolorum doloribus
                      quam.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <i className="fa-regular fa-user"></i>
                Fahim Alam{" "}
                <div className="onHoverInfo card flex">
                  <div className="rightInfo">
                    <DP />
                  </div>
                  <div className="leftInfo">
                    <h3>Fahim Alam</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                      Non optio harum suscipit nemo corrupti, dolorum doloribus
                      quam.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <i className="fa-regular fa-user"></i>
                Nadeem Model{" "}
                <div className="onHoverInfo card flex">
                  <div className="rightInfo">
                    <DP />
                  </div>
                  <div className="leftInfo">
                    <h3>Nadeem Model</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <hr />
                    <p>
                      Non optio harum suscipit nemo corrupti, dolorum doloribus
                      quam.
                    </p>
                  </div>
                </div>
              </li> */}
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
