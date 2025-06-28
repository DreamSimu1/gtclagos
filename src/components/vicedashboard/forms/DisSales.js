import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./AddAdminModal.css"; // Import the custom CSS file

const DisSales = ({ showModal, setShowModal, updateTableData }) => {
  const [sales, setSaless] = useState([]);
  const [selectedSales, setSelectedSales] = useState("");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  // const fetchAdmins = async () => {
  //   try {
  //     const response = await axios.get(`${apiUrl}/api/get-manager`);
  //     setManagers(response.data);
  //   } catch (error) {
  //     console.error("Error fetching admins:", error);
  //   }
  // };

  useEffect(() => {
    if (showModal) {
      const fetchSales = async () => {
        try {
          const response = await axios.get(`${apiUrl}/api/get-sales`);
          console.log("Fetched points:", response.data);
          setSaless(response.data);
        } catch (error) {
          console.error("Error fetching points:", error);
        }
      };
      fetchSales();
    }
  }, [showModal, apiUrl]);

  // const handleDisbursement = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(`${apiUrl}/api/disbursements`, {
  //       managerId: selectedManager,
  //       amount,
  //       notes,
  //     });
  //     setMessage(response.data.message);
  //     setSelectedManager("");
  //     setAmount("");
  //     setNotes("");
  //   } catch (error) {
  //     setMessage("Error creating disbursement.");
  //     console.error("Error:", error);
  //   }
  // };

  const handleDisbursement = async (e) => {
    e.preventDefault();

    // Retrieve the JWT token from localStorage
    const token = localStorage.getItem("jwtToken");
    console.log("Retrieved token:", token);

    try {
      const response = await axios.post(
        `${apiUrl}/api/manager/disburse`,
        {
          salesId: selectedSales,
          amount,
          notes,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
          },
        }
      );
      setMessage(response.data.message);
      setSelectedSales("");
      setAmount("");
      setNotes("");
    } catch (error) {
      setMessage("Error creating disbursement.");
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
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
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Disburse to Sales Operator
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
              <form onSubmit={handleDisbursement}>
                <div className="form-group">
                  <label>Manager:</label>
                  <select
                    className="form-control"
                    value={selectedSales}
                    onChange={(e) => setSelectedSales(e.target.value)}
                    required
                  >
                    <option value="">Select Sales Operator</option>
                    {sales.map((sales) => (
                      <option key={sales._id} value={sales._id}>
                        {sales.username}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Amount:</label>
                  <input
                    className="form-control"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Notes:</label>
                  <textarea
                    className="form-control"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Disburse
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
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisSales;
