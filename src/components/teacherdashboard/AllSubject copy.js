import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { SessionContext } from "../../SessionContext";
import AddSubjectModal from "./AddSubjectModal";
import DeleteSubject from "./DeleteSubject";
import EditSubject from "./EditSubject";

const AllSubject = () => {
  const { currentSession } = useContext(SessionContext);
  const { sectionId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [activeTech, setActiveTech] = useState("tech_1");
  const [loading, setLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [subjectToDelete, setSubjectToDelete] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const techTabs = [
    { key: "tech_1", label: "Tech 1", color: "#1b8914" },
    { key: "tech_2", label: "Tech 2", color: "#5191fc" },
    { key: "tech_3", label: "Tech 3", color: "#feba43" },
  ];

  const fetchSubjects = async () => {
    try {
      if (!currentSession?._id || !sectionId) return;

      setLoading(true);
      const response = await axios.get(
        `${apiUrl}/api/subject/all/${sectionId}/${currentSession._id}`
      );
      setSubjects(response.data || []);
    } catch (err) {
      console.error("Error fetching subjects:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, [currentSession, sectionId]);
  console.log("these arethe data", subjects);
  const filteredSubjects = subjects.filter(
    (subject) => subject.classname === activeTech
  );
  const handleDeleteSubject = async () => {
    try {
      await axios.delete(
        `${apiUrl}/api/subject/delete-subject/${subjectToDelete}`
      );
      setSubjects((prev) => prev.filter((t) => t._id !== subjectToDelete));
      setConfirmDeleteModal(false);
      setSubjectToDelete(null);
    } catch (err) {
      console.error("Error deleting subject:", err);
      alert("Failed to delete subject.");
    }
  };
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <div className="card">
            <div className="card-header flex justify-between items-center">
              <h4 className="card-title">Subjects in Section</h4>
            </div>
            <div className="card-header flex justify-between items-center">
              <h4 className="card-title">Add Subject</h4>
              <button
                type="button"
                className="force-mobile-button"
                onClick={() => setShowModal(true)}
              >
                <span>Add Subject</span>
              </button>
            </div>
            {/* Tech Tabs */}
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

            <div className="card-body">
              <div className="table-responsive dataview">
                <table className="table dashboard-expired-products">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Subject Name</th>
                      <th>Teacher</th>
                      <th>Class</th>
                      <th className="no-sort">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="5" className="text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : filteredSubjects.length > 0 ? (
                      filteredSubjects.map((subject, index) => (
                        <tr key={subject._id}>
                          <td>{index + 1}</td>
                          <td>{subject.name}</td>
                          <td>{subject.teacher?.fullname || "N/A"}</td>
                          <td>{subject.classname?.replace("_", " ")}</td>
                          <td className="action-table-data">
                            <div className="edit-delete-action">
                              <a
                                className="me-2 p-2 cursor-pointer"
                                onClick={() => {
                                  setSelectedSubject(subject); // pass full subject object
                                  setEditModalOpen(true);
                                }}
                              >
                                <FiEdit size={18} />
                              </a>
                              <a
                                className="confirm-text p-2 cursor-pointer"
                                onClick={() => {
                                  setSubjectToDelete(subject._id);
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
                          No subjects found in {activeTech.replace("_", " ")}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <AddSubjectModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  sectionId={sectionId}
                  refreshSubjects={fetchSubjects}
                />
                <DeleteSubject
                  show={confirmDeleteModal}
                  onClose={() => setConfirmDeleteModal(false)}
                  onConfirm={handleDeleteSubject}
                />
                <EditSubject
                  showModal={editModalOpen}
                  setShowModal={setEditModalOpen}
                  sectionId={sectionId}
                  refreshSubjects={fetchSubjects}
                  selectedSubject={selectedSubject}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSubject;
