import React, { useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import Home from "./components/pages/Home";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const showSignUpHandler = () => {
    setShowSignUp(true);
  };

  const hideSignUpHandler = () => {
    setShowSignUp(false);
  };
  return (
    <React.Fragment>
      {/* <Login showSignUp={showSignUpHandler} /> */}

      {showSignUp && <Signup hideSignUpHandler={hideSignUpHandler} />}
      <Home />
    </React.Fragment>
  );
}

export default App;
