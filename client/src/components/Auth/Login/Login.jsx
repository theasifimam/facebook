import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import Signup from "../Signup/Signup";

const Login = (props) => {
  const dispatch = useDispatch();

  const showSignUpHandler = () => {
    dispatch({ type: "SHOWSIGNUP" });
  };

  const showSignUp = useSelector((state) => state.showSignUp);

  return (
    <>
      <div className="container">
        <div className="loginContentBox">
          <div className="title">
            <h1>facebook</h1>
            <p>
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>

          <div className="form">
            <div className="inputFieldLogin">
              <input type="text" placeholder="Email address or phone number" />
              <input type="password" placeholder="Password" />

              <Link to="/">
                <button className="btn-primary">Log in</button>
              </Link>
              <a>Forgotten password?</a>
              <hr />
              <button className="btn-secondary" onClick={showSignUpHandler}>
                Create New Account
              </button>
            </div>
            <p>
              <span>Create a Page</span> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>

      {showSignUp && <Signup />}
    </>
  );
};

export default Login;
