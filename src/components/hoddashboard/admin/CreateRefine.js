// import React, { useState } from "react";
// import axios from "axios";

// const CreateRefine = ({ showModal, setShowModal, updateTableData, ideaId }) => {
//   const [activities, setActivities] = useState("");
//   const [estimatedtime, setEstimatedTime] = useState("");
//   const [resources, setResources] = useState("");
//   const [message, setMessage] = useState("");
//   const [isSuccess, setIsSuccess] = useState(null);
//   const apiUrl = process.env.REACT_APP_API_URL;

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "activities") setActivities(value);
//     if (name === "estimatedtime") setEstimatedTime(value);
//     if (name === "resources") setResources(value);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("Form submission started");

//     // Log form data being sent to the backend
//     console.log("Form Data:", {
//       activities,
//       estimatedtime,
//       resources,
//       ideaId,
//       // visionId,
//     });

//     try {
//       const token = localStorage.getItem("jwtToken");

//       console.log("JWT Token:", token);

//       const response = await axios.post(
//         `${apiUrl}/api/create-refine`,
//         { activities, estimatedtime, resources, ideaId },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // Log success response from the backend
//       console.log("Backend Response:", response.data);

//       setMessage(response.data.message);
//       setIsSuccess(true);

//       // Reset form fields
//       setActivities("");
//       setEstimatedTime("");
//       setResources("");

//       // Update table data and close modal
//       await updateTableData();
//       setShowModal(false);
//     } catch (error) {
//       // Log error response from the backend
//       console.error("Error Response:", error.response?.data);

//       setMessage(
//         error.response?.data?.message ||
//           "An error occurred while creating refinement."
//       );
//       setIsSuccess(false);
//     }
//   };

//   return (
//     <>
//       {showModal && <div className="modal-backdrop show"></div>}
//       <div
//         className={`modal fade ${showModal ? "show modal-enter" : ""}`}
//         style={{ display: showModal ? "block" : "none" }}
//         tabIndex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Create Your Refinement
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 onClick={() => setShowModal(false)}
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label>Activities</label>
//                   <input
//                     className="form-control"
//                     name="activities"
//                     value={activities}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Estimated Time</label>
//                   <textarea
//                     className="form-control"
//                     name="estimatedtime"
//                     value={estimatedtime}
//                     onChange={handleChange}
//                     required
//                   ></textarea>
//                 </div>
//                 <div className="form-group">
//                   <label>Resources</label>
//                   <textarea
//                     className="form-control"
//                     name="resources"
//                     value={resources}
//                     onChange={handleChange}
//                   ></textarea>
//                 </div>
//                 <div className="modal-footer">
//                   <button type="submit" className="btn btn-primary">
//                     Create Refinement
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-danger"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </form>
//               {message && (
//                 <p className={isSuccess ? "text-success" : "text-danger"}>
//                   {message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateRefine;
import React, { useState } from "react";
import axios from "axios";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const CreateRefine = ({ showModal, setShowModal, updateTableData, ideaId }) => {
  const [activities, setActivities] = useState("");
  const [resources, setResources] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "activities") setActivities(value);
    if (name === "resources") setResources(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submission started");

    const estimatedtime = { startDate, endDate };

    // Log form data being sent to the backend
    console.log("Form Data:", { activities, estimatedtime, resources, ideaId });

    try {
      const token = localStorage.getItem("jwtToken");

      console.log("JWT Token:", token);

      const response = await axios.post(
        `${apiUrl}/api/create-refine`,
        { activities, estimatedtime, resources, ideaId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Backend Response:", response.data);

      setMessage(response.data.message);
      setIsSuccess(true);

      setActivities("");
      setResources("");
      setStartDate(null);
      setEndDate(null);

      await updateTableData();
      setShowModal(false);
    } catch (error) {
      console.error("Error Response:", error.response?.data);
      setMessage(
        error.response?.data?.message ||
          "An error occurred while creating refinement."
      );
      setIsSuccess(false);
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
                Create Your Refinement
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
                  <label>Activities</label>
                  <input
                    className="form-control"
                    name="activities"
                    value={activities}
                    onChange={handleChange}
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>Start Date & Time</label>
                  <br></br>
                  <div style={{ display: "flex", gap: "10px" }}>
                    {/* Date Input */}
                    <Datetime
                      value={startDate}
                      onChange={(date) => setStartDate(date)}
                      timeFormat={false} // Disable the time format for date field
                      required
                      placeholder="M/DD/YYYY"
                      inputProps={{ placeholder: "M/DD/YYYY" }}
                      style={{ flex: 1 }}
                    />

                    {/* Time Input */}
                    <Datetime
                      value={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat={false} // Disable the date format for time field
                      required
                      placeholder="HH:mm AM/PM"
                      inputProps={{ placeholder: "HH:mm AM/PM" }}
                      style={{ flex: 1 }}
                    />
                  </div>
                </div>
                <br></br>
                <div className="form-group">
                  <label>End Date & Time</label>
                  <br></br>
                  <div style={{ display: "flex", gap: "10px" }}>
                    {/* Date Input */}
                    <Datetime
                      value={endDate}
                      onChange={(date) => setEndDate(date)}
                      timeFormat={false} // Disable the time format for date field
                      required
                      placeholder="M/DD/YYYY"
                      inputProps={{ placeholder: "M/DD/YYYY" }}
                      style={{ flex: 1 }}
                    />

                    {/* Time Input */}
                    <Datetime
                      value={endDate}
                      onChange={(date) => setEndDate(date)}
                      dateFormat={false} // Disable the date format for time field
                      required
                      placeholder="HH:mm AM/PM"
                      inputProps={{ placeholder: "HH:mm AM/PM" }}
                      style={{ flex: 1 }}
                    />
                  </div>
                </div>
                <br></br>
                <div className="form-group">
                  <label>Resources</label>
                  <textarea
                    className="form-control"
                    name="resources"
                    value={resources}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Create Refinement
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </form>
              {message && (
                <p className={isSuccess ? "text-success" : "text-danger"}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRefine;
