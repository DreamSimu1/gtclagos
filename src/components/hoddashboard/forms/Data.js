import React, { useState, useContext } from "react";
import "./point.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { DarkModeContext } from "../../../context/darkModeContext";
import axios from "axios";
const Data = () => {
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [language, setLanguage] = useState("en");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { darkMode } = useContext(DarkModeContext); // <--- this line is missing
  const apiUrl = process.env.REACT_APP_API_URL;
  const dynamicStyle = {
    backgroundColor: "transparent",
    borderRadius: "50px",
    border: `1px solid ${darkMode ? "#fff" : "#000"}`,
    color: darkMode ? "#fff" : "#000",
  };
  const dynamicStyle3 = {
    backgroundColor: "transparent",
    borderRadius: "5px",
    border: `1px solid ${darkMode ? "#fff" : "#000"}`,
    color: darkMode ? "#fff" : "#000",
  };
  const dynamicStyle2 = {
    backgroundColor: "red",
    borderRadius: "5px",

    color: darkMode ? "#fff" : "#fff",
  };
  const handleDeleteAllChats = async () => {
    try {
      const token = localStorage.getItem("jwtToken");

      await axios.delete(`${apiUrl}/api/ai/fin-inquiry/delete-all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("All chats deleted.");
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Failed to delete chats", error);
      alert("Error deleting chats.");
    }
  };
  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem("jwtToken");

      await axios.delete(`${apiUrl}/api/auth/delete-account`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { password },
      });

      // clear token, redirect, or reset app state
      localStorage.removeItem("jwtToken");
      alert("Your account has been deleted.");
      window.location.href = "/"; // or login/register page
    } catch (error) {
      console.error("Failed to delete account:", error);
      alert(error?.response?.data?.message || "Account deletion failed.");
    }
  };

  return (
    <div>
      <div className="setting-title">
        <h4 style={{ color: darkMode ? "#fff" : "#000" }}>
          Data Control Settings
        </h4>
      </div>

      {/* Theme */}
      {/*}  <div
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <label>Improve the model for everyone</label>
        <select
          value={darkMode ? "dark" : "light"}
          className="form-select"
          style={{
            width: "200px",
            backgroundColor: "transparent",
            color: darkMode ? "#fff" : "#000",
            border: "1px solid #ccc",
          }}
        >
          <option value="dark">on</option>
          <option value="light">off</option>
        </select>
      </div>*/}
      {/*} <div
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <label style={{ color: darkMode ? "#fff" : "#000" }}>Shared Link</label>
        <button className="btn" style={dynamicStyle}>
          Manage
        </button>
      </div>*/}
      {/*} <div
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <label>Export Data</label>
        <button
          className="btn"
     
          style={dynamicStyle}
        >
          Export
        </button>
      </div>*/}
      <div
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <label>Delete Account</label>
        <button
          className="btn"
          style={{
            backgroundColor: "red",
            borderRadius: "50px",

            color: "white",
          }}
          onClick={() => setShowDeleteModal(true)}
        >
          Delete
        </button>
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
      {showDeleteModal && (
        <div
          className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: darkMode ? "#212121" : "#f5f5f5" }}
        >
          <div
            className="rounded-lg shadow-lg max-w-md w-full p-6"
            style={{ color: darkMode ? "#fff" : "#2f2f2f" }}
          >
            <h3
              className="text-lg font-medium mb-4"
              style={{ color: darkMode ? "#fff" : "#000" }}
            >
              Confirm Account Deletion
            </h3>
            <p className="text-gray-500 mb-3">
              This action is permanent. Please confirm your password to
              continue.
            </p>

            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control pr-10 w-full"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            <div className="flex justify-between w-full">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setPassword("");
                }}
                className="px-4 py-2 hover:bg-gray-200 text-gray-800 rounded-md"
                style={dynamicStyle3}
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md"
                style={dynamicStyle2}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Data;
