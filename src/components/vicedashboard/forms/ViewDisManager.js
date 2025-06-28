import React, { useEffect, useState } from "react";
import axios from "axios";

import TopNav from "../TopNav";
import SideNav from "../SideNav";
import DisManager from "../admin/DisManager";
import useAuth from "../../hooks/useAuth";

const ViewDisManager = () => {
  const apiUrl = process.env.REACT_APP_API_URL.trim();
  const [disbursements, setDisbursements] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const { user } = useAuth(); // Access the authenticated user
  const managerId = user?._id; // Assuming user object contains _id or adjust based on your user structure

  useEffect(() => {
    const fetchDisbursements = async () => {
      try {
        if (!managerId) {
          throw new Error("No manager ID found");
        }

        const token = localStorage.getItem("jwtToken");

        const response = await axios.get(
          `${apiUrl}/api/disbursements/${managerId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setDisbursements(response.data.disbursements || []);
      } catch (error) {
        console.error("Error fetching disbursements:", error);
      }
    };

    fetchDisbursements();
  }, [apiUrl, managerId]);

  const handleApprove = async (disbursementId) => {
    try {
      const token = localStorage.getItem("jwtToken");

      if (!token || !managerId) {
        throw new Error("Token or manager ID missing");
      }

      const response = await axios.put(
        `${apiUrl}/api/disbursements/${disbursementId}/approve`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Disbursement approved successfully");
        const updatedResponse = await axios.get(
          `${apiUrl}/api/disbursements/${managerId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDisbursements(updatedResponse.data.disbursements || []);
      }
    } catch (error) {
      console.error("Error approving disbursement:", error);
    }
  };

  return (
    <div>
      <div className="main-wrapper">
        <TopNav />
        <SideNav />
        <div className="page-wrapper">
          <div className="content">
            <div className="page-header">
              <div className="add-item d-flex">
                <div className="page-title">
                  <h4>Manager Disbursement List</h4>
                </div>
              </div>
            </div>

            <div className="card table-list-card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table datanew">
                    <thead>
                      <tr>
                        <th className="no-sort">
                          <label className="checkboxs">
                            <input type="checkbox" id="select-all" />
                            <span className="checkmarks"></span>
                          </label>
                        </th>
                        <th>Manager Name</th>
                        <th>Total Disbursement</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Notes</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="sales-list">
                      {disbursements?.map((disbursement) => (
                        <tr key={disbursement._id}>
                          <td>
                            <label className="checkboxs">
                              <input type="checkbox" />
                              <span className="checkmarks"></span>
                            </label>
                          </td>
                          <td>{disbursement?.manager?.username}</td>

                          <td>{disbursement?.amount}</td>
                          <td>
                            {new Date(
                              disbursement?.allocatedDate
                            ).toLocaleDateString()}
                          </td>
                          <td>{disbursement?.status}</td>
                          <td>{disbursement?.notes}</td>
                          <td>
                            <button
                              className="btn btn-success"
                              onClick={() => handleApprove(disbursement._id)}
                              disabled={disbursement.status === "approved"}
                            >
                              {disbursement.status === "approved"
                                ? "Approved"
                                : "Approve"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <DisManager
                    showModal={showModal}
                    setShowModal={setShowModal}
                    updateTableData={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDisManager;
