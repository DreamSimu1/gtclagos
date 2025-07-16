import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import { SessionContext } from "../../SessionContext";

const SectionTeachersPage = () => {
  const { sectionId } = useParams();
  const { currentSession } = useContext(SessionContext);
  const [teachers, setTeachers] = useState([]);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [teacherToDelete, setTeacherToDelete] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  // ✅ Move fetch function outside useEffect so we can reuse it
  const fetchTeachersBySection = async () => {
    try {
      if (currentSession?._id && sectionId) {
        const response = await axios.get(
          `${apiUrl}/api/section/${sectionId}/teachers/${currentSession._id}`
        );
        setTeachers(response.data.data || []);
      }
    } catch (err) {
      console.error("Error fetching section teachers:", err);
    }
  };

  useEffect(() => {
    fetchTeachersBySection();
  }, [sectionId, currentSession]);
  // const handleDeleteTeacher = async () => {
  //   try {
  //     await axios.delete(`${apiUrl}/api/auth/user/${teacherToDelete}`);
  //     setConfirmDeleteModal(false);
  //     setTeacherToDelete(null);
  //     await fetchTeachersBySection();
  //   } catch (err) {
  //     console.error("Error deleting teacher:", err);
  //     alert("Failed to delete teacher.");
  //   }
  // };
  const handleDeleteTeacher = async () => {
    try {
      await axios.delete(`${apiUrl}/api/auth/user/${teacherToDelete}`);
      setTeachers((prev) => prev.filter((t) => t._id !== teacherToDelete));
      setConfirmDeleteModal(false);
      setTeacherToDelete(null);
    } catch (err) {
      console.error("Error deleting teacher:", err);
      alert("Failed to delete teacher.");
    }
  };

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <div className="card">
            <div className="card-header flex justify-between items-center">
              <h4 className="card-title">Teachers in Section</h4>
              <button
                type="button"
                className="force-mobile-button"
                onClick={() => setShowModal(true)}
              >
                <span>Add Teacher</span>
              </button>
            </div>

            <div className="card-body">
              <div className="table-responsive dataview">
                <div style={{ overflowX: "auto" }}>
                  <table className="table dashboard-expired-products">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Fullname</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th class="no-sort">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teachers.length > 0 ? (
                        teachers.map((teacher, index) => (
                          <tr key={teacher._id}>
                            <td>{index + 1}</td>
                            <td>{teacher.fullname}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.phone}</td>
                            <td>{teacher.address}</td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <a className="me-2 p-2 cursor-pointer">
                                  <FiEdit size={18} />
                                </a>
                                <a
                                  className="confirm-text p-2 cursor-pointer"
                                  onClick={() => {
                                    setTeacherToDelete(teacher._id);
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
                            No teachers found in this section
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                {/* ✅ Pass down the callback to trigger re-fetch */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTeachersPage;
