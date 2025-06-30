import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { SessionContext } from "../../SessionContext";
import AddStudentModal from "./AddStudentModal";

const AllStudent = () => {
  const { currentSession } = useContext(SessionContext);
  const { sectionId } = useParams();
  const [students, setStudents] = useState([]);
  const [activeTech, setActiveTech] = useState("tech_1");
  const apiUrl = process.env.REACT_APP_API_URL;
  const [showModal, setShowModal] = useState(false);
  const fetchStudents = async () => {
    try {
      if (!currentSession?._id || !sectionId) return;

      const response = await axios.get(
        `${apiUrl}/api/section/${sectionId}/students/${currentSession._id}`
      );

      const fetched = response.data?.data || [];
      console.log("Fetched students:", fetched); // ✅ Check what's returned
      setStudents(fetched);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [currentSession, sectionId]);

  const filteredStudents = students.filter((student) => {
    const studentTech = (student.tech || "").toLowerCase();
    return studentTech === activeTech;
  });

  const techTabs = [
    { key: "tech_1", label: "Tech 1", color: "#1b8914" }, // Green
    { key: "tech_2", label: "Tech 2", color: "#5191fc" }, // Blue
    { key: "tech_3", label: "Tech 3", color: "#feba43" }, // Yellow
  ];
  const handleViewResult = (studentId) => {
    // You can navigate to a result page or open a modal
    console.log("Viewing result for student:", studentId);
    // Example if using react-router:
    // navigate(`/student/${studentId}/result`);
  };

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <div className="card">
            <div className="card-header flex justify-between items-center">
              <h4 className="card-title">All Students in Section</h4>
            </div>
            <div className="card-header flex justify-between items-center">
              <h4 className="card-title">Add Student</h4>
              <button
                type="button"
                className="force-mobile-button"
                onClick={() => setShowModal(true)}
              >
                <span>Add Student</span>
              </button>
            </div>
            <div className="card-body">
              {/* Tabs */}
              <div className="mb-4 flex gap-4">
                {techTabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTech(tab.key)}
                    style={{
                      backgroundColor:
                        activeTech === tab.key ? tab.color : "transparent",
                      color: activeTech === tab.key ? "#fff" : tab.color,
                      border: `2px solid ${tab.color}`,
                    }}
                    className="px-4 py-2 rounded font-semibold transition-colors duration-200"
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Table */}
              <div className="table-responsive dataview">
                <table className="table dashboard-expired-products">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Fullname</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Photo</th>
                      <th className="no-sort">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.length > 0 ? (
                      filteredStudents.map((student, index) => (
                        <tr key={student._id}>
                          <td>{index + 1}</td>
                          <td>{student.fullname}</td>
                          <td>{student.email}</td>
                          <td>{student.phone}</td>
                          <td>
                            {student.photourl ? (
                              <img
                                src={student.photourl}
                                alt="student"
                                width="40"
                                height="40"
                                style={{ borderRadius: "50%" }}
                              />
                            ) : (
                              "-"
                            )}
                          </td>
                          <td className="action-table-data">
                            <div className="edit-delete-action">
                              <a className="me-2 p-2 cursor-pointer">
                                <FiEdit size={18} />
                              </a>
                              <a className="confirm-text p-2 cursor-pointer">
                                <FiTrash2 size={18} />
                              </a>
                            </div>
                            <button
                              onClick={() => handleViewResult(student._id)}
                              style={{
                                border: "none",
                                backgroundColor: "#e63e54",
                                color: "#fff",
                                padding: "5px",
                                borderRadius: "12px",
                              }}
                            >
                              <Link
                                to={`/principal/dashboard/student_mark_sheet/${student._id}`}
                                style={{
                                  border: "none",
                                  backgroundColor: "#e63e54",
                                  color: "#fff",
                                  padding: "5px",
                                  borderRadius: "12px",
                                }}
                              >
                                {" "}
                                View Result
                              </Link>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">
                          No students found in {activeTech.replace("_", " ")}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {/* Add Student Modal */}
              <AddStudentModal
                showModal={showModal}
                setShowModal={setShowModal}
                updateTableData={fetchStudents}
              />

              {/* Debug: All students */}
              {/* <pre>{JSON.stringify(students, null, 2)}</pre> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStudent;
