import React, { useState, useContext } from "react";
import "./point.css";
import { DarkModeContext } from "../../../context/darkModeContext";
import axios from "axios";
const General = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;
  // const [darkMode, setDarkMode] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showArchiveModal, setShowArchiveModal] = useState(false); // NEW STATE

  const [language, setLanguage] = useState("en");
  const handleThemeChange = (e) => {
    const value = e.target.value;

    if (value === "dark") {
      dispatch({ type: "DARK" });
    } else if (value === "light") {
      dispatch({ type: "LIGHT" });
    } else {
      // "system"
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        dispatch({ type: "DARK" });
      } else {
        dispatch({ type: "LIGHT" });
      }
    }
  };
  // const handleArchiveAllChats = async () => {
  //   try {
  //     const token = localStorage.getItem("jwtToken");

  //     await axios.put(
  //       `${apiUrl}/api/ai/fin-inquiry/archive-all`,
  //       {}, // No body
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
  //         },
  //       }
  //     );

  //     alert("All chats archived.");
  //   } catch (error) {
  //     console.error("Failed to archive chats", error);
  //     alert("Error archiving chats.");
  //   }
  // };

  const handleArchiveAllChats = async () => {
    try {
      const token = localStorage.getItem("jwtToken");

      await axios.put(
        `${apiUrl}/api/ai/fin-inquiry/archive-all`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("All chats archived.");
      setShowArchiveModal(false); // Close modal
    } catch (error) {
      console.error("Failed to archive chats", error);
      alert("Error archiving chats.");
    }
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

  // Optional: Archive a specific chat
  // const handleArchiveChat = async (chatId) => {
  //   try {
  //     await axios.put(
  //       `${apiUrl}/api/ai/fin-inquiry/archive/${chatId}`,
  //       {},
  //       authHeaders
  //     );
  //     alert("Chat archived.");
  //   } catch (error) {
  //     console.error("Failed to archive chat", error);
  //     alert("Error archiving chat.");
  //   }
  // };

  return (
    <div>
      <div className="setting-title">
        <h4 style={{ color: darkMode ? "#fff" : "#000" }}>General Settings</h4>
      </div>

      {/* Theme */}
      <div
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <label>Theme</label>
        {/*}  <select
          value={darkMode ? "dark" : "light"}
          onChange={(e) => setDarkMode(e.target.value === "dark")}
          className="form-select"
          style={{
            width: "200px",
            backgroundColor: "transparent",
            color: "white",
            border: "1px solid #ccc",
          }}
        >
          <option value="dark">Dark Mode</option>
          <option value="light">Light Mode</option>
        </select>*/}
        <select
          value={
            darkMode === true ? "dark" : darkMode === false ? "light" : "system"
          }
          onChange={handleThemeChange}
          className="form-select"
          style={{
            width: "200px",
            backgroundColor: "transparent",
            color: darkMode ? "white" : "black",
            border: "1px solid #ccc",
          }}
        >
          <option value="dark">Dark Mode</option>
          <option value="light">Light Mode</option>
        </select>
      </div>

      {/* Follow-up Suggestions */}
      <div
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <label style={{ color: darkMode ? "#fff" : "#000" }}>
          Follow-up Suggestions
        </label>
        <div>
          <input
            type="checkbox"
            checked={showSuggestions}
            onChange={() => setShowSuggestions(!showSuggestions)}
            style={{ marginRight: "10px" }}
          />
          <span>{showSuggestions ? "On" : "Off"}</span>
        </div>
      </div>

      {/* Language */}
      {/*<div
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <label style={{ color: darkMode ? "#fff" : "#000" }}>Language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="form-select"
          style={{
            width: "200px",
            backgroundColor: "transparent",
            color: darkMode ? "#fff" : "#000",
            border: "1px solid #ccc",
          }}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>*/}

      <div
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <label>Archive Chat</label>
        <button
          className="btn btn-warning"
          onClick={() => setShowArchiveModal(true)}
        >
          Archive Chat
        </button>
      </div>

      <div
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <label>Archive All Chats</label>
        <button
          className="btn btn-warning"
          onClick={() => setShowArchiveModal(true)}
        >
          Archive All Chats
        </button>
      </div>

      <div
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <label>Delete Chat</label>
        <button
          className="btn btn-danger"
          onClick={() => setShowDeleteModal(true)}
        >
          Delete Chat
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
              Confirm Delete
            </h3>
            <p className="text-gray-500 mb-5">
              Are you sure you want to delete all chats? This action cannot be
              undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAllChats}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md"
                style={{ color: darkMode ? "#fff" : "#000" }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Archive Modal */}
      {showArchiveModal && (
        <div
          className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: darkMode ? "#212121" : "#f5f5f5" }}
        >
          <div
            className="rounded-lg shadow-lg max-w-md w-full p-6"
            style={{ color: darkMode ? "#fff" : "#2f2f2f" }}
          >
            <h3 className="text-lg font-medium mb-4">Confirm Archive</h3>
            <p className="text-gray-500 mb-5">
              Are you sure you want to archive all chats? You can unarchive them
              later.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowArchiveModal(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleArchiveAllChats}
                className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-md"
              >
                Archive
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default General;
