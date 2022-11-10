import React, { useState } from "react";
import "./Signup.css";

const Signup = (props) => {
  const [signup, setSignUp] = useState(true);

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const years = [
    1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010,
  ];

  const signupHTML = ``;

  return (
    <>
      <div className="container containerSignup">
        <div className="inputField">
          <h1>Sign Up</h1>
          <i
            className="fa-solid fa-xmark"
            onClick={props.hideSignUpHandler}
          ></i>
          <p>It's quick and easy.</p>
          <hr />
          <div className="inputName">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Surname" />
          </div>
          <input type="text" placeholder="Mobile number or email number" />
          <input type="password" placeholder="New password" />

          <p style={{ marginTop: "0.7rem" }}>Date of Birth</p>
          <div className="dob">
            <select className="selectDate" id="days">
              {days.map((val) => (
                <option value={val}>{val}</option>
              ))}
            </select>
            <select className="selectDate" id="months">
              {month.map((val) => (
                <option value="">{val}</option>
              ))}
            </select>

            <select className="selectDate" id="years">
              {years.map((val) => (
                <option value="">{val}</option>
              ))}
            </select>
          </div>

          <p style={{ marginTop: "0.7rem" }}>Gender</p>

          <div className="gender">
            <div className="genderBox">
              <input type="radio" value="Male" name="gender" checked /> Male
            </div>
            <div className="genderBox">
              <input type="radio" value="Female" name="gender" /> Female
            </div>
            <div className="genderBox">
              <input type="radio" value="Other" name="gender" /> Other
            </div>
          </div>

          <p style={{ marginTop: "0.7rem" }}>
            People who use our service may have uploaded your contact
            information to Facebook. <a>Learn more.</a>
          </p>
          <p style={{ marginTop: "0.7rem" }}>
            By clicking Sign Up, you agree to our <a>Terms</a>,{" "}
            <a>Privacy Policy</a> and Cookies Policy. You may receive SMS
            notifications from us and can opt out at any time.
          </p>

          <button className="btn-secondary btn-2">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Signup;
