import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import ContentHome from "./components/pages/ContentHome";
import Layout from "./components/pages/Layout/Layout";
import Profile from "./components/pages/Profile";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light-theme"
  );

  const [toggleClicked, setToggleClicked] = useState(false);

  let themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const toggleTheme = () => {
    setToggleClicked(true);
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    if (toggleClicked) {
      localStorage.setItem("theme", theme);
    }
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const value = localStorage.getItem("theme");
    if (value === "light-theme" || value === "dark-theme") {
      return;
    } else {
      if (themeMode) {
        setTheme("dark-theme");
      } else {
        setTheme("light-theme");
      }
      document.body.className = theme;
    }
  }, [theme]);

  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" exact>
          <Login />
          {/* <Login showSignUp={showSignUpHandler} /> */}
          {/* {showSignUp && <Signup hideSignUpHandler={hideSignUpHandler} />} */}
        </Route>

        <Layout clickHandler={toggleTheme}>
          <Route path="/" exact>
            <ContentHome />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Layout>
      </Switch>
    </React.Fragment>
  );
}

export default App;
