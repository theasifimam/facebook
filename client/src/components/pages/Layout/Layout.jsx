import { Fragment } from "react";
import Header from "../../UI/Header/Header";
// import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <Header toggleTheme={props.clickHandler} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
