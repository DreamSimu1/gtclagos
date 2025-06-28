import { React, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import Sidebars from "../Sidebars";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
// import "./admin.css";
import { useSidebar } from "../SidebarProvider";

import { FaPlus, FaMicrophone } from "react-icons/fa";
import { FiSend } from "react-icons/fi"; // Optional send icon
const iconButtonStyle = {
  background: "none",
  border: "none",
  color: "white",
  cursor: "pointer",
  padding: "6px",
  borderRadius: "5px",
  transition: "background 0.3s",
};

const Portfolio = () => {
  const { user } = useAuth();
  const { isSidebarOpen } = useSidebar(); // Sidebar state
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I assist you today?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = { sender: "user", text: newMessage };
    const aiReply = { sender: "ai", text: "Thanks for your message!" };

    setMessages((prev) => [...prev, userMessage, aiReply]);
    setNewMessage("");
  };

  return (
    <div>
      <body>
        <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <SideNav />
          <TopNav />
          <div
            className="page-wrapper"
            style={{
              marginTop: "10px",
              backgroundColor: "#212121",
              marginBottom: "0px",
              height: "100%",
              marginBottom: "0",
            }}
          >
            <div className="content">
              <div
                className="chat-container"
                style={{
                  backgroundColor: "#212121",
                }}
              >
                {/* Chat Messages */}
                <div className="chat-messages">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`message ${
                        msg.sender === "user" ? "user-message" : "ai-message"
                      }`}
                    >
                      <div className="message-text">{msg.text}</div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <form
                  onSubmit={handleSendMessage}
                  className="chat-input-area"
                  style={{
                    backgroundColor: "#212121",
                  }}
                >
                  <textarea
                    className="chat-textarea"
                    placeholder="Send a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    style={{
                      resize: "none",
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      color: "white",
                      fontSize: "14px",
                      width: "100%",
                      minHeight: "60px",
                    }}
                    rows={3}
                  />

                  {/* Action buttons (bottom right) */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "8px",
                    }}
                  >
                    <div style={{ display: "flex", gap: "10px" }}>
                      <button
                        type="button"
                        title="Upload"
                        style={iconButtonStyle}
                      >
                        <FaPlus size={16} />
                      </button>
                      <button
                        type="button"
                        title="Voice"
                        style={iconButtonStyle}
                      >
                        <FaMicrophone size={16} />
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="send-button"
                      style={{
                        backgroundColor: "#01007a",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        padding: "8px 16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <FiSend size={16} />
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Portfolio;
