import React, { useState } from "react";
import axios from "axios";
import "./AddPointModal.css"; // Import the custom CSS file

const initialState = {
  pointname: "",
  address: "",
};

const AddPointModal = ({ showModal, setShowModal, updateTableData }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/api/point`, formData);

      console.log("POS point added successfully:", response.data);
      setShowModal(false);
      updateTableData(response.data); // Update table data with new point
      setFormData(initialState); // Reset form fields after successful submission
    } catch (error) {
      console.error("Error adding POS point:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {showModal && <div className="modal-backdrop show"></div>}
      <div
        className={`modal fade ${showModal ? "show modal-enter" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add POS Point
              </h5>
              <button
                type="button"
                className="close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="pointname">Point Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pointname"
                    name="pointname"
                    value={formData.pointname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Point Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Save Point
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
      </div>
    </>
  );
};

export default AddPointModal;
