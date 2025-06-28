import { React, useEffect, useState } from "react";
// import useFetch from "hooks/useFetch";
import logo from "./oga4.png";
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";

const ViewAdmin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
                  <h4 class="card-title">All Admin</h4>
                </div>
                <div class="card-header">
                  <h4 class="card-title">Add Admin</h4>
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
                              <a href="javascript:void(0);">
                                Red Premium Handy{" "}
                              </a>
                            </div>
                          </td>
                          <td>
                            <a href="javascript:void(0);">PT006</a>
                          </td>
                          <td>17 Jan 2023</td>
                          <td>29 Mar 2023</td>
                          <td>29 Mar 2023</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 p-2" href="#">
                                <i data-feather="edit" class="feather-edit"></i>
                              </a>
                              <a
                                class=" confirm-text p-2"
                                href="javascript:void(0);"
                              >
                                <i
                                  data-feather="trash-2"
                                  class="feather-trash-2"
                                ></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="productimgname">
                              <a href="javascript:void(0);">Iphone 14 Pro</a>
                            </div>
                          </td>
                          <td>
                            <a href="javascript:void(0);">PT007</a>
                          </td>
                          <td>22 Feb 2023</td>
                          <td>04 Apr 2023</td>
                          <td>04 Apr 2023</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 p-2" href="#">
                                <i data-feather="edit" class="feather-edit"></i>
                              </a>
                              <a
                                class="confirm-text p-2"
                                href="javascript:void(0);"
                              >
                                <i
                                  data-feather="trash-2"
                                  class="feather-trash-2"
                                ></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="productimgname">
                              <a href="javascript:void(0);">Black Slim 200 </a>
                            </div>
                          </td>
                          <td>
                            <a href="javascript:void(0);">PT008</a>
                          </td>
                          <td>18 Mar 2023</td>
                          <td>13 May 2023</td>
                          <td>13 May 2023</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 p-2" href="#">
                                <i data-feather="edit" class="feather-edit"></i>
                              </a>
                              <a
                                class=" confirm-text p-2"
                                href="javascript:void(0);"
                              >
                                <i
                                  data-feather="trash-2"
                                  class="feather-trash-2"
                                ></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="productimgname">
                              <a href="javascript:void(0);">Woodcraft Sandal</a>
                            </div>
                          </td>
                          <td>
                            <a href="javascript:void(0);">PT009</a>
                          </td>
                          <td>29 Mar 2023</td>
                          <td>27 May 2023</td>
                          <td>27 May 2023</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 p-2" href="#">
                                <i data-feather="edit" class="feather-edit"></i>
                              </a>
                              <a
                                class=" confirm-text p-2"
                                href="javascript:void(0);"
                              >
                                <i
                                  data-feather="trash-2"
                                  class="feather-trash-2"
                                ></i>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="productimgname">
                              <a href="javascript:void(0);">
                                Apple Series 5 Watch{" "}
                              </a>
                            </div>
                          </td>
                          <td>
                            <a href="javascript:void(0);">PT010</a>
                          </td>
                          <td>24 Mar 2023</td>
                          <td>26 May 2023</td>
                          <td>26 May 2023</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a
                                class="me-2 p-2"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-units"
                              >
                                <i data-feather="edit" class="feather-edit"></i>
                              </a>
                              <a
                                class=" confirm-text p-2"
                                href="javascript:void(0);"
                              >
                                <i
                                  data-feather="trash-2"
                                  class="feather-trash-2"
                                ></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default ViewAdmin;
