import React, { useState, useContext } from "react";
import "./point.css";
import { DarkModeContext } from "../../../context/darkModeContext";
const Voice = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [language, setLanguage] = useState("en");

  return (
    <div>
      <div className="setting-title">
        <h4 style={{ color: darkMode ? "#fff" : "#000" }}>
          Notification Settings
        </h4>
      </div>

      {/* Theme */}
      <div
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <label>Voice</label>
        <select
          value={darkMode ? "dark" : "light"}
          className="form-select"
          style={{
            width: "200px",
            backgroundColor: darkMode ? "#212121" : "#f5f5f5",

            color: darkMode ? "#fff" : "#000",
            border: "1px solid #ccc",
          }}
        >
          <option value="dark">Arbor</option>
          <option value="light">Cove</option>
          <option value="light">Maple</option>
        </select>
      </div>
      <div
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{
          color: darkMode ? "#fff" : "#000",
        }}
      >
        <label>Main Language</label>
        <select
          value={darkMode ? "dark" : "light"}
          className="form-select"
          style={{
            width: "200px",
            backgroundColor: darkMode ? "#212121" : "#f5f5f5",

            color: darkMode ? "#fff" : "#000",
            border: "1px solid #ccc",
          }}
        >
          <option value="dark">Auto-detect</option>
          <option value="light">English</option>
          <option value="light">French</option>
          <option value="light">Spanish</option>
        </select>
      </div>
      <p style={{ color: darkMode ? "#fff" : "#000" }}>
        For best result, select the language you mainly speak. If it is not
        listed, it may still be supported via auto-detection.
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
    </div>
  );
};

export default Voice;
