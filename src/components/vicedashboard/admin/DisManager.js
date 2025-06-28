// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const DisManager = () => {
//   const [disbursements, setDisbursements] = useState([]);
//   const [amount, setAmount] = useState("");
//   const [managerId, setManagerId] = useState("");
//   const [managers, setManagers] = useState([]);

//   useEffect(() => {
//     // Fetch the list of managers
//     axios
//       .get("/api/managers")
//       .then((response) => {
//         setManagers(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching managers:", error);
//       });
//   }, []);

//   const handleDisburse = () => {
//     // Handle disbursement logic
//     axios
//       .post("/api/disbursements/admin", {
//         managerId,
//         amount,
//       })
//       .then((response) => {
//         setDisbursements([...disbursements, response.data]);
//         setAmount("");
//         setManagerId("");
//       })
//       .catch((error) => {
//         console.error("Error making disbursement:", error);
//       });
//   };

//   return (
//     <div>
//       <h2>Admin Disbursements</h2>
//       <div>
//         <label>Manager:</label>
//         <select
//           value={managerId}
//           onChange={(e) => setManagerId(e.target.value)}
//           required
//         >
//           <option value="">Select Manager</option>
//           {managers.map((manager) => (
//             <option key={manager.id} value={manager.id}>
//               {manager.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label>Amount:</label>
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           required
//         />
//       </div>
//       <button onClick={handleDisburse}>Disburse</button>
//       <h3>Disbursement History</h3>
//       <ul>
//         {disbursements.map((disbursement) => (
//           <li key={disbursement.id}>
//             {disbursement.date} - {disbursement.managerName} -{" "}
//             {disbursement.amount}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DisManager;

import React from "react";
import axios from "axios";
import "./AddAdminModal.css"; // Import the custom CSS file

const DisManager = ({ showModal, setShowModal, updateTableData }) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSaveAdmin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await axios.post(`${apiUrl}/api/admin/register`, {
        email: formData.get("email"),
        username: formData.get("username"),
        phone: formData.get("phone"),
        address: formData.get("address"),
        password: formData.get("password"),
      });

      console.log("Admin added successfully:", response.data);
      setShowModal(false);
      updateTableData(response.data); // Update table data with new admin
    } catch (error) {
      console.error("Error adding admin:", error);
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
                Add New Disbursement
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
                    id="address"
                    name="address"
                    required
                  />
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
                    Save Admin
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

export default DisManager;
