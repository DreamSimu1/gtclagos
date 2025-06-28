import { React, useEffect, useState } from "react";
// import useFetch from "hooks/useFetch";
import logo from "./oga4.png";
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import "./admin.css";

import AddAdminModal from "./AddAdminModal";
import AddManagerModal from "./AddManagerModal";
const ViewManager = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const updateTableData = (newAdmin) => {
    // Logic to update the table with the new admin data
    console.log("Updating table with new admin:", newAdmin);
  };

  return (
    <div>
      <body>
        <div class="main-wrapper">
          <TopNav />

          <SideNav />

          <div class="page-wrapper">
            <div class="content">
              <div class="card">
                <div class="card-header">
                  <div className="header-container">
                    <h4 className="card-title">View Profile</h4>
                  </div>
                </div>

                <div class="card-body">
                  <div class="table-responsive dataview">
                    <table class="table dashboard-expired-products">
                      <thead>
                        <tr>
                          <th class="no-sort">
                            <label class="checkboxs">
                              <input type="checkbox" id="select-all" />
                              <span class="checkmarks"></span>
                            </label>
                          </th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone No</th>
                          <th> Adress</th>
                          <th> Point</th>
                          <th class="no-sort">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="productimgname">
                              <a href="javascript:void(0);"></a>
                            </div>
                          </td>
                          <td>
                            <a href="javascript:void(0);"></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <AddManagerModal
                      showModal={showModal}
                      setShowModal={setShowModal}
                      updateTableData={updateTableData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default ViewManager;
