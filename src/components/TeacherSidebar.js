import { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiLogOut,
  FiBook,
  FiChevronDown,
  FiUsers,
  FiActivity,
  FiFileText,
  FiEdit,
  FiGrid,
  FiBarChart2,
} from "react-icons/fi";
import { MdPermMedia } from "react-icons/md";
import { DarkModeContext } from "../context/darkModeContext";
import { SessionContext } from "../SessionContext";
import axios from "axios";
import { LogoutContext } from "./LogoutContext";
import useAuth from "./hooks/useAuth";
const TeacherSidebar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation();
  const { currentSession } = useContext(SessionContext);
  const { setShowLogoutModal } = useContext(LogoutContext);
  const { darkMode } = useContext(DarkModeContext);
  const [openSubmenus, setOpenSubmenus] = useState(new Set());
  // const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [sections, setSections] = useState([]);
  const isActive = (path) => location.pathname === path;
  const apiUrl = process.env.REACT_APP_API_URL;

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
                      color={
                        isActive("/teacher/dashboard")
                          ? darkMode
                            ? "white"
                            : "black" // active color: white in dark, black in light
                          : darkMode
                          ? "#fff"
                          : "#000" // inactive color: lighter gray dark/light
                      }
                      style={{ marginRight: "8px" }}
                    />
                    <span style={{ fontSize: "15px" }}>Dashboard</span>
                  </a>
                </li>
                {/*} <li className="submenu">
                  <a
                    href="/teacher/dashboard/sections"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <FiGrid
                      size={20}
                      color={
                        isActive("/teacher/dashboard")
                          ? darkMode
                            ? "white"
                            : "black" 
                          : darkMode
                          ? "#fff"
                          : "#000"
                      }
                      style={{ marginRight: "8px" }}
                    />
                    <span style={{ fontSize: "15px" }}>All Sections</span>
                  </a>
                </li>*/}
                {/* Teachers */}

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
                            href={`/teacher/dashboard/students/${section._id}`}
                            style={{ color: darkMode ? "#fff" : "#000" }}
                          >
                            {section.name}
                          </a>
                        </li>
                      ))}
                      {sections.length === 0 && (
                        <li>
                          <span style={{ color: darkMode ? "#aaa" : "#555" }}>
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
                            href={`/teacher/dashboard/subject/${section._id}`}
                            style={{ color: darkMode ? "#fff" : "#000" }}
                          >
                            {section.name}
                          </a>
                        </li>
                      ))}
                      {sections.length === 0 && (
                        <li>
                          <span style={{ color: darkMode ? "#aaa" : "#555" }}>
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
                      toggleSubmenu("affective");
                    }}
                    className={`submenu-link ${
                      openSubmenus.has("affective") ? "subdrop active" : ""
                    }`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between", // ⬅️ ensures icon+text left, chevron right
                      padding: "10px",
                      borderRadius: "5px",
                      backgroundColor: openSubmenus.has("affective")
                        ? darkMode
                          ? "#343541"
                          : "#ddd"
                        : "transparent",
                      textDecoration: "none",
                      color: openSubmenus.has("affective")
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
                          href="/teacher/dashboard/psychomotor_report_category"
                          style={{ color: darkMode ? "#fff" : "#000" }}
                        >
                          Manage Category
                        </a>
                      </li>
                      <li>
                        <a
                          href="/teacher/dashboard/manage-psychomotor"
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
                          href="/teacher/dashboard/examlist"
                          style={{ color: darkMode ? "#fff" : "#000" }}
                        >
                          Exam List
                        </a>
                      </li>
                      <li>
                        <a
                          href="/teacher/dashboard/manage-online-result"
                          style={{ color: darkMode ? "#fff" : "#000" }}
                        >
                          Exam Grade
                        </a>
                      </li>
                      <li>
                        <a
                          href="/teacher/dashboard/exam"
                          style={{ color: darkMode ? "#fff" : "#000" }}
                        >
                          Manage Marks
                        </a>
                      </li>
                      <li>
                        <a
                          href="/teacher/dashboard/manage-online-result"
                          style={{ color: darkMode ? "#fff" : "#000" }}
                        >
                          Onscreen Marking
                        </a>
                      </li>
                      <li>
                        <a
                          href="/teacher/dashboard/broad_sheet"
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
                      color={
                        isActive("/teacher/dashboard")
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
                    href="/teacher/dashboard/student-payment"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <FiBook
                      size={20}
                      color={
                        isActive("/teacher/dashboard")
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
                    href="/teacher/dashboard/student-material"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <MdPermMedia
                      size={20}
                      color={
                        isActive("/teacher/dashboard")
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
                        isActive("/teacher/dashboard")
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
      </div>
    </div>
  );
};

export default TeacherSidebar;
