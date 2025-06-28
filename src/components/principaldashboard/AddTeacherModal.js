import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Modal.css";
import { SessionContext } from "../../SessionContext"; // Adjust the path if needed

const AddTeacherModal = ({ showModal, setShowModal, updateTableData }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { currentSession } = useContext(SessionContext);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    phone: "",
    address: "",
    password: "",
    tradeSection: "",
  });

  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        if (currentSession?._id) {
          const response = await axios.get(
            `${apiUrl}/api/section/${currentSession._id}`
          );
          setSections(response.data?.data || []);
        }
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    if (showModal) {
      fetchSections();
    }
  }, [showModal, currentSession, apiUrl]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/api/auth/register`, {
        ...formData,
        personaladdress: formData.address,
        session: [currentSession._id],
        role: "teacher",
      });

      console.log("Teacher added:", response.data);
      updateTableData && updateTableData(response.data.data);
      setShowModal(false);
    } catch (error) {
      console.error("Error adding teacher:", error.response?.data || error);
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
            <form onSubmit={handleAddTeacher}>
              <div className="modal-header">
                <h5 className="modal-title">Add Teacher</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  <span>&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <div className="form-group">
                  <label>Fullname</label>
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Trade Section</label>
                  <select
                    name="tradeSection"
                    value={formData.tradeSection}
                    onChange={handleChange}
                    className="form-control"
                    required
                  >
                    <option value="">Select Trade Section</option>
                    {sections.map((section) => (
                      <option key={section._id} value={section._id}>
                        {section.name}{" "}
                        {/* ✅ Use section.name instead of section.sectionName */}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Add Teacher
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTeacherModal;
