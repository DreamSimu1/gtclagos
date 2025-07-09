import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Modal.css";
import { SessionContext } from "../../SessionContext";

const AddSubjectModal = ({
  showModal,
  setShowModal,
  sectionId,
  refreshSubjects,
}) => {
  const [subjectName, setSubjectName] = useState("");
  const [teacherUsername, setTeacherUsername] = useState("");
  const [classname, setClassname] = useState("tech_1");
  const [teachers, setTeachers] = useState([]);
  const { currentSession } = useContext(SessionContext);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        if (!currentSession?._id) return;
        const token = localStorage.getItem("jwtToken");
        const res = await axios.get(
          `${apiUrl}/api/auth/get-teachers/${currentSession._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTeachers(res.data);
      } catch (err) {
        console.error("Error fetching teachers:", err);
      }
    };

    if (showModal && currentSession?._id) {
      fetchTeachers();
    }
  }, [showModal, currentSession]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentSession?._id || !sectionId) {
      alert("Missing required session or section.");
      return;
    }

    try {
      const token = localStorage.getItem("jwtToken");

      const response = await axios.post(
        `${apiUrl}/api/subject/create-subject/${currentSession._id}`,
        {
          name: subjectName,
          teacherUsername,
          classname,
          tradeSectionId: sectionId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("✅ Subject added:", response.data);
      setSubjectName("");
      setTeacherUsername("");
      setClassname("tech_1");
      setShowModal(false);
      if (refreshSubjects) refreshSubjects();
    } catch (err) {
      console.error("Error adding subject:", err);
      alert("Failed to add subject. See console for details.");
    }
  };

  return (
    <>
      {showModal && <div className="modal-backdrop show"></div>}
      <div
        className={`modal fade ${showModal ? "show modal-enter" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Subject</h5>
              <button
                type="button"
                className="close"
                onClick={() => setShowModal(false)}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Subject Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Teacher Username</label>
                  <select
                    className="form-control"
                    value={teacherUsername}
                    onChange={(e) => setTeacherUsername(e.target.value)}
                    required
                  >
                    <option value="">-- Select Teacher --</option>
                    {teachers.map((teacher) => (
                      <option key={teacher._id} value={teacher.username}>
                        {teacher.fullname || teacher.username}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Class</label>
                  <select
                    className="form-control"
                    value={classname}
                    onChange={(e) => setClassname(e.target.value)}
                    required
                  >
                    <option value="tech_1">Tech 1</option>
                    <option value="tech_2">Tech 2</option>
                    <option value="tech_3">Tech 3</option>
                  </select>
                </div>

                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Add Subject
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSubjectModal;
