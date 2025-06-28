import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css"; // Adjust the class as needed
import { FiChevronDown } from "react-icons/fi";
import { useParams } from "react-router-dom";
// const CreateIdea = ({ showModalsss, setShowModalsss, updateTableData }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [status, setStatus] = useState("");
//   const { visionId } = useParams(); // Assuming the route is something like "/vision/:visionId"

//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [isSuccess, setIsSuccess] = useState(null);
//   const [message, setMessage] = useState("");
//   const [showMessageModal, setShowMessageModal] = useState(false);
//   const apiUrl = process.env.REACT_APP_API_URL;

//   // Fetch available visions for the dropdown
//   const [visions, setVisions] = useState([]);

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUploadedImage(file);
//     }
//   };

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "title":
//         setTitle(value);
//         break;
//       case "description":
//         setDescription(value);
//         break;
//       case "status":
//         setStatus(value);
//         break;
//     }
//   };

//   // Handle form submission
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   const formData = new FormData();
//   //   formData.append("title", title);
//   //   formData.append("description", description);
//   //   formData.append("status", status);
//   //   formData.append("visionId", visionId); // Include visionId
//   //   if (uploadedImage) {
//   //     formData.append("image", uploadedImage); // Attach the image if available
//   //   }

//   //   try {
//   //     const token = localStorage.getItem("jwtToken");
//   //     const response = await axios.post(
//   //       `${apiUrl}/api/create-idea`, // Updated endpoint
//   //       formData,
//   //       {
//   //         headers: {
//   //           "Content-Type": "multipart/form-data", // Indicate that we're sending a file
//   //           Authorization: `Bearer ${token}`, // Attach JWT token for authentication
//   //         },
//   //       }
//   //     );
//   //     setMessage(response.data.message);
//   //     setIsSuccess(true); // Set success state
//   //     // Reset the form after successful submission
//   //     setTitle("");
//   //     setDescription("");
//   //     setStatus("");

//   //     setUploadedImage(null);
//   //     updateTableData(); // Update parent table data
//   //   } catch (error) {
//   //     setMessage("Error creating idea.");
//   //     setIsSuccess(false); // Set failure state
//   //     console.error(
//   //       "Error:",
//   //       error.response ? error.response.data : error.message
//   //     );
//   //   } finally {
//   //     setShowMessageModal(true); // Show the success/failure modal
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Debugging the fields before sending
//     console.log("Title:", title);
//     console.log("Description:", description);
//     console.log("Status:", status);
//     console.log("Vision ID:", visionId); // Check if visionId is set

//     // Create FormData
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("status", status);
//     formData.append("visionId", visionId); // Add visionId

//     if (uploadedImage) {
//       console.log("Uploaded image file:", uploadedImage);
//       formData.append("image", uploadedImage);
//     }

//     // Log FormData entries
//     for (let [key, value] of formData.entries()) {
//       console.log(key, value);
//     }

//     try {
//       const token = localStorage.getItem("jwtToken");

//       const response = await axios.post(`${apiUrl}/api/create-idea`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setMessage(response.data.message);
//       setIsSuccess(true);

//       setTitle("");
//       setDescription("");
//       setStatus("");
//       setUploadedImage(null);
//       updateTableData();
//     } catch (error) {
//       setMessage("Error creating idea.");
//       setIsSuccess(false);
//       console.error(
//         "Error:",
//         error.response ? error.response.data : error.message
//       );
//       if (error.response) {
//         console.log("Backend Error Data:", error.response.data);
//       }
//     } finally {
//       setShowMessageModal(true);
//     }
//   };

//   const closeMessageModal = () => {
//     setShowMessageModal(false); // Close the modal when the button is clicked.
//   };

//   return (
//     <>
//       {showModalsss && <div className="modal-backdrop show"></div>}
//       <div
//         className={`modal fade ${showModalsss ? "show modal-enter" : ""}`}
//         style={{ display: showModalsss ? "block" : "none" }}
//         tabIndex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Create Your Idea
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 onClick={() => setShowModalsss(false)}
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label>Upload Image (Optional)</label>
//                   <input
//                     type="file"
//                     className="form-control"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                   />
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label>Title</label>
//                   <input
//                     className="form-control"
//                     name="title"
//                     value={title}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label>Description</label>
//                   <textarea
//                     className="form-control"
//                     name="description"
//                     value={description}
//                     onChange={handleChange}
//                     required
//                   ></textarea>
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label>Status</label>
//                   <select
//                     className="form-control"
//                     name="status"
//                     value={status}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="" disabled>
//                       Select Status
//                     </option>
//                     <option>InProgress</option>
//                     <option>Refinement</option>
//                     <option>Completed</option>
//                   </select>
//                 </div>
//                 <br />

//                 <div className="modal-footer">
//                   <button type="submit" className="btn btn-primary">
//                     Create Idea
//                   </button>
//                   <button
//                     type="button"
//                     className="btn"
//                     style={{ backgroundColor: "red", color: "white" }}
//                     onClick={() => setShowModalsss(false)}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </form>
//               {message && <p>{message}</p>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const CreateIdea = ({
  showModalsss,
  setShowModalsss,
  updateTableData,
  visionId,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  const [message, setMessage] = useState("");
  const [showMessageModal, setShowMessageModal] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "status":
        setStatus(value);
        break;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Status:", status);
    console.log("Vision ID:", visionId); // Now this should be properly passed

    // Create FormData
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("status", status);
    formData.append("visionId", visionId); // Include visionId

    if (uploadedImage) {
      formData.append("image", uploadedImage);
    }

    try {
      const token = localStorage.getItem("jwtToken");

      const response = await axios.post(`${apiUrl}/api/create-idea`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage(response.data.message);
      setIsSuccess(true);

      setTitle("");
      setDescription("");
      setStatus("");
      setUploadedImage(null);
      // Update the table and close the modal
      await updateTableData(); // Wait for the table to update
      setShowModalsss(false);
    } catch (error) {
      setMessage("Error creating idea.");
      setIsSuccess(false);
      console.error(error.response ? error.response.data : error.message);
    } finally {
      setShowMessageModal(true);
    }
  };

  return (
    <>
      {showModalsss && <div className="modal-backdrop show"></div>}
      <div
        className={`modal fade ${showModalsss ? "show modal-enter" : ""}`}
        style={{ display: showModalsss ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Your Idea
              </h5>
              <button
                type="button"
                className="close"
                onClick={() => setShowModalsss(false)}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Upload Image (Optional)</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Title</label>
                  <input
                    className="form-control"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <br />
                <div className="form-group">
                  <label>Status</label>
                  <select
                    className="form-control"
                    name="status"
                    value={status}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select Status
                    </option>
                    <option>InProgress</option>
                    <option>Refinement</option>
                    <option>Completed</option>
                  </select>
                </div>
                <br />

                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Create Idea
                  </button>
                  <button
                    type="button"
                    className="btn"
                    style={{ backgroundColor: "red", color: "white" }}
                    onClick={() => setShowModalsss(false)}
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

export default CreateIdea;
