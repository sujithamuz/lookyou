import React, { useState } from "react";
import "./Login.css";
import logo from "../images/logo.svg";
import "./Homepage.css";
import firstcaro from "../images/firstcaro.svg";
import secondcaro from "../images/secondcaro.svg";
import thirdcaro from "../images/thirdcaro.svg";
import fourthcaro from "../images/fourthcaro.svg";
import fivethcaro from "../images/fivethcaro.svg";
import google from "../images/google.svg";
import google2 from "../images/Google2 logo.svg";
import facebook from "../images/facebook.svg";
import facebook2 from "../images/Facebook2.svg";
import looksyou from "../images/logo looksyou.svg";
import look from "../images/Looksyou.svg";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import ForgotPassword from "./ForgotPassword";
import axios from "axios";
function Login() {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate("");

  const handleClick = () => {
    navigate("/createaccount");
  };
  const handle = () => {
    navigate("/looksyou");
  };
  const handleSubmit = () => {
    navigate("/homepage");
  };
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        console.log(response.access_token);
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
      navigate("/Homepage");
    },
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4">
          <div className="carousel ">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={firstcaro}
                    class="d-block w-100 caro-img"
                    alt="..."
                  />
                  <div
                    className="text-center px-5"
                    style={{ fontWeight: 700, fontSize: 16,fontFamily:'Open Sans' }}
                  >
                    To know about jobs, business, economies trades and other
                    service globally
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src={secondcaro}
                    class="d-block w-100 caro-img"
                    alt="..."
                  />
                  <div
                    className="text-center px-5"
                    style={{ fontWeight: 700, fontSize: 16,fontFamily:'Open Sans' }}
                  >
                    Find a service provider nearby you professionals,
                    technicians & non - technicians
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src={thirdcaro}
                    class="d-block w-100 caro-img"
                    alt="..."
                  />
                  <div
                    className="text-center px-5"
                    style={{ fontWeight: 700, fontSize: 16,fontFamily:'Open Sans' }}
                  >
                    Find a service provider nearby you professionals,
                    technicians & non - technicians
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src={fourthcaro}
                    class="d-block w-100 caro-img"
                    alt="..."
                  />
                  <div
                    className="text-center px-5"
                    style={{ fontWeight: 700, fontSize: 16,fontFamily:'Open Sans' }}
                  >
                    Find a service provider nearby you professionals,
                    technicians & non - technicians
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src={fivethcaro}
                    class="d-block w-100 caro-img"
                    alt="..."
                  />
                  <div
                    className="text-center px-5"
                    style={{ fontWeight: 700, fontSize: 16,fontFamily:'Open Sans' }}
                  >
                    Media to share news, announcements thoughts, tales, live
                    videos and all
                  </div>
                </div>
              </div>
              <div>
                <div class="carousel-indicators ">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators" 
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-8 login-leftside ">
          <div className="text-right mt-3">
            <span className="text-account">
              Don't have an account? &nbsp;
              <button type="sumbit" className="login-button" onClick={handleClick}>
                create
              </button>
            </span>
          </div>

          <div className="login-card mt-5">
            <div className="card card-design justify-content-space-around ">
              <div className="logo text-center">
                <p>
                  <img src={logo} className="mx-auto" />
                </p>
                <p
                  style={{
                    fontFamily: "Alumni Sans",
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#336498",
                    letterSpacing: "0.2rem",
                  }}
                >
                  Welcome to looksyou
                </p>
                <p
                  style={{
                    fontFamily: "Open Sans",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#878787",
                  }}
                >
                  Easy way to connect people globally
                  <p>
                    one to one for jobs, business, social service, e - commerce
                  </p>
                </p>
              </div>
              <div className="d-flex flex-column justify-content-center  align-items-center">
                <button
                  type="button"
                  className="d-flex align-items-center justify-content-evenly google-button"
                  onClick={() => login()}
                >
                  <img src={google} />
                  <span className="text">Login</span>
                  <span className="text">with</span>
                  <img src={google2} />
                </button>
                <button
                  type="button"
                  className="d-flex align-items-center justify-content-evenly google-button"
                >
                  <img src={facebook} />
                  <span className="text">Login</span>
                  <span className="text">with</span>
                  <img src={facebook2} />
                </button>
                <button
                  type="button"
                  className="d-flex align-items-center justify-content-evenly google-button"
                  onClick={handle}
                >
                  <img src={looksyou} />
                  <span className="text">Login</span>
                  <span className="text">with</span>
                  <img src={look} />
                </button>
              </div>
              <div
                  className="text-center "
                  style={{
                    fontSize: 14,
                    padding: 10,
                    fontFamily: "Open Sans",
                    fontWeight: 500,
                  }}
                >
                  <p>
                    Copy By clicking create an account, you read and agree to &nbsp;
                    <a href="" style={{ color: "#4285F4" }}>
                      
                      Privacy policy&nbsp;
                    </a>
                    and&nbsp;
                    <a href="" style={{ color: "#4285F4" }}>
                      Terms of service.
                    </a>
                  </p>
                </div>
              <div
                className="text-center"
                style={{ fontSize: 14, fontWeight: 500 }}
              >
                <p style={{fontFamily:"Open Sans"}}>
                  About? &nbsp;<a href="" style={{fontFamily:"Open Sans",color: "#4285F4"}}>looksyou</a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
