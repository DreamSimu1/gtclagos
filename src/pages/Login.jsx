import styled from "styled-components";

import oga from "./oga1.png";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    // Navigate to the admin-dashboard page
    navigate("/admin-dashboard");
  };
  return (
    <>
      <body
        class="account-page"
        style={{ width: "100%", margin: "0", padding: "0" }}
      >
        <div class="main-wrapper">
          <div class="account-content">
            <div class="login-wrapper bg-img">
              <div class="login-content">
                <form>
                  <div class="login-userset">
                    <div class="login-userheading">
                      <h3>Sign In</h3>
                      <h4>
                        Login to your dashboard using your email and password
                      </h4>
                    </div>
                    <div class="form-login mb-3">
                      <label class="form-label">Email Address</label>
                      <div class="form-addons">
                        <input type="text" class="form- control" />
                        <img
                          src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/mail.svg"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div class="form-login mb-3">
                      <label class="form-label">Password</label>
                      <div class="pass-group">
                        <input
                          type="password"
                          class="pass-input form-control"
                        />
                        <span class="fas toggle-password fa-eye-slash"></span>
                      </div>
                    </div>
                    <div class="form-login authentication-check">
                      <div class="row">
                        <div class="col-12 d-flex align-items-center justify-content-between">
                          <div class="custom-control custom-checkbox">
                            <label class="checkboxs ps-4 mb-0 pb-0 line-height-1">
                              <input type="checkbox" class="form-control" />
                              <span class="checkmarks"></span>Remember me
                            </label>
                          </div>
                          <div class="text-end">
                            <a
                              class="forgot-link"
                              href="https://dreamspos.dreamstechnologies.com/html/template/forgot-password.html"
                            >
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-login" style={{ width: "100%" }}>
                      <button
                        onClick={handleSignIn}
                        type="button"
                        class="btn btn-login"
                        style={{ width: "100%" }}
                      >
                        Sign In
                      </button>
                    </div>
                    {/*} <div class="signinform">
                      <h4>
                        New on our platform?
                        <a
                          href="https://dreamspos.dreamstechnologies.com/html/template/register.html"
                          class="hover-a"
                        >
                          {" "}
                          Create an account
                        </a>
                      </h4>
                    </div>*/}
                    {/*}   <div class="form-setlogin or-text">
                      <h4>OR</h4>
                    </div>
                    <div class="form-sociallink">
                      <ul class="d-flex">
                        <li>
                          <a href="javascript:void(0);" class="facebook-logo">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/facebook-logo.svg"
                              alt="Facebook"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/google.png"
                              alt="Google"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="apple-logo">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/apple-logo.svg"
                              alt="Apple"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
                        <p>
                          Copyright &copy; 2023 DreamsPOS. All rights reserved
                        </p>
                      </div>
                    </div>*/}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Login;
