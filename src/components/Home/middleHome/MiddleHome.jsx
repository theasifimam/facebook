import React from "react";
import "./MiddleHome.css";
import dp from "../../../img/story2.jpg";
import { postObj } from "../../../assets/postObj";
import DP from "../../UI/dp/DP";
import { storyObj } from "../../../assets/postObj";

const MiddleHome = (props) => {
  return (
    <div className="middleHome">
      <div className="card">
        <div className="storyHeader">
          <ul>
            <li>
              <a href="/" id="bottomBorder">
                <i className="fa-solid fa-book-open"></i> Stories
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-camera-retro"></i>Reels
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-regular fa-file-video"></i>Rooms
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div id="story">
          <div className="storyBox storyBox1">
            <div className="storyImage">
              <img src={dp} alt="" />
            </div>
            <div className="yourStory">
              <p>Create Story</p>
              <div className="yourStoryIcon">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          {storyObj.map((post) => {
            return (
              <div className="storyBox" key={post.id}>
                <div className="dpImg">
                  <img src={post.img} alt="" />
                </div>
                <div className="storyImage">
                  <img src={post.img} alt="" />
                </div>
                <div className="storyName">{post.name}</div>
              </div>
            );
          })}

          <div className="storyBox">
            <div className="dpImg">
              <img src={dp} alt="" />
            </div>
            <div className="storyImage">
              <img src={dp} alt="" />
            </div>
            <div className="storyName">Mohd Hanjalah</div>
          </div>
        </div>
      </div>

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
            <i className="fa-solid fa-photo-film" id="photoPost"></i>Photo/Video
          </div>
          <div className="type" id="feelingActivity">
            <i className="fa-regular fa-face-laugh-beam" id="feelingPost"></i>
            Feeling/Activity
          </div>
        </div>
      </div>

      {postObj.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <div className="name">
              {/* <img src={dpicture} alt="profile picture" /> */}
              <div className="postDP">
                <img src={post.img} alt={post.caption} />
              </div>
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
  );
};

export default MiddleHome;
