import React, { useState, useContext } from "react";
import "./point.css";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import { DarkModeContext } from "../../../context/darkModeContext";
const Security = () => {
  const { darkMode } = useContext(DarkModeContext); // <--- this line is missing
  const dynamicStyle = {
    backgroundColor: "transparent",
    borderRadius: "50px",
    border: `1px solid ${darkMode ? "#fff" : "#000"}`,
    color: darkMode ? "#fff" : "#000",
  };
  const navigate = useNavigate();
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [language, setLanguage] = useState("en");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleLogout = () => {
    // Clear all items from localStorage
    localStorage.clear();
    // Navigate to login page
    navigate("/login");
  };
  return (
    <div>
      <div className="setting-title">
        <h4 style={{ color: darkMode ? "#fff" : "#000" }}>Security Settings</h4>
      </div>

      {/*} <div
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <label>Multi-factor Authentication</label>
        <br></br>

        <button className="btn" style={dynamicStyle}>
          Enable
        </button>
      </div>*/}

      <div
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <label>Logout of all device</label>
        <br></br>

        <button
          className="btn"
          style={dynamicStyle}
          onClick={() => setShowLogoutModal(true)}
        >
          Log out all
        </button>
      </div>
      <p
        style={{
          color: darkMode ? "#fff" : "#000",
          fontSize: "13px",
          fontWeight: "300",
        }}
      >
        Log out of all active sessions across all devices, including your
        current session. It may take up to 30 minutes for other devices to be
        logged out.
      </p>
      {/* Save/Cancel */}
      {/*} <div className="text-end settings-bottom-btn mt-4">
        <button
          type="button"
          className="btn me-2"
          style={{ backgroundColor: "red", color: "white" }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "#4444ff", color: "white" }}
        >
          Save Changes
        </button>
      </div>*/}
      {showLogoutModal && (
        <div
          className="fixed inset-0  bg-opacity-50 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: darkMode ? "#212121" : "#f5f5f5" }}
        >
          <div
            className=" rounded-lg shadow-lg max-w-md w-full p-6"
            style={{ color: darkMode ? "#fff" : "#2f2f2f" }}
          >
            <h3
              className="text-lg font-medium  mb-4"
              style={{ color: darkMode ? "#fff" : "#000" }}
            >
              Confirm Logout
            </h3>
            <p className="text-gray-500 mb-5">
              Are you sure you want to logout from your account?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700  rounded-md"
                style={{ color: darkMode ? "#fff" : "#000" }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Security;
