import React from "react";
import LeftHome from "../Home/leftHome/LeftHome";
import MiddleHome from "../Home/middleHome/MiddleHome";
import RightHome from "../Home/rightHome/RightHome";

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
