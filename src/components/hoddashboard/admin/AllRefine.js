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
const AllRefine = () => {
  const { user } = useAuth(); // Access the authenticated user
  const { isSidebarOpen } = useSidebar(); // Context for sidebar state

  const apiUrl = process.env.REACT_APP_API_URL;
  const [refinements, setRefinements] = useState([]); // Default value as an empty array
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

  const fetchRefinements = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("jwtToken"); // Get JWT token for authorization
      const response = await axios.get(
        `${apiUrl}/api/refines-by-user`, // Update the endpoint to fetch all refinements by user
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token in the headers for authorization
          },
        }
      );
      setRefinements(response.data); // Update the state with the data
    } catch (error) {
      console.error("Error fetching refinements:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch refinements when component mounts
  useEffect(() => {
    fetchRefinements();
  }, [user]); // Fetch refinements when the user changes (or on initial load)

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

  return (
    <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <TopNav />
      <div className="page-wrapper adad">
        <div className="content">
          <div className="card-header">
            <div className="header-container">
              <h4 className="card-title">All Refinement</h4>
              <button className="btn btn-primary">Add Activities</button>
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
                                  style={{ color: "#dc3545" }}
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
        </div>
      </div>
    </div>
  );
};

export default AllRefine;
