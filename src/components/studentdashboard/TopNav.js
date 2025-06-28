import { React, useEffect, useState } from "react";
// import useFetch from "hooks/useFetch";
import { FaChevronLeft } from "react-icons/fa"; // Use this for a single chevron
import { FaAngleDoubleLeft } from "react-icons/fa"; // Use this for double chevrons
import { FaSearch } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FaEllipsisV } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

import { FiHelpCircle } from "react-icons/fi";

import logo from "./oga4.png";
import axios from "axios";
import { useSidebar } from "../hoddashboard/SidebarProvider";

const TopNav = () => {
  const { user } = useAuth(); // Access the authenticated user
  const { toggleSidebar, isSidebarOpen } = useSidebar();
  return (
    <body>
      <div class="main-wrapper">
        <div class="header">
          <div class="header-left active">
            <a
              // href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
              class="logo logo-normal"
            >
              <img
                src={logo}
                alt
                style={{
                  width: "300px",
                  height: "300px",
                  paddingTop: "40px",
                }}
              />
            </a>
            <a
              // href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
              class="logo logo-white"
            >
              <img
                src={logo}
                alt
                style={{
                  width: "300px",
                  height: "300px",
                  paddingTop: "40px",
                }}
              />
            </a>
            <a
              href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
              class="logo-small"
            >
              <img
                src={logo}
                alt
                style={{
                  width: "300px",
                  height: "300px",
                  paddingTop: "40px",
                }}
              />
            </a>
            <a id="toggle_btn" href="javascript:void(0);">
              <FaChevronLeft className="chevron-icon" />
            </a>
          </div>

          <a id="mobile_btn" className="mobile_btn" onClick={toggleSidebar}>
            <span class="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>

          <ul class="nav user-menu">
            {/*} <li
                style={{
                  marginLeft: "40px",
                  fontWeight: "800",
                  paddingTop: "10px",
                }}
              >
                Admin Dashboard
              </li>*/}
            <li class="nav-item nav-searchinputs">
              <div class="top-nav-search">
                <a href="javascript:void(0);" class="responsive-search">
                  <FaSearch className="search-icon" />
                </a>
                <form action="#" class="dropdown">
                  <div
                    class="searchinputs dropdown-toggle"
                    id="dropdownMenuClickable"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="false"
                  >
                    <input type="text" placeholder="Search" />
                    <div class="search-addon">
                      <span>
                        <FiXCircle className="x-circle-icon" />
                      </span>
                    </div>
                  </div>
                  <div
                    class="dropdown-menu search-dropdown"
                    aria-labelledby="dropdownMenuClickable"
                  >
                    <div class="search-info">
                      <h6>
                        <span>
                          <FaSearch className="search-icon" />
                        </span>
                        Recent Searches
                      </h6>
                      <ul class="search-tags">
                        <li>
                          <a href="javascript:void(0);">Products</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Sales</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Applications</a>
                        </li>
                      </ul>
                    </div>
                    <div class="search-info">
                      <h6>
                        <span>
                          <FiHelpCircle className="help-circle-icon" />
                        </span>
                        Help
                      </h6>
                      <p>
                        How to Change Product Volume from 0 to 200 on Inventory
                        management
                      </p>
                      <p>Change Product Name</p>
                    </div>
                    <div class="search-info">
                      <h6>
                        <span>
                          <FiUser className="user-icon" />
                        </span>
                        Customers
                      </h6>
                      <ul class="customers">
                        <li>
                          <a href="javascript:void(0);">
                            Aron Varu
                            <img
                              src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avator1.jpg"
                              alt
                              class="img-fluid"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            Jonita
                            <img
                              src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg"
                              alt
                              class="img-fluid"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            Aaron
                            <img
                              src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-10.jpg"
                              alt
                              class="img-fluid"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <li class="nav-item dropdown nav-item-box">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle nav-link"
                data-bs-toggle="dropdown"
              >
                <FiBell className="bell-icon" />

                <span class="badge rounded-pill">2</span>
              </a>
              <div class="dropdown-menu notifications">
                <div class="topnav-dropdown-header">
                  <span class="notification-title">Notifications</span>
                  <a href="javascript:void(0)" class="clear-noti">
                    {" "}
                    Clear All{" "}
                  </a>
                </div>
                <div class="noti-content">
                  <ul class="notification-list">
                    <li class="notification-message">
                      <a>
                        <div class="media d-flex">
                          <div class="media-body flex-grow-1">
                            <p class="noti-details">
                              <span class="noti-title">Oga Pos Limited</span>{" "}
                              added new task{" "}
                              <span class="noti-title">
                                Create new transaction
                              </span>
                            </p>
                            <p class="noti-time">
                              <span class="notification-time">4 mins ago</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="topnav-dropdown-footer">
                  <a>View all Notifications</a>
                </div>
              </div>
            </li>

            <li class="nav-item nav-item-box">
              <a href="">
                <FiSettings className="settings-icon" />
              </a>
            </li>
            <li class="nav-item dropdown has-arrow main-drop">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle nav-link userset"
                data-bs-toggle="dropdown"
              >
                <span class="user-info">
                  <span class="user-detail">
                    <span class="user-name">
                      {" "}
                      {user?.username || "Oga Pos Limited"}
                    </span>
                    <span class="user-role"> {user?.role || "Admin"}</span>
                  </span>
                </span>
              </a>
              <div class="dropdown-menu menu-drop-user">
                <div class="profilename">
                  <div class="profileset">
                    <div class="profilesets">
                      <h6> {user?.username || "Oga Pos Limited"}</h6>
                      <h5> {user?.role || "Admin"}</h5>
                    </div>
                  </div>
                  <hr class="m-0" />
                  <a class="dropdown-item" href="/profile">
                    {" "}
                    <FiUser className="me-2" /> My Profile
                  </a>
                  <a class="dropdown-item" href="/settings">
                    <FiSettings className="me-2" />
                    Settings
                  </a>
                  <hr class="m-0" />
                  <a class="dropdown-item logout pb-0" href="/login">
                    <img
                      src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/log-out.svg"
                      class="me-2"
                      alt="img"
                    />
                    Logout
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <div class="dropdown mobile-user-menu">
            <a
              href="javascript:void(0);"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaEllipsisV />
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="/profile">
                My Profile
              </a>
              <a class="dropdown-item" href="/settings">
                Settings
              </a>
              <a class="dropdown-item" href="/login">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default TopNav;
