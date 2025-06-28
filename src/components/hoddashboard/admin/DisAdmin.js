import React, { useState, useEffect } from "react";
import axios from "axios";

const DisAdmin = () => {
  const [disbursements, setDisbursements] = useState([]);
  const [amount, setAmount] = useState("");
  const [managerId, setManagerId] = useState("");
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    // Fetch the list of managers
    axios
      .get("/api/managers")
      .then((response) => {
        setManagers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching managers:", error);
      });
  }, []);

  const handleDisburse = () => {
    // Handle disbursement logic
    axios
      .post("/api/disbursements/admin", {
        managerId,
        amount,
      })
      .then((response) => {
        setDisbursements([...disbursements, response.data]);
        setAmount("");
        setManagerId("");
      })
      .catch((error) => {
        console.error("Error making disbursement:", error);
      });
  };

  return (
    <div>
      <h2>Admin Disbursements</h2>
      <div>
        <label>Manager:</label>
        <select
          value={managerId}
          onChange={(e) => setManagerId(e.target.value)}
          required
        >
          <option value="">Select Manager</option>
          {managers.map((manager) => (
            <option key={manager.id} value={manager.id}>
              {manager.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button onClick={handleDisburse}>Disburse</button>
      <h3>Disbursement History</h3>
      <ul>
        {disbursements.map((disbursement) => (
          <li key={disbursement.id}>
            {disbursement.date} - {disbursement.managerName} -{" "}
            {disbursement.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisAdmin;
