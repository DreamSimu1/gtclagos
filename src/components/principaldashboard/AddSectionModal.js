import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Modal.css"; // Import the custom CSS file
import { SessionContext } from "../../SessionContext";

// const AddSectionModal = ({ showModal, setShowModal, updateTableData }) => {
//   const [sectionName, setSectionName] = useState("");
//   const [description, setDescription] = useState("");
//   const [hodList, setHodList] = useState([]);
//   const [selectedHod, setSelectedHod] = useState("");
//   const { currentSession } = useContext(SessionContext);

//   const apiUrl = process.env.REACT_APP_API_URL;
//   useEffect(() => {
//     const fetchHods = async () => {
//       try {
//         const token = localStorage.getItem("jwtToken");
//         const response = await axios.get(
//           `${apiUrl}/api/users?role=head_of_department`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setHodList(response.data);
//       } catch (error) {
//         console.error("Error fetching HODs:", error);
//       }
//     };

//     if (showModal) {
//       fetchHods();
//     }
//   }, [showModal]);
//   const handleAddSection = async (e) => {
//     e.preventDefault();

//     if (!currentSession?._id) {
//       alert("Session not found. Cannot create section.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("jwtToken");

//       const response = await axios.post(
//         `${apiUrl}/api/section`,
//         {
//           name: sectionName,
//           hod: selectedHod,
//           description,
//           session: currentSession._id,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("✅ Section added:", response.data);
//       if (updateTableData) updateTableData(response.data.data);
//       setShowModal(false);
//       setSectionName("");
//       setDescription("");
//       setSelectedHod("");
//     } catch (error) {
//       console.error("❌ Error creating section:", error);
//       alert("Failed to create section. Please check console.");
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
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Add Section</h5>
//               <button
//                 type="button"
//                 className="close"
//                 onClick={() => setShowModal(false)}
//               >
//                 <span>&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={handleAddSection}>
//                 <div className="form-group">
//                   <label>Section Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={sectionName}
//                     onChange={(e) => setSectionName(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>HOD (Head of Department)</label>
//                   <select
//                     className="form-control"
//                     value={selectedHod}
//                     onChange={(e) => setSelectedHod(e.target.value)}
//                   >
//                     <option value="">-- Select HOD --</option>
//                     {hodList.map((hod) => (
//                       <option key={hod._id} value={hod._id}>
//                         {hod.fullname || hod.username || hod.email}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="form-group">
//                   <label>Description</label>
//                   <textarea
//                     className="form-control"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                   ></textarea>
//                 </div>

//                 <div className="modal-footer">
//                   <button type="submit" className="btn btn-primary">
//                     Add Section
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddSectionModal;

const AddSectionModal = ({ showModal, setShowModal, updateTableData }) => {
  const [sectionName, setSectionName] = useState("");
  const [description, setDescription] = useState("");
  const [hodList, setHodList] = useState([]);
  const [selectedHod, setSelectedHod] = useState("");
  const { currentSession } = useContext(SessionContext);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchHods = async () => {
      try {
        const token = localStorage.getItem("jwtToken");

        const response = await axios.get(
          `${apiUrl}/api/auth/hods?session=${currentSession?._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setHodList(response.data);
      } catch (error) {
        console.error("Error fetching HODs:", error);
      }
    };

    if (showModal && currentSession?._id) {
      fetchHods();
    }
  }, [showModal, currentSession]);

  const handleAddSection = async (e) => {
    e.preventDefault();

    if (!currentSession?._id) {
      alert("Session not found. Cannot create section.");
      return;
    }

    try {
      const token = localStorage.getItem("jwtToken");

      const response = await axios.post(
        `${apiUrl}/api/section`,
        {
          name: sectionName,
          hod: selectedHod,
          description,
          session: currentSession._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("✅ Section added:", response.data);
      if (updateTableData) updateTableData(response.data.data);
      setShowModal(false);
      setSectionName("");
      setDescription("");
      setSelectedHod("");
    } catch (error) {
      console.error("❌ Error creating section:", error);
      alert("Failed to create section. Please check console.");
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
              <h5 className="modal-title">Add Section</h5>
              <button
                type="button"
                className="close"
                onClick={() => setShowModal(false)}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddSection}>
                <div className="form-group">
                  <label>Section Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={sectionName}
                    onChange={(e) => setSectionName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>HOD (Head of Department)</label>
                  <select
                    className="form-control"
                    value={selectedHod}
                    onChange={(e) => setSelectedHod(e.target.value)}
                    required
                  >
                    <option value="">-- Select HOD --</option>
                    {hodList.map((hod) => (
                      <option key={hod._id} value={hod._id}>
                        {hod.fullname || hod.username || hod.email}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Add Section
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

export default AddSectionModal;
