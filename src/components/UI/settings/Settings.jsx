import React from "react";
import DP from "../dp/DP";
import "./Settings.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Settings = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const loginClickHandle = () => {
    dispatch({ type: "login" });
  };
  return (
    <div className="settings flex-col">
      <div className="card c2">
        <div className="profile flex">
          <DP />
          <h1>Asif Imam</h1>
          <i className="fa-solid fa-repeat"></i>
        </div>
        <hr />
        <p>See all profiles</p>
      </div>
      <div className="controls">
        <div className="control flex">
          <i className="fa-solid fa-gear control-i"></i>
          <h6>Settings & privacy</h6>
          <i className="fa-solid fa-angle-right"></i>
        </div>

        <div className="control flex">
          <i className="fa-solid fa-circle-info control-i"></i>
          <h6>Help & support</h6>
          <i className="fa-solid fa-angle-right"></i>
        </div>

        <div className="control flex">
          <i className="fa-solid fa-moon control-i"></i>
          <h6>Display & accessibility</h6>
          <i className="fa-solid fa-angle-right"></i>
        </div>

        <div className="control flex">
          <i className="fa-solid fa-comment-dots control-i"></i>
          <h6>Give feedback</h6>
        </div>

        <div className="control flex">
          <Link className="flex center" onClick={loginClickHandle} to="/login">
            <i className="fa-solid fa-right-from-bracket control-i"></i>
            <h6>Logout</h6>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
