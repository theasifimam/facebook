import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Signup.css";

const Signup = (props) => {
  const payload = useSelector((state) => state.payload);
  const Signup = useSelector((state) => state.signup);

  const dispatch = useDispatch();
  const [gender, setGender] = useState();

  const fnameRef = useRef();
  const lnameRef = useRef();
  const contactRef = useRef();
  const dayRef = useRef();
  const passwordRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const genderRef = useRef();

  const genderChangeHandler = (e) => {
    const target = e.target;
    if (target.checked) {
      setGender(target.value);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Getting values from Refs
    const enteredFName = fnameRef.current.value;
    const enteredLName = lnameRef.current.value;
    const enteredContact = contactRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredDay = dayRef.current.value;
    const enteredMonth = monthRef.current.value;
    const enteredYear = yearRef.current.value;

    // Putting those values in an Object
    const userData = {
      fName: enteredFName,
      lName: enteredLName,
      email: enteredContact,
      password: enteredPassword,
      date: { day: enteredDay, month: enteredMonth, year: enteredYear },
      gender: gender,
    };

    console.log(userData);
    dispatch({ type: "USER-SUBMIT", payload: userData });

    console.log(e);
    e.target.reset();
  };

  const hideSignUpHandler = () => {
    dispatch({ type: "SHOWSIGNUP" });
  };
  return (
    <>
      <form className="container containerSignup" onSubmit={formSubmitHandler}>
        <div className="inputField">
          <h1>Sign Up</h1>
          <i className="fa-solid fa-xmark" onClick={hideSignUpHandler}></i>
          <p>It's quick and easy.</p>
          <hr />

          <div className="inputName">
            <input type="text" placeholder="First name" ref={fnameRef} />
            <input type="text" placeholder="Last name" ref={lnameRef} />
          </div>

          <input
            type="text"
            placeholder="Mobile number or email number"
            ref={contactRef}
          />

          <input type="password" placeholder="New password" ref={passwordRef} />

          <p>Date of Birth</p>

          <div className="dob">
            <select className="selectDate" id="days" ref={dayRef}>
              {/* {days.map((val) => (
                <option value={val}>{val}</option>
              ))} */}

              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>

            <select className="selectDate" id="months" ref={monthRef}>
              {/* {month.map((val) => (
                <option value="">{val}</option>
              ))} */}

              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>

            <select className="selectDate" id="years" ref={yearRef}>
              {/* {years.map((val) => (
                <option value="">{val}</option>
              ))} */}
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
            </select>
          </div>

          <p>Gender</p>

          <div className="gender">
            <div className="genderBox">
              <input
                type="radio"
                value="Male"
                name="gender"
                onChange={genderChangeHandler}
                checked={gender === "Male"}
              />
              Male
            </div>
            <div className="genderBox">
              <input
                type="radio"
                value="Female"
                name="gender"
                onChange={genderChangeHandler}
                checked={gender === "Female"}
              />
              Female
            </div>
            <div className="genderBox">
              <input
                type="radio"
                value="Other"
                name="gender"
                onChange={genderChangeHandler}
                checked={gender === "Other"}
              />
              Other
            </div>
          </div>

          <p>
            People who use our service may have uploaded your contact
            information to Facebook. <a>Learn more.</a>
          </p>
          <p>
            By clicking Sign Up, you agree to our <a>Terms</a>,{" "}
            <a>Privacy Policy</a> and Cookies Policy. You may receive SMS
            notifications from us and can opt out at any time.
          </p>

          <button className="btn-secondary btn-2">Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default Signup;

// const month = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const days = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//   22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
// ];

// const years = [
//   1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
//   2010,
// ];

// const [userData, setUserData] = useState({
//   fName: "",
//   lName: "",
//   email: "",
//   moble: "",
//   password: "",
//   date: { day: "", month: "", year: "" },
//   // gender: "",
// });

// let enteredFName,
//   enteredLName,
//   enteredContact,
//   enteredPassword,
//   enteredDay,
//   enteredMonth,
//   enteredYear;
// // gender;

// const fNameChangeHandler = (e) => {
//   enteredFName = e.current.value;
// };

// const lNameChangeHandler = (e) => {
//   enteredLName = e.current.value;
// };

// const contactChangeHandler = (e) => {
//   enteredContact = e.current.value;
// };

// const passwordChangeHandler = (e) => {
//   enteredPassword = e.current.value;
// };

// const dayChangeHandler = (e) => {
//   enteredDay = e.current.value;
//   console.log(enteredDay);
// };

// const monthChangeHandler = (e) => {
//   enteredMonth = e.current.value;
//   console.log(enteredMonth);
// };

// const yearChangeHandler = (e) => {
//   enteredYear = e.current.value;
//   console.log(enteredYear);
// };

// const genderChangeHandler = (e) => {
//   // enteredGender = e.current.value;
//   // const target = e.target;
//   // if (target.checked) {
//   //   enteredGender = target.value;
//   // }
// };
