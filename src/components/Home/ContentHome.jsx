import React from "react";
import "./ContentHome.css";
import LeftHome from "./leftHome/LeftHome";
import MiddleHome from "./middleHome/MiddleHome";
import RightHome from "./rightHome/RightHome";

const ContentHome = () => {
  return (
    <div className="homeContainer">
      <LeftHome />
      <MiddleHome />
      <RightHome />
    </div>
  );
};

export default ContentHome;
