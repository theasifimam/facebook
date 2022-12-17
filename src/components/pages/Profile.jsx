import React from "react";
import LeftHome from "../Home/leftHome/LeftHome";
import MyProfile from "../MyProfile/MyProfile";

const Profile = () => {
  return (
    <>
      <div className="profileContainer">
        <LeftHome />
        <MyProfile />
      </div>
    </>
  );
};

export default Profile;
