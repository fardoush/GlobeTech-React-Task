import React from "react";
import "./Login.css";
import loginIcon from '../../images/login-icon.png';

export const Login = () => {
  return (
    <>
      <div className="d-flex login-wrapper">
        <div className="left-side">
      <div className="left-side-content">
       <h1 className="text-center">
            Globetech <br /> Company Limited
          </h1>
          <p>Make yourself digitalized & more effecient</p>
      </div>
      
      <div className="login-icon ">
       <a href="/" className="">
        <img src={loginIcon} alt="" />
       </a>
      </div>
        </div>

        <div className="mainContainer d-flex justify-content-center align-items-center">
          <div className="login-wrapper">
            <form>
              <h2>Welcome</h2>
              <p>Sign in to your account</p>
              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  name="txtUserName"
                  placeholder="Email"
                />
              </div>
              <div class="input-group">
                <input
                  type="password"
                  id="txtPassword"
                  class="form-control"
                  name="txtPassword"
                  placeholder="Password"
                />
                <button type="button" id="btnToggle" class="toggle">
                  <i id="eyeIcon" class="fa fa-eye"></i>
                </button>
              </div>

              <div className="submit-btn-holder d-flex justify-content-center align-items-center">
                <button class="btn btn-lg submit-btn btn-block w-100">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
