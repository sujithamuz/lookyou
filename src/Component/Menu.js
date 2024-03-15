import React from "react";
import profile from "../images/FirstPage/profile.jpg";
import setting from "../images/FirstPage/setting.svg";
import electronic from "../images/FirstPage/electronic.svg";
import otp from "../images/FirstPage/otp.svg";
import rating from "../images/FirstPage/rating.svg";
import profession from "../images/FirstPage/Vector.svg";
import roundowl from "../images/FirstPage/Vector2.svg";
import wallet from "../images/FirstPage/Vector3.svg";
import pigeon from "../images/FirstPage/Vector4.svg";
import bird from "../images/FirstPage/Vector5.svg";
import angry from "../images/FirstPage/Vector6.svg";
import normal from "../images/FirstPage/Vector8.svg";
import onlyface from "../images/FirstPage/Vector9.svg";
import social from "../images/FirstPage/social.svg";
import access from "../images/FirstPage/access.svg";
import orange from "../images/FirstPage/orange-circle.png";
import halffilled from "../images/FirstPage/Vector-5.svg";
import badge from "../images/FirstPage/Group 14151.svg";
import looksnavigator from "../images/FirstPage/looks navigator.svg";
import star from "../images/FirstPage/Vector-1.svg";
import { SocialDistance, Star } from "@mui/icons-material";
import hand from "../images/FirstPage/Group.svg";
import support from "../images/FirstPage/Group 1230.svg";
import user from "../images/FirstPage/Vector-1 (1).svg";
import logout from "../images/FirstPage/logout.svg";
import privacy from "../images/FirstPage/privacy.svg";
import verify from "../images/FirstPage/get verification.svg";
import terms from "../images/FirstPage/teams of services.svg";
import "./Menu.css";

function Menu() {
  return (
    <div>
      {/* <div className="button" onClick={handleClick}>
        <button>
          <div className="bar1 bar"></div>
          <div className="bar2 bar"></div>
          <div className="bar3 bar"></div>
        </button>
      </div> */}
      <div className="show">
        <header>
          <div>Menu</div>
          <div>
            <button className="menu-button">X</button>
          </div>
        </header>
        <div className="profile">
          <div className="circle">
            <div className="bgbg">
              <div className="bg">
                <div className="profile-left">
                  <img src={profile} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="line">
            <div className="profile-right">
              <div className="text">
                <p className="roboto">J a y a r a m a &nbsp; k r i s h n a n</p>
              </div>
              <div className="img">
                <img src={setting} alt="" />
              </div>
            </div>
            <div className="line">
              <p className="roboto-second">
                {" "}
                <div className="profile-left-div">
                  <span>
                    <img src={orange} alt="" />
                  </span>
                </div>{" "}
                <span className="left-text">
                  &nbsp; I'm a cab driver available for service
                </span>
              </p>
            </div>
            <div className="flex">
              <div>
                <p className="brown">🏳️ Kolathur, Chennai, India</p>
              </div>
              <div className="blue">
                <p>
                  <a href="">Edit profile</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="summary">
          <div>
            <div className="summary-main">
              <p>
                <span>
                  <img src={electronic} alt="" />
                </span>
                &nbsp; Electricians
              </p>
              <p>
                {" "}
                <img className="prof" src={profession} alt="" />
              </p>
              <p>10 Years</p>
            </div>
            <div className="trust">
              <p className="pilot">Trust pilot and behaviour</p>
            </div>
            <div className="summary-footer">
              <div>
                <p>
                  <span>
                    <img src={rating} alt="" />
                  </span>{" "}
                  &nbsp;
                </p>
              </div>
              <p>
                &nbsp;&nbsp;4.7{" "}
                <span>
                  <img src={star} alt="" />
                </span>
                <span>
                  <img src={star} alt="" />
                </span>
                <span>
                  <img src={star} alt="" />
                </span>
                <span>
                  <img src={star} alt="" />
                </span>
                <span>
                  <img src={halffilled} alt="" />
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="summary-review">77 reviews</span>
              </p>
            </div>
          </div>
          <div className="summary-right">
            <div className="summ">
              <span>
                <img className="summary-right-main" src={otp} alt="" />
              </span>
              <span>
                <img src={badge} alt="" className="badge" />
              </span>
            </div>
            <p>Post reviews</p>
          </div>
        </div>
        <div className="containers">
          <div className="container">
            <div className="text">
              <div className="fixed">
                <p>Update skills</p>
              </div>
            </div>
            <div className="img">
              <img src={profession} alt="" />
            </div>
            <div className="container-text">
              <p>My professions</p>
            </div>
          </div>
          <div className="container">
            <div className="text">
              <div className="fixed">
                <p>Dashboard inbox</p>
              </div>
            </div>
            <div className="img">
              <span>
                <img src={roundowl} alt="" className="rel" />
              </span>
              <span>
                <img src={badge} alt="" className="badge" />
              </span>
            </div>
            <div className="container-text">
              <p>My insight</p>
            </div>
          </div>
          <div className="container">
            <div className="text">
              <div className="fixed">
                <p>Account & invoice</p>
              </div>
            </div>
            <div className="img">
              <span>
                <img src={wallet} alt="" className="rel" />
              </span>
              <span>
                <img src={badge} alt="" className="badge" />
              </span>
            </div>
            <div className="container-text">
              <p>My wallet</p>
            </div>
          </div>
          <div className="container">
            <div className="text">
              <div className="fixed">
                <p>Post free</p>
              </div>
            </div>
            <div className="img">
              <span>
                <img src={pigeon} alt="" className="rel" />
              </span>
              <span>
                <img src={badge} alt="" className="badge" />
              </span>
            </div>
            <div className="container-text">
              <p>Looks ads</p>
            </div>
          </div>
          <div className="container">
            <div className="text">
              <div className="fixed">
                <p>Chat with AI 'Neo'</p>
              </div>
            </div>
            <div className="img">
              <img src={bird} alt="" />
            </div>
            <div className="container-text">
              <p>OpenChat BI</p>
            </div>
          </div>
          <div className="container">
            <div className="text">
              <div className="fixed">
                <p className="trades">Trades & promotions</p>
              </div>
            </div>
            <div className="img">
              <span>
                <img src={angry} alt="" className="rel" />
              </span>
              <span>
                <img src={badge} alt="" className="badge" />
              </span>
            </div>
            <div className="container-text">
              <p>My business</p>
            </div>
          </div>
          <div className="container">
            <div className="text">
              <div className="fixed">
                <p>Hire professionals</p>
              </div>
            </div>
            <div className="img">
              <span>
                <img src={looksnavigator} alt="" className="rel" />
              </span>
              <span>
                <img src={badge} alt="" className="badge" />
              </span>
            </div>
            <div className="container-text">
              <p>Looks navigator</p>
            </div>
          </div>
          <div className="container">
            <div className="text">
              <div className="fixed">
                <p>Register & earn</p>
              </div>
            </div>
            <div className="img">
              <span>
                <img src={normal} alt="" className="rel" />
              </span>
              <span>
                <img src={badge} alt="" className="badge" />
              </span>
            </div>
            <div className="container-text">
              <p>Looks admin</p>
            </div>
          </div>
          <div className="container">
            <div className="text">
              <div className="fixed">
                <p>Cyber security</p>
              </div>
            </div>
            <div className="img">
              <img src={onlyface} alt="" />
            </div>
            <div className="container-text">
              <p>Looks control</p>
            </div>
          </div>
        </div>
        <div className="social">
          <div>
            <p>
              <img src={social} alt="" />
            </p>
          </div>
          <div className="social-text">
            <p>
              Serve our soceity &nbsp;
              <span>
                <a href="#">register now</a>
              </span>
            </p>
          </div>
        </div>
        <div className="social">
          <div>
            <p>
              <img src={access} alt="" />
            </p>
          </div>
          <div className="social-text ">
            <p>
              Ads free access &nbsp;
              <span>
                <a href="#">Pay now</a>
              </span>
            </p>
          </div>
        </div>
        <div className="social">
          <div>
            <p>
              <img src={verify} alt="" />
            </p>
          </div>
          <div className="social-text ">
            <p>
              <span>
                <a href="#">Get verificiation</a>
              </span>
              &nbsp; with looksyou
            </p>
          </div>
        </div>
        <footer>
          <div>
            <h2>Hire professionals</h2>
            <p>Login in Looks navigator and search profiles</p>
          </div>
          <div className="bottom">
            <h2>Hire people for home service</h2>
            <p>Security, ouse keeping, care taker, cook and etc..</p>
          </div>
          <div className="bottom">
            <h2>Hire people for business</h2>
            <p>Shops, schools, colleges, hospital, hotel and etc...</p>
          </div>
          <div className="bottom">
            <h2>Register your service</h2>
            <p>Are you running any business register and promote</p>
          </div>
          <div className="bottom">
            <h2>Apply now</h2>
            <p>
              Jobs, internships, admissions, business, franchises investments,
              loans, matrimonial and etc...
            </p>
          </div>
          <div className="bottom">
            <h2>Create pages in trades</h2>
            <p>Public and private business pages</p>
          </div>
          <div className="bottom">
            <h2>Create groups in OpenChat BI</h2>
            <p>Public and private business groups</p>
          </div>
          <div className="bottom">
            <h2>Create channels in Media</h2>
            <p>Post videos and live videos for promote & earn</p>
          </div>
          <div className="bottom">
            <h2>Sell in Looksyou</h2>
            <p>Create your store and sell new and used items</p>
          </div>
          <div className="bottom">
            <h2>Advertise in Looksyou</h2>
            <p>Post your sponsor ads to promote globally</p>
          </div>
        </footer>
        <div className="contact">
          <p>
            <span>
              <img src={hand} alt="" />
            </span>{" "}
            &nbsp;&nbsp;&nbsp; Communication with us
          </p>
          <p>
            <span>
              <img src={support} alt="" />
            </span>{" "}
            &nbsp;&nbsp;&nbsp; Help & support
          </p>
          <p>
            <span>
              <img src={setting} alt="" />
            </span>{" "}
            &nbsp;&nbsp;&nbsp; Settings
          </p>
          <p>
            <span>
              <img src={user} alt="" />
            </span>{" "}
            &nbsp;&nbsp;&nbsp; User manual
          </p>
          <p>
            <span>
              <img src={privacy} alt="" />
            </span>{" "}
            &nbsp;&nbsp;&nbsp; Privacy policy
          </p>
          <p>
            <span>
              <img src={terms} alt="" />
            </span>{" "}
            &nbsp;&nbsp;&nbsp; Terms of Services
          </p>
          <p className="logout">
            {" "}
            Logout
            <span>
              <img src={logout} alt="" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
