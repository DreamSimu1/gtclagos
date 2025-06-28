import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TokenHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("TokenHandler useEffect triggered");
    console.log("Full URL:", window.location.href);

    // Get URL parameters using URLSearchParams
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("accessToken");
    const refreshToken = urlParams.get("refreshToken");

    console.log("Extracted Tokens from URL:", { accessToken, refreshToken });

    if (accessToken && refreshToken) {
      console.log("Tokens found in URL. Storing them in localStorage.");

      // Store tokens in localStorage
      localStorage.setItem("jwtToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      // Set axios headers with the access token
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      // Navigate to /vision without tokens in URL
      console.log("Tokens saved! Navigating to clean /home...");
      navigate("/home", { replace: true });
    } else {
      console.log("No tokens found in URL.");
    }
  }, [navigate]);

  return null; // This component does not render anything
};

export default TokenHandler;
