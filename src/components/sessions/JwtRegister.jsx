import { useNavigate } from "react-router-dom";
import { Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillGoogleCircle, AiFillApple, AiFillWindows } from "react-icons/ai";
import "font-awesome/css/font-awesome.min.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./login.css";
import fav from "./ourcolor.png";
import axios from "axios";
import googlelogo from "./googlelogo.svg";
import micro from "./micro.svg";
import apple from "./apple.svg";
import * as Yup from "yup";
import GoogleOauth from "./GoogleOauth";

const initialValues = {
  email: "",
  password: "",
  fullname: "",
  phone: "",
  isGoogleSignUp: false,
};

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Full name is required!"),
  email: Yup.string()
    .email("Invalid Email address")
    .required("Email is required!"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required!"),
  phone: Yup.string().required("Phone number is required"),
});

const JwtRegister = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await register(
        values.fullname,
        values.email,
        values.phone, // ✅ phone comes before password
        values.password // ✅ password comes last
      );

      if (response.status === 201) {
        toast.success("Registration successful!");
        setTimeout(() => {
          navigate("/login"); // Redirect to login page after success
        }, 2000);
      } else {
        toast.error("Registration failed!");
      }
    } catch (error) {
      toast.error("An error occurred during registration.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const redirectToGoogle = () => {
    console.log("Redirecting to Google OAuth...");
    window.location.href = `${process.env.REACT_APP_API_URL}/api/google`;
  };

  useEffect(() => {
    console.log("GoogleOauth useEffect triggered");
    console.log("Full URL:", window.location.href);

    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("accessToken");
    const refreshToken = urlParams.get("refreshToken");

    console.log("Extracted Tokens from URL:", { accessToken, refreshToken });

    if (accessToken && refreshToken) {
      console.log("Tokens found! Storing them in localStorage.");
      localStorage.setItem("jwtToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      console.log("Tokens saved! Navigating to /home...");
      navigate("/home", { replace: true });
    } else {
      console.log("No valid tokens found in URL. Staying on /login.");
    }
  }, [navigate]);

  useEffect(() => {
    console.log("GoogleOauth useEffect triggered");
    console.log("Full URL:", window.location.href);

    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("accessToken");
    const refreshToken = urlParams.get("refreshToken");

    console.log("Extracted Tokens from URL:", { accessToken, refreshToken });

    if (accessToken && refreshToken) {
      console.log("Tokens found! Storing them in localStorage.");
      localStorage.setItem("jwtToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      console.log("Tokens saved! Navigating to /home...");
      navigate("/home", { replace: true });
    } else {
      console.log("No valid tokens found in URL. Staying on /login.");
    }
  }, [navigate]);

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="main-wrapper" style={{ backgroundColor: "white" }}>
        <div className="account-content">
          <div className="login-wrapper bg-img">
            <div className="login-content logos">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="login-userset">
                      <div className="login-userheading">
                        <div
                          className="logo"
                          style={{ margin: "auto", textAlign: "center" }}
                        >
                          <a
                            style={{
                              fontSize: "30px",
                              color: "black",
                              fontWeight: "800",
                              textAlign: "center",
                            }}
                          >
                            Finomic AI
                          </a>
                        </div>

                        <h3 style={{ textAlign: "center", marginTop: "40px" }}>
                          Welcome, lets create your account
                        </h3>
                      </div>
                      <div className="form-login mb-3">
                        <label className="form-label"> Fullname</label>
                        <input
                          type="text"
                          name="fullname"
                          value={values.fullname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control"
                          placeholder="Enter your full name"
                        />
                        {touched.fullname && errors.fullname && (
                          <small className="text-danger">
                            {errors.fullname}
                          </small>
                        )}
                      </div>
                      <div className="form-login mb-3">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control"
                          placeholder="Enter your email"
                        />
                        {touched.email && errors.email && (
                          <small className="text-danger">{errors.email}</small>
                        )}
                      </div>
                      <div className="form-login mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="number"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control"
                          placeholder="Enter your phone number"
                        />
                        {touched.phone && errors.phone && (
                          <small className="text-danger">{errors.phone}</small>
                        )}
                      </div>

                      <div className="form-login mb-3">
                        <label className="form-label">Password</label>
                        <div className="pass-group">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                          />
                          <span
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <AiOutlineEyeInvisible />
                            ) : (
                              <AiOutlineEye />
                            )}
                          </span>
                        </div>
                        {touched.password && errors.password && (
                          <small className="text-danger">
                            {errors.password}
                          </small>
                        )}
                      </div>

                      <div className="form-login" style={{ width: "100%" }}>
                        <button
                          type="submit"
                          className="btn btn-login"
                          style={{ width: "100%" }}
                          disabled={loading}
                        >
                          {loading ? "Signing Up..." : "Sign Up"}
                        </button>
                      </div>
                      <h5
                        style={{
                          textAlign: "center",
                          color: "black",
                          marginBottom: "20px",
                        }}
                      >
                        Or continue with{" "}
                      </h5>
                      <div class="form-login social-login-buttons">
                        <button
                          onClick={redirectToGoogle}
                          class="btn btn-microsoft d-flex align-items-center justify-content-center mb-2"
                          style={{
                            width: "100%",
                            backgroundColor: "#fff",
                            color: "black",
                            border: "1px solid black",
                          }}
                        >
                          <img
                            src={googlelogo}
                            alt=""
                            style={{
                              width: "25px",
                              height: "25px",
                              marginRight: "10px",
                            }}
                          />
                          Continue with Google
                        </button>
                      </div>
                      <div className="text-end mt-3">
                        <a href="/login" className="forgot-link">
                          Already have an account? Login
                        </a>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JwtRegister;
