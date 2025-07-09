import React, { createContext, useEffect, useState, useReducer } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isInitialised: false,
  user: null,
};

const apiUrl = process.env.REACT_APP_API_URL;

// Utility: Validate if token is still valid
const isValidToken = (token) => {
  if (!token) return false;
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

// Set axios Authorization header
export const setSession = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

// Refresh token logic
const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) return null;

  try {
    const response = await axios.post(`${apiUrl}/api/auth/refresh-token`, {
      refreshToken,
    });

    const { accessToken, refreshToken: newRefreshToken } = response.data;
    localStorage.setItem("jwtToken", accessToken);
    localStorage.setItem("refreshToken", newRefreshToken);
    setSession(accessToken);

    return accessToken;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    setSession(null);
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("refreshToken");
    return null;
  }
};

// Axios interceptor for 401
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await refreshAccessToken();
      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axios(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        isInitialised: true,
        user: action.payload.user,
      };
    case "LOGIN":
    case "REGISTER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthContext = createContext({
  ...initialState,
  method: "JWT",
  login: () => Promise.resolve(),
  logout: () => {},
  register: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  let logoutTimer;

  // Auto logout on inactivity
  const resetTimer = () => {
    clearTimeout(logoutTimer);
    logoutTimer = setTimeout(() => {
      console.log("Logged out due to inactivity.");
      logout();
    }, 60 * 60 * 1000); // 1 hour
  };

  useEffect(() => {
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);
    resetTimer();

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
      clearTimeout(logoutTimer);
    };
  }, []);

  // Initialize auth state on app load
  useEffect(() => {
    const initializeAuth = async () => {
      const jwtToken = localStorage.getItem("jwtToken");

      if (!jwtToken || !isValidToken(jwtToken)) {
        dispatch({
          type: "INIT",
          payload: { isAuthenticated: false, user: null },
        });
        return;
      }

      try {
        setSession(jwtToken);
        const decoded = jwtDecode(jwtToken);

        // Optional: fetch user profile from backend
        try {
          const response = await axios.get(`${apiUrl}/api/auth/profile`);
          const user = response.data.data; // ✅ Fix here
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({ type: "INIT", payload: { isAuthenticated: true, user } });
        } catch (err) {
          console.warn("Failed to fetch profile. Using decoded token.");
          dispatch({
            type: "INIT",
            payload: { isAuthenticated: true, user: decoded },
          });
        }
      } catch (err) {
        console.error("Auth initialization failed:", err);
        dispatch({
          type: "INIT",
          payload: { isAuthenticated: false, user: null },
        });
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (identifier, password) => {
    try {
      const response = await axios.post(`${apiUrl}/api/auth/login`, {
        identifier,
        password,
      });

      if (response.status === 200) {
        const { accessToken, refreshToken, user } = response.data.data;

        localStorage.setItem("jwtToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(user));
        setSession(accessToken);

        dispatch({
          type: "LOGIN",
          payload: { user },
        });

        return response;
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // Register function
  const register = async (fullname, email, phone, password) => {
    try {
      const response = await axios.post(`${apiUrl}/api/auth/register`, {
        fullname,
        email,
        phone,
        password,
      });

      if (response.status === 201) {
        const { token, user, refreshToken } = response.data;

        localStorage.setItem("jwtToken", token);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(user));
        setSession(token);

        dispatch({ type: "REGISTER", payload: { user } });
        return response;
      }
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    setSession(null);
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "JWT",
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
