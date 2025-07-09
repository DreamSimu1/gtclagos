import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { SessionContext } from "../../SessionContext";
import AddViceModal from "./AddViceModal";

const AllVice = () => {
  const { currentSession } = useContext(SessionContext);
  const [hods, setHods] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchAllHods = async () => {
    try {
      if (!currentSession?._id) return; // Make sure session is available

      const response = await axios.get(
        `${apiUrl}/api/auth/vice?session=${currentSession._id}`
      );

      // Your backend returns an array directly (not under .data), so:
      setHods(response.data || []);
    } catch (err) {
      console.error("Error fetching Vice:", err);
    }
  };
  useEffect(() => {
    fetchAllHods();
  }, [currentSession]);

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <div className="card">
            <div className="card-header flex justify-between items-center">
              <h4 className="card-title">All Vice Principals</h4>
            </div>
            <div className="card-header flex justify-between items-center">
              <h4 className="card-title">Add Vice Principal</h4>
              <button
                type="button"
                className="force-mobile-button"
                onClick={() => setShowModal(true)}
              >
                <span>Add Vice Principal</span>
              </button>
            </div>
            <div className="card-body">
              <div className="table-responsive dataview">
                <table className="table dashboard-expired-products">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Fullname</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th className="no-sort">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hods.length > 0 ? (
                      hods.map((hod, index) => (
                        <tr key={hod._id}>
                          <td>{index + 1}</td>
                          <td>{hod.fullname}</td>
                          <td>{hod.email}</td>
                          <td>{hod.phone}</td>
                          <td>{hod.address}</td>
                          <td className="action-table-data">
                            <div className="edit-delete-action">
                              <a className="me-2 p-2 cursor-pointer">
                                <FiEdit size={18} />
                              </a>
                              <a className="confirm-text p-2 cursor-pointer">
                                <FiTrash2 size={18} />
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">
                          No Vice Principal found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {/* If you later want to add HOD from here, add modal */}

                <AddViceModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  updateTableData={fetchAllHods}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVice;
