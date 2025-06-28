import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiLogOut,
  FiBook,
  FiChevronDown,
  FiBarChart2,
} from "react-icons/fi";
import { MdPermMedia } from "react-icons/md";
import { DarkModeContext } from "../context/darkModeContext";

const HodSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useContext(DarkModeContext);
  const [openSubmenus, setOpenSubmenus] = useState(new Set());
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const isActive = (path) => location.pathname === path;

  const toggleSubmenu = (key) => {
    const updated = new Set(openSubmenus);
    if (updated.has(key)) {
      updated.delete(key);
    } else {
      updated.add(key);
    }
    setOpenSubmenus(updated);
  };
  const handleLogout = () => {
    // Clear all items from localStorage
    localStorage.clear();
    // Navigate to login page
    navigate("/login");
  };
  return (
    <div
      className={`sidebar open`}
      style={{
        backgroundColor: darkMode ? "#202123" : "#fff",
        color: darkMode ? "white" : "black",
      }}
    >
      <div
        className="sidebar-inner slimscroll"
        style={{ overflowY: "auto", maxHeight: "100vh" }}
      >
        <div id="sidebar-menu" className="sidebar-menu">
          <ul style={{ paddingBottom: "80px" }}>
            <li className="submenu-open">
              <ul>
                {/* Dashboard */}
                <li className="submenu">
                  <a
                    href="/teacher/dashboard"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "5px",
                      padding: "10px",
                      color: isActive("/teacher/dashboard")
                        ? darkMode
                          ? "#fff"
                          : "#000"
                        : darkMode
                        ? "#ccc"
                        : "#555",
                    }}
                  >
                    <FiHome
                      size={20}
                      color="#ffc107"
                      style={{ marginRight: "8px" }}
                    />
                    <span style={{ fontSize: "15px" }}>Dashboard</span>
                  </a>
                </li>

                {/* Teachers */}
                <li className="submenu">
                  <a
                    href="/teacher/dashboard/teacher"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <FiUser
                      size={20}
                      color="#ffc107"
                      style={{ marginRight: "8px" }}
                    />
                    <span style={{ fontSize: "15px" }}>Teachers</span>
                  </a>
                </li>

                {/* Subjects */}
                <li className="submenu">
                  <a
                    href="/teacher/dashboard/subject"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <FiBook
                      size={20}
                      color="#ffc107"
                      style={{ marginRight: "8px" }}
                    />
                    <span style={{ fontSize: "15px" }}>Subjects</span>
                  </a>
                </li>

                {/* Exam Mark */}
                <li className="submenu">
                  <a
                    href="/teacher/dashboard/student_mark_sheet"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <FiBarChart2
                      size={20}
                      color="#ffc107"
                      style={{ marginRight: "8px" }}
                    />
                    <span style={{ fontSize: "15px" }}>
                      Exam Mark/Report Card
                    </span>
                  </a>
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
                      <FiBook
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
                          href="/teacher/dashboard/jamb-past-questions"
                          style={{ color: darkMode ? "#fff" : "#000" }}
                        >
                          JAMB (UTME)
                        </a>
                      </li>
                      <li>
                        <a
                          href="/teacher/dashboard/waec-past-questions"
                          style={{ color: darkMode ? "#fff" : "#000" }}
                        >
                          WAEC
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
                      <FiBook
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
                          href="/teacher/dashboard/manage-online-exam"
                          style={{ color: darkMode ? "#fff" : "#000" }}
                        >
                          Manage Online Exam
                        </a>
                      </li>
                      <li>
                        <a
                          href="/teacher/dashboard/manage-online-result"
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
                    href="/teacher/dashboard/student-payment"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <FiBarChart2
                      size={20}
                      color="#ffc107"
                      style={{ marginRight: "8px" }}
                    />
                    <span style={{ fontSize: "15px" }}>Payment History</span>
                  </a>
                </li>

                {/* Attendance */}
                <li className="submenu">
                  <a
                    href="/teacher/dashboard/student-payment"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <FiBook
                      size={20}
                      color="#ffc107"
                      style={{ marginRight: "8px" }}
                    />
                    <span style={{ fontSize: "15px" }}>Attendance</span>
                  </a>
                </li>

                {/* Study Material */}
                <li className="submenu">
                  <a
                    href="/teacher/dashboard/student-material"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <MdPermMedia
                      size={20}
                      color="#ffc107"
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
                      color="#ffc107"
                      style={{ marginRight: "8px" }}
                    />
                    <span style={{ fontSize: "15px" }}>Profile</span>
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
      </div>
    </div>
  );
};

export default HodSidebar;
