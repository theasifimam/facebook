import React from "react";
import DP from "../dp/DP";
import "./Notification.css";

const Notification = () => {
  return (
    <div className="card cardNotice">
      <div className="heading flex">
        <h3>Notifications</h3>
        <i className="fa-solid fa-ellipsis"></i>
      </div>

      <div className="control3 flex">
        <button>All</button>
        <button>Unread</button>
      </div>

      <div className="newNotifications">
        <p>New Notification</p>
        <div className="notification">
          <ul>
            <li className="flex">
              <DP />
              <p>
                <span>Shaukat Ali</span> accepted your friend request.
              </p>
            </li>

            <li className="flex">
              <DP />
              <p>
                <span>Hanjalah Rahmani</span> commented on your photo.
              </p>
            </li>

            <li className="flex">
              <DP />
              <p>
                <span>Adil Imam</span> liked your profile picture.
              </p>
            </li>

            <li className="flex">
              <DP />
              <p>
                <span>Shaukat Ali</span> accepted your friend request.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="earlierNotifications">
        <p>Earlier Notification</p>
        <div className="notification">
          <ul>
            <li className="flex">
              <DP />
              <p>
                <span>Shaukat Ali</span> accepted your friend request.
              </p>
            </li>

            <li className="flex">
              <DP />
              <p>
                <span>Hanjalah Rahmani</span> commented on your photo.
              </p>
            </li>

            <li className="flex">
              <DP />
              <p>
                <span>Adil Imam</span> liked your profile picture.
              </p>
            </li>

            <li className="flex">
              <DP />
              <p>
                <span>Shaukat Ali</span> liked your photo.
              </p>
            </li>

            <li className="flex">
              <DP />
              <p>
                <span>Shaukat Ali</span> liked your photo.
              </p>
            </li>

            <li className="flex">
              <DP />
              <p>
                <span>Shaukat Ali</span> liked your photo.
              </p>
            </li>

            <li className="flex">
              <DP />
              <p>
                <span>Shaukat Ali</span> commented your profile picture.
              </p>
            </li>

            <li className="flex">
              <DP />
              <p>
                <span>Shaukat Ali</span> liked your photo.
              </p>
            </li>

            <li className="flex">
              <DP />
              <p>
                <span>Shaukat Ali</span> commented your profile picture.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
