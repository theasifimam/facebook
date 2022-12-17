import React from "react";
import "./MyProfile.css";
import profilePicture from "../../img/dp.jpg";
import DP from "../UI/dp/DP";
import { postObj } from "../../assets/postObj";
import Footer from "../UI/Footer";

const MyProfile = () => {
  return (
    <div className="profileHeaderContainer">
      {/* *********** Profile Header Section ************ */}
      <div className="profileHeader flex-col">
        <div className="coverImage">
          <div className="cpcontainer">
            <div className="editCoverBtn">
              <button className="btn-3 editCoverPhoto">
                <i className="fa-solid fa-camera"></i> Edit Cover Photo
              </button>
            </div>
          </div>
        </div>

        <div className="myProfileName">
          <div className="profilePicture">
            <img src={profilePicture} alt="" />
          </div>

          <div className="myInfo flex-col">
            <h1>Asif Imam</h1>
            <p>995 friends</p>

            <div className="editInfo flex">
              <div className="friendsPics">
                <DP />
                <DP />
                <DP />
              </div>
              <div className="myProfileBtn">
                <button className="btn-primary">
                  <i className="fa-solid fa-pencil"></i> Add to Story
                </button>
                <button className="btn-3">
                  <i className="fa-solid fa-circle-plus"></i> Edit profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="profileNavBar">
        <ul>
          <li>Posts</li>
          <li>About</li>
          <li>Friends</li>
          <li>Photos</li>
          <li>Videos</li>
          <li>Reels</li>
          <li>More</li>
        </ul>
      </div>

      {/* **********  Under Profile Section ************* */}
      <div className="underHeaderSection">
        <div className="leftProfileSection">
          <div className="userIntroCard card">
            <h3>Intro</h3>
            <p>Rising!</p>
            <p>Perfectly Imperfect!</p>
            <p>// Software Engineer</p>
            <p>// Rationalist!</p>
            <button className="btn-3">Edit Bio</button>

            <div className="userDetailList">
              <p>
                <i className="fa-solid fa-briefcase"></i>
                Intern at <span>Softmind Infotech PVT. LTD.</span>
              </p>
              <p>
                <i className="fa-solid fa-graduation-cap"></i>
                Studied at <span>Maharshi Dayanand University</span>
              </p>
              <p>
                <i className="fa-solid fa-house-chimney"></i>
                Lives in <span>Delhi, India</span>
              </p>
              <p>
                <i className="fa-solid fa-wifi"></i>
                Followed by <span>1,173 people</span>
              </p>

              <p>
                <i className="fa-solid fa-globe"></i>
                <a href="https://asifimam.com">asifimam.com</a>
              </p>

              <button className="btn-3">Edit Details</button>
            </div>

            <div className="userInterests">
              <span>Coding</span>
              <span>Cycling</span>
              <span>Learning</span>
              <span>Photograph</span>
              <span>Listening to music</span>
            </div>
            <button className="btn-3">Edit Hobbies</button>
          </div>
          <div className="profilePhotosCard card">
            <div className="heading">
              <h3>Photos</h3>
              <span>See All Photos</span>
            </div>
            <div className="photosDiv">
              {postObj.slice(0, 6).map((photo) => {
                return <img src={photo.img} key={photo.id} />;
              })}
            </div>
          </div>
          <Footer />
        </div>
        <div className="rightProfileSection">
          <div className="card uploadPost">
            <div id="write">
              <DP />
              <input type="text" placeholder="What's on your mind, Asif!" />
            </div>
            <hr />
            <div id="postType">
              <div className="type">
                <i className="fa-solid fa-video" id="livePost"></i>Live video
              </div>
              <div className="type">
                <i className="fa-solid fa-photo-film" id="photoPost"></i>
                Photo/Video
              </div>
              <div className="type" id="feelingActivity">
                <i
                  className="fa-regular fa-face-laugh-beam"
                  id="feelingPost"
                ></i>
                Feeling/Activity
              </div>
            </div>
          </div>

          {postObj.map((post) => {
            return (
              <div className="post card" key={post.id}>
                <div className="name">
                  {/* <img src={dpicture} alt="profile picture" /> */}
                  <DP />
                  <div className="nameDiv">
                    <h4>{post.name}</h4>
                  </div>
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
                <div className="caption">
                  <p>{post.caption}</p>
                </div>
                <div className="media">
                  <img src={post.img} alt="" />
                </div>

                <div className="postInfo">
                  <i className="fa-solid fa-thumbs-up"></i> <p>{post.likes}</p>
                  <p>{post.comments}</p>
                </div>
                <hr />
                <div className="react">
                  <div className="like">
                    <i className="fa-solid fa-thumbs-up"></i> Like
                  </div>
                  <div className="comment">
                    <i className="fa-regular fa-comment"></i> Comment
                  </div>
                  <div className="share">
                    <i className="fa-solid fa-share"></i> Share
                  </div>{" "}
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
