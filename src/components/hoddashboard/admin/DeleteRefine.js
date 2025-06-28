import React, { useState } from "react";
import axios from "axios";

const DeleteRefine = ({
  showModalss,
  setShowModalss,
  updateTableData,
  refineId, // Use refineId here
}) => {
  const [message, setMessage] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  // Handle the delete action
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("jwtToken");

      const response = await axios.delete(`${apiUrl}/api/refine/${refineId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage(response.data.message);
      await updateTableData(); // Update the table data after deletion
      setShowModalss(false); // Close the modal
    } catch (error) {
      setMessage("Error deleting refinement.");
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      {showModalss && <div className="modal-backdrop show"></div>}
      <div
        className={`modal fade ${showModalss ? "show modal-enter" : ""}`}
        style={{ display: showModalss ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Confirm Deletion
              </h5>
              <button
                type="button"
                className="close"
                onClick={() => setShowModalss(false)}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this refinement?</p>
              {message && <p>{message}</p>}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Yes, Delete
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModalss(false)}
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteRefine;
