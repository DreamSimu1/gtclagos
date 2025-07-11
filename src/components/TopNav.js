import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiHome,
  FiCreditCard,
  FiSettings,
  FiLogOut,
  FiEdit,
  FiBarChart2,
  FiBookOpen,
  FiTrendingUp,
  FiMenu,
  FiPlus,
  FiShare2,
  FiMoreVertical,
  FiBell,
  FiUser,
  FiChevronDown,
  FiCompass,
  FiMessageSquare,
  FiClock,
} from "react-icons/fi";
import axios from "axios";
import { DarkModeContext } from "../context/darkModeContext";
import { MdPermMedia } from "react-icons/md";
import { useLocation } from "react-router-dom"; // Import useLocation
import { HiOutlineViewGrid } from "react-icons/hi";
import "./TopNav.css";
import last from "./lastveblogo.png";
import lagos from "./lagoslogo.png";
import useAuth from "./hooks/useAuth";
// import { SessionContext } from "../../context/SessionContext";

const TopNav = ({ setShowModal }) => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sections, setSections] = useState([]);
  const [currentSession, setCurrentSession] = useState(null);
  const toggleDesktopMenu = () => {
    setDesktopMenuOpen(!desktopMenuOpen);
  };
  const { darkMode } = useContext(DarkModeContext);
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [openSubmenus, setOpenSubmenus] = useState(new Set());
  const topNavStyle = {
    backgroundColor: darkMode ? "#202123" : "#fff",
    color: darkMode ? "#fff" : "#000",
  };

  const handleSidebarToggle = () => setIsSidebarOpen((prev) => !prev);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const toggleSubmenu = (index) => {
    const updatedSubmenus = new Set(openSubmenus);
    if (updatedSubmenus.has(index)) {
      updatedSubmenus.delete(index);
    } else {
      updatedSubmenus.add(index);
    }
    setOpenSubmenus(updatedSubmenus);
  };
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const toggleMenuDropdown = () => {
    setMenuDropdownOpen(!menuDropdownOpen);
  };

  const handleSessionChange = (sessionId) => {
    const selected = sessions.find((s) => s._id === sessionId);
    if (selected) {
      axios
        .patch(`${apiUrl}/api/sessions/${sessionId}/activate`)
        .then(() => {
          setCurrentSession(selected);
          setSessions((prev) =>
            prev.map((s) =>
              s._id === sessionId
                ? { ...s, isActive: true }
                : { ...s, isActive: false }
            )
          );
        })
        .catch((err) => console.error("Session switch failed", err));
    }
  };

  const checkUserRoleAndRedirect = () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) return navigate("/login");

    const role = JSON.parse(atob(token.split(".")[1])).role;
    if (role === "admin") navigate("/dashboard/admin");
    else if (role === "teacher") navigate("/dashboard/teacher");
    else if (role === "student") navigate("/dashboard/student");
    else navigate("/login");
  };

  // useEffect(() => {
  //   axios
  //     .get(`${apiUrl}/api/session`)
  //     .then((res) => {
  //       console.log("✅ Raw session response:", res.data); // ADD THIS LINE
  //       const all = res.data || [];
  //       setSessions(all);

  //       const active = all.find((s) => s.isActive);
  //       setCurrentSession(active);
  //     })
  //     .catch((err) => console.error("❌ Failed to load sessions", err));
  // }, []);
  useEffect(() => {
    const fetchSections = async () => {
      try {
        if (user?.tradeSection && currentSession?._id) {
          console.log("Fetching section for user:", user);
          const response = await axios.get(
            `${apiUrl}/api/section/one/${user.tradeSection}`
          );
          console.log("Fetched section:", response.data?.data);
          setSections(response.data?.data ? [response.data.data] : []);
        } else {
          console.warn("Waiting for user or currentSession...");
        }
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, [user, currentSession, apiUrl]);

  if (!user || !currentSession?._id) {
    return null; // or <LoadingSpinner />
  }

  return (
    <>
      {/* Desktop Nav */}
      <div className="top-nav desktop-only shadowss" style={topNavStyle}>
        <div className="header" style={topNavStyle}>
          <div className="header-left flex items-center gap-4 px-4">
            <img
              src={last}
              alt="Logo 1"
              style={{
                height: "60px",
                width: "auto",
                objectFit: "contain",
                marginLeft: "20px",
              }}
            />
            <img
              src={lagos}
              alt="Logo 2"
              style={{
                height: "60px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          <div className="logo school-logo">
            <a
              style={{
                color: topNavStyle.color,
                fontWeight: "800",
                paddingLeft: "30px",
                fontSize: "20px",
              }}
            >
              GTC Lagos Agidingbi
            </a>
          </div>
          <ul className="nav user-menu flex items-center gap-4 px-4">
            <li className="relative z-50" style={{ position: "relative" }}>
              <button
                onClick={toggleMenuDropdown}
                title="Switch Session"
                className="flex items-center gap-2 px-4 py-2 rounded-md"
                style={{
                  backgroundColor: darkMode ? "#e63e54" : "#e63e54",
                  color: "white",
                  borderRadius: "8px",
                  border: "none",
                }}
              >
                <span>
                  {currentSession?.name
                    ? `Session: ${currentSession.name}`
                    : "No Session"}
                </span>
                <FiChevronDown size={18} style={{ color: "white" }} />
              </button>

              {/* 🔽 Dropdown */}
              {menuDropdownOpen && (
                <ul
                  className="dropdown-session absolute right-0 mt-2 border rounded-md shadow-lg"
                  style={{
                    backgroundColor: darkMode ? "#1f2937" : "#fff",
                    top: "calc(100% + 4px)",
                    minWidth: "200px",
                    zIndex: 9999,
                    borderRadius: "8px",
                  }}
                >
                  {sessions.length > 0 ? (
                    sessions.map((session) => (
                      <li
                        key={session._id}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                          session._id === currentSession?._id
                            ? "bg-gray-200 dark:bg-gray-600 font-semibold"
                            : ""
                        }`}
                        onClick={() => {
                          handleSessionChange(session._id);
                          setMenuDropdownOpen(false);
                        }}
                      >
                        {session.name}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-500">
                      No sessions available
                    </li>
                  )}
                </ul>
              )}
            </li>

            {/* 🔔 🔧 👤 other icons (these should not move) */}
            <li className="nav-item dropdown hidden lg:block hide-below-970">
              <a href="#" className="dropdown-toggle">
                <FiBell size={22} color={topNavStyle.color} />
              </a>
            </li>
            <li className="nav-item dropdown hidden lg:block hide-below-970">
              <a href="/settings" className="dropdown-toggle">
                <FiSettings size={22} color={topNavStyle.color} />
              </a>
            </li>
            <li className="nav-item dropdown hidden lg:block hide-below-970">
              <a href="/settings?tab=profile" className="dropdown-toggle">
                <FiUser
                  className="text-2xl"
                  style={{ color: darkMode ? "white" : "black" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Nav */}
      {/*<div className="top-nav mobile-only" style={topNavStyle}>
        <div className="flex justify-between items-center p-4">
          <button onClick={handleSidebarToggle} className="text-2xl">
            <FiMenu color={topNavStyle.color} />
          </button>

          <a
            className="logo"
            href="/"
            style={{ color: topNavStyle.color, fontWeight: "bold" }}
          >
            School Portal
          </a>

          <button onClick={toggleMenuDropdown}>
            <FiMoreVertical color={topNavStyle.color} />
          </button>
        </div>
      </div>*/}

      <div className="top-nav mobile-only" style={topNavStyle}>
        <button
          onClick={handleSidebarToggle}
          className=" text-2xl"
          style={{ color: darkMode ? "white" : "black" }}
        >
          <FiMenu style={{ color: darkMode ? "white" : "black" }} />
        </button>

        <a
          className="logo"
          href="/"
          style={{
            textDecoration: "none",
            color: darkMode ? "white" : "black",
          }}
        >
          GTC Lagos Agidingbi
        </a>
        <div
          // className={`sidebar mobile-sidebar ${
          //   isSidebarOpen ? "open" : "closed"
          // }`}
          id="sidebar"
          // style={{ backgroundColor: "#202123", color: "#fff" }}

          style={{
            position: "fixed",
            top: 0,
            left: isSidebarOpen ? 0 : "-250px",
            width: "250px",
            height: "100vh",
            backgroundColor: darkMode ? "#202123" : "#fff", // dark vs light bg
            color: darkMode ? "#fff" : "#000", // dark vs light text
            transition: "left 0.3s ease-in-out",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <button
            onClick={handleSidebarToggle}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "none",
              border: "none",
              color: darkMode ? "#fff" : "#000",
              fontSize: "24px",
              cursor: "pointer",
            }}
            aria-label="Close Sidebar"
          >
            ✕
          </button>
          <div
            className="sidebar-inner slimscroll"
            style={{
              overflowY: "auto",
              maxHeight: "100vh",
            }}
          >
            <div id="sidebar-menu" className="sidebar-menu">
              <ul style={{ paddingBottom: "80px", marginTop: "50px" }}>
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
                          //     : "#ddd" // dark active bg vs light active bg
                          //   : "transparent",
                          borderRadius: "5px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: isActive("/home")
                            ? darkMode
                              ? "white"
                              : "black" // active text color dark/light
                            : darkMode
                            ? "#fff"
                            : "#000", // inactive text color dark/light
                          textDecoration: "none",
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
                            fontSize: "14px",
                            color: isActive("/home")
                              ? darkMode
                                ? "white"
                                : "black"
                              : darkMode
                              ? "#fff"
                              : "#000",
                          }}
                        >
                          Home
                        </span>
                      </a>
                    </li>

                    <li className="submenu">
                      <a
                        href="/chat/new"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px",
                          color: darkMode ? "#fff" : "#000",
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
                            fontSize: "14px",
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
                      </a>
                    </li>
                    <li className="submenu">
                      <a
                        href="/library"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px",
                          color: darkMode ? "#fff" : "#000",
                          textDecoration: "none",
                        }}
                      >
                        <MdPermMedia
                          size={20}
                          color={
                            isActive("/digital")
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
                            fontSize: "14px",
                            color: isActive("/digital")
                              ? darkMode
                                ? "white"
                                : "black"
                              : darkMode
                              ? "#ccc"
                              : "#555",
                          }}
                        >
                          Library
                        </span>
                      </a>
                    </li>

                    <li className="submenu">
                      <a
                        href="/today"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px",
                          color: darkMode ? "#fff" : "#000",
                          textDecoration: "none",
                        }}
                      >
                        <FiMessageSquare
                          size={20}
                          color={
                            isActive("/today")
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
                            fontSize: "14px",
                            color: isActive("/today")
                              ? darkMode
                                ? "white"
                                : "black"
                              : darkMode
                              ? "#ccc"
                              : "#555",
                          }}
                        >
                          Today's Chat
                        </span>
                      </a>
                    </li>
                    <li className="submenu">
                      <a
                        href="/yesterday"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px",
                          color: darkMode ? "#fff" : "#000",
                          textDecoration: "none",
                        }}
                      >
                        <FiClock
                          size={20}
                          color={
                            isActive("/yesterday")
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
                            fontSize: "14px",
                            color: isActive("/yesterday")
                              ? darkMode
                                ? "white"
                                : "black"
                              : darkMode
                              ? "#ccc"
                              : "#555",
                          }}
                        >
                          Yesterday Chat
                        </span>
                      </a>
                    </li>
                    {/* Settings */}

                    <li className="submenu">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSubmenu(5);
                        }}
                        className={`${
                          openSubmenus.has(5) ? "subdrop active" : ""
                        }`.trim()}
                        style={{
                          backgroundColor: openSubmenus.has(5)
                            ? darkMode
                              ? "#343541"
                              : "#ddd"
                            : "transparent",
                          borderRadius: "5px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: openSubmenus.has(5)
                            ? darkMode
                              ? "white"
                              : "black"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                          textDecoration: "none",
                        }}
                      >
                        <FiBarChart2
                          size={20}
                          color={
                            openSubmenus.has(5)
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
                            fontSize: "14px",
                            color: openSubmenus.has(5)
                              ? darkMode
                                ? "white"
                                : "black"
                              : darkMode
                              ? "#ccc"
                              : "#555",
                          }}
                        >
                          Finance Management
                        </span>
                        <FiChevronDown
                          style={{
                            marginLeft: "auto",
                            transform: openSubmenus.has(5)
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            color: openSubmenus.has(5)
                              ? darkMode
                                ? "white"
                                : "black"
                              : darkMode
                              ? "#ccc"
                              : "#555",
                          }}
                        />
                      </a>
                      {openSubmenus.has(5) && (
                        <ul
                          className="submenu-list"
                          style={{
                            backgroundColor: darkMode ? "#202123" : "#f9f9f9",
                            paddingLeft: "20px",
                          }}
                        >
                          {[
                            {
                              href: "/financial-inquiries",
                              label: "   Financial inquiries",
                            },
                            {
                              href: "/budgeting",
                              label: "       Budgeting & money management",
                            },
                            {
                              href: "/spending-analysis",
                              label: "  Smart spending analysis",
                            },
                            {
                              href: "/goal-tracking",
                              label: "  Goal tracking",
                            },
                          ].map(({ href, label }) => (
                            <li key={href}>
                              <a
                                href={href}
                                style={{
                                  color: darkMode ? "white" : "black",
                                  textDecoration: "none",
                                  display: "block",
                                  padding: "5px 0",
                                }}
                              >
                                {label}
                              </a>
                            </li>
                          ))}
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
                        className={`${
                          openSubmenus.has(7) ? "subdrop active" : ""
                        }`.trim()}
                        style={{
                          backgroundColor: openSubmenus.has(7)
                            ? darkMode
                              ? "#343541"
                              : "#ddd"
                            : "transparent",
                          borderRadius: "5px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: openSubmenus.has(7)
                            ? darkMode
                              ? "white"
                              : "black"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                          textDecoration: "none",
                        }}
                      >
                        <FiTrendingUp
                          size={20}
                          color={
                            openSubmenus.has(7)
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
                            fontSize: "14px",
                            color: openSubmenus.has(7)
                              ? darkMode
                                ? "white"
                                : "black"
                              : darkMode
                              ? "#ccc"
                              : "#555",
                          }}
                        >
                          Investment Advisory
                        </span>
                        <FiChevronDown
                          style={{
                            marginLeft: "auto",
                            transform: openSubmenus.has(7)
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            color: openSubmenus.has(7)
                              ? darkMode
                                ? "white"
                                : "black"
                              : darkMode
                              ? "#ccc"
                              : "#555",
                          }}
                        />
                      </a>
                      {openSubmenus.has(7) && (
                        <ul
                          className="submenu-list"
                          style={{
                            backgroundColor: darkMode ? "#202123" : "#f9f9f9",
                            paddingLeft: "20px",
                          }}
                        >
                          {[
                            {
                              href: "/investment-recommendation",
                              label: "Investment Recommendation",
                            },
                            {
                              href: "/market-analysis",
                              label: "Forex Market",
                            },
                            {
                              href: "/decentralized-finance",
                              label: "  DeFi & Blockchain opportunities",
                            },
                          ].map(({ href, label }) => (
                            <li key={href}>
                              <a
                                href={href}
                                style={{
                                  color: darkMode ? "white" : "black",
                                  textDecoration: "none",
                                  display: "block",
                                  padding: "5px 0",
                                }}
                              >
                                {label}
                              </a>
                            </li>
                          ))}
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
                        className={`${
                          openSubmenus.has(8) ? "subdrop active" : ""
                        }`.trim()}
                        style={{
                          backgroundColor: openSubmenus.has(8)
                            ? darkMode
                              ? "#343541"
                              : "#ddd"
                            : "transparent",
                          borderRadius: "5px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: openSubmenus.has(8)
                            ? darkMode
                              ? "white"
                              : "black"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                          textDecoration: "none",
                        }}
                      >
                        <FiBookOpen
                          size={20}
                          color={
                            openSubmenus.has(8)
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
                            fontSize: "14px",
                            color: openSubmenus.has(8)
                              ? darkMode
                                ? "white"
                                : "black"
                              : darkMode
                              ? "#ccc"
                              : "#555",
                          }}
                        >
                          Financial Education
                        </span>
                        <FiChevronDown
                          style={{
                            marginLeft: "auto",
                            transform: openSubmenus.has(8)
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            color: openSubmenus.has(8)
                              ? darkMode
                                ? "white"
                                : "black"
                              : darkMode
                              ? "#ccc"
                              : "#555",
                          }}
                        />
                      </a>
                      {openSubmenus.has(8) && (
                        <ul
                          className="submenu-list"
                          style={{
                            backgroundColor: darkMode ? "#202123" : "#f9f9f9",
                            paddingLeft: "20px",
                          }}
                        >
                          {[
                            {
                              href: "/finance-education",
                              label: "  Financial education & coaching",
                            },
                            {
                              href: "/ai-based-tax",
                              label: "Business and tax advisory",
                            },
                            {
                              href: "/expense-tracker",
                              label: "Expense Tracking",
                            },
                          ].map(({ href, label }) => (
                            <li key={href}>
                              <a
                                href={href}
                                style={{
                                  color: darkMode ? "white" : "black",
                                  textDecoration: "none",
                                  display: "block",
                                  padding: "5px 0",
                                }}
                              >
                                {label}
                              </a>
                            </li>
                          ))}
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
                        className={`${
                          openSubmenus.has(8) ? "subdrop active" : ""
                        }`.trim()}
                        style={{
                          backgroundColor: openSubmenus.has(12)
                            ? darkMode
                              ? "#343541"
                              : "#ddd"
                            : "transparent",
                          borderRadius: "5px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: openSubmenus.has(12)
                            ? darkMode
                              ? "white"
                              : "black"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                          textDecoration: "none",
                        }}
                      >
                        <FiCreditCard
                          size={20}
                          color={
                            openSubmenus.has(12)
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
                            fontSize: "14px",
                            color: openSubmenus.has(12)
                              ? darkMode
                                ? "white"
                                : "black"
                              : darkMode
                              ? "#ccc"
                              : "#555",
                          }}
                        >
                          Credit Solutions
                        </span>
                        <FiChevronDown
                          style={{
                            marginLeft: "auto",
                            transform: openSubmenus.has(12)
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            color: openSubmenus.has(12)
                              ? darkMode
                                ? "white"
                                : "black"
                              : darkMode
                              ? "#ccc"
                              : "#555",
                          }}
                        />
                      </a>
                      {openSubmenus.has(12) && (
                        <ul
                          className="submenu-list"
                          style={{
                            backgroundColor: darkMode ? "#202123" : "#f9f9f9",
                            paddingLeft: "20px",
                          }}
                        >
                          {[
                            {
                              href: "/credit-evaluation",
                              label: "  Credit scoring and evaluation",
                            },
                            {
                              href: "/loan-recommendation",
                              label: "Loan recommendations",
                            },
                            {
                              href: "/bnpl",
                              label: "    Buy Now Pay Later (BNPL) options",
                            },
                          ].map(({ href, label }) => (
                            <li key={href}>
                              <a
                                href={href}
                                style={{
                                  color: darkMode ? "white" : "black",
                                  textDecoration: "none",
                                  display: "block",
                                  padding: "5px 0",
                                }}
                              >
                                {label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>

                    <li className="submenu">
                      <a
                        href="/pricing"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px",
                          color: darkMode ? "white" : "black",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        <HiOutlineViewGrid
                          size={20}
                          color={darkMode ? "white" : "black"}
                          onClick={() => setShowLogoutModal(true)}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color: darkMode ? "white" : "black",
                          }}
                          href="/pricing"
                        >
                          Pricing
                        </span>
                      </a>
                    </li>

                    <li className="submenu">
                      <a
                        onClick={() => setShowLogoutModal(true)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px",
                          color: darkMode ? "white" : "black",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        <FiLogOut
                          size={20}
                          color={darkMode ? "white" : "black"}
                          onClick={() => setShowLogoutModal(true)}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color: darkMode ? "white" : "black",
                          }}
                          onClick={() => setShowLogoutModal(true)}
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
        {isSidebarOpen && (
          <div
            onClick={handleSidebarToggle}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: darkMode
                ? "rgba(255, 255, 255, 0.15)" // lighter overlay in dark mode
                : "rgba(0, 0, 0, 0.5)", // darker overlay in light mode
              zIndex: 999,
              cursor: "pointer",
            }}
          />
        )}

        <div className="nav-icons flex items-center gap-2">
          {/* Notification Icon */}
          <a href="#" className="relative">
            <FiBell
              className=" text-2xl"
              style={{
                color: darkMode ? "white" : "black",
              }}
            />
          </a>

          {/* User Icon */}
          <a
            href="javascript:void(0);"
            onClick={toggleMobileMenu}
            className="text-white text-2xl"
          >
            <FiUser
              style={{
                color: darkMode ? "white" : "black",
              }}
            />
          </a>
        </div>

        {/* Profile Dropdown Menu */}
        <div
          className={`dropdown-menu ${mobileMenuOpen ? "show" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <a
            className="dropdown-item"
            onClick={() =>
              navigate("/settings?tab=profile", { state: { tab: "profile" } })
            }
          >
            My Profile
          </a>
          <a className="dropdown-item" href="/settings">
            Settings
          </a>
          <a className="dropdown-item" onClick={() => setShowLogoutModal(true)}>
            Logout
          </a>
        </div>
      </div>
    </>
  );
};

export default TopNav;
