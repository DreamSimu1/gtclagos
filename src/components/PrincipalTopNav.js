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
import { FiUsers, FiActivity, FiFileText, FiGrid } from "react-icons/fi";
import { FiBook } from "react-icons/fi";
import axios from "axios";
import { DarkModeContext } from "../context/darkModeContext";
import { MdPermMedia } from "react-icons/md";
import { useLocation } from "react-router-dom"; // Import useLocation
import { HiOutlineViewGrid } from "react-icons/hi";
import "./TopNav.css";
import last from "./lastveblogo.png";
import lagos from "./lagoslogo.png";
// import { SessionContext } from "../../context/SessionContext";

const PrincipalTopNav = ({ setShowModal }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSession, setCurrentSession] = useState(null);
  const [sections, setSections] = useState([]);
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
  useEffect(() => {
    const fetchSections = async () => {
      try {
        if (currentSession?._id) {
          const response = await axios.get(
            `${apiUrl}/api/section/${currentSession._id}`
          );
          setSections(response.data?.data || []);
        }
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, [currentSession, apiUrl]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/session`)
      .then((res) => {
        console.log("✅ Raw session response:", res.data); // ADD THIS LINE
        const all = res.data || [];
        setSessions(all);

        const active = all.find((s) => s.isActive);
        setCurrentSession(active);
      })
      .catch((err) => console.error("❌ Failed to load sessions", err));
  }, []);

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
          className="text-2xl"
          style={{
            backgroundColor: "#e63e54", // red background
            color: "white", // white icon color
            padding: "8px", // spacing inside button
            borderRadius: "8px", // rounded corners
            border: "none", // no border
            cursor: "pointer", // pointer on hover
          }}
        >
          <FiMenu />
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
          <img
            src={lagos}
            alt="Logo 2"
            style={{
              height: "60px",
              width: "auto",
              objectFit: "contain",
            }}
          />
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
                        href="/principal/dashboard"
                        className={`${
                          isActive("/principal/dashboard") ? "active-menu" : ""
                        }`}
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
                          color: isActive("/principal/dashboard")
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
                            isActive("/principal/dashboard")
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
                            color: isActive("/principal/dashboard")
                              ? darkMode
                                ? "white"
                                : "black"
                              : darkMode
                              ? "#fff"
                              : "#000",
                          }}
                        >
                          Dashboard
                        </span>
                      </a>
                    </li>
                    <li className="submenu">
                      <a
                        href="/principal/dashboard/sections"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "10px",
                        }}
                      >
                        <FiGrid
                          size={20}
                          color={
                            isActive("/principal/dashboard")
                              ? darkMode
                                ? "white"
                                : "black" // active color: white in dark, black in light
                              : darkMode
                              ? "#fff"
                              : "#000" // inactive color: lighter gray dark/light
                          }
                          style={{ marginRight: "8px" }}
                        />
                        <span style={{ fontSize: "15px", color: "black" }}>
                          All Sections
                        </span>
                      </a>
                    </li>
                    <li className="submenu">
                      <a
                        href="/principal/dashboard/vice-principal"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "10px",
                        }}
                      >
                        <FiUser
                          size={20}
                          color={
                            isActive("/principal/dashboard")
                              ? darkMode
                                ? "white"
                                : "black" // active color: white in dark, black in light
                              : darkMode
                              ? "#fff"
                              : "#000" // inactive color: lighter gray dark/light
                          }
                          style={{ marginRight: "8px" }}
                        />
                        <span style={{ fontSize: "15px", color: "black" }}>
                          Vice Principal
                        </span>
                      </a>
                    </li>
                    <li className="submenu">
                      <a
                        href="/principal/dashboard/hod"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "10px",
                        }}
                      >
                        <FiUser
                          size={20}
                          color={
                            isActive("/principal/dashboard")
                              ? darkMode
                                ? "white"
                                : "black" // active color: white in dark, black in light
                              : darkMode
                              ? "#fff"
                              : "#000" // inactive color: lighter gray dark/light
                          }
                          style={{ marginRight: "8px" }}
                        />
                        <span style={{ fontSize: "15px", color: "black" }}>
                          HOD
                        </span>
                      </a>
                    </li>

                    <li className="submenu">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSubmenu("teachers");
                        }}
                        className={`submenu-link ${
                          openSubmenus.has("teachers") ? "subdrop active" : ""
                        }`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px",
                          borderRadius: "5px",
                          backgroundColor: openSubmenus.has("teachers")
                            ? darkMode
                              ? "#343541"
                              : "#ddd"
                            : "transparent",
                          textDecoration: "none",
                          color: openSubmenus.has("teachers")
                            ? darkMode
                              ? "#fff"
                              : "#000"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FiUser
                            size={20}
                            style={{ marginRight: "8px" }}
                            color={
                              openSubmenus.has("teachers")
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
                              color: openSubmenus.has("teachers")
                                ? darkMode
                                  ? "#fff"
                                  : "#000"
                                : darkMode
                                ? "#ccc"
                                : "#555",
                            }}
                          >
                            Teachers
                          </span>
                        </div>

                        <FiChevronDown
                          style={{
                            transition: "transform 0.3s ease",
                            transform: openSubmenus.has("teachers")
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            color: darkMode ? "#fff" : "#000",
                          }}
                        />
                      </a>

                      {/* Dynamic dropdown */}
                      {openSubmenus.has("teachers") && (
                        <ul
                          className="submenu-list"
                          style={{ paddingLeft: "32px", marginTop: "5px" }}
                        >
                          {sections.map((section) => (
                            <li key={section._id}>
                              <a
                                href={`/principal/dashboard/section-teachers/${section._id}`}
                                style={{ color: darkMode ? "#fff" : "#000" }}
                              >
                                {section.name}
                              </a>
                            </li>
                          ))}
                          {sections.length === 0 && (
                            <li>
                              <span
                                style={{ color: darkMode ? "#aaa" : "#555" }}
                              >
                                No sections yet
                              </span>
                            </li>
                          )}
                        </ul>
                      )}
                    </li>

                    {/* Students */}
                    <li className="submenu">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSubmenu("students");
                        }}
                        className={`submenu-link ${
                          openSubmenus.has("students") ? "subdrop active" : ""
                        }`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px",
                          borderRadius: "5px",
                          backgroundColor: openSubmenus.has("students")
                            ? darkMode
                              ? "#343541"
                              : "#ddd"
                            : "transparent",
                          textDecoration: "none",
                          color: openSubmenus.has("students")
                            ? darkMode
                              ? "#fff"
                              : "#000"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FiUsers
                            size={20}
                            style={{ marginRight: "8px" }}
                            color={
                              openSubmenus.has("students")
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
                              color: openSubmenus.has("students")
                                ? darkMode
                                  ? "#fff"
                                  : "#000"
                                : darkMode
                                ? "#ccc"
                                : "#555",
                            }}
                          >
                            Students
                          </span>
                        </div>

                        <FiChevronDown
                          style={{
                            transition: "transform 0.3s ease",
                            transform: openSubmenus.has("students")
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            color: darkMode ? "#fff" : "#000",
                          }}
                        />
                      </a>

                      {/* Dynamic dropdown */}
                      {openSubmenus.has("students") && (
                        <ul
                          className="submenu-list"
                          style={{ paddingLeft: "32px", marginTop: "5px" }}
                        >
                          {sections.map((section) => (
                            <li key={section._id}>
                              <a
                                href={`/principal/dashboard/students/${section._id}`}
                                style={{ color: darkMode ? "#fff" : "#000" }}
                              >
                                {section.name}
                              </a>
                            </li>
                          ))}
                          {sections.length === 0 && (
                            <li>
                              <span
                                style={{ color: darkMode ? "#aaa" : "#555" }}
                              >
                                No sections yet
                              </span>
                            </li>
                          )}
                        </ul>
                      )}
                    </li>
                    {/* Subjects */}

                    {/* Subject */}
                    <li className="submenu">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSubmenu("subject");
                        }}
                        className={`submenu-link ${
                          openSubmenus.has("subject") ? "subdrop active" : ""
                        }`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px",
                          borderRadius: "5px",
                          backgroundColor: openSubmenus.has("subject")
                            ? darkMode
                              ? "#343541"
                              : "#ddd"
                            : "transparent",
                          textDecoration: "none",
                          color: openSubmenus.has("subject")
                            ? darkMode
                              ? "#fff"
                              : "#000"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FiBook
                            size={20}
                            style={{ marginRight: "8px" }}
                            color={
                              openSubmenus.has("subject")
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
                              color: openSubmenus.has("subject")
                                ? darkMode
                                  ? "#fff"
                                  : "#000"
                                : darkMode
                                ? "#ccc"
                                : "#555",
                            }}
                          >
                            Subjects
                          </span>
                        </div>

                        <FiChevronDown
                          style={{
                            transition: "transform 0.3s ease",
                            transform: openSubmenus.has("subject")
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            color: darkMode ? "#fff" : "#000",
                          }}
                        />
                      </a>

                      {/* Dynamic dropdown */}
                      {openSubmenus.has("subject") && (
                        <ul
                          className="submenu-list"
                          style={{ paddingLeft: "32px", marginTop: "5px" }}
                        >
                          {sections.map((section) => (
                            <li key={section._id}>
                              <a
                                href={`/principal/dashboard/subject/${section._id}`}
                                style={{ color: darkMode ? "#fff" : "#000" }}
                              >
                                {section.name}
                              </a>
                            </li>
                          ))}
                          {sections.length === 0 && (
                            <li>
                              <span
                                style={{ color: darkMode ? "#aaa" : "#555" }}
                              >
                                No sections yet
                              </span>
                            </li>
                          )}
                        </ul>
                      )}
                    </li>

                    {/* Exam Mark */}
                    <li className="submenu">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSubmenu("past");
                        }}
                        className={`submenu-link ${
                          openSubmenus.has("past") ? "subdrop active" : ""
                        }`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between", // ⬅️ ensures icon+text left, chevron right
                          padding: "10px",
                          borderRadius: "5px",
                          backgroundColor: openSubmenus.has("past")
                            ? darkMode
                              ? "#343541"
                              : "#ddd"
                            : "transparent",
                          textDecoration: "none",
                          color: openSubmenus.has("past")
                            ? darkMode
                              ? "#fff"
                              : "#000"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FiActivity
                            size={20}
                            style={{ marginRight: "8px" }}
                            color={
                              openSubmenus.has("affective")
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
                              color: openSubmenus.has("affective")
                                ? darkMode
                                  ? "#fff"
                                  : "#000"
                                : darkMode
                                ? "#ccc"
                                : "#555",
                            }}
                          >
                            Psychomotor
                          </span>
                        </div>

                        {/* Chevron */}
                        <FiChevronDown
                          style={{
                            transition: "transform 0.3s ease",
                            transform: openSubmenus.has("affective")
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            color: darkMode ? "#fff" : "#000",
                          }}
                        />
                      </a>

                      {/* Dropdown items */}
                      {openSubmenus.has("affective") && (
                        <ul
                          className="submenu-list"
                          style={{ paddingLeft: "32px", marginTop: "5px" }}
                        >
                          <li>
                            <a
                              href="/principal/dashboard/jamb-past-questions"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Manage Category
                            </a>
                          </li>
                          <li>
                            <a
                              href="/principal/dashboard/waec-past-questions"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Manage Student Report
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>

                    {/* Past Questions */}
                    <li className="submenu">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSubmenu("past");
                        }}
                        className={`submenu-link ${
                          openSubmenus.has("past") ? "subdrop active" : ""
                        }`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between", // ⬅️ ensures icon+text left, chevron right
                          padding: "10px",
                          borderRadius: "5px",
                          backgroundColor: openSubmenus.has("past")
                            ? darkMode
                              ? "#343541"
                              : "#ddd"
                            : "transparent",
                          textDecoration: "none",
                          color: openSubmenus.has("past")
                            ? darkMode
                              ? "#fff"
                              : "#000"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FiFileText
                            size={20}
                            style={{ marginRight: "8px" }}
                            color={
                              openSubmenus.has("past")
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
                              color: openSubmenus.has("past")
                                ? darkMode
                                  ? "#fff"
                                  : "#000"
                                : darkMode
                                ? "#ccc"
                                : "#555",
                            }}
                          >
                            Past Questions
                          </span>
                        </div>

                        {/* Chevron */}
                        <FiChevronDown
                          style={{
                            transition: "transform 0.3s ease",
                            transform: openSubmenus.has("past")
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            color: darkMode ? "#fff" : "#000",
                          }}
                        />
                      </a>

                      {/* Dropdown items */}
                      {openSubmenus.has("past") && (
                        <ul
                          className="submenu-list"
                          style={{ paddingLeft: "32px", marginTop: "5px" }}
                        >
                          <li>
                            <a
                              href="/principal/dashboard/jamb-past-questions"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              JAMB (UTME)
                            </a>
                          </li>
                          <li>
                            <a
                              href="/principal/dashboard/waec-past-questions"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              WAEC
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>
                    {/* exams */}
                    <li className="submenu">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSubmenu("exams");
                        }}
                        className={`submenu-link ${
                          openSubmenus.has("exams") ? "subdrop active" : ""
                        }`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px",
                          borderRadius: "5px",
                          backgroundColor: openSubmenus.has("exams")
                            ? darkMode
                              ? "#343541"
                              : "#ddd"
                            : "transparent",
                          textDecoration: "none",
                          color: openSubmenus.has("exams")
                            ? darkMode
                              ? "#fff"
                              : "#000"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FiEdit
                            size={20}
                            style={{ marginRight: "8px" }}
                            color={
                              openSubmenus.has("exams")
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
                              color: openSubmenus.has("exams")
                                ? darkMode
                                  ? "#fff"
                                  : "#000"
                                : darkMode
                                ? "#ccc"
                                : "#555",
                            }}
                          >
                            Exam
                          </span>
                        </div>

                        {/* Chevron */}
                        <FiChevronDown
                          style={{
                            transition: "transform 0.3s ease",
                            transform: openSubmenus.has("exams")
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            color: darkMode ? "#fff" : "#000",
                          }}
                        />
                      </a>

                      {/* Dropdown content */}
                      {openSubmenus.has("exams") && (
                        <ul
                          className="submenu-list"
                          style={{ paddingLeft: "32px", marginTop: "5px" }}
                        >
                          <li>
                            <a
                              href="/principal/dashboard/examlist"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Exam List
                            </a>
                          </li>
                          <li>
                            <a
                              href="/principal/dashboard/manage-online-result"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Exam Grade
                            </a>
                          </li>
                          <li>
                            <a
                              href="/principal/dashboard/exam"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Manage Marks
                            </a>
                          </li>
                          <li>
                            <a
                              href="/principal/dashboard/manage-online-result"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Onscreen Marking
                            </a>
                          </li>
                          <li>
                            <a
                              href="/principal/dashboard/manage-online-result"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Broad Sheet
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
                          toggleSubmenu("exam");
                        }}
                        className={`submenu-link ${
                          openSubmenus.has("exam") ? "subdrop active" : ""
                        }`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px",
                          borderRadius: "5px",
                          backgroundColor: openSubmenus.has("exam")
                            ? darkMode
                              ? "#343541"
                              : "#ddd"
                            : "transparent",
                          textDecoration: "none",
                          color: openSubmenus.has("exam")
                            ? darkMode
                              ? "#fff"
                              : "#000"
                            : darkMode
                            ? "#ccc"
                            : "#555",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FiEdit
                            size={20}
                            style={{ marginRight: "8px" }}
                            color={
                              openSubmenus.has("exam")
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
                              color: openSubmenus.has("exam")
                                ? darkMode
                                  ? "#fff"
                                  : "#000"
                                : darkMode
                                ? "#ccc"
                                : "#555",
                            }}
                          >
                            Online Exam
                          </span>
                        </div>

                        {/* Chevron */}
                        <FiChevronDown
                          style={{
                            transition: "transform 0.3s ease",
                            transform: openSubmenus.has("exam")
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            color: darkMode ? "#fff" : "#000",
                          }}
                        />
                      </a>

                      {/* Dropdown content */}
                      {openSubmenus.has("exam") && (
                        <ul
                          className="submenu-list"
                          style={{ paddingLeft: "32px", marginTop: "5px" }}
                        >
                          <li>
                            <a
                              href="/principal/dashboard/manage-online-exam"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              Manage Online Exam
                            </a>
                          </li>
                          <li>
                            <a
                              href="/principal/dashboard/manage-online-result"
                              style={{ color: darkMode ? "#fff" : "#000" }}
                            >
                              View Result
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>

                    {/* Payment History */}
                    <li className="submenu">
                      <a
                        href="/principal/dashboard/student-payment"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "10px",
                        }}
                      >
                        <FiBarChart2
                          size={20}
                          color={
                            isActive("/principal/dashboard")
                              ? darkMode
                                ? "white"
                                : "black" // active color: white in dark, black in light
                              : darkMode
                              ? "#fff"
                              : "#000" // inactive color: lighter gray dark/light
                          }
                          style={{ marginRight: "8px" }}
                        />
                        <span style={{ fontSize: "15px" }}>Accounting</span>
                      </a>
                    </li>

                    {/* Attendance */}
                    <li className="submenu">
                      <a
                        href="/principal/dashboard/student-payment"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "10px",
                        }}
                      >
                        <FiBook
                          size={20}
                          color={
                            isActive("/principal/dashboard")
                              ? darkMode
                                ? "white"
                                : "black" // active color: white in dark, black in light
                              : darkMode
                              ? "#fff"
                              : "#000" // inactive color: lighter gray dark/light
                          }
                          style={{ marginRight: "8px" }}
                        />
                        <span style={{ fontSize: "15px" }}>Attendance</span>
                      </a>
                    </li>

                    {/* Study Material */}
                    <li className="submenu">
                      <a
                        href="/principal/dashboard/student-material"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "10px",
                        }}
                      >
                        <MdPermMedia
                          size={20}
                          color={
                            isActive("/principal/dashboard")
                              ? darkMode
                                ? "white"
                                : "black" // active color: white in dark, black in light
                              : darkMode
                              ? "#fff"
                              : "#000" // inactive color: lighter gray dark/light
                          }
                          style={{ marginRight: "8px" }}
                        />
                        <span style={{ fontSize: "15px" }}>Study Material</span>
                      </a>
                    </li>

                    {/* Profile */}
                    <li className="submenu">
                      <a
                        href="/dashboard/profile"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "10px",
                        }}
                      >
                        <FiUser
                          size={20}
                          color={
                            isActive("/principal/dashboard")
                              ? darkMode
                                ? "white"
                                : "black" // active color: white in dark, black in light
                              : darkMode
                              ? "#fff"
                              : "#000" // inactive color: lighter gray dark/light
                          }
                          style={{ marginRight: "8px" }}
                        />
                        <span style={{ fontSize: "15px" }}>General</span>
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

export default PrincipalTopNav;
