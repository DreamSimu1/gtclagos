import { React, useEffect, useState } from "react";
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import "./admin.css";
import AddSalesModal from "./AddSalesModal";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditSalesModal from "./EditSalesModal";
import { Button } from "react-bootstrap";

const ViewSalesUsers = () => {
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
      const response = await axios.get(`${apiUrl}/api/get-sales`);
      setAdmins(response.data);
    } catch (error) {
      console.error("Error fetching admins:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchAdmins();
  }, []);

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
      <body>
        <div className="main-wrapper">
          <TopNav />

          <SideNav />

          <div className="page-wrapper">
            <div className="content">
              <div className="card">
                <div className="card-header">
                  <div className="header-container">
                    <h4 className="card-title">All POS operators</h4>
                    <a
                      className="force-mobile-button"
                      onClick={() => setShowModal(true)}
                    >
                      Add Sales Operator
                    </a>
                  </div>
                </div>

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
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <AddSalesModal
                      showModal={showModal}
                      setShowModal={setShowModal}
                      updateTableData={updateTableData} // Pass updateTableData to the modal
                    />

                    <EditSalesModal
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
      </body>
    </div>
  );
};

export default ViewSalesUsers;
