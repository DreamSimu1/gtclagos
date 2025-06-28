// import { React, useContext, useState } from "react";
// // import useFetch from "hooks/useFetch";

// import axios from "axios";
// import TopNav from "../TopNav";
// import SideNav from "../SideNav";
// import useAuth from "../../hooks/useAuth";
// import {
//   FiSettings,
//   FiBell,
//   FiMic,
//   FiDatabase,
//   FiShield,
//   FiUser,
// } from "react-icons/fi";
// import Profile from "./Profile";
// import General from "./General";
// import "./point.css";
// import Notify from "./Notify";
// import Voice from "./Voice";
// import Data from "./Data";
// // import "./all.css";
// import Security from "./Security";
// import { DarkModeContext } from "../../../context/darkModeContext";
// import { useLocation } from "react-router-dom";
// const Setting = () => {
//   const { user } = useAuth(); // Get authenticated user from context
//   // const [activeSetting, setActiveSetting] = useState("general");
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const defaultTab = queryParams.get("tab") || "general";
//   const [activeSetting, setActiveSetting] = useState(defaultTab);

//   const { darkMode } = useContext(DarkModeContext); // <--- this line is missing

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: darkMode ? "#212121" : "#f5f5f5",
//         minHeight: "100vh",
//       }}
//     >
//       <div className="main-wrapper">
//         <TopNav />
//         <SideNav />
//         <div
//           className="page-wrapper"
//           style={{
//             marginTop: "10px",
//             backgroundColor: darkMode ? "#212121" : "#f5f5f5",
//             marginBottom: "0px",
//             color: darkMode ? "white" : "black",
//             height: "100%",
//           }}
//         >
//           <div
//             className="content settings-content"
//             style={{
//               backgroundColor: darkMode ? "#212121" : "#f5f5f5",
//               marginTop: "30px",
//               borderRadius: "20px",
//               // height: "100%",
//             }}
//           >
//             <div className="row">
//               <div className="col-xl-12">
//                 <div className="settings-wrapper d-flex">
//                   <div
//                     className="sidebars settings-sidebar theiaStickySidebar"
//                     id="sidebar2"
//                     style={{
//                       backgroundColor: darkMode ? "#212121" : "#f5f5f5",
//                       border: "none",
//                     }}
//                   >
//                     <div className="sidebar-inner slimscroll">
//                       <div id="sidebar-menu5" className="sidebar-menu">
//                         <div className="setting-grid-wrapper">
//                           <li className="submenu-open">
//                             <ul className="setting-grid">
//                               <li className="setting-item">
//                                 <a
//                                   onClick={() => setActiveSetting("general")}
//                                   className="setting-link"
//                                 >
//                                   <FiSettings
//                                     size={16}
//                                     style={{
//                                       marginRight: "8px",
//                                       color: darkMode ? "#fff" : "#000",
//                                     }}
//                                   />
//                                   <span
//                                     style={{
//                                       color: darkMode ? "#fff" : "#000",
//                                       fontSize: "20px",
//                                     }}
//                                   >
//                                     General Settings
//                                   </span>
//                                 </a>
//                               </li>
//                               <li className="setting-item">
//                                 <a
//                                   onClick={() =>
//                                     setActiveSetting("notification")
//                                   }
//                                   className="setting-link"
//                                 >
//                                   <FiBell
//                                     size={16}
//                                     style={{
//                                       marginRight: "8px",
//                                       color: darkMode ? "#fff" : "#000",
//                                     }}
//                                   />
//                                   <span
//                                     style={{
//                                       color: darkMode ? "#fff" : "#000",
//                                       fontSize: "20px",
//                                     }}
//                                   >
//                                     Notification
//                                   </span>
//                                 </a>
//                               </li>
//                               {/*}     <li>
//                                 <a onClick={() => setActiveSetting("speech")}>
//                                   <FiMic
//                                     size={16}
//                                     style={{
//                                       marginRight: "8px",
//                                       color: darkMode ? "#fff" : "#000",
//                                     }}
//                                   />
//                                   <span
//                                     style={{
//                                       color: darkMode ? "#fff" : "#000",
//                                       fontSize: "20px",
//                                     }}
//                                   >
//                                     Speech
//                                   </span>
//                                 </a>
//                               </li>*/}
//                               <li className="setting-item">
//                                 <a
//                                   onClick={() => setActiveSetting("profile")}
//                                   className="setting-link"
//                                 >
//                                   <FiUser
//                                     size={16}
//                                     style={{
//                                       marginRight: "8px",
//                                       color: darkMode ? "#fff" : "#000",
//                                     }}
//                                   />
//                                   <span
//                                     style={{
//                                       color: darkMode ? "#fff" : "#000",
//                                       fontSize: "20px",
//                                     }}
//                                   >
//                                     Profile Settings
//                                   </span>
//                                 </a>
//                               </li>
//                               <li className="setting-item">
//                                 <a
//                                   onClick={() => setActiveSetting("data")}
//                                   className="setting-link"
//                                 >
//                                   <FiDatabase
//                                     size={16}
//                                     style={{
//                                       marginRight: "8px",
//                                       color: darkMode ? "#fff" : "#000",
//                                     }}
//                                   />
//                                   <span
//                                     style={{
//                                       color: darkMode ? "#fff" : "#000",
//                                       fontSize: "20px",
//                                     }}
//                                   >
//                                     Data control
//                                   </span>
//                                 </a>
//                               </li>
//                               <li className="setting-item">
//                                 <a
//                                   onClick={() => setActiveSetting("security")}
//                                   className="setting-link"
//                                 >
//                                   <FiShield
//                                     size={16}
//                                     style={{
//                                       marginRight: "8px",
//                                       color: darkMode ? "#fff" : "#000",
//                                     }}
//                                   />
//                                   <span
//                                     style={{
//                                       color: darkMode ? "#fff" : "#000",
//                                       fontSize: "20px",
//                                     }}
//                                   >
//                                     Security
//                                   </span>
//                                 </a>
//                               </li>
//                             </ul>
//                           </li>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="settings-page-wrap ">
//                     {activeSetting === "profile" && <Profile />}
//                     {activeSetting === "general" && <General />}
//                     {activeSetting === "notification" && <Notify />}
//                     {/*} {activeSetting === "speech" && <Voice />}*/}
//                     {activeSetting === "data" && <Data />}
//                     {activeSetting === "security" && <Security />}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Setting;
import { React, useContext, useState } from "react";
// import useFetch from "hooks/useFetch";

import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import useAuth from "../../hooks/useAuth";
import {
  FiSettings,
  FiBell,
  FiMic,
  FiDatabase,
  FiShield,
  FiUser,
} from "react-icons/fi";
import Profile from "./Profile";
import General from "./General";
import "./point.css";
import Notify from "./Notify";
import Voice from "./Voice";
import Data from "./Data";
// import "./all.css";
import Security from "./Security";
import { DarkModeContext } from "../../../context/darkModeContext";
import { useLocation } from "react-router-dom";
const Setting = () => {
  const { user } = useAuth(); // Get authenticated user from context
  // const [activeSetting, setActiveSetting] = useState("general");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultTab = queryParams.get("tab") || "general";
  const [activeSetting, setActiveSetting] = useState(defaultTab);

  const { darkMode } = useContext(DarkModeContext); // <--- this line is missing

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#212121" : "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <div className="main-wrapper">
        <TopNav />
        <SideNav />
        <div
          className="page-wrapper"
          style={{
            marginTop: "10px",
            backgroundColor: darkMode ? "#212121" : "#f5f5f5",
            marginBottom: "0px",
            color: darkMode ? "white" : "black",
            height: "100%",
          }}
        >
          <div
            className="content settings-content"
            style={{
              backgroundColor: darkMode ? "#212121" : "#f5f5f5",
              marginTop: "30px",
              borderRadius: "20px",
              // height: "100%",
            }}
          >
            <div className="row">
              <div className="col-xl-12">
                <div className="settings-wrapper d-flex">
                  <div
                    className="sidebars settings-sidebar theiaStickySidebar"
                    id="sidebar2"
                    style={{
                      backgroundColor: darkMode ? "#212121" : "#f5f5f5",
                      border: "none",
                    }}
                  >
                    <div className="sidebar-inner slimscroll">
                      <div id="sidebar-menu5" className="sidebar-menu">
                        <ul className="setting-grid-wrapper">
                          <li className="submenu-open">
                            <ul className="setting-grid">
                              <li className="setting-item">
                                <a onClick={() => setActiveSetting("general")}>
                                  <FiSettings
                                    size={16}
                                    style={{
                                      marginRight: "8px",
                                      color: darkMode ? "#fff" : "#000",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: darkMode ? "#fff" : "#000",
                                      fontSize: "20px",
                                    }}
                                  >
                                    General Settings
                                  </span>
                                </a>
                              </li>
                              <li className="setting-item">
                                <a
                                  onClick={() =>
                                    setActiveSetting("notification")
                                  }
                                >
                                  <FiBell
                                    size={16}
                                    style={{
                                      marginRight: "8px",
                                      color: darkMode ? "#fff" : "#000",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: darkMode ? "#fff" : "#000",
                                      fontSize: "20px",
                                    }}
                                  >
                                    Notification
                                  </span>
                                </a>
                              </li>
                              {/*}     <li>
                                <a onClick={() => setActiveSetting("speech")}>
                                  <FiMic
                                    size={16}
                                    style={{
                                      marginRight: "8px",
                                      color: darkMode ? "#fff" : "#000",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: darkMode ? "#fff" : "#000",
                                      fontSize: "20px",
                                    }}
                                  >
                                    Speech
                                  </span>
                                </a>
                              </li>*/}
                              <li className="setting-item">
                                <a onClick={() => setActiveSetting("profile")}>
                                  <FiUser
                                    size={16}
                                    style={{
                                      marginRight: "8px",
                                      color: darkMode ? "#fff" : "#000",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: darkMode ? "#fff" : "#000",
                                      fontSize: "20px",
                                    }}
                                  >
                                    Profile Settings
                                  </span>
                                </a>
                              </li>
                              <li className="setting-item">
                                <a onClick={() => setActiveSetting("data")}>
                                  <FiDatabase
                                    size={16}
                                    style={{
                                      marginRight: "8px",
                                      color: darkMode ? "#fff" : "#000",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: darkMode ? "#fff" : "#000",
                                      fontSize: "20px",
                                    }}
                                  >
                                    Data control
                                  </span>
                                </a>
                              </li>
                              <li className="setting-item">
                                <a onClick={() => setActiveSetting("security")}>
                                  <FiShield
                                    size={16}
                                    style={{
                                      marginRight: "8px",
                                      color: darkMode ? "#fff" : "#000",
                                    }}
                                  />
                                  <span
                                    style={{
                                      color: darkMode ? "#fff" : "#000",
                                      fontSize: "20px",
                                    }}
                                  >
                                    Security
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="settings-page-wrap ">
                    {activeSetting === "profile" && <Profile />}
                    {activeSetting === "general" && <General />}
                    {activeSetting === "notification" && <Notify />}
                    {/*} {activeSetting === "speech" && <Voice />}*/}
                    {activeSetting === "data" && <Data />}
                    {activeSetting === "security" && <Security />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
