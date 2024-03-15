import React from "react";
import home from "../images/navbar/home.svg";
import trades from "../images/navbar/trades.svg";
import partner from "../images/navbar/partners.svg";
import media from "../images/navbar/media.svg";
import toknow from "../images/navbar/to know.svg";
import message from "../images/navbar/message icon.svg";
import meeting from "../images/navbar/meeting.svg";
import otp from "../images/navbar/otp.svg";
import emoji from "../images/navbar/emoji.svg";
import post from "../images/navbar/post.svg";
import notification from "../images/navbar/notification.svg";
import "./Navbar.css";
import Homepage from "./Homepage";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate("");
  const imageClick = () => {
    navigate("./menu");
  };
  return (
    <>
      <section>
        <div className="nav-list">
          <nav className="d-flex justify-content-between">
            <div className="p-3">
              <h2 className="app-header">looksyou</h2>
            </div>
            <div className="d-flex">
              <ul>
                <li>
                  <a href="">
                    <img src={home} />
                  </a>
                  <span className="nav-text">home</span>
                </li>
                <li>
                  <a href="">
                    <img src={trades} />
                  </a>
                  <span className="nav-text">Trades</span>
                </li>
                <li>
                  <a href="">
                    <img src={partner} />
                  </a>
                  <span className="nav-text">partner</span>
                </li>
                <li>
                  <a href="">
                    <img src={media} />
                  </a>
                  <span className="nav-text">Media</span>
                </li>
                <li>
                  <a href="">
                    <img src={toknow} />
                  </a>
                  <span className="nav-text">To Know</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="">
                    <img src={message} />
                  </a>
                  <span className="nav-text">Message</span>
                </li>
                <li>
                  <a href="">
                    <img src={meeting} />
                  </a>
                  <span className="nav-text">Meeting</span>
                </li>
                <li>
                  <a href="">
                    <img src={otp} />
                  </a>
                  <span className="nav-text">otp and password</span>
                </li>

                <li>
                  <a href="">
                    <img src={post} />
                  </a>
                  <span className="nav-text">post</span>
                </li>
                <li>
                  <a href="">
                    <img src={notification} />
                  </a>
                  <span className="nav-text">notification</span>
                </li>
                <li>
                  <a href="">
                    <img src={emoji} onClick={() => imageClick()} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <section></section>
    </>
  );
}

export default Navbar;
