import React, { useState, useContext } from "react";
import axios from "axios";
import { SessionContext } from "../../SessionContext";

const AddExamModal = ({ showModal, setShowModal, updateTableData }) => {
  const { currentSession } = useContext(SessionContext);
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    date: "",
  });

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleCreateExam = async (e) => {
    e.preventDefault();

    if (!currentSession?._id) {
      alert("Session not selected");
      return;
    }

    try {
      const payload = {
        ...formData,
        session: currentSession._id,
      };

      const token = localStorage.getItem("jwtToken"); // If auth is needed

      await axios.post(`${apiUrl}/api/offline/create-exam`, payload, {
        headers: {
          Authorization: `Bearer ${token}`, // optional: include only if protected
        },
      });

      if (updateTableData) updateTableData();
      setShowModal(false);
      setFormData({ name: "", comment: "", date: "" });
    } catch (error) {
      console.error(
        "Error creating exam:",
        error.response?.data || error.message
      );
      alert("Failed to create exam. Check console for details.");
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
              <h5 className="modal-title">Create Exam</h5>
              <button
                type="button"
                className="close"
                onClick={() => setShowModal(false)}
              >
                <span>&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleCreateExam}>
                <div className="form-group">
                  <label>Exam Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Comment (optional)</label>
                  <textarea
                    className="form-control"
                    value={formData.comment}
                    onChange={(e) =>
                      setFormData({ ...formData, comment: e.target.value })
                    }
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Submit
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

export default AddExamModal;
