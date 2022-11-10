import React from "react";
import dp from "../../../img/dp.jpg";
import Footer from "../../UI/Footer";
import "./LeftHome.css";

const LeftHome = () => {
  return (
    <div className="leftHome">
      <ul>
        <li>
          <i className="fa-solid fa-house"></i> <p>Home</p>
        </li>
        <li>
          <img src={dp} alt="profile picture" /> <p>Asif Imam</p>
        </li>
        <hr />
        <li>
          <i className="fa-solid fa-tv"></i> <p>Watch</p>
        </li>
        <li>
          <i className="fa-solid fa-store"></i> <p>Marketplace</p>
        </li>
        <li>
          <i className="fa-solid fa-gamepad"></i>
          <p>Gaming</p>
        </li>
        <li>
          <i className="fa-solid fa-table-cells"></i> <p>See all</p>
        </li>
        <hr />
        <li>
          <i className="fa-solid fa-user-group"></i>
          <p>Charlie Chaplin</p>
        </li>
        <li>
          <i className="fa-solid fa-user-group"></i>
          <p>Best UI/UX Designer</p>
        </li>
        <li>
          <i className="fa-solid fa-people-group"></i>
          <p>See all groups</p>
        </li>
        <hr />
        <li>
          <i className="fa-brands fa-react"></i>
          <p>Reactjs</p>
        </li>
        <li>
          <i className="fa-solid fa-border-all"></i>
          <p>See all shortcuts</p>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default LeftHome;
