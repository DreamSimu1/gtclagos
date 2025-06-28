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

// const Product = () => {
//   const { user } = useAuth();
//   const { isSidebarOpen } = useSidebar(); // Sidebar state
//   const { id } = useParams(); // this is the child category ID
//   const { isSidebarOpen } = useSidebar();
//   const [products, setProducts] = useState([]);
//   const [categoryName, setCategoryName] = useState("");

//   const apiUrl = process.env.REACT_APP_API_URL;
//   return (
//     <div>
//       <body>
//         <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
//           <SideNav />
//           <TopNav />
//           <div className="page-wrapper" style={{ marginTop: "10px" }}>
//             <div className="content">
//               <section
//                 id="best-sellers-slider-rec-for-you"
//                 class="product-slider-wrapper w-full py-8"
//                 data-tracking-component="product-slider"
//                 data-tracking-id="trending-items"
//                 style={{ backgroundColor: "transparent" }}
//               >
//                 <div
//                   id="product-slider:trending_items"
//                   class="max-w-[1440px] mx-auto sm:px-4"
//                 >
//                   <h2 class="font-sofia font-semibold text-xl md:text-2xl mb-4 px-4 sm:px-0 lg:mb-6 text-center">
//                     All Product
//                   </h2>
//                   <section>
//                     <div class="main-swiper-wrap relative w-full px-4 group">
//                       <div class="swiper swiper-initialized swiper-horizontal swiper-watch-progress !pb-8">
//                         <div class="swiper-wrapper">
//                           <div
//                             class="swiper-slide swiper-slide-visible swiper-slide-active"
//                             style={{ width: "285.333px" }}
//                           >
//                             <div
//                               class="flex flex-col max-w-screen-xs px-4 h-full justify-between transform translate-x-0"
//                               data-product="001148445"
//                               data-analytics-product="001148445"
//                               data-testid="best-sellers-slider-rec-for-you-slide-1"
//                               data-tracking-component="product-slide"
//                               data-tracking-id="001148445"
//                             >
//                               <div class="flex flex-col p-1 group h-full">
//                                 <a
//                                   class="flex flex-col items-center text-blue hover:text-blue-hover hover:underline slider-tile-link focus-visible solid-focus-ring"
//                                   href="/books/single-cat"
//                                   title="Communion Cups - Plastic Cups (1000 Count Box)"
//                                   data-link-text="product-slider::trending items::communion cups - plastic cups -1000 count box-"
//                                   data-analytics-link-text="product-slider::trending items::communion cups - plastic cups -1000 count box-"
//                                   data-product="001148445"
//                                   data-analytics-product="001148445"
//                                   data-slide-count="17"
//                                   data-slider-alg="TI"
//                                   data-slider-criteria="Trending Items"
//                                   data-slider-logic="TI"
//                                   data-slide-position="1"
//                                   data-slider-title="Trending Items"
//                                   data-slider-type="dyn"
//                                   data-analytics-slider=""
//                                   data-analytics-slider-count="17"
//                                   data-analytics-slider-logic="TI"
//                                   data-analytics-slider-title="Trending Items"
//                                   data-analytics-slider-type="dyn"
//                                   data-analytics-slider-position="1"
//                                   data-tracking-component="link"
//                                   data-tracking-id="image"
//                                 >
//                                   <div class="pb-full relative w-full">
//                                     <img
//                                       alt="Communion Cups - Plastic Cups (1000 Count Box)"
//                                       loading="lazy"
//                                       width="350"
//                                       height="350"
//                                       decoding="async"
//                                       data-nimg="1"
//                                       class="absolute bottom-0 max-h-full max-w-full left-1/2 transform -translate-x-1/2 w-auto h-auto"
//                                       srcset="
//                              https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/001148445?_a=BAVAZGDW0 1x,
//                              https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/001148445?_a=BAVAZGDW0 2x
//                            "
//                                       src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/001148445?_a=BAVAZGDW0"
//                                       style={{ color: "transparent" }}
//                                     />
//                                   </div>
//                                 </a>
//                                 <div class="flex flex-col justify-between h-full">
//                                   <div class="flex flex-col my-2">
//                                     <p class="text-center my-4 line-clamp-3 !my-2 !text-left font-semibold">
//                                       <a
//                                         class="slider-tile-link"
//                                         href="/books/single-cat"
//                                         data-product="001148445"
//                                         data-analytics-product="001148445"
//                                         data-slide-count="17"
//                                         data-slider-alg="TI"
//                                         data-slider-criteria="Trending Items"
//                                         data-slider-logic="TI"
//                                         data-slide-position="1"
//                                         data-slider-title="Trending Items"
//                                         data-slider-type="dyn"
//                                         data-analytics-slider=""
//                                         data-analytics-slider-count="17"
//                                         data-analytics-slider-logic="TI"
//                                         data-analytics-slider-title="Trending Items"
//                                         data-analytics-slider-type="dyn"
//                                         data-analytics-slider-position="1"
//                                         data-testid="best-sellers-slider-rec-for-you-link-1"
//                                         data-tracking-component="link"
//                                         data-tracking-id="product-title"
//                                       >
//                                         Communion Cups - Plastic Cups (1000
//                                         Count Box)
//                                       </a>
//                                     </p>
//                                   </div>
//                                   <div>
//                                     <div class="flex items-center mb-3">
//                                       <div
//                                         class="flex flex-row justify-between mr-2 w-[126px]"
//                                         aria-hidden="true"
//                                       >
//                                         <div class="flex flex-row relative w-[22px]">
//                                           <span
//                                             class="block absolute overflow-hidden left-0 top-0 bottom-0"
//                                             style={{ width: "100%" }}
//                                           >
//                                             <img
//                                               alt=""
//                                               loading="lazy"
//                                               width="22"
//                                               height="20"
//                                               decoding="async"
//                                               data-nimg="1"
//                                               class="relative !max-w-none w-[22px]"
//                                               srcset="
//                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
//                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
//                                    "
//                                               src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
//                                               style={{ color: "transparent" }}
//                                             />
//                                           </span>
//                                           <img
//                                             alt=""
//                                             loading="lazy"
//                                             width="22"
//                                             height="20"
//                                             decoding="async"
//                                             data-nimg="1"
//                                             class="w-full relative"
//                                             srcset="
//                                    https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0 1x,
//                                    https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0 2x
//                                  "
//                                             src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0"
//                                             style={{ color: "transparent" }}
//                                           />
//                                         </div>
//                                         <div class="flex flex-row relative w-[22px]">
//                                           <span
//                                             class="block absolute overflow-hidden left-0 top-0 bottom-0"
//                                             style={{ width: "100%" }}
//                                           >
//                                             <img
//                                               alt=""
//                                               loading="lazy"
//                                               width="22"
//                                               height="20"
//                                               decoding="async"
//                                               data-nimg="1"
//                                               class="relative !max-w-none w-[22px]"
//                                               srcset="
//                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
//                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
//                                    "
//                                               src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
//                                               style={{ color: "transparent" }}
//                                             />
//                                           </span>
//                                           <img
//                                             alt=""
//                                             loading="lazy"
//                                             width="22"
//                                             height="20"
//                                             decoding="async"
//                                             data-nimg="1"
//                                             class="w-full relative"
//                                             srcset="
//                                    https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0 1x,
//                                    https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0 2x
//                                  "
//                                             src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0"
//                                             style={{ color: "transparent" }}
//                                           />
//                                         </div>
//                                         <div class="flex flex-row relative w-[22px]">
//                                           <span
//                                             class="block absolute overflow-hidden left-0 top-0 bottom-0"
//                                             style={{ width: "100%" }}
//                                           >
//                                             <img
//                                               alt=""
//                                               loading="lazy"
//                                               width="22"
//                                               height="20"
//                                               decoding="async"
//                                               data-nimg="1"
//                                               class="relative !max-w-none w-[22px]"
//                                               srcset="
//                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
//                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
//                                    "
//                                               src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
//                                               style={{ color: "transparent" }}
//                                             />
//                                           </span>
//                                           <img
//                                             alt=""
//                                             loading="lazy"
//                                             width="22"
//                                             height="20"
//                                             decoding="async"
//                                             data-nimg="1"
//                                             class="w-full relative"
//                                             srcset="
//                                    https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0 1x,
//                                    https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0 2x
//                                  "
//                                             src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0"
//                                             style={{ color: "transparent" }}
//                                           />
//                                         </div>
//                                         <div class="flex flex-row relative w-[22px]">
//                                           <span
//                                             class="block absolute overflow-hidden left-0 top-0 bottom-0"
//                                             style={{ width: "100%" }}
//                                           >
//                                             <img
//                                               alt=""
//                                               loading="lazy"
//                                               width="22"
//                                               height="20"
//                                               decoding="async"
//                                               data-nimg="1"
//                                               class="relative !max-w-none w-[22px]"
//                                               srcset="
//                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
//                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
//                                    "
//                                               src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
//                                               style={{ color: "transparent" }}
//                                             />
//                                           </span>
//                                           <img
//                                             alt=""
//                                             loading="lazy"
//                                             width="22"
//                                             height="20"
//                                             decoding="async"
//                                             data-nimg="1"
//                                             class="w-full relative"
//                                             srcset="
//                                    https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0 1x,
//                                    https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0 2x
//                                  "
//                                             src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0"
//                                             style={{ color: "transparent" }}
//                                           />
//                                         </div>
//                                         <div class="flex flex-row relative w-[22px]">
//                                           <span
//                                             class="block absolute overflow-hidden left-0 top-0 bottom-0"
//                                             style={{ width: "80%" }}
//                                           >
//                                             <img
//                                               alt=""
//                                               loading="lazy"
//                                               width="22"
//                                               height="20"
//                                               decoding="async"
//                                               data-nimg="1"
//                                               class="relative !max-w-none w-[22px]"
//                                               srcset="
//                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
//                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
//                                    "
//                                               src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
//                                               style={{ color: "transparent" }}
//                                             />
//                                           </span>
//                                           <img
//                                             alt=""
//                                             loading="lazy"
//                                             width="22"
//                                             height="20"
//                                             decoding="async"
//                                             data-nimg="1"
//                                             class="w-full relative"
//                                             srcset="
//                                    https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0 1x,
//                                    https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0 2x
//                                  "
//                                             src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0"
//                                             style={{ color: "transparent" }}
//                                           />
//                                         </div>
//                                       </div>
//                                       <p class="inline-block !mr-2 sr-only sm:not-sr-only">
//                                         4.8
//                                       </p>
//                                       <p class="flex">
//                                         (686
//                                         <span class="sr-only"> reviews</span>)
//                                       </p>
//                                     </div>
//                                     <div class="flex flex-between items-center justify-between min-h-[48px]">
//                                       <div>
//                                         <div class="text-center text-red text-xl">
//                                           <span>
//                                             <div class="text-black font-semibold">
//                                               $18.28
//                                             </div>
//                                             <div class="text-sm text-black-64 line-through">
//                                               was $21.50
//                                             </div>
//                                           </span>
//                                         </div>
//                                       </div>
//                                       <button
//                                         class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-yellow text-black border-2 border-yellow hover:text-black-3 hover:bg-yellow-hover focus:text-black-3 focus:bg-yellow-hover active:bg-yellow-active px-4 py-1.5 text-sm mt-4 hover:cursor-pointer solid-focus-ring !mt-0 ml-auto !py-3 fill-gray hover:fill-black slider-tile-link"
//                                         type="button"
//                                       >
//                                         <span class="sr-only">Add to Cart</span>
//                                         <svg
//                                           xmlns="http://www.w3.org/2000/svg"
//                                           viewBox="0 0 576 512"
//                                           width="1em"
//                                           height="1em"
//                                           aria-hidden="true"
//                                           class="text-base"
//                                         >
//                                           <path d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20"></path>
//                                         </svg>
//                                       </button>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       </body>
//     </div>
//   );
// };

// export default Product;
import { React, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import Sidebars from "../Sidebars";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import moment from "moment";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import "./admin.css";
import { useSidebar } from "../SidebarProvider";
import news from "./pic.jpeg";
import CreateIdea from "./CreateIdea";
import Template from "./Template";
import CreateVision from "./CreateVision";
import DeleteVision from "./DeleteVision";
import EditVision from "./EditVision";
import VisionBoard from "./VisionBoard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Product = () => {
  const { id } = useParams(); // this is the child category ID
  const { isSidebarOpen } = useSidebar();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        // Fetch all categories to get the name of the category
        const categoryRes = await axios.get(`${apiUrl}/api/categories`);
        const allCategories = categoryRes.data;
        const currentCategory = allCategories.find((cat) => cat._id === id);
        setCategoryName(currentCategory?.name || "Products");

        // Fetch products that belong to this category
        const productRes = await axios.get(`${apiUrl}/api/products`);
        const allProducts = productRes.data;

        // const filteredProducts = allProducts.filter(
        //   (product) => product.category === id
        // );
        const filteredProducts = allProducts.filter(
          (product) => product.category && product.category._id === id
        );

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsByCategory();
  }, [id]);

  return (
    <div>
      <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <SideNav />
        <TopNav />
        <div className="page-wrapper" style={{ marginTop: "10px" }}>
          <div className="content">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">{categoryName}</h2>
              <p>Browse all products under this category</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="border rounded-2xl p-4 shadow-md"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <h3 className="mt-2 text-lg font-semibold">
                    {" "}
                    <Link to={`/product-details/${product._id}`}>
                      {product.name}
                    </Link>
                  </h3>

                  <p className="text-sm text-gray-500">{product.description}</p>
                  <p className="mt-1 font-bold text-yellow-600">
                    ${product.discountPrice}
                  </p>
                </div>
              ))}

              {products.length === 0 && (
                <p className="text-center col-span-full text-gray-500">
                  No products found for this category.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
