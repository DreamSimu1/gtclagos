// import { React, useEffect, useState } from "react";
// // import useFetch from "hooks/useFetch";

// import logo from "./oga4.png";
// import axios from "axios";
// import { useSidebar } from "./SidebarProvider";

// const TopNav = () => {
//   // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const { toggleSidebar } = useSidebar();

//   // const toggleSidebar = () => {
//   //   setIsSidebarOpen(!isSidebarOpen);
//   // };

//   return (
//     <body>
//       <div class="main-wrapper">
//         <div class="header">
//           <div class="header-left active">
//             <a
//               // href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
//               class="logo logo-normal"
//             >
//               <img
//                 src={logo}
//                 alt
//                 style={{
//                   width: "300px",
//                   height: "300px",
//                   paddingTop: "40px",
//                 }}
//               />
//             </a>
//             <a
//               // href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
//               class="logo logo-white"
//             >
//               <img
//                 src={logo}
//                 alt
//                 style={{
//                   width: "300px",
//                   height: "300px",
//                   paddingTop: "40px",
//                 }}
//               />
//             </a>
//             <a
//               href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
//               class="logo-small"
//             >
//               <img
//                 src={logo}
//                 alt
//                 style={{
//                   width: "300px",
//                   height: "300px",
//                   paddingTop: "40px",
//                 }}
//               />
//             </a>
//             <a
//               id="toggle_btn"
//               href="javascript:void(0);"
//               onClick={(e) => {
//                 e.preventDefault();
//                 console.log("Mobile button clicked");
//                 toggleSidebar(); // Toggle sidebar when button is clicked
//               }}
//             >
//               <i data-feather="chevrons-left" class="feather-16"></i>
//             </a>
//           </div>

//           <a
//             id="mobile_btn"
//             className="mobile_btn"
//             onClick={(e) => {
//               e.preventDefault();
//               toggleSidebar(); // Toggle sidebar when button is clicked
//             }}
//           >
//             <span class="bar-icon">
//               <span></span>
//               <span></span>
//               <span></span>
//             </span>
//           </a>

//           <ul class="nav user-menu">
//             {/*} <li
//                 style={{
//                   marginLeft: "40px",
//                   fontWeight: "800",
//                   paddingTop: "10px",
//                 }}
//               >
//                 Admin Dashboard
//               </li>*/}
//             <li class="nav-item nav-searchinputs">
//               <div class="top-nav-search">
//                 <a href="javascript:void(0);" class="responsive-search">
//                   <i class="fa fa-search"></i>
//                 </a>
//                 <form action="#" class="dropdown">
//                   <div
//                     class="searchinputs dropdown-toggle"
//                     id="dropdownMenuClickable"
//                     data-bs-toggle="dropdown"
//                     data-bs-auto-close="false"
//                   >
//                     <input type="text" placeholder="Search" />
//                     <div class="search-addon">
//                       <span>
//                         <i data-feather="x-circle" class="feather-14"></i>
//                       </span>
//                     </div>
//                   </div>
//                   <div
//                     class="dropdown-menu search-dropdown"
//                     aria-labelledby="dropdownMenuClickable"
//                   >
//                     <div class="search-info">
//                       <h6>
//                         <span>
//                           <i data-feather="search" class="feather-16"></i>
//                         </span>
//                         Recent Searches
//                       </h6>
//                       <ul class="search-tags">
//                         <li>
//                           <a href="javascript:void(0);">Products</a>
//                         </li>
//                         <li>
//                           <a href="javascript:void(0);">Sales</a>
//                         </li>
//                         <li>
//                           <a href="javascript:void(0);">Applications</a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div class="search-info">
//                       <h6>
//                         <span>
//                           <i data-feather="help-circle" class="feather-16"></i>
//                         </span>
//                         Help
//                       </h6>
//                       <p>
//                         How to Change Product Volume from 0 to 200 on Inventory
//                         management
//                       </p>
//                       <p>Change Product Name</p>
//                     </div>
//                     <div class="search-info">
//                       <h6>
//                         <span>
//                           <i data-feather="user" class="feather-16"></i>
//                         </span>
//                         Customers
//                       </h6>
//                       <ul class="customers">
//                         <li>
//                           <a href="javascript:void(0);">
//                             Aron Varu
//                             <img
//                               src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avator1.jpg"
//                               alt
//                               class="img-fluid"
//                             />
//                           </a>
//                         </li>
//                         <li>
//                           <a href="javascript:void(0);">
//                             Jonita
//                             <img
//                               src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg"
//                               alt
//                               class="img-fluid"
//                             />
//                           </a>
//                         </li>
//                         <li>
//                           <a href="javascript:void(0);">
//                             Aaron
//                             <img
//                               src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-10.jpg"
//                               alt
//                               class="img-fluid"
//                             />
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </li>

//             <li class="nav-item dropdown nav-item-box">
//               <a
//                 href="javascript:void(0);"
//                 class="dropdown-toggle nav-link"
//                 data-bs-toggle="dropdown"
//               >
//                 <i data-feather="bell"></i>
//                 <span class="badge rounded-pill">2</span>
//               </a>
//               <div class="dropdown-menu notifications">
//                 <div class="topnav-dropdown-header">
//                   <span class="notification-title">Notifications</span>
//                   <a href="javascript:void(0)" class="clear-noti">
//                     {" "}
//                     Clear All{" "}
//                   </a>
//                 </div>
//                 <div class="noti-content">
//                   <ul class="notification-list">
//                     <li class="notification-message">
//                       <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
//                         <div class="media d-flex">
//                           <span class="avatar flex-shrink-0">
//                             <img
//                               alt
//                               src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg"
//                             />
//                           </span>
//                           <div class="media-body flex-grow-1">
//                             <p class="noti-details">
//                               <span class="noti-title">Oga Pos Limited</span>{" "}
//                               added new task{" "}
//                               <span class="noti-title">
//                                 Patient appointment booking
//                               </span>
//                             </p>
//                             <p class="noti-time">
//                               <span class="notification-time">4 mins ago</span>
//                             </p>
//                           </div>
//                         </div>
//                       </a>
//                     </li>
//                     <li class="notification-message">
//                       <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
//                         <div class="media d-flex">
//                           <span class="avatar flex-shrink-0">
//                             <img
//                               alt
//                               src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-03.jpg"
//                             />
//                           </span>
//                           <div class="media-body flex-grow-1">
//                             <p class="noti-details">
//                               <span class="noti-title">Tarah Shropshire</span>
//                               changed the task name{" "}
//                               <span class="noti-title">
//                                 Appointment booking with payment gateway
//                               </span>
//                             </p>
//                             <p class="noti-time">
//                               <span class="notification-time">6 mins ago</span>
//                             </p>
//                           </div>
//                         </div>
//                       </a>
//                     </li>
//                     <li class="notification-message">
//                       <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
//                         <div class="media d-flex">
//                           <span class="avatar flex-shrink-0">
//                             <img
//                               alt
//                               src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-06.jpg"
//                             />
//                           </span>
//                           <div class="media-body flex-grow-1">
//                             <p class="noti-details">
//                               <span class="noti-title">Misty Tison</span>
//                               added{" "}
//                               <span class="noti-title">
//                                 Domenic Houston
//                               </span>{" "}
//                               and <span class="noti-title">Claire Mapes</span>{" "}
//                               to project{" "}
//                               <span class="noti-title">
//                                 Doctor available module
//                               </span>
//                             </p>
//                             <p class="noti-time">
//                               <span class="notification-time">8 mins ago</span>
//                             </p>
//                           </div>
//                         </div>
//                       </a>
//                     </li>
//                     <li class="notification-message">
//                       <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
//                         <div class="media d-flex">
//                           <span class="avatar flex-shrink-0">
//                             <img
//                               alt
//                               src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-17.jpg"
//                             />
//                           </span>
//                           <div class="media-body flex-grow-1">
//                             <p class="noti-details">
//                               <span class="noti-title">Rolland Webber</span>
//                               completed task{" "}
//                               <span class="noti-title">
//                                 Patient and Doctor video conferencing
//                               </span>
//                             </p>
//                             <p class="noti-time">
//                               <span class="notification-time">12 mins ago</span>
//                             </p>
//                           </div>
//                         </div>
//                       </a>
//                     </li>
//                     <li class="notification-message">
//                       <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
//                         <div class="media d-flex">
//                           <span class="avatar flex-shrink-0">
//                             <img
//                               alt
//                               src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-13.jpg"
//                             />
//                           </span>
//                           <div class="media-body flex-grow-1">
//                             <p class="noti-details">
//                               <span class="noti-title">Bernardo Galaviz</span>
//                               added new task{" "}
//                               <span class="noti-title">
//                                 Private chat module
//                               </span>
//                             </p>
//                             <p class="noti-time">
//                               <span class="notification-time">2 days ago</span>
//                             </p>
//                           </div>
//                         </div>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div class="topnav-dropdown-footer">
//                   <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
//                     View all Notifications
//                   </a>
//                 </div>
//               </div>
//             </li>

//             <li class="nav-item nav-item-box">
//               <a href="https://dreamspos.dreamstechnologies.com/html/template/general-settings.html">
//                 <i data-feather="settings"></i>
//               </a>
//             </li>
//             <li class="nav-item dropdown has-arrow main-drop">
//               <a
//                 href="javascript:void(0);"
//                 class="dropdown-toggle nav-link userset"
//                 data-bs-toggle="dropdown"
//               >
//                 <span class="user-info">
//                   <span class="user-letter"></span>
//                   <span class="user-detail">
//                     <span class="user-name">Oga Pos Limited</span>
//                     <span class="user-role"> Admin</span>
//                   </span>
//                 </span>
//               </a>
//               <div class="dropdown-menu menu-drop-user">
//                 <div class="profilename">
//                   <div class="profileset">
//                     <div class="profilesets">
//                       <h6>Oga Pos Limited</h6>
//                       <h5> Admin</h5>
//                     </div>
//                   </div>
//                   <hr class="m-0" />
//                   <a
//                     class="dropdown-item"
//                     href="https://dreamspos.dreamstechnologies.com/html/template/profile.html"
//                   >
//                     {" "}
//                     <i class="me-2" data-feather="user"></i> My Profile
//                   </a>
//                   <a
//                     class="dropdown-item"
//                     href="https://dreamspos.dreamstechnologies.com/html/template/general-settings.html"
//                   >
//                     <i class="me-2" data-feather="settings"></i>Settings
//                   </a>
//                   <hr class="m-0" />
//                   <a
//                     class="dropdown-item logout pb-0"
//                     href="https://dreamspos.dreamstechnologies.com/html/template/signin.html"
//                   >
//                     <img
//                       src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/log-out.svg"
//                       class="me-2"
//                       alt="img"
//                     />
//                     Logout
//                   </a>
//                 </div>
//               </div>
//             </li>
//           </ul>

//           <div class="dropdown mobile-user-menu">
//             <a
//               href="javascript:void(0);"
//               class="nav-link dropdown-toggle"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               <i class="fa fa-ellipsis-v"></i>
//             </a>
//             <div class="dropdown-menu dropdown-menu-right">
//               <a
//                 class="dropdown-item"
//                 href="https://dreamspos.dreamstechnologies.com/html/template/profile.html"
//               >
//                 My Profile
//               </a>
//               <a
//                 class="dropdown-item"
//                 href="https://dreamspos.dreamstechnologies.com/html/template/general-settings.html"
//               >
//                 Settings
//               </a>
//               <a
//                 class="dropdown-item"
//                 href="https://dreamspos.dreamstechnologies.com/html/template/signin.html"
//               >
//                 Logout
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </body>
//   );
// };

// export default TopNav;

import React from "react";
import logo from "./oga4.png";
import { useSidebar } from "../admindashboard/SidebarProvider";

const TopNav = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="header">
      <div className="header-left">
        <a className="logo">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "150px", height: "auto" }}
          />
        </a>
        <a
          id="toggle_btn"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            toggleSidebar(); // Toggle sidebar when button is clicked
          }}
        >
          <i className="icon-menu"></i>
        </a>
      </div>
      <a
        id="mobile_btn"
        className="mobile_btn"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          toggleSidebar(); // Toggle sidebar when button is clicked
        }}
      >
        <span className="bar-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>
    </div>
  );
};

export default TopNav;
