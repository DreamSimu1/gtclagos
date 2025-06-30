import { React, useEffect, useState, useContext } from "react";
import axios from "axios";
// import useFetch from "hooks/useFetch";

import { SessionContext } from "../../SessionContext";
import AddTeacherModal from "./AddTeacherModal";
import useFetch from "../../hooks/useFetch";
const Teacher = () => {
  const { currentSession } = useContext(SessionContext);
  const { data, loading, error, reFetch } = useFetch(
    currentSession ? `/get-teachers/${currentSession._id}` : null
  );
  const [page, setPage] = useState(0);
  const [editTeacherData, setEditTeacherData] = useState(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [anchorElMap, setAnchorElMap] = useState({});
  const [tableData, setTableData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [action, setAction] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [showModal, setShowModal] = useState(false);

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(
        `${apiUrl}/api/users/${userToDelete._id}`
      );

      console.log("Response from delete API:", response.data);

      if (response.status === 200) {
        console.log("User deleted successfully");

        // Manually trigger data refetch
        reFetch();
      } else {
        console.error("Failed to delete User");
      }
    } catch (error) {
      console.error("Error deleting User:", error);
    }
  };
  const handleEditTeacher = (teacherId) => {
    // Find the selected student by ID
    const selectedTeacher = data.find((teacher) => teacher?._id === teacherId);

    if (!selectedTeacher) {
      console.error("Selected student not found for ID:", teacherId);
      // Optionally, you can choose to return or handle this error gracefully
      return;
    }

    // Open the edit dialog with the selected student data
    setEditTeacherData(selectedTeacher);
    setEditDialogOpen(true);
  };

  const handleSaveEdit = async (updatedData) => {
    try {
      const token = localStorage.getItem("jwtToken");

      // Check if editStudentData is not null and has the _id property
      if (editTeacherData?._id) {
        // Log the payload before sending the request
        // console.log("Payload before sending:", {
        //   studentName: updatedData.studentName,
        //   address: updatedData.address,
        //   // Add other fields as needed
        // });

        const response = await axios.put(
          `${apiUrl}/api/teachers/${editTeacherData._id}`,
          {
            email: updatedData.email,
            username: updatedData.username,
            phone: updatedData.phone,
            address: updatedData.address,
            password: newPassword || updatedData.password,
            // Add other fields as needed
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Teacher updated successfully:", response.data);
        setEditDialogOpen(false);
        reFetch(); // Manually trigger data refetch
      } else {
        console.error("Invalid or missing _id property in editTeacherData");
      }
    } catch (error) {
      console.error("Error updating teacher:", error);
    }
  };
  const updateTableData = (newSubject) => {
    // Assuming data is an array
    setTableData([...data, newSubject]);

    reFetch(); // Trigger data refetch after updating tableData1
  };
  return (
    <div>
      <div class="main-wrapper">
        <div class="page-wrapper">
          <div class="content">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">All Teachers</h4>
              </div>
              <div className="card-header flex justify-between items-center">
                <h4 className="card-title">Add Teacher</h4>
                <button
                  type="button"
                  className="force-mobile-button"
                  onClick={() => setShowModal(true)}
                >
                  <span>Add Teacher</span>
                </button>
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
                            <a href="javascript:void(0);">Red Premium Handy </a>
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
                  <AddTeacherModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    // updateTableData={updateTableData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
