// import { React, useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";

// import axios from "axios";
// import TopNav from "../TopNav";
// import SideNav from "../SideNav";
// import Sidebars from "../Sidebars";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import useAuth from "../../hooks/useAuth";
// import moment from "moment";
// import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
// import "./admin.css";
// import { useSidebar } from "../SidebarProvider";
// import news from "./pic.jpeg";
// import CreateIdea from "./CreateIdea";
// import Template from "./Template";
// import CreateVision from "./CreateVision";
// import DeleteVision from "./DeleteVision";
// import EditVision from "./EditVision";
// import VisionBoard from "./VisionBoard";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const Category = () => {
//   const { user } = useAuth();
//   const { isSidebarOpen } = useSidebar(); // Sidebar state
//   return (
//     <div>
//       <body>
//         <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
//           <SideNav />
//           <TopNav />
//           <div className="page-wrapper" style={{ marginTop: "10px" }}>
//             <div className="content">
//               <div
//                 class="text-black max-w-screen-2xl px-4 py-8 mx-auto"
//                 id="featured-categories:homepage_featured_categories"
//               >
//                 <div class="w-full">
//                   <div class="text-center mb-6 md:mb-12">
//                     <h3 class="text-2xl md:text-3xl xl:text-4xl">
//                       Find any digital resources
//                     </h3>
//                     <h4 class="text-lg mt-4 max-w-xl mx-auto">
//                       All digital resources available
//                     </h4>
//                   </div>
//                   <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 2xl:gap-12">
//                     <div>
//                       <a
//                         class="text-black hover:underline group outline-0 data-link-track data-analytics-link-track"
//                         href="/books/single-cat"
//                         title="Video Sessions"
//                         data-link-text="featured-categories::homepage featured categories::featured categories - church ordering"
//                         data-analytics-link-text="featured-categories::homepage featured categories::featured categories - church ordering"
//                       >
//                         <span class="relative block">
//                           <img
//                             alt="Video Session"
//                             loading="lazy"
//                             width="350"
//                             height="350"
//                             decoding="async"
//                             data-nimg="1"
//                             class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
//                             style={{ color: "transparent" }}
//                             sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
//                             srcset="
//                         https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0   256w,
//                         https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0   384w,
//                         https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0   640w,
//                         https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0   750w,
//                         https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0   828w,
//                         https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0 1080w,
//                         https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0 1200w,
//                         https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0 1920w,
//                         https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0 2048w,
//                         https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0 3840w
//                       "
//                             src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0"
//                           />
//                         </span>
//                         <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
//                           Video Session
//                         </p>
//                       </a>
//                     </div>
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

// export default Category;
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // ✅ To get the slug
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import { useSidebar } from "../SidebarProvider";

const Category = () => {
  const { id } = useParams();
  const { isSidebarOpen } = useSidebar();
  const [category, setCategory] = useState(null);
  const [childCategories, setChildCategories] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL;
  // useEffect(() => {
  //   const fetchCategoryAndChildren = async () => {
  //     try {
  //       const res = await axios.get(`${apiUrl}/api/categories`);
  //       const allCategories = res.data;

  //       // ✅ Find the selected category by slug
  //       const currentCategory = allCategories.find((cat) => cat._id === id);
  //       setCategory(currentCategory);

  //       // ✅ Filter children
  //       const children = allCategories.filter(
  //         (cat) => cat.parent === currentCategory._id
  //       );
  //       setChildCategories(children);
  //     } catch (error) {
  //       console.error("Error fetching category:", error);
  //     }
  //   };

  //   fetchCategoryAndChildren();
  // }, [id]);
  useEffect(() => {
    const fetchCategoryAndChildren = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/categories`);
        const allCategories = res.data;

        const currentCategory = allCategories.find((cat) => cat._id === id);
        setCategory(currentCategory);

        // ✅ Get children directly from category
        setChildCategories(currentCategory?.children || []);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategoryAndChildren();
  }, [id]);

  return (
    <div>
      <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <SideNav />
        <TopNav />
        <div className="page-wrapper" style={{ marginTop: "10px" }}>
          <div className="content">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">{category?.name}</h2>
              <p>Explore resources under this category</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {childCategories.map((child) => (
                <div key={child._id} className="text-center">
                  <img
                    src={child.image}
                    alt={child.name}
                    className="w-full rounded-2xl object-cover aspect-square"
                  />
                  <p className="mt-2 font-semibold">
                    <Link to={`/product/${child._id}`}>{child.name}</Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
