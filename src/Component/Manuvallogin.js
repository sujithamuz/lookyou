import React, { useState } from "react";
import "./Manuvallogin.css";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import firstcaro from "../images/firstcaro.svg";
import secondcaro from "../images/secondcaro.svg";
import thirdcaro from "../images/thirdcaro.svg";
import fourthcaro from "../images/fourthcaro.svg";
import fivethcaro from "../images/fivethcaro.svg";
import logo from "../images/logo.svg";

function Manuvallogin() {
  const [centredModal, setCentredModal] = useState(false);
  const toggleOpen = () => setCentredModal(!centredModal);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <div className="header">
              <h3 className="app-name">looksyou</h3>
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
                  <div class="carousel-indicators">
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
          <div className="col-sm-8" style={{ backgroundColor: "#F8FBFF",height:'100vh' }}>
            {/* <div className="mt-3 text-right">
              <span className="text-account">
                Don't have an account? &nbsp;
                <button type="sumbit" className="login-button">
                  create
                </button>
              </span>
            </div> */}
            <div className="manuval-logincard mt-8">
              <div className="card-design  ">
                <div className="logo-manuval">
                  <img src={logo} className="mx-auto" />
                </div>
                <div>
                  <p
                    className="text-center"
                    style={{
                      fontFamily: "Open Sans",
                      fontSize: 24,
                      fontWeight: 600,
                      color: "#336498",
                    }}
                  >
                    Already you have an account?
                  </p>
                  <p
                    className="text-center"
                    style={{
                      fontFamily: "Open Sans",
                      fontSize: 24,
                      fontWeight: 600,
                      color: "#336498",
                    }}
                  >
                    Login
                  </p>
                </div>
                <form className="mx-10">
                  <MDBInput
                    className="mb-4"
                    type="email"
                    id="form2Example1"
                    label="Email address"
                  />
                  <MDBInput
                    className="mb-4"
                    type="password"
                    id="form2Example2"
                    label="Password"
                  />

                  <MDBRow className="mb-4">
                    <MDBCol
                      className="d-flex justify-content-center"
                      style={{
                        fontFamily: "Open Sans",
                        fontSize: "16px",
                        fontWeight: 500,
                      }}
                    >
                      <MDBCheckbox
                        id="form2Example3"
                        label="Remember me"
                        defaultChecked
                      />
                    </MDBCol>
                    <MDBCol>
                      <a
                        style={{
                          fontFamily: "Open Sans",
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#4285F4",
                        }}
                        onClick={toggleOpen}
                      >
                        Forgot password?
                      </a>
                      <MDBModal
                        tabIndex="-1"
                        open={centredModal}
                        setOpen={setCentredModal}
                      >
                        <MDBModalDialog centered>
                          <MDBModalContent>
                            <img
                              src={logo}
                              className="mx-auto"
                              style={{ padding: 10 }}
                            />
                            <p
                              className="text-center"
                              style={{
                                fontFamily: "Open Sans",
                                fontSize: 24,
                                fontWeight: 600,
                                color: "#336498",
                              }}
                            >
                              Forgot Password
                            </p>
                            <MDBModalBody className="modal-body  ">
                              <div style={{ padding: 20 }}>
                                <p
                                  style={{
                                    fontFamily: "Open Sans",
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    color: "#000",
                                  }}
                                >
                                  What’s your e-mail address?
                                </p>
                                <MDBInput
                                  label="Email"
                                  id="typeEmail"
                                  type="email"
                                />
                              </div>
                              <div>
                                <p
                                  className="text-center"
                                  style={{
                                    fontFamily: "Open Sans",
                                    fontSize: "17px",
                                    fontWeight: 400,
                                    color: "#898989",
                                    padding: 15,
                                  }}
                                >
                                  We will send link for password recovery to
                                  your register e-mail address
                                </p>
                              </div>
                            </MDBModalBody>
                            <div   className="mx-auto mb-5" >
                              <MDBBtn
                               
            style={{color:'#ffff',fontFamily:'Open Sans',fontWeight:500}}
                                type="button"
                                onClick={toggleOpen}
                              >
                                Recovery Password
                              </MDBBtn>
                            </div>
                          </MDBModalContent>
                        </MDBModalDialog>
                      </MDBModal>
                    </MDBCol>
                  </MDBRow>

                  <MDBBtn
                    type="submit"
                    className="mb-4"
                    block
                    style={{
                      fontFamily: "Open Sans",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    login
                  </MDBBtn>
                </form>
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
                  style={{
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: 500,
                  }}
                >

                  <p>
                    About? &nbsp;
                    <a href="" style={{ color: "#4285F4" }}>
                      looksyou
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manuvallogin;
