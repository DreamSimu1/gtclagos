import { React, useEffect, useState, useContext } from "react";
import axios from "axios";
// import useFetch from "hooks/useFetch";

import { SessionContext } from "../../SessionContext";
import AddTeacherModal from "./AddTeacherModal";
import useFetch from "../../hooks/useFetch";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const Section = () => {
  const { currentSession } = useContext(SessionContext);
  const { data, loading, error, reFetch } = useFetch(
    currentSession ? `/section/${currentSession._id}` : null
  );
  useEffect(() => {
    console.log("🟢 currentSession:", currentSession);
    console.log("🟢 Raw fetched data:", data);
    console.log("🟢 Array of sections:", data?.data);
  }, [data, currentSession]);
  const [section, setSection] = useState([]);
  const [page, setPage] = useState(0);
  const [editTeacherData, setEditTeacherData] = useState(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [anchorElMap, setAnchorElMap] = useState({});
  const [tableData, setTableData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [sectionToDelete, setSectionToDelete] = useState(null);
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
    setTableData((prev) => [...prev, newSubject]); // ✅ safer

    reFetch(); // Trigger data refetch after updating tableData1
  };
  const handleDeleteSection = async () => {
    try {
      await axios.delete(`${apiUrl}/api/section/${sectionToDelete}`);
      reFetch(); // ✅ refetch from server

      setConfirmDeleteModal(false);
      setSectionToDelete(null);
    } catch (err) {
      console.error("Error deleting teacher:", err);
      alert("Failed to delete section.");
    }
  };
  return (
    <div>
      <div class="main-wrapper">
        <div class="page-wrapper">
          <div class="content">
            <div class="card">
              <div className="card-header flex justify-between items-center">
                <h4 className="card-title">All Sections</h4>
                <button
                  type="button"
                  className="force-mobile-button"
                  onClick={() => setShowModal(true)}
                >
                  <span>Add Section</span>
                </button>
              </div>

              <div class="card-body">
                <div class="table-responsive dataview">
                  <div style={{ overflowX: "auto" }}>
                    <table class="table dashboard-expired-products">
                      <thead>
                        <tr>
                          <th>S/N</th>
                          <th>Name</th>
                          <th>HOD</th>
                          <th>Description</th>

                          <th class="no-sort">Action</th>
                        </tr>
                      </thead>
                      {Array.isArray(data?.data) && data.data.length > 0 ? (
                        data.data.map((item, index) => (
                          <tr key={item?._id}>
                            <td>{index + 1}</td>
                            <td>{item?.name}</td>
                            <td>{item?.hod?.fullname}</td>
                            <td>{item?.description}</td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <a className="me-2 p-2 cursor-pointer">
                                  <FiEdit size={18} />
                                </a>
                                <a
                                  className="confirm-text p-2 cursor-pointer"
                                  onClick={() => {
                                    setSectionToDelete(item._id); // ✅ use item._id, not section._id
                                    setConfirmDeleteModal(true);
                                  }}
                                >
                                  <FiTrash2 size={18} />
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center">
                            No section found
                          </td>
                        </tr>
                      )}
                    </table>
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

export default Section;
