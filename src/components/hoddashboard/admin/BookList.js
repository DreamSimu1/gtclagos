import React, { useState } from "react";
import { FiBookOpen, FiChevronDown } from "react-icons/fi";
import TopNav from "../TopNav";
import SideNav from "../SideNav";

const BookList = () => {
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
                                href="/books/transformation"
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
                                Transformation Books
                              </a>
                            </li>
                            <li style={{ marginBottom: "15px" }}>
                              <a
                                href="/books/devotional"
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
                                Devotional
                              </a>
                            </li>
                            <li style={{ marginBottom: "15px" }}>
                              <a
                                href="/books/journals"
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
                                Journals
                              </a>
                            </li>
                            <li style={{ marginBottom: "15px" }}>
                              <a
                                href="/books/e-books"
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
                                E-books
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

export default BookList;
