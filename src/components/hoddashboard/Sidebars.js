import React, { useState } from "react";

import "./TopNav.css";
import { BsLightbulb } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import lg from "./ourcolor.png";
import { FaEllipsisV } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import logo from "./oga4.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSidebar } from "./SidebarProvider";
import "./side.css";

import { MdPermMedia } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation

import {
  FiShoppingCart,
  FiMenu,
  FiPlus,
  FiShare2,
  FiMoreVertical,
  FiHome,
  FiCreditCard,
  FiUser,
  FiSettings,
  FiLogOut,
  FiBookOpen,
  FiChevronDown,
  FiCompass,
  FiMessageSquare,
  FiClock,
  FiBell,
  FiSearch,
  FiLightbulb,
  FiEdit,
  FiFlag,
} from "react-icons/fi";

import "./TopNav.css";
import { FiHelpCircle } from "react-icons/fi";
const TopNav = () => {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleShare = () => {
    alert("Share clicked!");
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

  return (
    <div>
      {/* Desktop Top Navigation (Full Menu) */}
      <div
        className="top-nav desktop-only shadowss"
        style={{ backgroundColor: "#202123" }}
      >
        <div className="header " style={{ backgroundColor: "#202123" }}>
          <div className="header-left flex items-center gap-4 px-4">
            {/* Close Sidebar / Menu Toggle Icon */}
            <button
              onClick={handleSidebarToggle}
              className="text-white text-2xl"
            >
              <FiMenu />
            </button>

            {/* Search Icon */}
            <button onClick={handleSearch} className="text-white text-2xl">
              <FiSearch />
            </button>

            {/* Create New Chat Icon */}
            <button onClick={handleNewChat} className="text-white text-2xl">
              <FiPlus />
            </button>
          </div>

          <ul className="nav user-menu ">
            <div className="flex items-center gap-4 px-4 text-white">
              {/* Share Button */}
              <button
                onClick={handleShare}
                className="text-white text-2xl"
                title="Share"
              >
                <FiShare2 />
              </button>

              {/* Vertical Dots Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleMenuDropdown}
                  className="text-white text-2xl"
                  title="Options"
                >
                  <FiMoreVertical />
                </button>
                {menuDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow z-50 text-black">
                    <button
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                      onClick={handleArchive}
                    >
                      Archive
                    </button>
                    <button
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                style={{ size: "30px", fontSize: "30px" }}
              >
                <FiBell className="text-white text-2xl" />
                <span className="badge">2</span>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a href="/settings" className="dropdown-toggle">
                <FiSettings className="text-white text-2xl" />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="javascript:void(0);"
                className="dropdown-toggle"
                onClick={toggleDesktopMenu}
              >
                <FiUser className="text-white text-2xl" />
              </a>
              <div
                className={`dropdown-menu ${desktopMenuOpen ? "show" : ""}`}
                onClick={(e) => e.stopPropagation()}
              >
                <a className="dropdown-item" href="/profile">
                  My Profile
                </a>
                <a className="dropdown-item" href="/settings">
                  Settings
                </a>
                <a className="dropdown-item" href="/login">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Top Navigation (Logo + Profile Icon Only) */}
      <div
        className="top-nav mobile-only"
        style={{ backgroundColor: "#202123", textDecoration: "none" }}
      >
        {/*<a className="logo" href="/" style={{ textDecoration: "none" }}>
          Life Mirror
        </a>*/}
        <button onClick={handleSidebarToggle} className="text-white text-2xl">
          <FiMenu />
        </button>

        <a
          className="logo"
          href="/"
          style={{ textDecoration: "none", color: "white" }}
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
            backgroundColor: "#202123",
            color: "#fff",
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
              color: "white",
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
                          backgroundColor: isActive("/home")
                            ? "#343541"
                            : "transparent",
                          borderRadius: "5px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px",
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <FiHome
                          size={20}
                          color={isActive("/home") ? "white" : "#ccc"}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color: isActive("/home") ? "white" : "#ccc",
                          }}
                        >
                          Dashboard
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
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <MdPermMedia
                          size={20}
                          color={isActive("/digital") ? "white" : "white"}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color: isActive("/digital") ? "white" : "white",
                          }}
                        >
                          Library
                        </span>
                      </a>
                    </li>
                    <li className="submenu">
                      <a
                        href="/api-docs"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px",
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <FiBookOpen
                          size={20}
                          color={isActive("/digital") ? "white" : "white"}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color: isActive("/digital") ? "white" : "white",
                          }}
                        >
                          Api Docs
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
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <FiMessageSquare
                          size={20}
                          color={isActive("/today") ? "white" : "white"}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color: isActive("/today") ? "white" : "white",
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
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <FiClock
                          size={20}
                          color={isActive("/yesterday") ? "white" : "white"}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color: isActive("/yesterday") ? "white" : "white",
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
                            ? "#343541"
                            : "transparent",
                          borderRadius: "5px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px",
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <MdPermMedia
                          size={20}
                          color={openSubmenus.has(5) ? "white" : "white"}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color: openSubmenus.has(5) ? "white" : "white",
                          }}
                        >
                          Financial Inquiry
                        </span>
                        <FiChevronDown
                          style={{
                            marginLeft: "auto",
                            transform: openSubmenus.has(5)
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            color: "white",
                          }}
                        />
                      </a>
                      {openSubmenus.has(5) && (
                        <ul className="submenu-list">
                          <li>
                            <a href="/inquiries" style={{ color: "white" }}>
                              Inquiries
                            </a>
                          </li>
                          <li>
                            <a href="/budgeting" style={{ color: "white" }}>
                              Budgeting
                            </a>
                          </li>
                          <li>
                            <a
                              href="/investment-recommendation"
                              style={{ color: "white" }}
                            >
                              Investment Recomendaions
                            </a>
                          </li>
                          <li>
                            <a
                              href="/money-management"
                              style={{ color: "white" }}
                            >
                              Money Management
                            </a>
                          </li>
                          <li>
                            <a
                              href="/budgeting-insight"
                              style={{ color: "white" }}
                            >
                              Budgeting Insight
                            </a>
                          </li>
                          <li>
                            <a href="/goal-tracking" style={{ color: "white" }}>
                              Goal Tracking
                            </a>
                          </li>
                          <li>
                            <a
                              href="/financial-advice"
                              style={{ color: "white" }}
                            >
                              Financial Advice
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
                        className={`${
                          openSubmenus.has(7) ? "subdrop active" : ""
                        }`.trim()}
                        style={{
                          backgroundColor: openSubmenus.has(7)
                            ? "#343541"
                            : "transparent",
                          borderRadius: "5px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px",
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <MdPermMedia
                          size={20}
                          color={openSubmenus.has(7) ? "white" : "white"}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color: openSubmenus.has(7) ? "white" : "white",
                          }}
                        >
                          Investment
                        </span>
                        <FiChevronDown
                          style={{
                            marginLeft: "auto",
                            transform: openSubmenus.has(7)
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            color: "white",
                          }}
                        />
                      </a>
                      {openSubmenus.has(7) && (
                        <ul className="submenu-list">
                          <li>
                            <a
                              href="/investment-portfolio-recommendation"
                              style={{ color: "white" }}
                            >
                              Investment Portfolio Recommendation
                            </a>
                          </li>
                          <li>
                            <a
                              href="/market-analysis"
                              style={{ color: "white" }}
                            >
                              Market Analysis
                            </a>
                          </li>
                          <li>
                            <a
                              href="/decentralized-finance"
                              style={{ color: "white" }}
                            >
                              DeFi(Decentralized Finance)
                            </a>
                          </li>
                          <li>
                            <a
                              href="/ai-powered-credit-solution"
                              style={{ color: "white" }}
                            >
                              AI powered credit solution
                            </a>
                          </li>
                          <li>
                            <a href="/stock" style={{ color: "white" }}>
                              Stocks
                            </a>
                          </li>
                          <li>
                            <a href="/bond" style={{ color: "white" }}>
                              Bond
                            </a>
                          </li>
                          <li>
                            <a href="/crypto" style={{ color: "white" }}>
                              Crypto
                            </a>
                          </li>
                          <li>
                            <a href="/forex" style={{ color: "white" }}>
                              Forex
                            </a>
                          </li>
                          <li>
                            <a href="/real-estate" style={{ color: "white" }}>
                              Real Estate
                            </a>
                          </li>
                          <li>
                            <a href="/block-chain" style={{ color: "white" }}>
                              Block Chain
                            </a>
                          </li>
                          <li>
                            <a
                              href="/market-insight"
                              style={{ color: "white" }}
                            >
                              Market Insight
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
                        className={`${
                          openSubmenus.has(8) ? "subdrop active" : ""
                        }`.trim()}
                        style={{
                          backgroundColor: openSubmenus.has(8)
                            ? "#343541"
                            : "transparent",
                          borderRadius: "5px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px",
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <MdPermMedia
                          size={20}
                          color={openSubmenus.has(8) ? "white" : "white"}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color: openSubmenus.has(8) ? "white" : "white",
                          }}
                        >
                          Business Advisory
                        </span>
                        <FiChevronDown
                          style={{
                            marginLeft: "auto",
                            transform: openSubmenus.has(8)
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            color: "white",
                          }}
                        />
                      </a>
                      {openSubmenus.has(8) && (
                        <ul className="submenu-list">
                          <li>
                            <a
                              href="/finance-literacy"
                              style={{ color: "white" }}
                            >
                              Financial Litracy Hub
                            </a>
                          </li>

                          <li>
                            <a href="/ai-based-tax" style={{ color: "white" }}>
                              AI-based tax
                            </a>
                          </li>

                          <li>
                            <a href="/mobile-money" style={{ color: "white" }}>
                              Mobile Money
                            </a>
                          </li>

                          <li>
                            <a
                              href="/digital-finance-integration"
                              style={{ color: "white" }}
                            >
                              DIgital Finance Integration
                            </a>
                          </li>

                          <li>
                            <a href="/connectivity" style={{ color: "white" }}>
                              Connectivity
                            </a>
                          </li>

                          <li>
                            <a
                              href="/expense-tracker"
                              style={{ color: "white" }}
                            >
                              Expense Tracking
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="submenu">
                      <a
                        href="/loan-recommendation"
                        onClick={() => setShowLogoutModal(true)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px",
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <FiLogOut size={20} color="white" />
                        <span style={{ fontSize: "14px", color: "white" }}>
                          Loan Recomendation
                        </span>
                      </a>
                    </li>
                    <li className="submenu">
                      <a
                        href="/financial-coaching"
                        onClick={() => setShowLogoutModal(true)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px",
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <FiLogOut size={20} color="white" />
                        <span style={{ fontSize: "14px", color: "white" }}>
                          Financial Coaching
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
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <FiLogOut size={20} color="white" />
                        <span
                          style={{ fontSize: "14px", color: "white" }}
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
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 999,
            }}
          />
        )}
        <div className="nav-icons">
          {/* Notification Icon */}
          <li className="nav-item dropdown">
            <a href="#" className="dropdown-toggle">
              <FiBell className="text-white text-2xl" />
              {/*} <span className="badge">2</span>*/}
            </a>
          </li>
          <a
            href="javascript:void(0);"
            className="dropdown-toggle"
            onClick={toggleMobileMenu}
          >
            <FiUser className="text-white text-2xl" />
          </a>

          {/* Settings Icon */}
        </div>

        {/* Profile Dropdown Menu */}
        <div
          className={`dropdown-menu ${mobileMenuOpen ? "show" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <a className="dropdown-item" href="/profile">
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
    </div>
  );
};

export default TopNav;
