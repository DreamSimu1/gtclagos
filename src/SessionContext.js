// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const SessionContext = createContext();

// export const SessionProvider = ({ children }) => {
//   const [sessions, setSessions] = useState([]);
//   const [currentSession, setCurrentSession] = useState(null);
//   const apiUrl = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     axios
//       .get(`${apiUrl}/api/sessions`)
//       .then((response) => {
//         if (Array.isArray(response.data)) {
//           setSessions(response.data);

//           // Set the session that matches the current date as active
//           const activeSession = response.data.find((session) => {
//             const now = new Date();
//             const startDate = new Date(session.startDate);
//             const endDate = new Date(session.endDate);
//             return now >= startDate && now <= endDate;
//           });

//           if (activeSession) {
//             setCurrentSession(activeSession);
//           }
//         } else {
//           console.error("Unexpected response structure", response);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching sessions:", error);
//       });
//   }, []);

//   return (
//     <SessionContext.Provider
//       value={{ sessions, currentSession, setSessions, setCurrentSession }}
//     >
//       {children}
//     </SessionContext.Provider>
//   );
// // };
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
//         const token = localStorage.getItem("jwtToken"); // optional
//         const res = await axios.get(`${apiUrl}/api/sessions`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const sessionArray = res.data?.data;

//         if (Array.isArray(sessionArray)) {
//           setSessions(sessionArray);

//           const now = new Date();
//           const activeSession = sessionArray.find((session) => {
//             const startDate = new Date(session.startDate);
//             const endDate = new Date(session.endDate);
//             return now >= startDate && now <= endDate;
//           });

//           if (activeSession) {
//             console.log("✅ Setting active session:", activeSession);
//             setCurrentSession(activeSession);
//           } else {
//             console.warn("⚠️ No active session found.");
//           }
//         } else {
//           console.error("❌ Unexpected response format:", res.data);
//         }
//       } catch (error) {
//         console.error("❌ Failed to fetch sessions:", error);
//       }
//     };

//     fetchSessions();
//   }, []);

//   return (
//     <SessionContext.Provider
//       value={{ sessions, currentSession, setSessions, setCurrentSession }}
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

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await axios.get(`${apiUrl}/api/session`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("✅ SessionProvider fetched:", response.data);

        const sessionList = response.data || [];
        setSessions(sessionList);

        const active = sessionList.find((s) => s.isActive);
        if (active) {
          setCurrentSession(active);
          console.log("✅ Active session set:", active);
        } else {
          console.warn("⚠️ No active session found.");
        }
      } catch (error) {
        console.error("❌ Failed to fetch sessions", error);
      }
    };

    fetchSessions();
  }, []);

  return (
    <SessionContext.Provider
      value={{ sessions, currentSession, setCurrentSession, setSessions }}
    >
      {children}
    </SessionContext.Provider>
  );
};
