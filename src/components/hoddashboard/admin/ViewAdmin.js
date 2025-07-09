import { React, useEffect, useState } from "react";
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import "./admin.css";
import AddAdminModal from "./AddAdminModal";
import logo from "./oga4.png";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditAdminModal from "./EditAdminModal";

const ViewAdmin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null); // State to track the selected user ID

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const apiUrl = process.env.REACT_APP_API_URL;

  // Function to fetch all users with the admin role
  const fetchAdmins = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/get-admin`);
      setAdmins(response.data);
    } catch (error) {
      console.error("Error fetching admins:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchAdmins();
  }, []);
  // const deleteUser = async (userId) => {
  //   if (window.confirm("Are you sure you want to delete this user?")) {
  //     try {
  //       await axios.delete(`${apiUrl}/api/users/${userId}`);
  //       // Remove the deleted user from the state
  //       setAdmins(admins.filter((admin) => admin._id !== userId));
  //       alert("User deleted successfully");
  //     } catch (error) {
  //       console.error("Error deleting user:", error);
  //       alert("Failed to delete user. Please try again.");
  //     }
  //   }
  // };

  const openEditModal = (userId) => {
    setSelectedUserId(userId);
    setShowEditModal(true);
  };
  // Update table data after adding a new admin
  const updateTableData = () => {
    fetchAdmins(); // Refetch the data to ensure the table is updated
  };

  return (
    <div>
      <div className="main-wrapper">
        <TopNav />
        <SideNav />
        <div className="page-wrapper">
          <div className="content">
            <div className="card">
              <div className="card-header">
                <div className="header-container">
                  <h4 className="card-title">All Admin</h4>
                  <a
                    className="force-mobile-button"
                    onClick={() => setShowModal(true)}
                  >
                    Add Admin
                  </a>
                </div>
              </div>
              <div></div>

              <div className="card-body">
                <div className="table-responsive dataview">
                  <table className="table dashboard-expired-products">
                    <thead>
                      <tr>
                        <th className="no-sort">
                          <label className="checkboxs">
                            <input type="checkbox" id="select-all" />
                            <span className="checkmarks"></span>
                          </label>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Address</th>
                        <th>Point</th>
                        <th className="no-sort">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {admins.map((admin, index) => (
                        <tr key={index}>
                          <td>
                            <label className="checkboxs">
                              <input type="checkbox" />
                              <span className="checkmarks"></span>
                            </label>
                          </td>
                          <td>{admin?.username}</td>
                          <td>{admin?.email}</td>
                          <td>{admin?.phone}</td>
                          <td>{admin?.personaladdress}</td>
                          <td>
                            {admin?.managedPoints
                              ?.map((point) => point.pointname)
                              .join(", ")}
                          </td>
                          <td className="action-table-data">
                            <div className="edit-delete-action">
                              <a
                                className="me-2 p-2"
                                href="#"
                                onClick={() => openEditModal(admin._id)} // Open the edit modal
                              >
                                <FaEdit className="edit-icon" />
                              </a>
                              <a
                                className="confirm-text p-2"
                                href="javascript:void(0);"
                              >
                                <FaTrash className="delete-icon" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <AddAdminModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    updateTableData={updateTableData}
                  />
                  <EditAdminModal
                    showModal={showEditModal}
                    setShowModal={setShowEditModal}
                    userId={selectedUserId}
                    updateTableData={updateTableData}
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

export default ViewAdmin;
