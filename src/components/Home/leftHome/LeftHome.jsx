import React from "react";
import Footer from "../../UI/Footer";
import "./LeftHome.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import DP from "../../UI/dp/DP";

const LeftHome = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  var addLeftNavBar;

  if (location.pathname === "/") {
    addLeftNavBar = "";
  } else {
    addLeftNavBar = "leftNavbar";
  }

  return (
    <div className={`leftHome ${addLeftNavBar && "leftNavbar"}`}>
      <ul>
        <li>
          <i className="fa-solid fa-house"></i> <p>Home</p>
        </li>
        <li>
          <Link to="/profile" className="flex center">
            <DP />
            {/* <img src={dp} alt="profile picture" /> */}
            <p>Asif Imam</p>
          </Link>
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
