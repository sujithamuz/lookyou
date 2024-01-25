import React, { useState } from "react";
import google from "../images/google.svg";
import facebook from "../images/facebook.svg";
import "./Login.css";
import logo from "../images/logo.svg";
import firstcaro from "../images/firstcaro.svg";
import secondcaro from "../images/secondcaro.svg";
import thirdcaro from "../images/thirdcaro.svg";
import fourthcaro from "../images/fourthcaro.svg";
import fivethcaro from "../images/fivethcaro.svg";
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
      <div class="row ">
        <div class="col-sm-4" style={{ backgroundColor: "white" }}>
          <div>
            <p
              style={{
                fontSize: 40,
                fontWeight: "700",
                color: "#123457",
                fontFamily: "K2D",
              }}
            >
              looksyou
            </p>
          </div>
          <div style={{ marginTop: "90px" }}>
            <div
              id="carouselExampleInterval"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                  <div className="text-center">
                    <img src={firstcaro} style={{ height: 348, width: 248 }} />
                  </div>
                  <div
                    className="text-center px-5"
                    style={{ fontWeight: 700, fontSize: 18 }}
                  >
                    To know about jobs, business, economies trades and other
                    service globally
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <div className="text-center">
                    <img src={secondcaro} style={{ height: 348, width: 248 }} />
                  </div>
                  <div
                    className="text-center px-5"
                    style={{ fontWeight: 700, fontSize: 18 }}
                  >
                    Find a service provider nearby you professionals,
                    technicians & non - technicians
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <div className="text-center ">
                    <img src={thirdcaro} style={{ height: 348, width: 248 }} />
                  </div>
                  <div
                    className="text-center px-5"
                    style={{ fontWeight: 700, fontSize: 18 }}
                  >
                    Find a service provider nearby you professionals,
                    technicians & non - technicians
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <div className="text-center">
                    <img src={fourthcaro} style={{ height: 348, width: 248 }} />
                  </div>
                  <div
                    className="text-center px-5"
                    style={{ fontWeight: 700, fontSize: 18 }}
                  >
                    Find a service provider nearby you professionals,
                    technicians & non - technicians
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="text-center">
                    <img src={fivethcaro} style={{ height: 348, width: 248 }} />
                  </div>
                  <div
                    className="text-center px-5"
                    style={{ fontWeight: 700, fontSize: 18 }}
                  >
                    Media to share news, announcements thoughts, tales, live
                    videos and all
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
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
                data-bs-target="#carouselExampleInterval"
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

        <div
          class="col-sm-8 container"
          style={{ backgroundColor: "#f9f9f9", height: "100vh" }}
        >
          <div className=" float-end">
            <span>Don’t have an account? &nbsp;</span>
            <span>
              <button
                type="button"
                className="create-button"
                onClick={handleClick}
              >
                create
              </button>
            </span>
          </div>
          <div
            className=" container  card px-5 login-card"
            style={{
              height: 580,
              width: 480,
              top: 100,
              left: 250,
              border: "none",
              borderRadius: 5,
              boxShadow: "0 3px 3px rgb(0 0 0 / 0.1)",
            }}
          >
            <div className="text-center">
              <img src={logo} style={{ height: 77, width: 62 }} />
            </div>

            <h4
              className="cardheader text-center"
              style={{ fontWeight: 600, fontSize: 24, fontFamily: "K2D" }}
            >
              Login in to looksyou
            </h4>
            <p style={{ fontWeight: 500, fontSize: 16 }}>
              To start the finding jobs and get idea’s in
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 19,
                  fontFamily: "K2D",
                  color: "#123457",
                }}
              >
                {" "}
                looksyou{" "}
              </span>
            </p>
            <div className="row flex ">
              <div className="col">
                <button
                  type="button"
                  onClick={() => login()}
                  class=" g-button "
                >
                  <img src={google} />
                  &nbsp;&nbsp;&nbsp;Google
                </button>
              </div>
              <div className="col">
                <button type="button" class="  g-button text-center">
                  <img src={facebook} />
                  &nbsp;&nbsp;&nbsp;Facebook
                </button>
              </div>
            </div>
            <div class="headline">
              <p className="para-line">or continue with</p>
            </div>

            <div>
              <form>
                <div class="mb-3 text-center">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3 text-center">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="forgotpassword-section">
                  <div class="mb-3 form-check ">
                    <div className="row">
                      <div className="col">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          Don't remember me
                        </label>
                      </div>
                      <div className="col text-end">
                        <span
                          style={{
                            color: "#0d6efd",
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                          onClick={() => setModalShow(true)}
                        >
                          Forgot password?
                        </span>
                        <ForgotPassword
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p style={{ fontSize: 12 }}>
                    By clicking Create account or Log in, you agree to the
                    <span>
                      <a href="">Terms of Service,</a>
                    </span>
                    UPDATED
                    <span>
                      <a href="">Privacy Notice</a>
                    </span>
                    , and
                    <span>
                      <a href="">Cookie Notice</a>
                    </span>
                    .
                  </p>
                </div>

                <div class="d-grid gap-2  mx-auto">
                  <button
                    class="btn btn-primary"
                    onClick={handleSubmit}
                    type="button"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
