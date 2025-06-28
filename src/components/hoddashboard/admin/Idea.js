import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useSidebar } from "../SidebarProvider";
import TopNav from "../TopNav";
import news from "./pic.jpeg";
import CreateIdea from "./CreateIdea";
import DeleteIdea from "./DeleteIdea";
import EditIdea from "./EditIdea";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Idea = () => {
  const { user } = useAuth(); // Access the authenticated user
  const [ideas, setIdeas] = useState([]);
  const { isSidebarOpen } = useSidebar(); // Sidebar state
  const [showModal, setShowModal] = useState(false);
  const [showModals, setShowModals] = useState(false);
  const [showModalss, setShowModalss] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [milestonePlan, setMilestonePlan] = useState(null);
  const [loadingMilestone, setLoadingMilestone] = useState(true);

  const { title } = useParams(); // Get title from URL params
  const decodedTitle = decodeURIComponent(title); // Decode the title to restore spaces
  console.log(decodedTitle);
  const [showModalsss, setShowModalsss] = useState(false);
  console.log("Raw title from URL params:", title);
  console.log("Decoded title:", decodedTitle);
  const itemsPerPage = 6; // Number of cards per page
  const cards = Array(14).fill({
    title: "Last 30 Days Sales",
    text: "₦ 1,234,567",
    image: news,
  }); // Example card data

  const totalPages = Math.ceil(cards.length / itemsPerPage); // Calculate total pages

  // const [visions, setVisions] = useState([]);
  // const apiUrl = process.env.REACT_APP_API_URL;
  // const [currentPage, setCurrentPage] = useState(1); // Start with the first page

  const [loading, setLoading] = useState(true);
  const [ideaId, setIdeaId] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [currentPage, setCurrentPage] = useState(1); // Start with the first page
  const [visions, setVisions] = useState([]);
  const [manualEntries, setManualEntries] = useState(Array(7).fill(""));
  const handleInputChange = (index, value) => {
    const updatedEntries = [...manualEntries];
    updatedEntries[index] = value;
    setManualEntries(updatedEntries);
  };

  const addNewEntry = () => {
    setManualEntries([...manualEntries, ""]);
  };
  const [visionId, setVisionId] = useState(null);

  const fetchVisionAndIdeas = async () => {
    try {
      const encodedTitle = encodeURIComponent(title);
      const visionResponse = await axios.get(
        `${apiUrl}/api/get-single-by-title/${encodedTitle}`
      );

      if (!visionResponse.data?._id) {
        console.error("Error: Vision ID not found in response");
        toast.error("Could not find vision!");
        return;
      }

      setVisionId(visionResponse.data._id); // Ensure it's set before saving
      console.log("Raw title from URL params:", title);
      console.log("Decoded title:", decodedTitle);
    } catch (error) {
      console.error(
        "Error fetching vision or ideas:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchVisionAndIdeas(decodedTitle); // Pass decodedTitle to your function
  }, [decodedTitle]);

  useEffect(() => {
    const fetchIdeaForDay = async () => {
      try {
        const token = localStorage.getItem("jwtToken");

        console.log("Fetching ideas for visionId:", visionId);

        const response = await axios.get(`${apiUrl}/api/get-idea/${visionId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Response data:", response.data);

        if (response.data && response.data.ideas) {
          const updatedEntries = response.data.ideas.map((entry) => entry.idea);
          console.log("Updated Entries:", updatedEntries);
          setManualEntries(updatedEntries);
        } else {
          console.warn("No ideas found in response.");
        }
      } catch (error) {
        console.error("Error fetching ideas:", error);
      }
    };

    if (visionId) {
      fetchIdeaForDay();
    }
  }, [visionId]);

  const handleSavePlan = async () => {
    try {
      const token = localStorage.getItem("jwtToken");

      if (!visionId) {
        toast.error("Vision ID is missing!");
        return;
      }

      // Fetch existing ideas for this visionId
      let ideaDocument = null;
      try {
        const response = await axios.get(`${apiUrl}/api/get-idea/${visionId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        ideaDocument = response.data;
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.warn("No existing ideas found. Creating new ones...");
        } else {
          throw error;
        }
      }

      // Prepare entries (filter out empty ones)
      const entries = manualEntries
        .map((idea, index) =>
          idea.trim() !== "" ? { day: String(index + 1), idea } : null
        ) // ✅ Convert day to string
        .filter(Boolean);

      if (entries.length === 0) {
        toast.error("No idea to save!");
        return;
      }

      if (!ideaDocument) {
        // CREATE new idea document
        await axios.post(
          `${apiUrl}/api/create-plan`,
          { entries, visionId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Milestone Plan Created Successfully!");
      } else {
        // UPDATE ideas (one by one)
        await Promise.all(
          entries.map(async (entry) => {
            await axios.put(
              `${apiUrl}/api/edit-idea/${visionId}`,
              { day: String(entry.day), idea: entry.idea }, // ✅ Convert day to string
              { headers: { Authorization: `Bearer ${token}` } }
            );
          })
        );
        toast.success("Milestone Plan Updated Successfully!");
      }
    } catch (error) {
      console.error("Error updating plan:", error);
      toast.error(
        error.response?.data?.message || "Failed to update milestone plan."
      );
    }
  };

  useEffect(() => {
    const fetchMilestonePlan = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/api/generate-plan/${decodedTitle}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            },
          }
        );
        setMilestonePlan(response.data.milestones);
      } catch (error) {
        console.error("Error fetching milestone plan:", error);
      } finally {
        setLoadingMilestone(false);
      }
    };

    fetchMilestonePlan();
  }, [decodedTitle]);

  return (
    <>
      <div>
        <body>
          <div
            className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}
          >
            <TopNav />

            <div className="page-wrapper  adad">
              <div className="content">
                <div className="content">
                  <h2>Milestone Plan for {decodedTitle}</h2>
                  {loadingMilestone ? (
                    <p>Loading milestone plan...</p>
                  ) : milestonePlan ? (
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Milestone</th>
                          <th>Timeframe</th>
                        </tr>
                      </thead>
                      <tbody>
                        {milestonePlan.split("\n").map((step, index) => {
                          const match = step.match(/^(.*?)\s*\(([^)]+)\)$/); // Extract milestone and timeframe
                          if (match) {
                            return (
                              <tr key={index}>
                                <td>{match[1]}</td>
                                <td>{match[2]}</td>
                              </tr>
                            );
                          }
                          return null; // Skip if format is incorrect
                        })}
                      </tbody>
                    </table>
                  ) : (
                    <p>No milestone plan available.</p>
                  )}
                </div>

                <h3>Plan Your Days</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Idea</th>
                    </tr>
                  </thead>
                  <tbody>
                    {manualEntries.map((entry, index) => (
                      <tr key={index}>
                        <td>Day {index + 1}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={entry}
                            onChange={(e) =>
                              handleInputChange(index, e.target.value)
                            }
                            placeholder="Type your idea here"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: "50px", marginBottom: "100px" }}>
                <button
                  onClick={addNewEntry}
                  className="btn btn-danger"
                  style={{
                    backgroundColor: "#28a745",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "none",
                    color: "white",

                    cursor: "pointer",
                  }}
                >
                  Add Another Day
                </button>
                <button
                  onClick={handleSavePlan}
                  style={{
                    backgroundColor: "#0d3978",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "none",
                    color: "white",
                    marginLeft: "20px",
                    cursor: "pointer",
                  }}
                >
                  Save Milestone Plan
                </button>
              </div>
              <DeleteIdea
                showModalss={showModalss}
                setShowModalss={setShowModalss}
                ideaId={ideaId}
              />
            </div>
          </div>
        </body>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Idea;
