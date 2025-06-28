// import React, {
//   useEffect,
//   useState,
//   useContext,
//   useRef,
//   Fragment,
// } from "react";
// import { FaPlus, FaMicrophone } from "react-icons/fa";
// import { FiSend } from "react-icons/fi";
// import TopNav from "../TopNav";
// import SideNav from "../SideNav";
// import useAuth from "../../hooks/useAuth";
// import { useSidebar } from "../SidebarProvider";
// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
// import "./price.css";
// import Sidebars from "../Sidebars";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { FaCheck } from "react-icons/fa";

// import { DarkModeContext } from "../../../context/darkModeContext";
// const iconButtonStyle = {
//   background: "none",
//   border: "none",
//   color: "white",
//   cursor: "pointer",
//   padding: "6px",
//   borderRadius: "5px",
//   transition: "background 0.3s",
// };

// const Payment = () => {
//   const { isSidebarOpen } = useSidebar();
//   const { user } = useAuth();
//   const { darkMode } = useContext(DarkModeContext); // <--- this line is missing
//   const [hasCreatedImage, setHasCreatedImage] = useState(false);
//   const [messages, setMessages] = useState([
//     { sender: "ai", text: "Hello! How can I assist you today?" },
//   ]);

//   const [savedImages, setSavedImages] = useState([]); // Mock your saved images here

//   // Simulate loading saved files (mock)
//   useEffect(() => {
//     // In real-world: fetch from DB or API
//     const mockImages = []; // Replace with mock image/file objects if needed
//     setSavedImages(mockImages);
//   }, []);

//   const apiUrl = process.env.REACT_APP_API_URL;
//   const [isListening, setIsListening] = useState(false);
//   const recognitionRef = useRef(null);

//   const [isLoading, setIsLoading] = useState(false);

//   const [newMessage, setNewMessage] = useState("");
//   const [chatId, setChatId] = useState(uuidv4()); // Generate chatId once
//   const [selectedFile, setSelectedFile] = useState(null);
//   const fileInputRef = useRef(null); // For triggering file input click
//   const imageInputRef = useRef(null);
//   const [showUploadMenu, setShowUploadMenu] = useState(false);

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, [darkMode]);

//   // Chat Interface shown *after* user clicks "Make your first image"
//   return (
//     <div
//       style={{
//         backgroundColor: darkMode ? "#212121" : "#f5f5f5",
//         minHeight: "100vh",
//       }}
//     >
//       <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
//         <SideNav />
//         <TopNav />
//         <div
//           className="page-wrapper"
//           style={{
//             marginTop: "10px",
//             backgroundColor: darkMode ? "#212121" : "#f5f5f5",
//             marginBottom: "0px",
//             color: darkMode ? "white" : "black",
//           }}
//         >
//           <div className="content" style={{ width: "100%" }}>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;
import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  Fragment,
} from "react";
import { FaPlus, FaMicrophone } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import useAuth from "../../hooks/useAuth";
import { useSidebar } from "../SidebarProvider";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./price.css";
import Sidebars from "../Sidebars";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

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

const Payment = () => {
  const { isSidebarOpen } = useSidebar();
  const { user } = useAuth();
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#212121" : "#f5f5f5",
        minHeight: "100vh",
        color: darkMode ? "white" : "black",
      }}
    >
      <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <SideNav />
        <TopNav />
        <div className="page-wrapper" style={{ marginTop: "10px" }}>
          <div className="content" style={{ width: "100%" }}>
            <div
              className="payment-container"
              style={{
                display: "flex",
                gap: "30px",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {/* LEFT: ORDER SUMMARY */}
              <div
                className="order-summary"
                style={{
                  flex: "1",
                  minWidth: "300px",
                  background: darkMode ? "#2b2b2b" : "#fff",
                  padding: "25px",
                  borderRadius: "10px",
                  boxShadow: "0 0 15px rgba(0,0,0,0.1)",
                }}
              >
                <h3 style={{ marginBottom: "20px" }}>Order Summary</h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <span>Plan:</span>
                  <strong>Plus</strong>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <span>Subtotal:</span>
                  <strong>$20</strong>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <span>Total Due Today:</span>
                  <strong>$20</strong>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Next Billing:</span>
                  <strong>In 1 month</strong>
                </div>
              </div>

              {/* RIGHT: PAYMENT FORM */}
              <div
                className="payment-form"
                style={{
                  flex: "2",
                  minWidth: "300px",
                  background: darkMode ? "#2b2b2b" : "#fff",
                  padding: "25px",
                  borderRadius: "10px",
                  boxShadow: "0 0 15px rgba(0,0,0,0.1)",
                }}
              >
                <h3 style={{ marginBottom: "20px" }}>Checkout</h3>
                <form>
                  {/* Email */}
                  <div style={{ marginBottom: "15px" }}>
                    <label>Email</label>
                    <input
                      type="email"
                      defaultValue={user?.email || ""}
                      required
                      style={{
                        width: "100%",
                        padding: "10px",
                        marginTop: "5px",
                      }}
                    />
                  </div>

                  {/* Cardholder Name */}
                  <div style={{ marginBottom: "15px" }}>
                    <label>Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      style={{
                        width: "100%",
                        padding: "10px",
                        marginTop: "5px",
                      }}
                    />
                  </div>

                  {/* Card Info */}
                  <div style={{ marginBottom: "15px" }}>
                    <label>Card Information</label>
                    <input
                      type="text"
                      placeholder="Card Number"
                      style={{
                        width: "100%",
                        padding: "10px",
                        marginTop: "5px",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <input
                        placeholder="MM/YY"
                        type="text"
                        style={{ flex: 1, padding: "10px" }}
                      />
                      <input
                        placeholder="CVC"
                        type="number"
                        style={{ flex: 1, padding: "10px" }}
                      />
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div style={{ marginBottom: "15px" }}>
                    <label>Billing Address</label>
                    <input
                      type="text"
                      placeholder="Street Address"
                      style={{
                        width: "100%",
                        padding: "10px",
                        marginTop: "5px",
                      }}
                    />
                    <input
                      placeholder="City"
                      type="text"
                      style={{
                        width: "100%",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="State"
                        style={{ flex: 1, padding: "10px" }}
                      />
                      <input
                        type="text"
                        placeholder="ZIP/Postal Code"
                        style={{ flex: 1, padding: "10px" }}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Country"
                      style={{
                        width: "100%",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    />
                  </div>

                  {/* Terms Agreement */}
                  <div style={{ marginBottom: "20px" }}>
                    <label>
                      <input
                        type="checkbox"
                        required
                        style={{ marginRight: "8px" }}
                      />
                      I agree to the terms and conditions.
                    </label>
                  </div>

                  {/* Pay Button */}
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#0000ff",
                      color: "#fff",
                      padding: "14px 20px",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      width: "100%",
                      fontSize: "16px",
                    }}
                  >
                    Pay $20
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
