// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import useAuth from "../../hooks/useAuth";
// import { useSidebar } from "../SidebarProvider";
// import TopNav from "../TopNav";
// import news from "./pic.jpeg";
// import CreateIdea from "./CreateIdea";
// import DeleteIdea from "./DeleteIdea";
// import EditIdea from "./EditIdea";

// const AllIdea = () => {
//   const { user } = useAuth(); // Access the authenticated user
//   const [ideas, setIdeas] = useState([]);
//   const { isSidebarOpen } = useSidebar(); // Sidebar state
//   const [showModal, setShowModal] = useState(false);
//   const [showModals, setShowModals] = useState(false);
//   const [showModalss, setShowModalss] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);

//   const { title } = useParams(); // Get title from URL params
//   const decodedTitle = decodeURIComponent(title); // Decode the title to restore spaces
//   console.log(decodedTitle);
//   const [showModalsss, setShowModalsss] = useState(false);

//   const itemsPerPage = 6; // Number of cards per page
//   const cards = Array(14).fill({
//     title: "Last 30 Days Sales",
//     text: "₦ 1,234,567",
//     image: news,
//   }); // Example card data

//   const totalPages = Math.ceil(cards.length / itemsPerPage); // Calculate total pages

//   // const [visions, setVisions] = useState([]);
//   // const apiUrl = process.env.REACT_APP_API_URL;
//   // const [currentPage, setCurrentPage] = useState(1); // Start with the first page

//   const [loading, setLoading] = useState(true);
//   const [ideaId, setIdeaId] = useState(null);
//   const apiUrl = process.env.REACT_APP_API_URL;
//   const [currentPage, setCurrentPage] = useState(1); // Start with the first page
//   const [visions, setVisions] = useState([]);

//   // // Fetch vision by title and then fetch ideas for that vision
//   // const fetchVisionAndIdeas = async () => {
//   //   try {
//   //     // Fetch the vision by title
//   //     const visionResponse = await axios.get(
//   //       `${apiUrl}/api/get-single-by-title/${encodeURIComponent(title)}`
//   //     );
//   //     const visionId = visionResponse.data._id; // Get the visionId

//   //     // Fetch ideas for this vision
//   //     const ideasResponse = await axios.get(`${apiUrl}/api/ideas/${visionId}`, {
//   //       headers: {
//   //         Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
//   //       },
//   //     });

//   //     setIdeas(ideasResponse.data.ideas); // Set the ideas data
//   //     setLoading(false); // Stop loading
//   //   } catch (error) {
//   //     console.error("Error fetching vision or ideas:", error);
//   //     setLoading(false);
//   //   }
//   // };
//   const [visionId, setVisionId] = useState(null);

//   // const fetchVisionAndIdeas = async () => {
//   //   try {
//   //     // Remove spaces from the title before encoding it
//   //     const titleWithoutSpaces = title.replace(/\s+/g, "");

//   //     // Fetch the vision by title
//   //     const visionResponse = await axios.get(
//   //       `${apiUrl}/api/get-single-by-title/${encodeURIComponent(
//   //         titleWithoutSpaces
//   //       )}`
//   //     );
//   //     const visionId = visionResponse.data._id; // Get the visionId
//   //     setVisionId(visionId); // Set the visionId

//   //     // Fetch ideas for this vision
//   //     const ideasResponse = await axios.get(`${apiUrl}/api/ideas/${visionId}`, {
//   //       headers: {
//   //         Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
//   //       },
//   //     });

//   //     setIdeas(ideasResponse.data.ideas); // Set the ideas data
//   //     setLoading(false); // Stop loading
//   //   } catch (error) {
//   //     console.error("Error fetching vision or ideas:", error);
//   //     setLoading(false);
//   //   }
//   // };

//   const fetchVisionAndIdeas = async () => {
//     try {
//       // Use the title as is with spaces, encoding is done by `encodeURIComponent`
//       const encodedTitle = encodeURIComponent(title);

//       // Fetch the vision by title
//       const visionResponse = await axios.get(
//         `${apiUrl}/api/get-single-by-title/${encodedTitle}`
//       );
//       const visionId = visionResponse.data._id; // Get the visionId
//       setVisionId(visionId); // Set the visionId

//       // Fetch ideas for this vision
//       const ideasResponse = await axios.get(`${apiUrl}/api/ideas/${visionId}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
//         },
//       });

//       setIdeas(ideasResponse.data.ideas); // Set the ideas data
//       setLoading(false); // Stop loading
//     } catch (error) {
//       console.error("Error fetching vision or ideas:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVisionAndIdeas(decodedTitle); // Pass decodedTitle to your function
//   }, [decodedTitle]);

//   const handlePrevious = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   // Paginate the cards
//   const paginatedCards = cards.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const updateTableData = async () => {
//     try {
//       const token = localStorage.getItem("jwtToken"); // Retrieve JWT token
//       const response = await axios.get(`${apiUrl}/api/ideas/${visionId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Include authorization header
//         },
//       });

//       setIdeas(response.data.ideas); // Update the ideas state with the new list
//     } catch (error) {
//       console.error("Error fetching updated ideas:", error);
//     }
//   };

//   return (
//     <div>
//       <body>
//         <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
//           <TopNav />

//           <div className="page-wrapper  adad">
//             <div className="content">
//               <div
//                 className="d-flex justify-content-between align-items-center px-4"
//                 style={{ marginBottom: "40px" }}
//               >
//                 <div>
//                   <h4
//                     className="card-title mb-0"
//                     style={{
//                       fontSize: "28px",
//                       marginBottom: "40px",
//                       color: "black",
//                     }}
//                   >
//                     What's your idea?
//                   </h4>
//                 </div>
//                 <div>
//                   <button
//                     className=""
//                     style={{
//                       backgroundColor: "#0d3978",
//                       padding: "13px",
//                       borderRadius: "6px",
//                       border: "none",
//                       color: "white",
//                     }}
//                     onClick={() => setShowModalsss(true)}
//                   >
//                     Create a New Idea
//                   </button>
//                 </div>
//               </div>

//               <div className="vision-board">
//                 {loading ? (
//                   <p>Loading...</p>
//                 ) : ideas.length === 0 ? (
//                   <div className="text-center">
//                     <p>No ideas found for this vision.</p>
//                   </div>
//                 ) : (
//                   <div className="row">
//                     {ideas.map((idea) => (
//                       <div className="col-xl-6" key={idea._id}>
//                         <div
//                           className="donation-card style3"
//                           style={{
//                             display: "flex",
//                             alignItems: "flex-start",
//                             gap: "20px",
//                           }}
//                         >
//                           <div
//                             className="box-thumb"
//                             style={{ flex: "0 0 30%" }}
//                           >
//                             <img
//                               src={
//                                 idea.imageUrl ||
//                                 "https://via.placeholder.com/150"
//                               }
//                               alt={idea.title}
//                               style={{
//                                 width: "100%",
//                                 height: "auto",
//                                 objectFit: "cover",
//                               }}
//                             />
//                           </div>
//                           <div
//                             className="box-content"
//                             style={{ flex: "0 0 70%" }}
//                           >
//                             <h2 className="box-title">
//                               <a href="#">{idea.title}</a>
//                             </h2>
//                             <p>{idea.description}</p>
//                             <div
//                               style={{
//                                 display: "flex",
//                                 gap: "10px",
//                                 marginTop: "10px",
//                                 flexWrap: "wrap",
//                               }}
//                             >
//                               <a
//                                 href="#"
//                                 className="th-btn style6"
//                                 style={{
//                                   padding: "8px 12px",
//                                   fontSize: "12px",
//                                   textAlign: "center",
//                                   color: "#fff",
//                                   backgroundColor: "#0d3978",
//                                   textDecoration: "none",
//                                   borderRadius: "4px",
//                                 }}
//                               >
//                                 {idea.status}
//                               </a>
//                               <a
//                                 // href={`/refinement/${idea.title}`}
//                                 className="th-btn style6"
//                                 style={{
//                                   padding: "8px 12px",
//                                   fontSize: "12px",
//                                   textAlign: "center",
//                                   backgroundColor: "#dc3545",
//                                   color: "#fff",
//                                   textDecoration: "none",
//                                   borderRadius: "4px",
//                                 }}
//                               >
//                                 Refinement
//                               </a>

//                               <button
//                                 style={{
//                                   padding: "8px",
//                                   fontSize: "16px",
//                                   backgroundColor: "#fff",
//                                   border: "1px solid #ddd",
//                                   borderRadius: "4px",
//                                   cursor: "pointer",
//                                 }}
//                                 title="Edit"
//                               >
//                                 <FaEdit
//                                   style={{ color: "#28a745" }}
//                                   onClick={() => {
//                                     setIdeaId(idea._id);
//                                     setShowEditModal(true);
//                                   }}
//                                 />
//                               </button>
//                               <button
//                                 style={{
//                                   padding: "8px",
//                                   fontSize: "16px",
//                                   backgroundColor: "#fff",
//                                   border: "1px solid #ddd",
//                                   borderRadius: "4px",
//                                   cursor: "pointer",
//                                 }}
//                                 title="Delete"
//                               >
//                                 <FaTrash
//                                   style={{ color: "#dc3545" }}
//                                   onClick={() => {
//                                     setIdeaId(idea._id);
//                                     setShowModalss(true);
//                                   }}
//                                 />
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <DeleteIdea
//               showModalss={showModalss}
//               setShowModalss={setShowModalss}
//               updateTableData={updateTableData}
//               ideaId={ideaId}
//             />
//             <EditIdea
//               showEditModal={showEditModal}
//               setShowEditModal={setShowEditModal}
//               updateTableData={updateTableData}
//               ideaId={ideaId}
//             />
//             <CreateIdea
//               showModalsss={showModalsss}
//               setShowModalsss={setShowModalsss}
//               updateTableData={updateTableData}
//               visionId={visionId} // Assuming all ideas belong to the same vision
//             />
//           </div>
//         </div>
//       </body>
//     </div>
//   );
// };

// export default AllIdea;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useSidebar } from "../SidebarProvider";
import TopNav from "../TopNav";
import "./admin.css";
const AllIdea = () => {
  const { user } = useAuth();
  const { isSidebarOpen } = useSidebar();
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showModalss, setShowModalss] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [ideaId, setIdeaId] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const itemsPerPage = 6;
  const cards = Array(14).fill({
    title: "Last 30 Days Sales",
    text: "₦ 1,234,567",
    image: "https://via.placeholder.com/150", // Example image placeholder
  });
  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchAllIdeas = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/all-ideas`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      setIdeas(response.data.ideas);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching ideas:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAllIdeas(); // Fetch all ideas when the component mounts
  }, []);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Paginate the cards
  const paginatedCards = cards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const updateTableData = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await axios.get(`${apiUrl}/api/all-ideas`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIdeas(response.data.ideas);
    } catch (error) {
      console.error("Error fetching updated ideas:", error);
    }
  };

  return (
    <div>
      <body>
        <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <TopNav />

          <div className="page-wrapper adad">
            <div className="content">
              <div
                className="d-flex justify-content-between align-items-center px-4"
                style={{ marginBottom: "40px" }}
              >
                <div>
                  <h4
                    className="card-title mb-0"
                    style={{
                      fontSize: "28px",
                      marginBottom: "40px",
                      color: "black",
                    }}
                  >
                    All Ideas
                  </h4>
                </div>
              </div>

              <div className="vision-board">
                {loading ? (
                  <p>Loading...</p>
                ) : ideas.length === 0 ? (
                  <div className="text-center">
                    <p>No ideas available.</p>
                  </div>
                ) : (
                  <div className="row">
                    {ideas.map((idea) => (
                      <div className="col-xl-6" key={idea._id}>
                        <div
                          className="donation-card style3"
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "20px",
                          }}
                        >
                          <div
                            className="box-thumb"
                            style={{ flex: "0 0 30%" }}
                          >
                            <img
                              src={
                                idea.imageUrl ||
                                "https://via.placeholder.com/150"
                              }
                              alt={idea.title}
                              style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="box-content"
                            style={{ flex: "0 0 70%" }}
                          >
                            <h2 className="box-title">
                              <a href="#">{idea.title}</a>
                            </h2>
                            <p>{idea.description}</p>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                marginTop: "10px",
                                flexWrap: "wrap",
                              }}
                            >
                              <a
                                href="#"
                                className="th-btn style6"
                                style={{
                                  padding: "8px 12px",
                                  fontSize: "12px",
                                  textAlign: "center",
                                  color: "#fff",
                                  backgroundColor: "#0d3978",
                                  textDecoration: "none",
                                  borderRadius: "4px",
                                }}
                              >
                                {idea.status}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default AllIdea;
