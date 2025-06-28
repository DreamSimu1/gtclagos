// import React, { createContext, useEffect, useState, useReducer } from "react";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Modal, Button } from "react-bootstrap";

// const initialState = {
//   isAuthenticated: false,
//   isInitialised: false,
//   user: null,
//   loading: true,
// };

// const apiUrl = process.env.REACT_APP_API_URL;

// // Utility function to check if the token is still valid
// const isValidToken = (jwtToken) => {
//   if (!jwtToken) {
//     return false;
//   }
//   const decodedToken = jwtDecode(jwtToken);

//   const currentTime = Date.now() / 1000;
//   return decodedToken.exp > currentTime;
// };

// export const setSession = (accessToken) => {
//   if (accessToken) {
//     axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//   } else {
//     delete axios.defaults.headers.common.Authorization;
//   }
// };

// const refreshAccessToken = async () => {
//   const refreshToken = localStorage.getItem("refreshToken");

//   if (!refreshToken) {
//     return null;
//   }

//   try {
//     const response = await axios.post(`${apiUrl}/api/auth/refresh-token`, {
//       refreshToken,
//     });
//     const { accessToken, refreshToken: newRefreshToken } = response.data;

//     await setSession(accessToken, newRefreshToken);
//     return accessToken;
//   } catch (error) {
//     console.error("Refresh token failed:", error);
//     setSession(null, null);
//     return null;
//   }
// };

// axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const newAccessToken = await refreshAccessToken();

//       if (newAccessToken) {
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return axios(originalRequest);
//       }
//     }
//     return Promise.reject(error);
//   }
// );
// // Reducer function to manage state changes
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INIT":
//       return {
//         ...state,
//         isAuthenticated: action.payload.isAuthenticated,
//         isInitialised: true,
//         user: action.payload.user,
//       };
//     case "LOGIN":
//     case "REGISTER":
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload.user,
//       };
//     case "LOGOUT":
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: null,
//       };
//     default:
//       return state;
//   }
// };

// const AuthContext = createContext({
//   ...initialState,
//   method: "JWT",
//   login: () => Promise.resolve(),
//   logout: () => {},
//   register: () => Promise.resolve(),
// });

// export const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [loading, setLoading] = useState(true); // Add loading state
//   const [showModal, setShowModal] = useState(false); // Modal state
//   const navigate = useNavigate();
//   let logoutTimer;

//   // Function to reset inactivity timer
//   const resetTimer = () => {
//     clearTimeout(logoutTimer);
//     logoutTimer = setTimeout(() => {
//       console.log("User inactive for 1 hour. Logging out...");
//       logout();
//     }, 60 * 60 * 1000); // 1 hour
//   };

//   useEffect(() => {
//     // Listen for user activity and reset the timer
//     window.addEventListener("mousemove", resetTimer);
//     window.addEventListener("keydown", resetTimer);
//     window.addEventListener("click", resetTimer);

//     // Start the timer initially
//     resetTimer();

//     return () => {
//       window.removeEventListener("mousemove", resetTimer);
//       window.removeEventListener("keydown", resetTimer);
//       window.removeEventListener("click", resetTimer);
//       clearTimeout(logoutTimer);
//     };
//   }, []);

//   useEffect(() => {
//     const initializeAuth = async () => {
//       const accessToken = localStorage.getItem("jwtToken");
//       if (!accessToken) {
//         dispatch({
//           type: "INIT",
//           payload: { isAuthenticated: false, user: null },
//         });
//         return;
//       }

//       try {
//         const decoded = jwtDecode(accessToken);

//         // Check if token expired
//         if (decoded.exp * 1000 < Date.now()) {
//           console.log("Token expired. Logging out...");
//           dispatch({ type: "LOGOUT" });
//           return;
//         }

//         // Set auth header
//         axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

//         dispatch({
//           type: "INIT",
//           payload: {
//             isAuthenticated: true,
//             user: decoded, // use full decoded token here
//           },
//         });
//       } catch (err) {
//         console.error("Token validation failed:", err);
//         dispatch({
//           type: "INIT",
//           payload: { isAuthenticated: false, user: null },
//         });
//       }
//     };

//     initializeAuth();
//   }, []);

//   useEffect(() => {
//     const initAuth = async () => {
//       const jwtToken = localStorage.getItem("jwtToken");
//       console.log("Retrieved JWT Token from localStorage:", jwtToken); // Debugging

//       if (jwtToken) {
//         const decoded = jwtDecode(jwtToken);
//         console.log("Decoded Token:", decoded);

//         // Check if token is expired
//         if (decoded.exp * 1000 < Date.now()) {
//           console.log("Token expired. Logging out user.");
//           // setShowModal(true); // Show modal
//           dispatch({ type: "LOGOUT" }); // Log out user
//           setLoading(false);
//           return;
//         }

//         if (isValidToken(jwtToken)) {
//           console.log("Token is valid. Fetching user profile...");
//           setSession(jwtToken, localStorage.getItem("refreshToken"));

//           try {
//             console.log("Fetching user profile...");

//             const response = await axios.get(`${apiUrl}/api/auth/profile`, {
//               headers: { Authorization: `Bearer ${jwtToken}` },
//               withCredentials: true,
//             });
//             console.log("Fetched User Profile:", response.data); // Debugging
//             console.log("Full API Response:", response); // Log entire response

//             if (response.data) {
//               localStorage.setItem("user", JSON.stringify(response.data)); // Ensure user is stored
//               dispatch({
//                 type: "INIT",
//                 payload: { isAuthenticated: true, user: response.data },
//               });
//             } else {
//               console.log("No user found in API response");
//               dispatch({
//                 type: "INIT",
//                 payload: { isAuthenticated: false, user: null },
//               });
//             }
//           } catch (err) {
//             console.error("Error fetching user profile:", err); // Added missing console.error
//             dispatch({
//               type: "INIT",
//               payload: { isAuthenticated: false, user: null },
//             });
//           }
//         } else {
//           console.log("Token is invalid");
//           dispatch({
//             type: "INIT",
//             payload: { isAuthenticated: false, user: null },
//           });
//         }
//       } else {
//         console.log("No JWT token found");
//         dispatch({
//           type: "INIT",
//           payload: { isAuthenticated: false, user: null },
//         });
//       }

//       setLoading(false);
//     };
//     initAuth();
//   }, []);

//   const login = async (identifier, password) => {
//     try {
//       const apiUrl = process.env.REACT_APP_API_URL;
//       const response = await axios.post(`${apiUrl}/api/auth/login`, {
//         identifier,
//         password,
//       });

//       if (response.status === 200) {
//         const { accessToken, refreshToken, user } = response.data.data;

//         // ✅ Set session headers for authenticated requests
//         setSession(accessToken);
//         localStorage.setItem("jwtToken", accessToken);
//         localStorage.setItem("refreshToken", refreshToken);
//         localStorage.setItem("user", JSON.stringify(user));

//         // ✅ Dispatch login to global state
//         dispatch({
//           type: "LOGIN",
//           payload: { user },
//         });

//         return response;
//       } else {
//         console.error("Login failed with status:", response.status);
//         return response;
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       throw error;
//     }
//   };

//   const register = async (fullname, email, phone, password) => {
//     try {
//       const payload = {
//         fullname,
//         email,
//         phone,
//         password,
//       };

//       const response = await axios.post(`${apiUrl}/api/auth/register`, payload);

//       if (response.status === 201) {
//         const { token, user, refreshToken } = response.data;

//         // Save token and user in localStorage
//         setSession(token, refreshToken);
//         localStorage.setItem("user", JSON.stringify(user));

//         dispatch({
//           type: "REGISTER",
//           payload: { user },
//         });

//         return response;
//       } else {
//         return response;
//       }
//     } catch (error) {
//       console.error(
//         "Registration error:",
//         error.response?.data?.message || error.message
//       );
//       throw error;
//     }
//   };

//   // Logout method to clear session
//   const logout = () => {
//     setShowModal(false);
//     setSession(null); // Clear session and tokens
//     localStorage.removeItem("jwtToken");
//     localStorage.removeItem("refreshToken");

//     localStorage.removeItem("user");
//     dispatch({ type: "LOGOUT" });
//     setTimeout(() => {
//       navigate("/login");
//     }, 100);
//   };

//   // Wait until initial state is loaded

//   return (
//     <AuthContext.Provider
//       value={{
//         ...state,
//         method: "JWT",
//         login,
//         logout,
//         register,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
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
          const user = response.data;
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
