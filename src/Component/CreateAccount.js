import React from "react";
import firstcaro from "../images/firstcaro.svg";
import secondcaro from "../images/secondcaro.svg";
import thirdcaro from "../images/thirdcaro.svg";
import fourthcaro from "../images/fourthcaro.svg";
import fivethcaro from "../images/fivethcaro.svg";
import { MDBInput ,MDBBtn} from "mdb-react-ui-kit";
import "./Login.css";
import logo from "../images/logo.svg";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate("");
  const handleClick = () => {
    navigate("/looksyou");
  };
  return (
    <>
      <div className="container-fluid">
        <div class="row ">
          <div
            class="col-sm-8"
            style={{ backgroundColor: "#F8FBFF",height:'100vh'}}
          >
            <div>
              <div className="header">
                <h3 className="app-name">looksyou</h3>
              </div>
            </div>
            <div>
              <div className="login-card mt-5" >
                <div className="card card-design justify-content-space-around ">
                  <div className="logo text-center">
                    <p>
                      <img src={logo} className="mx-auto" />
                    </p>
                    <p
                      style={{
                        fontFamily: "Open Sans",
                        fontSize: 28,
                        fontWeight: 700,
                        color: "#336498",
                      }}
                    >
                      Create an account
                    </p>
                  </div>
                  <div className="px-4">
                    <MDBInput
                      className="mb-4"
                      type="name"
                      id="form7Example1"
                      label="Name"
                    />
                    <MDBInput
                      className="mb-4"
                      type="email"
                      id="form7Example1"
                      label="Email address"
                    />
                    <MDBInput
                      className="mb-4"
                      type="Password"
                      id="form7Example1"
                      label="Create Password"
                    />
                    <MDBInput
                      className="mb-4"
                      type="password"
                      id="form7Example2"
                      label=" Confirm Password"
                    />
                    <MDBBtn type='submit' style={{fontSize:14,fontFamily:'Open Sans',fontWeight:500}}  className='mb-4' block>
           create account
            </MDBBtn>

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
                      Copy By clicking create an account, you read and agree to
                      &nbsp;
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
                    <p style={{ fontFamily: "Open Sans" }}>
                      About? &nbsp;
                      <a
                        href=""
                        style={{ fontFamily: "Open Sans", color: "#4285F4" }}
                      >
                        looksyou
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="header">
            <div className="text-right mt-3">
            <span className="text-account">
            Already have an account? &nbsp;
              <button type="sumbit" className="login-button" onClick={handleClick}>
            login
              </button>
            </span>
          </div>
            </div>

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
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
