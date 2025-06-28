import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import googlelogo from "./googlelogo.svg";
const GoogleOauth = () => {
  const navigate = useNavigate();
  const redirectToGoogle = () => {
    console.log("Redirecting to Google OAuth...");
    window.location.href = `${process.env.REACT_APP_API_URL}/api/google`;
  };
  // useEffect(() => {
  //   // Log the URL for debugging
  //   console.log("GoogleOauth useEffect triggered");
  //   console.log("Full URL:", window.location.href); // Log full URL for debugging

  //   // Get URL parameters using URLSearchParams
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const accessToken = urlParams.get("accessToken");
  //   const refreshToken = urlParams.get("refreshToken");

  //   console.log("Extracted Tokens from URL:", { accessToken, refreshToken });

  //   // Ensure the tokens are available
  //   if (accessToken && refreshToken) {
  //     console.log("Tokens found in URL. Storing them in localStorage.");

  //     // Store tokens in localStorage
  //     localStorage.setItem("jwtToken", accessToken);
  //     localStorage.setItem("refreshToken", refreshToken);

  //     // Set axios headers with the access token
  //     axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  //     // Log the saved tokens to confirm
  //     console.log("Tokens saved in localStorage:", {
  //       jwtToken: localStorage.getItem("jwtToken"),
  //       refreshToken: localStorage.getItem("refreshToken"),
  //     });

  //     // Navigate to dashboard after saving tokens

  //     navigate("/vision");
  //   } else {
  //     console.log("No tokens found in URL.");
  //   }
  // }, [navigate]);
  useEffect(() => {
    console.log("GoogleOauth useEffect triggered");
    console.log("Full URL:", window.location.href); // Log full URL for debugging

    // Get URL parameters using URLSearchParams
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("accessToken");
    const refreshToken = urlParams.get("refreshToken");

    console.log("Extracted Tokens from URL:", { accessToken, refreshToken });

    // Ensure the tokens are available
    if (accessToken && refreshToken) {
      console.log("Tokens found in URL. Storing them in localStorage.");

      // Store tokens in localStorage
      localStorage.setItem("jwtToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      // Set axios headers with the access token
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      // Log the saved tokens to confirm
      console.log("Tokens saved in localStorage:", {
        jwtToken: localStorage.getItem("jwtToken"),
        refreshToken: localStorage.getItem("refreshToken"),
      });

      // Navigate to /vision only once after saving tokens
      console.log("Tokens saved! Navigating to /home...");
      navigate("/home", { replace: true });
    } else {
      console.log("No tokens found in URL.");
    }
  }, [navigate]);

  return (
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
      Continue with Microsoft
    </button>
  );
};

export default GoogleOauth;
