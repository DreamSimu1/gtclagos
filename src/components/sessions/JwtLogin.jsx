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
import axios from "axios";
import googlelogo from "./googlelogo.svg";
import last from "./lastveblogo.png";
import lagos from "./lagoslogo.png";
import * as Yup from "yup";
import GoogleOauth from "./GoogleOauth";

const initialValues = {
  identifier: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  identifier: Yup.string().required("Email or username is required!"), // ✅ corrected
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required!"),
});

const JwtLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const [accountSettings, setAccountSettings] = useState({
    name: "",
    motto: "",
    address: "",
    phone: "",
    phonetwo: "",
    email: "",
    sessionStart: "",
    sessionEnd: "",
    schoolLogo: "",
  });
  const apiUrl = process.env.REACT_APP_API_URL;
  // const handleFormSubmit = async (values) => {
  //   console.log("handleFormSubmit is triggered");

  //   try {
  //     // Assuming your login function returns a JWT token upon successful login
  //     const response = await login(values.identifier, values.password);

  //     if (response.status === 200) {
  //       // Successful login
  //       // Redirect the user after successful login
  //       checkUserRoleAndRedirect();
  //     } else {
  //       // Handle other status codes (e.g., 401 for unauthorized)
  //       console.error("Login failed with status:", response.status);
  //       toast.error("Invalid credentials"); // Display an error notification
  //     }
  //   } catch (error) {
  //     console.error("Incorrect Username/Email or Password:", error);
  //     toast.error("Incorrect Username/Email or Password");
  //   }
  // };
  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await login(values.identifier, values.password);

      if (response.status === 200) {
        // ✅ Tokens are stored by the login() function
        checkUserRoleAndRedirect();
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Incorrect Username/Email or Password");
    } finally {
      setLoading(false);
    }
  };

  const getUserRoleFromToken = () => {
    // Implement this function to extract the user's role from the JWT token.
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      const decodedToken = jwtDecode(jwtToken);
      return decodedToken.role;
    }
    return "guest"; // Return a default role for unauthenticated users
  };

  const checkUserRoleAndRedirect = () => {
    const userRole = getUserRoleFromToken();

    if (userRole === "principal") {
      navigate("/principal/dashboard/");
    } else if (userRole === "vice_principal") {
      navigate("/vice/dashboard");
    } else if (userRole === "head_of_department") {
      navigate("/hod/dashboard");
    } else if (userRole === "teacher") {
      navigate("/teacher/dashboard");
    } else if (userRole === "student") {
      navigate("/student/dashboard");
    } else {
      navigate("/login"); // Redirect unauthenticated users to sign-in page
    }
  };

  useEffect(() => {
    const fetchAccountSettings = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/account-setting`);
        const { data } = response.data;

        // Set the retrieved school settings to the state
        setAccountSettings(data);
      } catch (error) {
        console.error("Error fetching school settings:", error);
      }
    };

    fetchAccountSettings();
  }, [apiUrl]);

  return (
    <>
      <ToastContainer position="top-center" />
      <body class="account-page">
        <div class="main-wrapper" style={{ backgroundColor: "white" }}>
          <div class="account-content">
            <div class="login-wrapper bg-img">
              <div class="login-content logos">
                <Formik
                  onSubmit={handleFormSubmit}
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div class="login-userset"   style={{
    paddingBottom: "40px", // Add extra bottom padding
    minHeight: "100%", // Ensure content fits
  
  }}
>
                        <div className="login-userheading">
                          <div
                            className="logo"
                            style={{
                              margin: "auto",
                              textAlign: "center",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "20px", // space between logos
                              flexWrap: "wrap",
                            }}
                          >
                            <img
                              src={last}
                              alt="Logo 1"
                              style={{
                                height: "60px",
                                width: "auto",
                                objectFit: "contain",
                              }}
                            />
                            <img
                              src={lagos}
                              alt="Logo 2"
                              style={{
                                height: "60px",
                                width: "auto",
                                objectFit: "contain",
                              }}
                            />
                          </div>

                          <a
                            style={{
                              fontSize: "26px",
                              color: "black",
                              fontWeight: "800",
                              textAlign: "center",
                              fontFamily: '"Space Grotesk", sans-serif',
                              display: "block",
                              marginTop: "10px",
                            }}
                          >
                            Government Technical College Agidingbi
                          </a>

                          <h3
                            style={{
                              textAlign: "center",
                              marginTop: "40px",
                              fontFamily: '"Space Grotesk", sans-serif',
                            }}
                          >
                            Welcome back, Sign in here
                          </h3>
                        </div>
                        <div class="form-login mb-3">
                          <label class="form-label">Email/Username</label>
                          <div class="form-addons">
                            <input
                              type="text"
                              value={values.identifier}
                              name="identifier"
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Enter email, username, or fullname"
                            />
                          </div>
                        </div>
                        <div class="form-login mb-3">
                          <label class="form-label">Password</label>
                          <div className="pass-group">
                            <input
                              value={values.password}
                              onChange={handleChange}
                              name="password"
                              type={showPassword ? "text" : "password"}
                              className="pass-input form-control"
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
                        </div>

                        <div
                          style={{
                            marginBottom: "20px",
                          }}
                        >
                          <div>
                            <a class="forgot-link" href="/forgot-password">
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <div class="form-login" style={{ width: "100%" }}>
                          <button
                            loading={loading}
                            type="submit"
                            class="btn btn-login"
                            style={{ width: "100%" }}
                          >
                            Log in
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
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: "1rem",
                          }}
                        >
                          <div class="text-end">
                            <a class="forgot-link" href="/forgot-password">
                              Dont have an account?
                            </a>
                          </div>
                          <div class="text-end">
                            <a class="forgot-link" href="/register">
                              Create an account
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default JwtLogin;
