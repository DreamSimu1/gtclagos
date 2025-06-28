// import { React, useEffect, useState } from "react";

// import axios from "axios";
// import TopNav from "../TopNav";
// import SideNav from "../SideNav";
// import "./point.css";

// import AddPointModal from "./AddPointModal";
// const ViewPoints = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const { data, fetchedData, loading, error, reFetch } = useFetch(`/point`); // Use the specified class name in the URL
//   const [showModal, setShowModal] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const updateTableData = (newAdmin) => {
//     // Logic to update the table with the new admin data
//     console.log("Updating table with new admin:", newAdmin);
//   };

//   return (
//     <div>
//       <body>
//         <div class="main-wrapper">
//           <TopNav />

//           <SideNav />

//           <div class="page-wrapper">
//             <div class="content">
//               <div class="card">
//                 <div class="card-header">
//                   <div className="header-container">
//                     <h4 className="card-title">All POS points</h4>
//                     <button
//                       className="add-admin-btn"
//                       onClick={() => setShowModal(true)}
//                     >
//                       Add Points
//                     </button>
//                   </div>
//                 </div>

//                 <div class="card-body">
//                   <div class="table-responsive dataview">
//                     <table class="table dashboard-expired-products">
//                       <thead>
//                         <tr>
//                           <th class="no-sort">
//                             <label class="checkboxs">
//                               <input type="checkbox" id="select-all" />
//                               <span class="checkmarks"></span>
//                             </label>
//                           </th>
//                           <th>Point Name</th>

//                           <th>Point Address</th>
//                           <th> POS operator</th>
//                           <th class="no-sort">Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td>
//                             <label class="checkboxs">
//                               <input type="checkbox" />
//                               <span class="checkmarks"></span>
//                             </label>
//                           </td>
//                           <td>
//                             <div class="productimgname">
//                               <a href="javascript:void(0);">
//                                 Red Premium Handy{" "}
//                               </a>
//                             </div>
//                           </td>
//                           <td>
//                             <a href="javascript:void(0);">PT006</a>
//                           </td>
//                           <td>17 Jan 2023</td>

//                           <td class="action-table-data">
//                             <div class="edit-delete-action">
//                               <a class="me-2 p-2" href="#">
//                                 <i data-feather="edit" class="feather-edit"></i>
//                               </a>
//                               <a
//                                 class=" confirm-text p-2"
//                                 href="javascript:void(0);"
//                               >
//                                 <i
//                                   data-feather="trash-2"
//                                   class="feather-trash-2"
//                                 ></i>
//                               </a>
//                             </div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             <label class="checkboxs">
//                               <input type="checkbox" />
//                               <span class="checkmarks"></span>
//                             </label>
//                           </td>
//                           <td>
//                             <div class="productimgname">
//                               <a href="javascript:void(0);">Iphone 14 Pro</a>
//                             </div>
//                           </td>
//                           <td>
//                             <a href="javascript:void(0);">PT007</a>
//                           </td>
//                           <td>22 Feb 2023</td>

//                           <td class="action-table-data">
//                             <div class="edit-delete-action">
//                               <a class="me-2 p-2" href="#">
//                                 <i data-feather="edit" class="feather-edit"></i>
//                               </a>
//                               <a
//                                 class="confirm-text p-2"
//                                 href="javascript:void(0);"
//                               >
//                                 <i
//                                   data-feather="trash-2"
//                                   class="feather-trash-2"
//                                 ></i>
//                               </a>
//                             </div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             <label class="checkboxs">
//                               <input type="checkbox" />
//                               <span class="checkmarks"></span>
//                             </label>
//                           </td>
//                           <td>
//                             <div class="productimgname">
//                               <a href="javascript:void(0);">Black Slim 200 </a>
//                             </div>
//                           </td>
//                           <td>
//                             <a href="javascript:void(0);">PT008</a>
//                           </td>

//                           <td>13 May 2023</td>

//                           <td class="action-table-data">
//                             <div class="edit-delete-action">
//                               <a class="me-2 p-2" href="#">
//                                 <i data-feather="edit" class="feather-edit"></i>
//                               </a>
//                               <a
//                                 class=" confirm-text p-2"
//                                 href="javascript:void(0);"
//                               >
//                                 <i
//                                   data-feather="trash-2"
//                                   class="feather-trash-2"
//                                 ></i>
//                               </a>
//                             </div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             <label class="checkboxs">
//                               <input type="checkbox" />
//                               <span class="checkmarks"></span>
//                             </label>
//                           </td>
//                           <td>
//                             <div class="productimgname">
//                               <a href="javascript:void(0);">Woodcraft Sandal</a>
//                             </div>
//                           </td>
//                           <td>
//                             <a href="javascript:void(0);">PT009</a>
//                           </td>
//                           <td>29 Mar 2023</td>

//                           <td class="action-table-data">
//                             <div class="edit-delete-action">
//                               <a class="me-2 p-2" href="#">
//                                 <i data-feather="edit" class="feather-edit"></i>
//                               </a>
//                               <a
//                                 class=" confirm-text p-2"
//                                 href="javascript:void(0);"
//                               >
//                                 <i
//                                   data-feather="trash-2"
//                                   class="feather-trash-2"
//                                 ></i>
//                               </a>
//                             </div>
//                           </td>
//                         </tr>

//                         <tr>
//                           <td>
//                             <label class="checkboxs">
//                               <input type="checkbox" />
//                               <span class="checkmarks"></span>
//                             </label>
//                           </td>
//                           <td>
//                             <div class="productimgname">
//                               <a href="javascript:void(0);">
//                                 Apple Series 5 Watch{" "}
//                               </a>
//                             </div>
//                           </td>
//                           <td>
//                             <a href="javascript:void(0);">PT010</a>
//                           </td>
//                           <td>24 Mar 2023</td>

//                           <td class="action-table-data">
//                             <div class="edit-delete-action">
//                               <a
//                                 class="me-2 p-2"
//                                 href="#"
//                                 data-bs-toggle="modal"
//                                 data-bs-target="#edit-units"
//                               >
//                                 <i data-feather="edit" class="feather-edit"></i>
//                               </a>
//                               <a
//                                 class=" confirm-text p-2"
//                                 href="javascript:void(0);"
//                               >
//                                 <i
//                                   data-feather="trash-2"
//                                   class="feather-trash-2"
//                                 ></i>
//                               </a>
//                             </div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                     <AddPointModal
//                       showModal={showModal}
//                       setShowModal={setShowModal}
//                       updateTableData={updateTableData}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </body>
//     </div>
//   );
// };

// export default ViewPoints;
import React, { useEffect, useState } from "react";
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import "./point.css";
import { FaEdit, FaTrash } from "react-icons/fa";

import AddPointModal from "./AddPointModal";

const ViewPoints = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/point`);
        setPoints(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching points data");
        setLoading(false);
      }
    };

    fetchPoints();
  }, [apiUrl]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/point/${id}`);
      setPoints(points.filter((point) => point._id !== id));
    } catch (error) {
      console.error("Error deleting point:", error);
    }
  };

  const updateTableData = (newPoint) => {
    setPoints([...points, newPoint]);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="main-wrapper">
        <TopNav />
        <SideNav />

        <div className="page-wrapper">
          <div className="content">
            <div className="card">
              <div className="card-header">
                <div className="header-container">
                  <h4 className="card-title">All POS Points</h4>
                </div>
              </div>

              <div className="card-body">
                <div className="table-responsive dataview">
                  <table className="table dashboard-expired-products">
                    <thead>
                      <tr>
                        <th className="no-sort">
                          <label className="checkboxs">
                            <input type="checkbox" id="select-all" />
                            <span className="checkmarks"></span>
                          </label>
                        </th>
                        <th>Point Name</th>
                        <th>Point Address</th>
                        <th>POS Operator</th>
                      </tr>
                    </thead>
                    <tbody>
                      {points.map((point) => (
                        <tr key={point._id}>
                          <td>
                            <label className="checkboxs">
                              <input type="checkbox" />
                              <span className="checkmarks"></span>
                            </label>
                          </td>
                          <td>{point.pointname}</td>
                          <td>{point.address}</td>
                          <td>{point.posOperator}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <AddPointModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    updateTableData={updateTableData}
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

export default ViewPoints;
