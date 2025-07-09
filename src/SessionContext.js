// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const SessionContext = createContext();

// export const SessionProvider = ({ children }) => {
//   const [sessions, setSessions] = useState([]);
//   const [currentSession, setCurrentSession] = useState(null);
//   const apiUrl = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = localStorage.getItem("jwtToken");
//         const response = await axios.get(`${apiUrl}/api/session`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log("✅ SessionProvider fetched:", response.data);

//         const sessionList = response.data || [];
//         setSessions(sessionList);

//         const active = sessionList.find((s) => s.isActive);
//         if (active) {
//           setCurrentSession(active);
//           console.log("✅ Active session set:", active);
//         } else {
//           console.warn("⚠️ No active session found.");
//         }
//       } catch (error) {
//         console.error("❌ Failed to fetch sessions", error);
//       }
//     };

//     fetchSessions();
//   }, []);

//   return (
//     <SessionContext.Provider
//       value={{ sessions, currentSession, setCurrentSession, setSessions }}
//     >
//       {children}
//     </SessionContext.Provider>
//   );
// };
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessions, setSessions] = useState([]);
  const [currentSession, setCurrentSession] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  // Load saved session from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("currentSession");
    if (saved) {
      try {
        setCurrentSession(JSON.parse(saved));
      } catch (e) {
        console.error("❌ Failed to parse saved session:", e);
      }
    }
  }, []);

  // Whenever session changes, save to localStorage
  useEffect(() => {
    if (currentSession) {
      localStorage.setItem("currentSession", JSON.stringify(currentSession));
    }
  }, [currentSession]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await axios.get(`${apiUrl}/api/session`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const sessionList = response.data || [];
        setSessions(sessionList);

        // Only set and save session if not already set
        if (!currentSession) {
          const active = sessionList.find((s) => s.isActive);
          if (active) {
            setCurrentSession(active);
            localStorage.setItem("currentSession", JSON.stringify(active));
            console.log("✅ Active session set from API:", active);
          } else {
            console.warn("⚠️ No active session found.");
          }
        }
      } catch (error) {
        console.error("❌ Failed to fetch sessions", error);
      }
    };

    fetchSessions();
  }, [apiUrl]);

  return (
    <SessionContext.Provider
      value={{ sessions, currentSession, setCurrentSession, setSessions }}
    >
      {children}
    </SessionContext.Provider>
  );
};
