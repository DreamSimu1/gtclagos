import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SessionContext } from "../../SessionContext";

const EditStudentModal = ({
  showModal,
  setShowModal,
  selectedStudent,
  updateTableData,
}) => {
  const { currentSession } = useContext(SessionContext);
  const apiUrl = process.env.REACT_APP_API_URL;

  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    admNo: "",
    gender: "male",
    birthday: "",
    tech: "tech_1",
    password: "",
  });

  useEffect(() => {
    if (selectedStudent) {
      setFormData({
        fullname: selectedStudent.fullname || "",
        username: selectedStudent.username || "",
        email: selectedStudent.email || "",
        phone: selectedStudent.phone || "",
        admNo: selectedStudent.admNo || "",
        gender: selectedStudent.gender || "male",
        birthday: selectedStudent.birthday?.substr(0, 10) || "",
        tech: selectedStudent.tech || "tech_1",
      });

      setSelectedSection(selectedStudent.tradeSection?._id || "");
    }
  }, [selectedStudent]);

  useEffect(() => {
    if (currentSession?._id) {
      fetchSections();
    }
  }, [currentSession]);

  const fetchSections = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/section/${currentSession._id}`
      );
      setSections(response.data?.data || []);
    } catch (error) {
      console.error("Error fetching sections:", error);
    }
  };

  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const token = localStorage.getItem("jwtToken");

  //     await axios.put(
  //       `${apiUrl}/api/auth/user/${selectedStudent._id}`,
  //       {
  //         ...formData,
  //         tradeSection: selectedSection,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     setShowModal(false);
  //     if (updateTableData) updateTableData();
  //   } catch (error) {
  //     console.error("Error updating student:", error.response?.data || error);
  //     alert("Failed to update student.");
  //   }
  // };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwtToken");

      // ✅ Define payload first
      const payload = {
        ...formData,
        tradeSection: selectedSection,
      };

      // ✅ Remove password if it's blank (i.e., do not update it)
      if (!formData.password) {
        delete payload.password;
      }

      await axios.put(
        `${apiUrl}/api/auth/user/${selectedStudent._id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setShowModal(false);
      if (updateTableData) updateTableData();
    } catch (error) {
      console.error("Error updating student:", error.response?.data || error);
      alert("Failed to update student.");
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
              <h5 className="modal-title">Edit Student</h5>
              <button
                type="button"
                className="close"
                onClick={() => setShowModal(false)}
              >
                <span>&times;</span>
              </button>
            </div>

            <form onSubmit={handleUpdate}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.fullname}
                    onChange={(e) =>
                      setFormData({ ...formData, fullname: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
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
                  <label>New Password (optional)</label>
                  <input
                    type="password"
                    className="form-control"
                    value={formData.password}
                    minLength={8}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder="Leave blank to keep old password"
                  />
                </div>

                <div className="form-group">
                  <label>Select Trade Section</label>
                  <select
                    className="form-control"
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value)}
                  >
                    <option value="">Select Section</option>
                    {sections.map((section) => (
                      <option key={section._id} value={section._id}>
                        {section.name}
                      </option>
                    ))}
                  </select>
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
                  Update Student
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

export default EditStudentModal;
