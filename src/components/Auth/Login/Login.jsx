import React from "react";
import "./Login.css";

const Login = (props) => {
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
              <button className="btn-primary">Log in</button>
              <a>Forgotten password?</a>
              <hr />
              <button className="btn-secondary" onClick={props.showSignUp}>
                Create New Account
              </button>
            </div>
            <p>
              <span>Create a Page</span> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
