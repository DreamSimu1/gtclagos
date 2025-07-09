import React, { createContext, useState } from "react";

export const LogoutContext = createContext();

export const LogoutProvider = ({ children }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <LogoutContext.Provider value={{ showLogoutModal, setShowLogoutModal }}>
      {children}
    </LogoutContext.Provider>
  );
};
