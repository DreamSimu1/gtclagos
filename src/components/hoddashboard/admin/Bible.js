import React, { useState } from "react";
import { FiBookOpen, FiChevronDown } from "react-icons/fi";
import TopNav from "../TopNav";
import SideNav from "../SideNav";

const Bible = () => {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  return (
    <>
      <div>
        <body>
          <div className="main-wrapper">
            <TopNav />
            <SideNav />
            <div className="page-wrapper" style={{ marginTop: "10px" }}>
              <div className="content">
                <div>
                  <div className="bible-page">
                    <nav className="bible-nav">
                      <ul>
                        <li className="submenu">
                          <ul
                            className="submenu-list"
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#f7f7f7",
                              borderRadius: "10px",
                              padding: "20px",
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <li style={{ marginBottom: "15px" }}>
                              <a
                                href="/bible/kjv"
                                style={{
                                  padding: "12px",
                                  borderRadius: "5px",
                                  backgroundColor: "#ffffff",
                                  color: "#333",
                                  textDecoration: "none",
                                  display: "block",
                                  transition: "background-color 0.3s ease",
                                }}
                              >
                                KJV (King James Version)
                              </a>
                            </li>
                            <li style={{ marginBottom: "15px" }}>
                              <a
                                href="/bible/nkjv"
                                style={{
                                  padding: "12px",
                                  borderRadius: "5px",
                                  backgroundColor: "#ffffff",
                                  color: "#333",
                                  textDecoration: "none",
                                  display: "block",
                                  transition: "background-color 0.3s ease",
                                }}
                              >
                                NKJV
                              </a>
                            </li>
                            <li style={{ marginBottom: "15px" }}>
                              <a
                                href="/bible/nlt"
                                style={{
                                  padding: "12px",
                                  borderRadius: "5px",
                                  backgroundColor: "#ffffff",
                                  color: "#333",
                                  textDecoration: "none",
                                  display: "block",
                                  transition: "background-color 0.3s ease",
                                }}
                              >
                                NLT
                              </a>
                            </li>
                            <li style={{ marginBottom: "15px" }}>
                              <a
                                href="/bible/revised-standard"
                                style={{
                                  padding: "12px",
                                  borderRadius: "5px",
                                  backgroundColor: "#ffffff",
                                  color: "#333",
                                  textDecoration: "none",
                                  display: "block",
                                  transition: "background-color 0.3s ease",
                                }}
                              >
                                Revised Standard
                              </a>
                            </li>
                            <li style={{ marginBottom: "15px" }}>
                              <a
                                href="/bible/all-translations"
                                style={{
                                  padding: "12px",
                                  borderRadius: "5px",
                                  backgroundColor: "#ffffff",
                                  color: "#333",
                                  textDecoration: "none",
                                  display: "block",
                                  transition: "background-color 0.3s ease",
                                }}
                              >
                                All Translations
                              </a>
                            </li>
                            <li style={{ marginBottom: "15px" }}>
                              <a
                                href="/bible/devotional"
                                style={{
                                  padding: "12px",
                                  borderRadius: "5px",
                                  backgroundColor: "#ffffff",
                                  color: "#333",
                                  textDecoration: "none",
                                  display: "block",
                                  transition: "background-color 0.3s ease",
                                }}
                              >
                                Devotional Bible
                              </a>
                            </li>
                            <li style={{ marginBottom: "15px" }}>
                              <a
                                href="/bible/storybook"
                                style={{
                                  padding: "12px",
                                  borderRadius: "5px",
                                  backgroundColor: "#ffffff",
                                  color: "#333",
                                  textDecoration: "none",
                                  display: "block",
                                  transition: "background-color 0.3s ease",
                                }}
                              >
                                Story Book Bible
                              </a>
                            </li>
                            <li style={{ marginBottom: "15px" }}>
                              <a
                                href="/bible/journal"
                                style={{
                                  padding: "12px",
                                  borderRadius: "5px",
                                  backgroundColor: "#ffffff",
                                  color: "#333",
                                  textDecoration: "none",
                                  display: "block",
                                  transition: "background-color 0.3s ease",
                                }}
                              >
                                Journal
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
};

export default Bible;
