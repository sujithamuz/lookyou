import React from "react";
import Modal from "react-bootstrap/Modal";

const ForgotPassword = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="xxl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4 className="text-center">Forgot Password</h4>
          <p>
            No worries! Let us know your email and we'll send you recovery
            instructions.
          </p>
          <div>
            <form>
              <div class="mb-3 text-center">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter your email"
                  id="exampleInputPassword1"
                />
              </div>

              <div class="d-grid gap-2 col-6 mx-auto ">
                <button class="btn btn-primary" type="button">
                  Recover my password
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ForgotPassword;
