import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessions, setSessions] = useState([]);
  const [currentSession, setCurrentSession] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/sessions`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setSessions(response.data);

          // Set the session that matches the current date as active
          const activeSession = response.data.find((session) => {
            const now = new Date();
            const startDate = new Date(session.startDate);
            const endDate = new Date(session.endDate);
            return now >= startDate && now <= endDate;
          });

          if (activeSession) {
            setCurrentSession(activeSession);
          }
        } else {
          console.error("Unexpected response structure", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching sessions:", error);
      });
  }, []);

  return (
    <SessionContext.Provider
      value={{ sessions, currentSession, setSessions, setCurrentSession }}
    >
      {children}
    </SessionContext.Provider>
  );
};
