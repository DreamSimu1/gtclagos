// import React, { useState, useEffect } from "react";
// import logo from "./oga4.png";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useSidebar } from "./SidebarProvider";

// const SideNav = () => {
//   const { isSidebarOpen } = useSidebar();
//   const [openSubmenus, setOpenSubmenus] = React.useState(new Set());

//   const toggleSubmenu = (index) => {
//     const updatedSubmenus = new Set(openSubmenus);
//     if (updatedSubmenus.has(index)) {
//       updatedSubmenus.delete(index);
//     } else {
//       updatedSubmenus.add(index);
//     }
//     setOpenSubmenus(updatedSubmenus);
//   };

//   return (
//     <div
//       className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}
//       id="sidebar"
//     >
//       <div className="sidebar" id="sidebar">
//         <div className="sidebar-inner slimscroll">
//           <div id="sidebar-menu" className="sidebar-menu">
//             <ul>
//               <li className="submenu-open">
//                 <h6 className="submenu-hdr">Main</h6>
//                 <ul>
//                   <li className="submenu">
//                     <a
//                       href="#"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         toggleSubmenu(0);
//                       }}
//                       className={openSubmenus.has(0) ? "subdrop active" : ""}
//                     >
//                       <i data-feather="grid"></i>
//                       <span>Dashboard</span>
//                       <span className="menu-arrow"></span>
//                     </a>
//                     {openSubmenus.has(0) && (
//                       <ul>
//                         <li>
//                           <Link to="/admin-dashboard" className="active">
//                             Admin Dashboard
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to="/manager-dashboard">Manager Dashboard</Link>
//                         </li>
//                         <li>
//                           <Link to="/sales-dashboard">Sales Dashboard</Link>
//                         </li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>

//                 <ul>
//                   <li className="submenu">
//                     <a
//                       href="#"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         toggleSubmenu(10);
//                       }}
//                       className={openSubmenus.has(10) ? "subdrop active" : ""}
//                     >
//                       <i data-feather="grid"></i>
//                       <span>View Role</span>
//                       <span className="menu-arrow"></span>
//                     </a>
//                     {openSubmenus.has(10) && (
//                       <ul>
//                         <li>
//                           <Link to="/view-admin">Admin</Link>
//                         </li>
//                         <li>
//                           <Link to="/view-manager">Manager</Link>
//                         </li>
//                         <li>
//                           <Link to="/view-sales">Sales/Staff</Link>
//                         </li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               </li>

//               {/*<li className="submenu-open">
//                 <h6 className="submenu-hdr">Transactions</h6>
//                 <ul>
//                   <li>
//                     <a href="https://dreamspos.dreamstechnologies.com/html/template/manage-stocks.html">
//                       <i data-feather="package"></i>
//                       <span>Admin </span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://dreamspos.dreamstechnologies.com/html/template/manage-stocks.html">
//                       <i data-feather="package"></i>
//                       <span>Manager </span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://dreamspos.dreamstechnologies.com/html/template/stock-adjustment.html">
//                       <i data-feather="clipboard"></i>
//                       <span>Staff </span>
//                     </a>
//                   </li>
//                 </ul>
//               </li>*/}
//               <li className="submenu-open">
//                 <ul>
//                   <li className="submenu">
//                     <a
//                       href="#"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         toggleSubmenu(11);
//                       }}
//                       className={openSubmenus.has(11) ? "subdrop active" : ""}
//                     >
//                       <i data-feather="grid"></i>
//                       <span>Sales</span>
//                       <span className="menu-arrow"></span>
//                     </a>
//                     {openSubmenus.has(11) && (
//                       <ul>
//                         <li>
//                           <Link to="/sales-list" className="active">
//                             List Sales
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to="/add-sales" className="active">
//                             Add Sales
//                           </Link>
//                         </li>
//                         {/* <li>
//                           <a
//                             href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
//                             className="active"
//                           >
//                             Receipt
//                           </a>
//                         </li>*/}
//                         <li>
//                           <Link to="/view-sales-quotation" className="active">
//                             Quotation
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to="/sales-invoice">Invoice</Link>
//                         </li>

//                         {/*} <li>
//                           <a href="https://dreamspos.dreamstechnologies.com/html/template/sales-dashboard.html">
//                             Sales Report
//                           </a>
//                         </li>*/}
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               </li>

//               <li className="submenu-open">
//                 <ul>
//                   <li className="submenu">
//                     <a
//                       href="#"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         toggleSubmenu(12);
//                       }}
//                       className={openSubmenus.has(12) ? "subdrop active" : ""}
//                     >
//                       <i data-feather="grid"></i>
//                       <span>Purchase</span>
//                       <span className="menu-arrow"></span>
//                     </a>
//                     {openSubmenus.has(12) && (
//                       <ul>
//                         <li>
//                           <Link to="/purchase-list" className="active">
//                             List Purchase
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to="/add-purchase" className="active">
//                             Add Purchases
//                           </Link>
//                         </li>
//                         {/*} <li>
//                           <a
//                             href="https://dreamspos.dreamstechnologies.com/html/template/index.html"
//                             className="active"
//                           >
//                             Receipt
//                           </a>
//                         </li>*/}
//                         <li>
//                           <Link
//                             to="/view-purchase-quotation"
//                             className="active"
//                           >
//                             Quotation
//                           </Link>
//                         </li>
//                         {/*}  <li>
//                           <a href="https://dreamspos.dreamstechnologies.com/html/template/sales-dashboard.html">
//                             Pending
//                           </a>
//                         </li>*/}
//                         <li>
//                           <Link to="/view-purchase-invoice" className="active">
//                             Invoice
//                           </Link>
//                         </li>
//                         {/*} <li>
//                           <a href="https://dreamspos.dreamstechnologies.com/html/template/sales-dashboard.html">
//                             Purchase Report
//                           </a>
//                         </li>*/}
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               </li>
//               <li className="submenu-open">
//                 <h6 className="submenu-hdr">Finance & Accounts</h6>
//                 <ul>
//                   <li className="submenu">
//                     <a
//                       onClick={(e) => {
//                         e.preventDefault();
//                         toggleSubmenu(1);
//                       }}
//                       className={openSubmenus.has(1) ? "subdrop active" : ""}
//                     >
//                       <i data-feather="file-text"></i>
//                       <span>Expenses</span>
//                       <span className="menu-arrow"></span>
//                     </a>
//                     {openSubmenus.has(1) && (
//                       <ul>
//                         <li>
//                           <Link to="/view-expenses">Expenses</Link>
//                         </li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               </li>

//               <li className="submenu-open">
//                 <h6 className="submenu-hdr">User Management</h6>
//                 <ul>
//                   <li>
//                     <Link to="/view-users">
//                       <i data-feather="user-check"></i>
//                       <span>Users</span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/role-permission">
//                       <i data-feather="shield"></i>
//                       <span>Roles & Permissions</span>
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="submenu-open">
//                 <h6 className="submenu-hdr">Pages</h6>
//                 <ul>
//                   <li>
//                     <Link to="/profile">
//                       <i data-feather="user"></i>
//                       <span>Profile</span>
//                     </Link>
//                   </li>
//                   <li className="submenu">
//                     <a
//                       onClick={(e) => {
//                         e.preventDefault();
//                         toggleSubmenu(2);
//                       }}
//                       className={openSubmenus.has(2) ? "subdrop active" : ""}
//                     >
//                       <i data-feather="shield"></i>
//                       <span>Authentication</span>
//                       <span className="menu-arrow"></span>
//                     </a>
//                     {openSubmenus.has(2) && (
//                       <ul>
//                         <li className="submenu submenu-two">
//                           <a href="login">
//                             Login
//                             <span className="menu-arrow inside-submenu"></span>
//                           </a>
//                         </li>

//                         <li className="submenu submenu-two">
//                           <a href="forgot-password">
//                             Forgot Password
//                             <span className="menu-arrow inside-submenu"></span>
//                           </a>
//                           <ul>
//                             <li>
//                               <a href="forgot-password">Forgot Password</a>
//                             </li>
//                           </ul>
//                         </li>
//                         <li>
//                           <a href="reset-password">Reset Password</a>
//                         </li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//           <div className="sidebar-overlay" data-reff="#sidebar"></div>
//         </div>
//       </div>
//       {/* Add any additional scripts or components here */}
//     </div>
//   );
// };

// export default SideNav;

import React from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "../admindashboard/SidebarProvider";

const SideNav = () => {
  const { isSidebarOpen } = useSidebar();
  const [openSubmenus, setOpenSubmenus] = React.useState(new Set());

  const toggleSubmenu = (index) => {
    const updatedSubmenus = new Set(openSubmenus);
    if (updatedSubmenus.has(index)) {
      updatedSubmenus.delete(index);
    } else {
      updatedSubmenus.add(index);
    }
    setOpenSubmenus(updatedSubmenus);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="submenu-open">
              <h6 className="submenu-hdr">Main</h6>
              <ul>
                <li className="submenu">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSubmenu(0);
                    }}
                    className={openSubmenus.has(0) ? "subdrop active" : ""}
                  >
                    <i data-feather="grid"></i>
                    <span>Dashboard</span>
                    <span className="menu-arrow"></span>
                  </a>
                  {openSubmenus.has(0) && (
                    <ul>
                      <li>
                        <Link to="/admin-dashboard" className="active">
                          Admin Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link to="/manager-dashboard">Manager Dashboard</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
