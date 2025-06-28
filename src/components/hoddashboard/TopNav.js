import React, { useState, useContext, useEffect } from "react";

import "./TopNav.css";

import { FaEllipsisV } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import logo from "./oga4.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { HiOutlineViewGrid } from "react-icons/hi";
import { useSidebar } from "./SidebarProvider";
import "./side.css";

import { MdPermMedia } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation

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
import "./TopNav.css";
import { FiHelpCircle } from "react-icons/fi";
import { DarkModeContext } from "../../context/darkModeContext";
const TopNav = () => {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode } = useContext(DarkModeContext); // <--- this line is missing
  const apiUrl = process.env.REACT_APP_API_URL;
  const toggleDesktopMenu = () => {
    setDesktopMenuOpen(!desktopMenuOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const [openSubmenus, setOpenSubmenus] = useState(new Set());
  // const { isSidebarOpen } = useSidebar();
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
  // const handleSidebarToggle = () => {
  //   // Logic to open/close sidebar
  //   console.log("Sidebar toggle clicked");
  // };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [chats, setChats] = useState([]);

  // const [isSidebarOpen, setSidebarOpen] = useState(false);

  // const handleSidebarToggle = () => {
  //   setSidebarOpen((prev) => {
  //     const newState = !prev;
  //     console.log("Sidebar toggled. New state:", newState);
  //     return newState;
  //   });
  // };
  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const handleSearch = () => {
    // Logic to open search modal or focus search input
    console.log("Search clicked");
  };

  const handleNewChat = () => {
    // Logic to start a new chat or redirect
    console.log("New chat clicked");
  };
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
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
  const handleShare = () => {
    alert("Share clicked!");
  };
  const handleLogout = () => {
    // Clear all items from localStorage
    localStorage.clear();
    // Navigate to login page
    navigate("/login");
  };
  const handleArchive = () => {
    alert("Archive clicked!");
  };

  const handleDelete = () => {
    alert("Delete clicked!");
  };

  const toggleMenuDropdown = () => {
    setMenuDropdownOpen(!menuDropdownOpen);
  };

  const topNavStyle = {
    backgroundColor: darkMode ? "#202123" : "#fff", // dark background or white
    color: darkMode ? "white" : "black", // text color for buttons, etc.
  };

  return (
    <div>
      {/* Desktop Top Navigation (Full Menu) */}
      <div className="top-nav desktop-only shadowss" style={topNavStyle}>
        <div className="header " style={topNavStyle}>
          <div
            className="header-left flex items-center gap-4 px-4"
            style={{ color: topNavStyle.color }}
          >
            {/* Close Sidebar / Menu Toggle Icon */}
            <button
              onClick={handleSidebarToggle}
              className=" text-2xl"
              style={{ color: darkMode ? "white" : "black" }}
            >
              <FiMenu style={{ color: darkMode ? "white" : "black" }} />
            </button>

            {/* Search Icon */}
            {/*} <button
              onClick={handleSearch}
              className=" text-2xl"
              style={{ color: darkMode ? "white" : "black" }}
            >
              <FiSearch style={{ color: darkMode ? "white" : "black" }} />
            </button>*/}

            {/* Create New Chat Icon */}
            <button
              onClick={() => navigate("/chat/new")}
              className="text-2xl"
              style={{ color: darkMode ? "white" : "black" }}
            >
              <FiPlus style={{ color: darkMode ? "white" : "black" }} />
            </button>
          </div>
          <div className="logo finomic-logo">
            <a
              style={{
                color: darkMode ? "white" : "black",
                fontWeight: "800",
                paddingLeft: "30px",
                fontSize: "20px",
              }}
            >
              Finomic AI
            </a>
          </div>
          <ul className="nav user-menu ">
            <div className="flex items-center gap-4 px-4 text-white">
              {/* Share Button */}
              <button
                onClick={handleShare}
                title="Share"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  backgroundColor: darkMode ? "#343541" : "#eee",
                  color: darkMode ? "white" : "black",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                <FiShare2 size={18} />
                <span>Share</span>
              </button>

              {/* Vertical Dots Dropdown */}
              <li className="nav-item dropdown">
                <div className="relative">
                  <button
                    onClick={toggleMenuDropdown}
                    className="text-white text-2xl"
                    title="Options"
                  >
                    <FiMoreVertical
                      style={{ color: darkMode ? "white" : "black" }}
                    />
                  </button>
                  {menuDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow z-50 text-black">
                      {/*} <button
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                      onClick={handleArchive}
                      style={{ color: darkMode ? "white" : "black" }}
                    >
                      Archive
                    </button>*/}
                      <button
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        onClick={handleDelete}
                        style={{ color: darkMode ? "black" : "black" }}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </li>
            </div>

            <li className="nav-item dropdown  hidden lg:block">
              <a
                href="#"
                className="dropdown-toggle"
                style={{
                  size: "30px",
                  fontSize: "30px",
                  color: darkMode ? "white" : "black",
                }}
              >
                <FiBell
                  className="text-2xl"
                  style={{ color: darkMode ? "white" : "black" }}
                />
              </a>
            </li>

            <li className="nav-item dropdown  hidden lg:block">
              <a href="/settings" className="dropdown-toggle">
                <FiSettings
                  className=" text-2xl"
                  style={{ color: darkMode ? "white" : "black" }}
                />
              </a>
            </li>
            <li className="nav-item dropdown  hidden lg:block">
              <a href="/settings?tab=profile" className="dropdown-toggle">
                <FiUser
                  className=" text-2xl"
                  style={{ color: darkMode ? "white" : "black" }}
                />
              </a>
            </li>
            {/*} <li className="nav-item dropdown">
              <a onClick={toggleDesktopMenu}>
                <FiUser
                  className=" text-2xl"
                  style={{ color: darkMode ? "white" : "black" }}
                />
              </a>
              <div
                className={`dropdown-menu ${desktopMenuOpen ? "show" : ""}`}
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  className="dropdown-item"
                  href="/settings"
                  style={{ color: darkMode ? "white" : "black" }}
                >
                  My Profile
                </a>
                <a
                  className="dropdown-item"
                  href="/settings"
                  style={{ color: darkMode ? "white" : "black" }}
                >
                  Settings
                </a>
                <a
                  className="dropdown-item"
                  href="/login"
                  style={{ color: darkMode ? "white" : "black" }}
                >
                  Logout
                </a>
              </div>
            </li>*/}
          </ul>
        </div>
      </div>

      {/* Mobile Top Navigation (Logo + Profile Icon Only) */}
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
          Finomic AI
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

                    {/*}   <li className="submenu">
                      <Link
                        to="/chat/new"
                        className="submenu-link"
                        style={{
                          display: "flex",
                          borderRadius: "5px",
                          padding: "10px",

                          alignItems: "center",
                          gap: "8px",

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

                    {/*<li className="submenu">
                      <a
                        href="/search"
                        className={`${
                          isActive("/search") ? "active-menu" : ""
                        }`}
                        style={{
                    
                          borderRadius: "5px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: isActive("/search")
                            ? darkMode
                              ? "white"
                              : "black"
                            : darkMode
                            ? "#ccc"
                            : "#555", 
                          textDecoration: "none",
                        }}
                      >
                        <FiSearch
                          size={20}
                          color={
                            isActive("/search")
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
                            color: isActive("/search")
                              ? darkMode
                                ? "white"
                                : "black"
                              : darkMode
                              ? "#ccc"
                              : "#555",
                          }}
                        >
                          Search
                        </span>
                      </a>
                    </li>*/}
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

      {/* Bottom Navigation (Visible on Mobile Only) */}
      {/*}  <div className="bottom-nav mobile-only">
        <ul className="nav">
          <li className="nav-item">
            <a href="/vision">
              <FiHome />

              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/brain-dump">
              <BsLightbulb />
              <span>Idea</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/refinement">
              <FiEdit />
              <span>Refinement</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/retrospect">
              <FiClock />
              <span>Retrospect</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/sprint">
              <FiFlag />
              <span>Sprint</span>
            </a>
          </li>
        </ul>
      </div>*/}
      {/* Main Content */}
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
    </div>
  );
};

export default TopNav;
