import React, {
  useEffect,
  useRef,
  useState,
  Fragment,
  useContext,
} from "react";

import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import Sidebars from "../Sidebars";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import "./point.css";
import { useSidebar } from "../SidebarProvider";

import { FaPlus, FaMicrophone } from "react-icons/fa";
import { FiSend } from "react-icons/fi"; // Optional send icon
import { DarkModeContext } from "../../../context/darkModeContext";
const iconButtonStyle = {
  background: "none",
  border: "none",
  color: "white",
  cursor: "pointer",
  padding: "6px",
  borderRadius: "5px",
  transition: "background 0.3s",
};

const Goal = () => {
  const { user } = useAuth();
  const { isSidebarOpen } = useSidebar(); // Sidebar state
  const apiUrl = process.env.REACT_APP_API_URL;
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const [messages, setMessages] = useState([
    // { sender: "ai", text: "Hello! How can I assist you today?" },
  ]);
  const { darkMode } = useContext(DarkModeContext); // <--- this line is missing
  const [isLoading, setIsLoading] = useState(false);

  const [newMessage, setNewMessage] = useState("");
  const [chatId, setChatId] = useState(uuidv4()); // Generate chatId once
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null); // For triggering file input click
  const imageInputRef = useRef(null);
  const [showUploadMenu, setShowUploadMenu] = useState(false);
  const chatTitle = "Investment Chat"; // or any dynamic title you prefer
  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/ai/user-goal`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        });
        console.log(response.data); // Log the full response

        // Check if chat data exists and update the messages state
        // if (response.data && response.data.data) {
        //   const chatMessages = response.data.data.map((msg) => ({
        //     sender: msg.userId, // or msg.sender if you have it
        //     text: msg.userMessage, // Correct property name
        //     aiResponse: msg.aiResponse,
        //   }));
        //   // setMessages(chatMessages);
        //   setMessages(chatMessages.reverse());
        // }
        if (response.data && response.data.data) {
          const chatMessages = response.data.data
            .slice() // Clone the array to avoid mutating original
            .reverse() // Reverse the chat entries
            .flatMap((msg) => [
              {
                sender: "user",
                text: msg.userMessage,
              },
              {
                sender: "ai",
                text: msg.aiResponse,
              },
            ]);

          setMessages(chatMessages);
        }
      } catch (err) {
        console.error("Error fetching chat history:", err);
      }
    };

    fetchChatHistory();
  }, [apiUrl]); // Only re-run when apiUrl changes

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = "en-US";

      recognitionRef.current = recognitionInstance;

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setNewMessage(transcript);
        setIsListening(false);
      };

      recognitionInstance.onerror = (event) => {
        console.error("Speech recognition error", event);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };
    } else {
      alert("Speech recognition not supported in this browser.");
    }
  }, []);

  const handleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not available.");
      return;
    }

    try {
      setIsListening(true);
      recognitionRef.current.start();
    } catch (error) {
      console.error("Error starting recognition:", error);
    }
  };

  // const handleSendMessage = async (e) => {
  //   e.preventDefault();
  //   if (!newMessage.trim()) return;

  //   const userMessage = { sender: "user", text: newMessage };
  //   setMessages((prev) => [...prev, userMessage]); // Optimistic UI

  //   try {
  //     const response = await axios.post(
  //       `${apiUrl}/api/ai/fin-inquiry`,
  //       {
  //         chatTitle,
  //         chatId,
  //         userMessage: newMessage,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
  //         },
  //       }
  //     );

  //     // Access AI response correctly
  //     const aiReply = {
  //       sender: "ai",

  //       text: response.data.data.ai_response || "Received",
  //     };

  //     setMessages((prev) => [...prev, aiReply]);
  //     setNewMessage("");
  //   } catch (err) {
  //     console.error(err);
  //     const aiError = { sender: "ai", text: "Failed to send. Try again." };
  //     setMessages((prev) => [...prev, aiError]);
  //   }
  // };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() && !selectedFile) return;

    const userMessage = { sender: "user", text: newMessage };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true); // Show spinner

    try {
      const formData = new FormData();
      formData.append("chatTitle", chatTitle);
      formData.append("chatId", chatId);
      formData.append("userMessage", newMessage);
      if (selectedFile) {
        formData.append("supportingFile", selectedFile);
      }

      const response = await axios.post(
        `${apiUrl}/api/ai/create-goal`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // const chatData = response.data.data;
      // const lastMessage = chatData[chatData.length - 1];

      // const aiReply = {
      //   sender: "ai",
      //   text: lastMessage.aiResponse || "Received",
      // };
      const chatData = response.data.data;

      const aiReply = {
        sender: "ai",
        text: chatData.aiResponse || "Received",
      };

      setMessages((prev) => [...prev, aiReply]);
      setNewMessage("");
      setSelectedFile(null);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Failed to send. Try again." },
      ]);
    } finally {
      setIsLoading(false); // Hide spinner
    }
  };
  // This handles clicking the "+" button
  const toggleUploadMenu = () => {
    setShowUploadMenu((prev) => !prev);
  };

  // Handle file and image selection
  const handleFileClick = () => {
    fileInputRef.current.click();
    setShowUploadMenu(false);
  };

  const handleImageClick = () => {
    imageInputRef.current.click();
    setShowUploadMenu(false);
  };
  const handleUploadClick = () => {
    fileInputRef.current.click(); // Trigger file input
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
  };
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
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
              backgroundColor: darkMode ? "#212121" : "#f5f5f5",
              marginBottom: "0px",
              color: darkMode ? "white" : "black",
            }}
          >
            <div className="content">
              <div
                className="chat-container"
                // style={{
                //   backgroundColor: "#212121",
                // }}
              >
                {/*}   <div className="chat-messages">
                  {messages.length === 0 ? (
                    <div className=" placeholder-message">
                      <div
                        style={{
                          color: darkMode ? "#fff" : "#000",
                          fontWeight: "800",
                          fontSize: "30px",
                          width: "100%",
                        }}
                      >
                        What can I help you with?
                      </div>
                    </div>
                  ) : (
                    messages.map((msg, index) => (
                      <Fragment key={index}>
                        {msg.sender === "user" && (
                          <div className="message user-message">
                            <div className="message-text">{msg.text}</div>
                          </div>
                        )}
                        {msg.sender === "ai" && (
                          <div className="message ai-message">
                            <div className="message-text">{msg.text}</div>
                          </div>
                        )}
                      </Fragment>
                    ))
                  )}
                </div>*/}
                <div className="chat-messages dome">
                  {messages.length === 0 && !isLoading ? (
                    <div className="placeholder-message">
                      <div
                        style={{
                          color: darkMode ? "#fff" : "#000",
                          fontWeight: "800",
                          fontSize: "30px",
                          width: "100%",
                        }}
                      >
                        What financial goals can I help you with?
                      </div>
                    </div>
                  ) : (
                    <>
                      {messages.map((msg, index) => (
                        <Fragment key={index}>
                          {msg.sender === "user" && (
                            <div className="message user-message">
                              <div className="message-text">{msg.text}</div>
                            </div>
                          )}
                          {msg.sender === "ai" && (
                            <div className="message ai-message">
                              <div className="message-text">{msg.text}</div>
                            </div>
                          )}
                        </Fragment>
                      ))}
                      {isLoading && (
                        <div className="message ai-message">
                          <div className="message-text">
                            <div className="spinner" />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <form
                  onSubmit={handleSendMessage}
                  className="chat-input-area"
                  style={{
                    backgroundColor: darkMode ? "#212121" : "#f9f9f9",
                    borderTop: `1px solid ${darkMode ? "#444" : "#ccc"}`,

                    color: darkMode ? "white" : "black", // Optional for text
                  }}
                >
                  {/* Selected file preview */}
                  {selectedFile && (
                    <div className="chat-upload-preview">
                      <span>{selectedFile.name}</span>
                      <button
                        type="button"
                        onClick={() => setSelectedFile(null)}
                      >
                        ✕
                      </button>
                    </div>
                  )}

                  <textarea
                    className="chat-textarea"
                    placeholder="Send a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    rows={3}
                    style={{
                      backgroundColor: darkMode ? "#212121" : "#f9f9f9",
                      borderTop: `1px solid ${darkMode ? "#444" : "#ccc"}`,

                      color: darkMode ? "white" : "black", // Optional for text
                    }}
                  />

                  {/* Hidden file/image inputs */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <input
                    type="file"
                    ref={imageInputRef}
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />

                  {/* Action buttons */}
                  <div className="chat-input-actions">
                    <div className="chat-icon-buttons">
                      <button
                        type="button"
                        title="Upload"
                        style={iconButtonStyle}
                        onClick={toggleUploadMenu}
                      >
                        <FaPlus
                          size={16}
                          style={{ color: darkMode ? "#fff" : "#000" }}
                        />
                      </button>

                      {showUploadMenu && (
                        <div className="upload-menu">
                          <div
                            style={{ padding: "8px", cursor: "pointer" }}
                            onClick={handleFileClick}
                          >
                            📁 Upload file
                          </div>
                          <div
                            style={{ padding: "8px", cursor: "pointer" }}
                            onClick={handleImageClick}
                          >
                            🖼️ Upload image
                          </div>
                        </div>
                      )}

                      <div>
                        <button
                          type="button"
                          title="Voice"
                          style={iconButtonStyle}
                          onClick={handleVoiceInput}
                        >
                          <FaMicrophone
                            size={18}
                            style={{ color: darkMode ? "#fff" : "#000" }}
                          />
                        </button>
                        {isListening && (
                          <span style={{ marginLeft: "10px", color: "green" }}>
                            🎤 Listening...
                          </span>
                        )}
                      </div>
                    </div>

                    <button type="submit" className="chat-send-button">
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

export default Goal;
