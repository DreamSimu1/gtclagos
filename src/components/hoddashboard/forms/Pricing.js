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

const Pricing = () => {
  const { isSidebarOpen } = useSidebar();
  const { user } = useAuth();
  const { darkMode } = useContext(DarkModeContext); // <--- this line is missing
  const [hasCreatedImage, setHasCreatedImage] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I assist you today?" },
  ]);

  const [savedImages, setSavedImages] = useState([]); // Mock your saved images here

  // Simulate loading saved files (mock)
  useEffect(() => {
    // In real-world: fetch from DB or API
    const mockImages = []; // Replace with mock image/file objects if needed
    setSavedImages(mockImages);
  }, []);

  const apiUrl = process.env.REACT_APP_API_URL;
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  const [newMessage, setNewMessage] = useState("");
  const [chatId, setChatId] = useState(uuidv4()); // Generate chatId once
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null); // For triggering file input click
  const imageInputRef = useRef(null);
  const [showUploadMenu, setShowUploadMenu] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Chat Interface shown *after* user clicks "Make your first image"
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#212121" : "#f5f5f5",
        minHeight: "100vh",
      }}
    >
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
          <div className="content" style={{ width: "100%" }}>
            <section class="price-section price-sec" id="pricing">
              <div class="container-fluid px-0">
                <div class="section-header text-center ">
                  <h2>
                    Our <span> Pricing </span>
                  </h2>
                  <p>Finomic AI Price Plan</p>
                </div>
                <div class="row justify-content-center row-gap-4">
                  <div class="col-lg-4 col-md-6 ">
                    <div class="pricing-wrap">
                      <div class="price-head">
                        <div class="price-title">
                          <div class="price-info">
                            <h5>Free</h5>
                            <div class="price-dollar">
                              <h3>$0 Per Month</h3>
                            </div>
                          </div>
                        </div>
                        <p>
                          Explore how AI can help you with your everyday tasks
                        </p>
                        <button className="plan-button current-plan" disabled>
                          Current Plan
                        </button>
                      </div>
                      <div class="price-body">
                        <ul class="price-check">
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Access to Finomic Ai-4o mini and reasoning
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Standard voice mode
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Real-time data from the web with search
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Limited access to Finomic Ai-4o and o4-mini
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                fontSize: "36px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Limited access to file uploads, advanced data
                              analysis, and image generation
                            </span>
                          </li>
                        </ul>
                        <a
                          href="/payment"
                          class="btn btn-secondary"
                          target="_blank"
                        >
                          Buy Now <i class="ti ti-circle-arrow-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 ">
                    <div class="pricing-wrap active">
                      <div class="price-head">
                        <div class="price-title">
                          <div class="price-info">
                            <h5>Plus</h5>
                            <div class="price-dollar">
                              <h3>$20 per month</h3>
                            </div>
                          </div>
                        </div>
                        <p>
                          Level up productivity and creativity with expanded
                          access
                        </p>
                        <button
                          className="plan-button get-plus"
                          href="/payment"
                        >
                          Get Plus
                        </button>
                      </div>
                      <div class="price-body">
                        <ul class="price-check">
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Everything in Free
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                fontSize: "36px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Extended limits on messaging, file uploads,
                              advanced data analysis, and image generation
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Standard and advanced voice mode
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                fontSize: "46px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Access to deep research, multiple reasoning models
                              (o4-mini, o4-mini-high, and o3), and a research
                              preview of Finomic Ai-4.5
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                fontSize: "26px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Create and use tasks, projects, and custom Ai
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Limited access to Sora video generation
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Opportunities to test new features
                            </span>
                          </li>
                        </ul>
                        <a
                          href="/payment"
                          class="btn btn-secondary"
                          target="_blank"
                        >
                          Buy Now <i class="ti ti-circle-arrow-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 ">
                    <div class="pricing-wrap active">
                      <div class="price-head">
                        <div class="price-title">
                          <div class="price-info">
                            <h5>Pro</h5>
                            <div class="price-dollar">
                              <h3>$200 per month</h3>
                            </div>
                          </div>
                        </div>
                        <p>
                          Get the best of Finomic AI with the highest level of
                          access
                        </p>
                        <button
                          className="plan-button get-plus"
                          href="/payment"
                        >
                          Get Pro
                        </button>
                      </div>
                      <div class="price-body">
                        <ul class="price-check">
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Everything in Plus
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                fontSize: "23px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Unlimited access to all reasoning models and
                              Finomic Ai-4o
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Unlimited access to advanced voice
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                fontSize: "42px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Extended access to deep research, which conducts
                              multi-step online research for complex tasks
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                fontSize: "30px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Access to research previews of Finomic Ai -4.5 and
                              Operator
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                fontSize: "36px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Access to o1 pro mode, which uses more compute for
                              the best answers to the hardest questions
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Extended access to Sora video generation
                            </span>
                          </li>
                          <li>
                            <FaCheck
                              style={{
                                marginRight: "8px",
                                color: darkMode ? "#fff" : "#000",
                              }}
                            />

                            <span
                              class="price-feature-text"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Access to a research preview of Codex agent
                            </span>
                          </li>
                        </ul>
                        <a
                          href="/payment"
                          class="btn btn-secondary"
                          target="_blank"
                        >
                          Buy Now <i class="ti ti-circle-arrow-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
