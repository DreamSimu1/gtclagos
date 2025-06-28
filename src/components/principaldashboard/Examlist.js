import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SessionContext } from "../../SessionContext";
import AddExamModal from "./AddExamModal";

const Examlist = () => {
  const { currentSession } = useContext(SessionContext);
  const [exams, setExams] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchExams = async () => {
    try {
      if (!currentSession?._id) return;

      const res = await axios.get(
        `${apiUrl}/api/offline/get-exams/${currentSession._id}`
      );
      setExams(res.data || []);
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };

  useEffect(() => {
    fetchExams();
  }, [currentSession]);

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <div className="card">
            <div className="card-header flex justify-between items-center">
              <h4 className="card-title">Exam List</h4>
              <button
                type="button"
                className="force-mobile-button"
                onClick={() => setShowModal(true)}
              >
                <span>Create Exam</span>
              </button>
            </div>

            <div className="card-body">
              <div className="table-responsive dataview">
                <table className="table dashboard-expired-products">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Exam Name</th>
                      <th>Comment</th>
                      <th>Date</th>
                      <th>Session</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exams.length > 0 ? (
                      exams.map((exam, index) => (
                        <tr key={exam._id || index}>
                          <td>{index + 1}</td>
                          <td>{exam.name || "-"}</td>

                          <td>{exam.comment || "-"}</td>
                          <td>
                            {exam.date
                              ? new Date(exam.date).toLocaleDateString()
                              : "-"}
                          </td>
                          <td>{currentSession?.name || "-"}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center">
                          No exams found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* ✅ Modal */}
              <AddExamModal
                showModal={showModal}
                setShowModal={setShowModal}
                updateTableData={fetchExams}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examlist;
