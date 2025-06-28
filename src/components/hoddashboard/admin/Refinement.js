import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSidebar } from "../SidebarProvider";
import useAuth from "../../hooks/useAuth";
import TopNav from "../TopNav";
import CreateRefine from "./CreateRefine";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditRefine from "./EditRefine";
import news from "./pic.jpeg";
import { format } from "date-fns"; // For date formatting
import "./admin.css";
import DeleteRefine from "./DeleteRefine";

const Refinement = () => {
  const { user } = useAuth(); // Access the authenticated user
  const { isSidebarOpen } = useSidebar(); // Context for sidebar state
  const { title } = useParams(); // Get title from URL params
  const decodedTitle = decodeURIComponent(title); // Decode title to restore spaces

  const apiUrl = process.env.REACT_APP_API_URL;
  const [refinements, setRefinements] = useState([]);
  const [ideaId, setIdeaId] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModals, setShowModals] = useState(false);
  const [showModalss, setShowModalss] = useState(false);
  const [refineId, setRefineId] = useState(null);

  // Pagination State
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const cards = Array(14).fill({
    title: "Last 30 Days Sales",
    text: "₦ 1,234,567",
    image: news,
  });
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  // Fetch refinements
  const fetchRefinements = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("jwtToken");
      const response = await axios.get(
        `${apiUrl}/api/refines-by-idea-title?title=${encodeURIComponent(
          decodedTitle
        )}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRefinements(response.data.refines);
      setIdeaId(response.data.ideaId);
      setDescription(response.data.ideaDescription);
    } catch (error) {
      console.error("Error fetching refinements:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRefinements();
  }, [decodedTitle]);

  // Handle pagination
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const paginatedCards = cards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const updateTableData = async () => {
    await fetchRefinements(); // Ensure the table updates dynamically
  };

  const moveToSprint = async (refineId) => {
    try {
      const token = localStorage.getItem("jwtToken");
      await axios.post(
        `${apiUrl}/api/move-to-sprint`, // Adjust the endpoint as needed
        { refineId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // After moving, you can refresh the table to reflect the change
      updateTableData();
    } catch (error) {
      console.error("Error moving activity to sprint:", error);
    }
  };

  return (
    <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <TopNav />
      <div className="page-wrapper adad">
        <div className="content">
          <span className="card-title" style={{ fontSize: "30px" }}>
            {decodedTitle}
          </span>
          <h5 className="card-title">{description}</h5>
          <br />
          <div className="card-header">
            <div className="header-container">
              <h4 className="card-title">Refinements for {decodedTitle}</h4>
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                Add Activities
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              {loading ? (
                <p>Loading...</p>
              ) : refinements.length === 0 ? (
                <p className="text-center">
                  No refinements added yet. Please add activities to get
                  started.
                </p>
              ) : (
                <div className="table-responsive dataview">
                  <table className="table dashboard-expired-products">
                    <thead>
                      <tr>
                        <th>Activities</th>
                        <th>Estimated Time</th>
                        <th>Resources</th>
                        <th>Sprint</th>
                      </tr>
                    </thead>
                    <tbody>
                      {refinements.map((refine) => {
                        let estimatedtime = refine.estimatedtime;

                        try {
                          estimatedtime = JSON.parse(estimatedtime);
                        } catch (error) {
                          console.error("Error parsing estimatedtime:", error);
                          estimatedtime = {};
                        }

                        const { startDate, endDate } = estimatedtime || {};
                        const formattedStartDate = startDate
                          ? format(new Date(startDate), "MMM d, yyyy, h:mm a")
                          : "N/A";
                        const formattedEndDate = endDate
                          ? format(new Date(endDate), "MMM d, yyyy, h:mm a")
                          : "N/A";

                        return (
                          <tr key={refine._id}>
                            <td>{refine.activities}</td>
                            <td>
                              {formattedStartDate} to {formattedEndDate}
                            </td>
                            <td>{refine.resources}</td>
                            <td>
                              <a
                                href={`/sprint/${refine.activities}`}
                                // onClick={() => moveToSprint(refine._id)}
                                className="btn btn-danger"
                                style={{
                                  padding: "8px 12px",
                                  fontSize: "12px",
                                  textAlign: "center",
                                }}
                              >
                                Move to Sprint
                              </a>

                              <button
                                style={{
                                  padding: "8px",
                                  fontSize: "16px",
                                  backgroundColor: "#fff",
                                  border: "1px solid #ddd",
                                  borderRadius: "4px",
                                  cursor: "pointer",
                                  marginLeft: "6px",
                                }}
                                title="Edit"
                              >
                                <FaEdit
                                  style={{ color: "#28a745" }}
                                  onClick={() => {
                                    setRefineId(refine._id);
                                    setShowModals(true);
                                  }}
                                />
                              </button>
                              <button
                                style={{
                                  padding: "8px",
                                  fontSize: "16px",
                                  backgroundColor: "#fff",
                                  border: "1px solid #ddd",
                                  borderRadius: "4px",
                                  cursor: "pointer",
                                  marginLeft: "6px",
                                }}
                                title="Delete"
                              >
                                <FaTrash
                                  style={{ color: "#800080" }}
                                  onClick={() => {
                                    setRefineId(refine._id);
                                    setShowModalss(true);
                                  }}
                                />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          <CreateRefine
            showModal={showModal}
            setShowModal={setShowModal}
            updateTableData={updateTableData}
            ideaId={ideaId}
          />
          <EditRefine
            showModals={showModals}
            setShowModals={setShowModals}
            updateTableData={updateTableData}
            refineId={refineId}
          />
          <DeleteRefine
            showModalss={showModalss}
            setShowModalss={setShowModalss}
            updateTableData={updateTableData}
            refineId={refineId}
          />
        </div>
      </div>
    </div>
  );
};

export default Refinement;
