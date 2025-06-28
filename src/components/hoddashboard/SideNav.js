import { useState, useEffect, useContext } from "react";
import logo from "./oga4.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSidebar } from "./SidebarProvider";
import "./side.css";
import {
  FiHome,
  FiCreditCard,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiEdit,
  FiBarChart2,
  FiBookOpen,
  FiTrendingUp,
  FiChevronDown,
  FiCompass,
  FiMessageSquare,
  FiClock,
} from "react-icons/fi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdPermMedia } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import { DarkModeContext } from "../../context/darkModeContext";

const SideNav = () => {
  const [openSubmenus, setOpenSubmenus] = useState(new Set());
  const { isSidebarOpen } = useSidebar();
  const toggleSubmenu = (index) => {
    const updatedSubmenus = new Set(openSubmenus);
    if (updatedSubmenus.has(index)) {
      updatedSubmenus.delete(index);
    } else {
      updatedSubmenus.add(index);
    }
    setOpenSubmenus(updatedSubmenus);
  };
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [categories, setCategories] = useState([]);
  const [parentCategories, setParentCategories] = useState([]);
  const { darkMode } = useContext(DarkModeContext); // <--- this line is missing
  const [chats, setChats] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/categories`);
        const allCategories = res.data;
        setCategories(allCategories);
        const parents = allCategories.filter(
          (cat) => !cat.parent || cat.parent === null
        );
        setParentCategories(parents);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);
  const handleLogout = () => {
    // Clear all items from localStorage
    localStorage.clear();
    // Navigate to login page
    navigate("/login");
  };
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/ai/fin-inquiry`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        });
        setChats(res.data.data || []);
      } catch (err) {
        console.error("Failed to load chats:", err);
      }
    };

    fetchChats();
  }, []);
  const topNavStyle = {
    backgroundColor: darkMode ? "#202123" : "#fff", // dark background or white
    color: darkMode ? "white" : "black", // text color for buttons, etc.
  };

  return (
    <div className="main-wrapper">
      <div
        className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}
        id="sidebar"
        style={{
          backgroundColor: darkMode ? "#202123" : "#fff",
          color: darkMode ? "white" : "black",
        }}
      >
        <div
          className="sidebar-inner slimscroll"
          style={{
            overflowY: "auto",
            maxHeight: "100vh",
          }}
        >
          <div id="sidebar-menu" className="sidebar-menu">
            <ul style={{ paddingBottom: "80px" }}>
              <li className="submenu-open">
                <ul>
                  <li className="submenu">
                    <a
                      href="/home"
                      className={`${isActive("/home") ? "active-menu" : ""}`}
                      style={{
                        // backgroundColor: isActive("/home")
                        //   ? darkMode
                        //     ? "#343541"
                        //     : "#ddd"
                        //   : "transparent",
                        borderRadius: "5px",
                        padding: "10px",
                        color: isActive("/home")
                          ? darkMode
                            ? "white"
                            : "black"
                          : darkMode
                          ? "#fff"
                          : "#000",
                      }}
                    >
                      <FiHome
                        size={20}
                        color={
                          isActive("/home")
                            ? darkMode
                              ? "white"
                              : "black" // active color: white in dark, black in light
                            : darkMode
                            ? "#fff"
                            : "#000" // inactive color: lighter gray dark/light
                        }
                      />
                      <span
                        style={{
                          fontSize: "15px",
                          color: isActive("/home")
                            ? darkMode
                              ? "white"
                              : "black" // active color: white in dark, black in light
                            : darkMode
                            ? "#fff"
                            : "#000", // inactive color: lighter gray dark/light
                        }}
                      >
                        Home
                      </span>
                    </a>
                  </li>

                  {/*} <li className="submenu">
                    <Link
                      to="/chat/new"
                      className="submenu-link"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                      }}
                    >
                      <FiEdit
                        size={20}
                        color={
                          isActive("/chat/new")
                            ? darkMode
                              ? "white"
                              : "black"
                            : darkMode
                            ? "#ccc"
                            : "#555"
                        }
                      />
                      <span
                        style={{
                          fontSize: "18px",
                          marginLeft: "8px",
                          color: isActive("/chat/new")
                            ? darkMode
                              ? "white"
                              : "black"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                        }}
                      >
                        New Chat
                      </span>
                    </Link>
                  </li>
                  <li>
            
                    {chats.map((chat) => (
                      <li className="submenu" key={chat.chatId}>
                        <Link
                          to={`/chat/${chat.chatId}`}
                          className="submenu-link"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                          }}
                        >
                          <FiEdit
                            size={20}
                            color={
                              isActive(`/chat/${chat.chatId}`)
                                ? darkMode
                                  ? "white"
                                  : "black"
                                : darkMode
                                ? "#ccc"
                                : "#555"
                            }
                          />
                          <span
                            style={{
                              fontSize: "18px",
                              marginLeft: "8px",
                              color: isActive(`/chat/${chat.chatId}`)
                                ? darkMode
                                  ? "white"
                                  : "black"
                                : darkMode
                                ? "#ccc"
                                : "#555",
                            }}
                          >
                            {chat.chatTitle || "Untitled Chat"}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </li>*/}

                  <li className="submenu">
                    <a href="/library">
                      <MdPermMedia
                        size={20}
                        color={
                          isActive("/digital")
                            ? darkMode
                              ? "white"
                              : "black" // active color: white in dark, black in light
                            : darkMode
                            ? "#ccc"
                            : "#555" // inactive color: lighter gray dark/light
                        }
                      />
                      <span
                        style={{
                          fontSize: "15px",
                          color: isActive("/digital")
                            ? darkMode
                              ? "white"
                              : "black" // active color: white in dark, black in light
                            : darkMode
                            ? "#ccc"
                            : "#555", // inactive color: lighter gray dark/light
                        }}
                      >
                        Library
                      </span>
                    </a>
                  </li>

                  {/* Settings */}

                  <li className="submenu">
                    <a href="/today">
                      <FiMessageSquare
                        size={20}
                        color={
                          isActive("/today")
                            ? darkMode
                              ? "white"
                              : "black" // active color: white in dark, black in light
                            : darkMode
                            ? "#ccc"
                            : "#555" // inactive color: lighter gray dark/light
                        }
                      />
                      <span
                        style={{
                          fontSize: "15px",
                          color: isActive("/today")
                            ? darkMode
                              ? "white"
                              : "black" // active color: white in dark, black in light
                            : darkMode
                            ? "#ccc"
                            : "#555", // inactive color: lighter gray dark/light
                        }}
                      >
                        Today's Chat
                      </span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="/yesterday">
                      <FiClock
                        size={20}
                        color={
                          isActive("/yesterday")
                            ? darkMode
                              ? "white"
                              : "black" // active color: white in dark, black in light
                            : darkMode
                            ? "#ccc"
                            : "#555" // inactive color: lighter gray dark/light
                        }
                      />
                      <span
                        style={{
                          fontSize: "15px",
                          color: isActive("/yesterday")
                            ? darkMode
                              ? "white"
                              : "black" // active color: white in dark, black in light
                            : darkMode
                            ? "#ccc"
                            : "#555", // inactive color: lighter gray dark/light
                        }}
                      >
                        Yesterday Chat
                      </span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="/last-7-days">
                      <FiClock
                        size={20}
                        color={
                          isActive("/last-7-days")
                            ? darkMode
                              ? "white"
                              : "black" // active color: white in dark, black in light
                            : darkMode
                            ? "#ccc"
                            : "#555" // inactive color: lighter gray dark/light
                        }
                      />
                      <span
                        style={{
                          fontSize: "15px",
                          color: isActive("/last-7-days")
                            ? darkMode
                              ? "white"
                              : "black" // active color: white in dark, black in light
                            : darkMode
                            ? "#ccc"
                            : "#555", // inactive color: lighter gray dark/light
                        }}
                      >
                        Last 7 days
                      </span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(5);
                      }}
                      className={`submenu-link ${
                        openSubmenus.has(5) ? "subdrop active" : ""
                      }`}
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: openSubmenus.has(5)
                          ? darkMode
                            ? "#343541"
                            : "#ddd"
                          : "transparent",
                        borderRadius: "5px",
                        padding: "10px 40px 10px 12px", // extra right padding for chevron
                        color: openSubmenus.has(5)
                          ? darkMode
                            ? "#fff"
                            : "#000"
                          : darkMode
                          ? "#ccc"
                          : "#555",
                        textDecoration: "none",
                      }}
                    >
                      <FiBarChart2
                        size={20}
                        style={{ marginRight: "8px" }}
                        color={
                          openSubmenus.has(5)
                            ? darkMode
                              ? "#fff"
                              : "#000"
                            : darkMode
                            ? "#ccc"
                            : "#555"
                        }
                      />
                      <span
                        style={{
                          fontSize: "15px",
                          whiteSpace: "nowrap",
                          color: openSubmenus.has(5)
                            ? darkMode
                              ? "#fff"
                              : "#000"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                        }}
                      >
                        Finance Management
                      </span>

                      {/* Chevron: absolute on the far right */}
                      <FiChevronDown
                        style={{
                          position: "absolute",
                          right: "-19px",
                          transition: "transform 0.3s ease",
                          transform: openSubmenus.has(5)
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          color: darkMode ? "#fff" : "#000",
                        }}
                      />
                    </a>

                    {/* Submenu dropdown list */}
                    {openSubmenus.has(5) && (
                      <ul
                        className="submenu-list"
                        style={{ paddingLeft: "32px", marginTop: "5px" }}
                      >
                        <li>
                          <a
                            href="/financial-inquiries"
                            style={{ color: darkMode ? "#fff" : "#000" }}
                          >
                            Financial Inquiries
                          </a>
                        </li>
                        <li>
                          <a
                            href="/budgeting"
                            style={{ color: darkMode ? "#fff" : "#000" }}
                          >
                            Budgeting & Money Management
                          </a>
                        </li>
                        <li>
                          <a
                            href="/spending-analysis"
                            style={{ color: darkMode ? "#fff" : "#000" }}
                          >
                            Smart Spending Analysis
                          </a>
                        </li>
                        <li>
                          <a
                            href="/goal-tracking"
                            style={{ color: darkMode ? "#fff" : "#000" }}
                          >
                            Goal Tracking
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="submenu">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(7);
                      }}
                      className={`submenu-link ${
                        openSubmenus.has(7) ? "subdrop active" : ""
                      }`}
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: openSubmenus.has(7)
                          ? darkMode
                            ? "#343541"
                            : "#ddd"
                          : "transparent",
                        borderRadius: "5px",
                        padding: "10px 40px 10px 12px",
                        color: openSubmenus.has(7)
                          ? darkMode
                            ? "#fff"
                            : "#000"
                          : darkMode
                          ? "#ccc"
                          : "#555",
                        textDecoration: "none",
                      }}
                    >
                      <FiTrendingUp
                        size={20}
                        style={{ marginRight: "8px" }}
                        color={
                          openSubmenus.has(7)
                            ? darkMode
                              ? "#fff"
                              : "#000"
                            : darkMode
                            ? "#ccc"
                            : "#555"
                        }
                      />
                      <span
                        style={{
                          fontSize: "15px",
                          whiteSpace: "nowrap",
                          color: openSubmenus.has(7)
                            ? darkMode
                              ? "#fff"
                              : "#000"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                        }}
                      >
                        Investment Advisory
                      </span>

                      <FiChevronDown
                        style={{
                          position: "absolute",
                          right: "-19px",
                          transition: "transform 0.3s ease",
                          transform: openSubmenus.has(7)
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          color: darkMode ? "#fff" : "#000",
                        }}
                      />
                    </a>

                    {openSubmenus.has(7) && (
                      <ul
                        className="submenu-list"
                        style={{ paddingLeft: "20px", marginTop: "5px" }}
                      >
                        <li>
                          <a
                            href="/investment-recommendation"
                            style={{
                              color: darkMode ? "#fff" : "#000",
                              textDecoration: "none",
                            }}
                          >
                            Investment Portfolio Recommendation
                          </a>
                        </li>
                        <li>
                          <a
                            href="/market-analysis"
                            style={{
                              color: darkMode ? "#fff" : "#000",
                              textDecoration: "none",
                            }}
                          >
                            Forex Market
                          </a>
                        </li>
                        <li>
                          <a
                            href="/decentralized-finance"
                            style={{
                              color: darkMode ? "#fff" : "#000",
                              textDecoration: "none",
                            }}
                          >
                            DeFi & Blockchain opportunities
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="submenu">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(8);
                      }}
                      className={`submenu-link ${
                        openSubmenus.has(8) ? "subdrop active" : ""
                      }`}
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: openSubmenus.has(8)
                          ? darkMode
                            ? "#343541"
                            : "#ddd"
                          : "transparent",
                        borderRadius: "5px",
                        padding: "10px 40px 10px 12px",
                        color: openSubmenus.has(8)
                          ? darkMode
                            ? "#fff"
                            : "#000"
                          : darkMode
                          ? "#ccc"
                          : "#555",
                        textDecoration: "none",
                      }}
                    >
                      <FiBookOpen
                        size={20}
                        style={{ marginRight: "8px" }}
                        color={
                          openSubmenus.has(8)
                            ? darkMode
                              ? "#fff"
                              : "#000"
                            : darkMode
                            ? "#ccc"
                            : "#555"
                        }
                      />
                      <span
                        style={{
                          fontSize: "15px",
                          whiteSpace: "nowrap",
                          color: openSubmenus.has(8)
                            ? darkMode
                              ? "#fff"
                              : "#000"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                        }}
                      >
                        Financial Education
                      </span>

                      <FiChevronDown
                        style={{
                          position: "absolute",
                          right: "-19px",
                          transition: "transform 0.3s ease",
                          transform: openSubmenus.has(8)
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          color: darkMode ? "#fff" : "#000",
                        }}
                      />
                    </a>

                    {openSubmenus.has(8) && (
                      <ul
                        className="submenu-list"
                        style={{ paddingLeft: "20px", marginTop: "5px" }}
                      >
                        <li>
                          <a
                            href="/finance-education"
                            style={{
                              color: darkMode ? "#fff" : "#000",
                              textDecoration: "none",
                            }}
                          >
                            Financial education & coaching
                          </a>
                        </li>
                        <li>
                          <a
                            href="/ai-based-tax"
                            style={{
                              color: darkMode ? "#fff" : "#000",
                              textDecoration: "none",
                            }}
                          >
                            Business and tax advisory
                          </a>
                        </li>
                        <li>
                          <a
                            href="/expense-tracker"
                            style={{
                              color: darkMode ? "#fff" : "#000",
                              textDecoration: "none",
                            }}
                          >
                            Expense Tracking
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="submenu">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(12);
                      }}
                      className={`submenu-link ${
                        openSubmenus.has(12) ? "subdrop active" : ""
                      }`}
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: openSubmenus.has(12)
                          ? darkMode
                            ? "#343541"
                            : "#ddd"
                          : "transparent",
                        borderRadius: "5px",
                        padding: "10px 40px 10px 12px",
                        color: openSubmenus.has(12)
                          ? darkMode
                            ? "#fff"
                            : "#000"
                          : darkMode
                          ? "#ccc"
                          : "#555",
                        textDecoration: "none",
                      }}
                    >
                      <FiCreditCard
                        size={20}
                        style={{ marginRight: "8px" }}
                        color={
                          openSubmenus.has(12)
                            ? darkMode
                              ? "#fff"
                              : "#000"
                            : darkMode
                            ? "#ccc"
                            : "#555"
                        }
                      />
                      <span
                        style={{
                          fontSize: "15px",
                          whiteSpace: "nowrap",
                          color: openSubmenus.has(12)
                            ? darkMode
                              ? "#fff"
                              : "#000"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                        }}
                      >
                        Credit Solutions
                      </span>

                      <FiChevronDown
                        style={{
                          position: "absolute",
                          right: "-19px",
                          transition: "transform 0.3s ease",
                          transform: openSubmenus.has(12)
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          color: darkMode ? "#fff" : "#000",
                        }}
                      />
                    </a>

                    {openSubmenus.has(12) && (
                      <ul
                        className="submenu-list"
                        style={{ paddingLeft: "20px", marginTop: "5px" }}
                      >
                        <li>
                          <a
                            href="/credit-evaluation"
                            style={{
                              color: darkMode ? "#fff" : "#000",
                              textDecoration: "none",
                            }}
                          >
                            Credit scoring and evaluation
                          </a>
                        </li>
                        <li>
                          <a
                            href="/loan-recommendation"
                            style={{
                              color: darkMode ? "#fff" : "#000",
                              textDecoration: "none",
                            }}
                          >
                            Loan recommendations
                          </a>
                        </li>
                        <li>
                          <a
                            href="/bnpl"
                            style={{
                              color: darkMode ? "#fff" : "#000",
                              textDecoration: "none",
                            }}
                          >
                            Buy Now Pay Later (BNPL) options
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/*} <li className="submenu">
                    <a
                      href="/loan-recommendation"
                      onClick={() => setShowLogoutModal(true)}
                    >
                      <FiLogOut
                        size={20}
                        style={{ color: darkMode ? "#fff" : "#000" }}
                      />
                      <span
                        style={{
                          fontSize: "18px",
                          color: darkMode ? "#fff" : "#000",
                        }}
                      >
                        Loan Recomendation
                      </span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a
                      href="/financial-coaching"
                      onClick={() => setShowLogoutModal(true)}
                    >
                      <FiLogOut
                        size={20}
                        style={{ color: darkMode ? "#fff" : "#000" }}
                      />
                      <span
                        style={{
                          fontSize: "18px",
                          color: darkMode ? "#fff" : "#000",
                        }}
                      >
                        Financial Coaching
                      </span>
                    </a>
                  </li>*/}
                  <li className="submenu">
                    <a href="/pricing">
                      <HiOutlineViewGrid
                        size={20}
                        style={{ color: darkMode ? "#fff" : "#000" }}
                      />
                      <span
                        style={{
                          fontSize: "15px",
                          color: darkMode ? "#fff" : "#000",
                        }}
                      >
                        Pricing
                      </span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="#" onClick={() => setShowLogoutModal(true)}>
                      <FiLogOut
                        size={20}
                        style={{ color: darkMode ? "#fff" : "#000" }}
                      />
                      <span
                        style={{
                          fontSize: "15px",
                          color: darkMode ? "#fff" : "#000",
                        }}
                      >
                        Logout
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="sidebar-overlay" data-reff="#sidebar"></div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
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
      {/* Add any additional scripts or components here */}
    </div>
  );
};

export default SideNav;
