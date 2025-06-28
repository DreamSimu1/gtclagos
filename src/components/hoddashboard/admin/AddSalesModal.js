import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddAdminModal.css"; // Import the custom CSS file

const AddSalesModal = ({ showModal, setShowModal, updateTableData }) => {
  const [points, setPoints] = useState([]);
  const [selectedPoints, setSelectedPoints] = useState([]); // Change to array

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (showModal) {
      const fetchPoints = async () => {
        try {
          const response = await axios.get(`${apiUrl}/api/point`);
          console.log("Fetched points:", response.data);
          setPoints(response.data);
        } catch (error) {
          console.error("Error fetching points:", error);
        }
      };
      fetchPoints();
    }
  }, [showModal, apiUrl]);

  const handleSaveAdmin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await axios.post(`${apiUrl}/api/register`, {
        email: formData.get("email"),
        username: formData.get("username"),
        phone: formData.get("phone"),
        personaladdress: formData.get("personaladdress"),
        password: formData.get("password"),
        pointIds: selectedPoints, // Send array of selected point IDs
        role: "sales",
      });

      console.log("Admin added successfully:", response.data);
      setShowModal(false);
      updateTableData(response.data);
    } catch (error) {
      console.error("Error adding admin:", error);
    }
  };

  const handlePointChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setSelectedPoints(selectedOptions);
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
              <h5 className="modal-title">Add Sales/POS Operator</h5>
              <button
                type="button"
                className="close"
                onClick={() => setShowModal(false)}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSaveAdmin}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="personaladdress"
                    name="personaladdress"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="point">Assign Points</label>
                  <select
                    className="form-control"
                    id="point"
                    name="points"
                    multiple // Allow multiple selections
                    value={selectedPoints}
                    onChange={handlePointChange}
                    style={{ color: "black" }}
                    required
                  >
                    {points &&
                      points.map((point) => (
                        <option key={point?._id} value={point?._id}>
                          {point?.pointname}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Add Sales
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

export default AddSalesModal;
