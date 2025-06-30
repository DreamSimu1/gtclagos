import React, { useState, useContext } from "react";
import axios from "axios";
import { SessionContext } from "../../SessionContext";

const AddHodModal = ({ showModal, setShowModal, updateTableData }) => {
  const { currentSession } = useContext(SessionContext);
  const apiUrl = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    admNo: "",
    gender: "male",
    birthday: "",
    tech: "tech_1", // Default to tech_1
  });

  const handleAddStudent = async (e) => {
    e.preventDefault();

    if (!currentSession?._id) {
      alert("Session is not selected.");
      return;
    }

    try {
      const payload = {
        ...formData,
        role: "student",
        session: currentSession._id,
      };

      const token = localStorage.getItem("jwtToken");

      await axios.post(`${apiUrl}/register`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (updateTableData) updateTableData();
      setShowModal(false);
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        username: "",
        password: "",
        admNo: "",
        gender: "male",
        birthday: "",
        tech: "tech_1",
      });
    } catch (error) {
      console.error(
        "Error registering student:",
        error.response?.data || error
      );
      alert("Failed to register student. See console for details.");
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
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Student</h5>
              <button
                type="button"
                className="close"
                onClick={() => setShowModal(false)}
              >
                <span>&times;</span>
              </button>
            </div>

            <form onSubmit={handleAddStudent}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={formData.fullname}
                    onChange={(e) =>
                      setFormData({ ...formData, fullname: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    required
                    minLength="8"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Admission Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.admNo}
                    onChange={(e) =>
                      setFormData({ ...formData, admNo: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Gender</label>
                  <select
                    className="form-control"
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Birthday</label>
                  <input
                    type="date"
                    className="form-control"
                    value={formData.birthday}
                    onChange={(e) =>
                      setFormData({ ...formData, birthday: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Tech</label>
                  <select
                    className="form-control"
                    value={formData.tech}
                    onChange={(e) =>
                      setFormData({ ...formData, tech: e.target.value })
                    }
                  >
                    <option value="tech_1">Tech 1</option>
                    <option value="tech_2">Tech 2</option>
                    <option value="tech_3">Tech 3</option>
                  </select>
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Add Student
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
    </>
  );
};

export default AddHodModal;
