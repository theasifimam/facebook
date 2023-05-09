import React from "react";
import "./Chats.css";
import DP from "../dp/DP";

const Chats = () => {
  return (
    <div className="chat card flex-col">
      <div className="chatControl flex">
        <h1>Chats</h1>
        <i className="fa-solid fa-ellipsis"></i>
        <i className="fa-solid fa-maximize"></i>
        <i className="fa-solid fa-video"></i>
        <i className="fa-regular fa-pen-to-square"></i>
      </div>
      <div className="chatSearch flex">
        <input type="search" placeholder="Search Messenger" />
      </div>
      <div className="chatList">
        <ul className="flex-col">
          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Ravi Shekhar</p> <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Good Morning bhai</div>
            </div>
          </li>

          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Salman Khan</p> <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Assalamu Alaikum bhai</div>
            </div>
          </li>

          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Shah Rukh Khan </p>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Ki ki kiran ma ma mai ye</div>
            </div>
          </li>

          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Amir Khan</p> <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Kaisa hai bhai</div>
            </div>
          </li>

          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Amitabh Bachchan</p> <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Namaskar bhai</div>
            </div>
          </li>

          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Inder Shekhar </p>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Good Morning bhai</div>
            </div>
          </li>

          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Faiz Alam</p> <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Good Morning bhai</div>
            </div>
          </li>

          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Faizan Alam</p> <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Assalamu Alaikum bhai</div>
            </div>
          </li>
          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Ravi Shekhar</p> <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Good Morning bhai</div>
            </div>
          </li>

          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Salman Khan</p> <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Assalamu Alaikum bhai</div>
            </div>
          </li>

          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Shah Rukh Khan</p> <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Ki ki kiran ma ma mai ye</div>
            </div>
          </li>

          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Faizan Alam</p> <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Kaisa hai bhai</div>
            </div>
          </li>

          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Amitabh Bachchan </p>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Namaskar bhai</div>
            </div>
          </li>

          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Inder Shekhar</p> <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Good Morning bhai</div>
            </div>
          </li>

          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Faiz Alam</p> <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Good Morning bhai</div>
            </div>
          </li>

          <li>
            <DP />
            <div className="chatInfo flex-col">
              <div className="messengerName flex">
                <p>Faizan Alam </p>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="chatMessage">Assalamu Alaikum bhai</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Chats;
