// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const EditTask = ({
//   showEditModal,
//   setShowEditModal,
//   updateTableData,
//   ideaId,
// }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [status, setStatus] = useState("");
//   const [imageUrl, setImageUrl] = useState("");

//   const [message, setMessage] = useState("");
//   const [isSuccess, setIsSuccess] = useState(null);

//   const apiUrl = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     if (ideaId && showEditModal) {
//       console.log("Fetching idea with ID:", ideaId);
//       axios
//         .get(`${apiUrl}/api/get-single-idea/${ideaId}`)
//         .then((response) => {
//           const { title, description, status, imageUrl } = response.data.idea;
//           setTitle(title);
//           setDescription(description);
//           setStatus(status || "Public"); // Use "status" for visibility if provided
//           setImageUrl(imageUrl);
//         })
//         .catch((error) => {
//           console.error("Error fetching idea data:", error);
//           setMessage("Error fetching data.");
//         });
//     }
//   }, [ideaId, showEditModal]);

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
//       case "imageUrl":
//         setImageUrl(value);
//         break;
//       default:
//         break;
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("jwtToken");

//       // Construct payload with only the fields that have values
//       const payload = {};
//       if (title) payload.title = title;
//       if (description) payload.description = description;
//       if (status) payload.status = status;
//       if (imageUrl) payload.imageUrl = imageUrl;

//       const response = await axios.put(
//         `${apiUrl}/api/editidea/${ideaId}`,
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setMessage(response.data.message);
//       setIsSuccess(true);

//       // Update the table and close the modal
//       await updateTableData();
//       setShowEditModal(false);
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Error editing idea.");
//       setIsSuccess(false);
//       console.error(error.response ? error.response.data : error.message);
//     }
//   };

//   return (
//     <>
//       {showEditModal && <div className="modal-backdrop show"></div>}
//       <div
//         className={`modal fade ${showEditModal ? "show modal-enter" : ""}`}
//         style={{ display: showEditModal ? "block" : "none" }}
//         tabIndex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Edit Task
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 onClick={() => setShowEditModal(false)}
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={handleSubmit}>
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
//                     <option value="Public">Public</option>
//                     <option value="Private">Private</option>
//                   </select>
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label>Image URL</label>
//                   <input
//                     className="form-control"
//                     name="imageUrl"
//                     value={imageUrl}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <br />
//                 <div className="modal-footer">
//                   <button type="submit" className="btn btn-primary">
//                     Save Changes
//                   </button>
//                   <button
//                     type="button"
//                     className="btn"
//                     style={{ backgroundColor: "red", color: "white" }}
//                     onClick={() => setShowEditModal(false)}
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

// export default EditTask;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Sprint.css";
const EditTask = ({
  showModal,
  setShowModal,
  editingTask,
  updateTableData,
}) => {
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDate, setEditedDate] = useState("");
  const [isArchiving, setIsArchiving] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (editingTask) {
      setEditedTitle(editingTask.title || "");
      setEditedDate(editingTask.day || "");
      setIsArchiving(editingTask.archived || false);
    }
  }, [editingTask]);

  // const handleSave = async () => {
  //   if (!editedTitle.trim() || !editedDate.trim()) {
  //     alert("Title and date are required.");
  //     return;
  //   }

  //   try {
  //     const token = localStorage.getItem("jwtToken");
  //     await axios.patch(
  //       `${apiUrl}/api/tasks/${editingTask._id}`,
  //       {
  //         title: editedTitle,
  //         day: editedDate,
  //         archived: isArchiving,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     setShowModal(false); // Close modal
  //     updateTableData(); // Refresh tasks
  //   } catch (error) {
  //     console.error("Error updating task:", error);
  //   }
  // };
  // const handleSave = async () => {
  //   // Ensure title or date is provided
  //   if (!editedTitle.trim() && !editedDate.trim()) {
  //     alert("Either title or date must be provided.");
  //     return;
  //   }

  //   try {
  //     const token = localStorage.getItem("jwtToken");

  //     // Prepare the updated task data, only including fields that are modified
  //     const taskData = {};
  //     if (editedTitle.trim()) taskData.title = editedTitle;
  //     if (editedDate.trim()) taskData.day = editedDate;

  //     await axios.put(
  //       `${apiUrl}/api/edit-task/${editingTask._id}`,
  //       taskData, // Send only the updated fields
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     setShowModal(false); // Close modal
  //     updateTableData(); // Refresh tasks
  //   } catch (error) {
  //     console.error("Error updating task:", error);
  //     alert("There was an error updating the task.");
  //   }
  // };
  const handleSave = async () => {
    // Ensure title or date is provided (if not archiving the task)
    if (!editedTitle.trim() && !editedDate.trim() && !isArchiving) {
      alert("Either title, date, or archiving must be provided.");
      return;
    }

    try {
      const token = localStorage.getItem("jwtToken");

      // Prepare the updated task data, only including fields that are modified
      const taskData = {};
      if (editedTitle.trim()) taskData.title = editedTitle;
      if (editedDate.trim()) taskData.day = editedDate;
      taskData.archived = isArchiving; // Send updated archived status

      // Make API request to update the task
      await axios.put(
        `${apiUrl}/api/archive-task/${editingTask._id}`, // Use the route for archiving
        taskData, // Send the updated task data
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Close the modal and refresh the tasks list
      setShowModal(false);
      updateTableData(); // Refresh tasks
    } catch (error) {
      console.error("Error updating task:", error);
      alert("There was an error updating the task.");
    }
  };

  return (
    showModal && (
      <div className="note-modal">
        <div className="note-modal-content">
          <h3>Edit Task</h3>

          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="datetime-local"
              className="form-control"
              value={editedDate}
              onChange={(e) => setEditedDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                className="archive-checkbox"
                checked={isArchiving}
                onChange={() => setIsArchiving((prev) => !prev)}
              />
              Archive Task
            </label>
          </div>

          <div className="modal-buttons">
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
            <button
              className="btn "
              style={{ backgroundColor: "red", color: "white" }}
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default EditTask;
