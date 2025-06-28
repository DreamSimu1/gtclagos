import React, { useState, useContext } from "react";
import "./point.css";
import { DarkModeContext } from "../../../context/darkModeContext";
const Notify = () => {
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
        <label>Responses</label>
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
          <option value="dark">Push</option>
          <option value="light">Email</option>
        </select>
      </div>
      <div
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <label>Tasks</label>
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
          <option value="dark">Push</option>
          <option value="light">Email</option>
        </select>
      </div>
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

export default Notify;
