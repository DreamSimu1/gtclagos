import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa"; // Assuming you're using the FaEdit icon for edit button

const EditRefine = ({
  showModals,
  setShowModals,
  updateTableData,
  refineId, // Pass refineId as a prop
}) => {
  const [activities, setActivities] = useState("");
  const [estimatedtime, setEstimatedtime] = useState({
    startDate: "",
    endDate: "",
  });
  const [resources, setResources] = useState("");

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  // Fetch the data when the modal is opened
  useEffect(() => {
    if (refineId && showModals) {
      // Fetch the current refine data
      axios
        .get(`${apiUrl}/api/refine/${refineId}`)
        .then((response) => {
          const { activities, estimatedtime, resources } = response.data.refine;
          setActivities(activities);
          setEstimatedtime(estimatedtime);
          setResources(resources);
        })
        .catch((error) => {
          console.error("Error fetching refine data:", error);
          setMessage("Error fetching data.");
        });
    }
  }, [refineId, showModals]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "activities":
        setActivities(value);
        break;
      case "startDate":
      case "endDate":
        setEstimatedtime((prev) => ({
          ...prev,
          [name]: value,
        }));
        break;
      case "resources":
        setResources(value);
        break;

      default:
        break;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwtToken");

      const response = await axios.put(
        `${apiUrl}/api/refine/${refineId}`,
        {
          activities,
          estimatedtime,
          resources,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(response.data.message);
      setIsSuccess(true);

      // Update the table and close the modal
      await updateTableData(); // Wait for the table to update
      setShowModals(false);
    } catch (error) {
      setMessage("Error editing refinement.");
      setIsSuccess(false);
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      {showModals && <div className="modal-backdrop show"></div>}
      <div
        className={`modal fade ${showModals ? "show modal-enter" : ""}`}
        style={{ display: showModals ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Refinement
              </h5>
              <button
                type="button"
                className="close"
                onClick={() => setShowModals(false)}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Activities</label>
                  <input
                    className="form-control"
                    name="activities"
                    value={activities}
                    onChange={handleChange}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="startDate"
                    value={estimatedtime.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="endDate"
                    value={estimatedtime.endDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Resources</label>
                  <textarea
                    className="form-control"
                    name="resources"
                    value={resources}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <br />

                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="btn"
                    style={{ backgroundColor: "red", color: "white" }}
                    onClick={() => setShowModals(false)}
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

export default EditRefine;
