import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiBookOpen, FiChevronDown } from "react-icons/fi";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import { useLocation, useParams } from "react-router-dom";
const booksData = [
  {
    id: 1,
    title: "The Purpose Driven Life",
    author: "Rick Warren",
    price: "$15.99",
    image: "https://via.placeholder.com/150x200.png?text=Book+1",
  },
  {
    id: 2,
    title: "Mere Christianity",
    author: "C.S. Lewis",
    price: "$12.49",
    image: "https://via.placeholder.com/150x200.png?text=Book+2",
  },
  {
    id: 3,
    title: "Knowing God",
    author: "J.I. Packer",
    price: "$14.99",
    image: "https://via.placeholder.com/150x200.png?text=Book+3",
  },
  // Add more books as needed
];
const ProductDet = () => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const { id } = useParams(); // product ID from the URL
  const [product, setProduct] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  const toggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  const [search, setSearch] = useState("");
  const location = useLocation();

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/product/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <>
      <div>
        <body>
          <div className="main-wrapper">
            <TopNav />
            <SideNav />
            <div className="page-wrapper" style={{ marginTop: "10px" }}>
              <div className="content">
                <main id="content">
                  <aside class="fixed transition-all right-0 lg:[.cart-pane-on_&amp;]:right-[160px] 2xl:[.cart-pane-on_&amp;]:right-[160px] 2xl:[.cart-pane-on.cart-pane-open_&amp;]:right-[375px] z-100 max-w-0 bottom-1/2 font-sofia translate-x-full overflow-hidden z-40">
                    <a
                      id="scroll-to-top-page"
                      href="#__next"
                      class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring px-4 py-1.5 text-sm scroll-to-top-button relative shadow-md-all items-center rounded-r-none !border-r-0 border-white !border-1 shadow-md-all fill-white button bg-blue text-white border-2 border-blue hover:text-white hover:bg-blue-hover focus:text-white focus:bg-blue-hover active:bg-blue-active"
                      aria-hidden="true"
                      aria-label="Scroll back to top of page"
                      data-testid="scroll-to-top-page"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="1em"
                        height="1em"
                        class="absolute top-1/2 -translate-y-1/2"
                        aria-hidden="true"
                      >
                        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                      </svg>
                      <span class="block pl-5 max-w-min leading-tight">
                        Page Top
                      </span>
                    </a>
                  </aside>
                  <div
                    class="w-full text-gray font-sofia print:w-[1024px]"
                    data-testid="pdp-id-005841383"
                  >
                    <section id="details-grid" class="max-w-screen-2xl mx-auto">
                      <div class="grid grid-cols-5 auto-rows-min gap-x-6 px-4 mt-2 print:block print:w-full">
                        <div class="relative col-span-full md:row-span-3 md:col-span-3 pb-4 md:pb-12 print:block print:w-1/2 print:float-left print:pr-8">
                          <section
                            aria-label="Product gallery"
                            data-testid="product-slider"
                          >
                            <div class="flex flex-wrap relative md:sticky top-0">
                              <div class="relative w-full lg:w-auto lg:max-w-[85%]">
                                <button
                                  class="block aspect-square relative w-full h-full object-bottom object-contain flex items-center justify-center"
                                  aria-label="product imagery 0 of 7. Opens to a modal"
                                  data-testid="product-slider-main-image"
                                >
                                  <img
                                    src={product.images}
                                    alt={product.name}
                                    className="w-full object-cover"
                                    loading="lazy"
                                  />
                                </button>
                              </div>
                              <div
                                class="grid gap-x-2 pt-4 relative w-full grid-cols-[min(calc(45%_-_.25rem),220px),minmax(auto,min(calc(15%_-_.25rem),80px))]"
                                data-testid="product-slider-mobile-thumbnails"
                              >
                                <div class="relative overflow-y-hidden w-full">
                                  <ul
                                    class="overflow-y-auto flex flex-row relative gap-x-2 h-full items-start"
                                    data-testid="product-slider-mobile-thumbnails-images-list"
                                  >
                                    <li class="w-full min-w-[15%] max-w-[80px] aspect-square relative">
                                      <button
                                        data-testid="product-slider-image-button-tile"
                                        data-attr="IMAGE"
                                        class="block relative group rounded-[8px] border-2 transition-colors duration-300 hover:border-yellow-gold focus:border-blue border-blue w-full h-full aspect-square"
                                      >
                                        <div class="IMAGE-TILE-BUTTON overflow-hidden rounded-md relative w-full h-0 pb-1/1">
                                          <div class="absolute inset-0 flex content-center items-center justify-center overflow-hidden">
                                            <img
                                              alt="product thumbnail 1"
                                              loading="eager"
                                              width="110"
                                              height="110"
                                              decoding="async"
                                              data-nimg="1"
                                              class="w-auto h-auto max-h-full max-w-full"
                                              srcset="
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_128/f_auto/q_auto/v1/9781087780795?_a=BAVAZGDW0 1x,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/9781087780795?_a=BAVAZGDW0 2x
                                    "
                                              src={product.image}
                                              style={{ color: "transparent" }}
                                            />
                                          </div>
                                        </div>
                                      </button>
                                    </li>
                                    <li class="w-full min-w-[15%] max-w-[80px] aspect-square relative">
                                      <button
                                        data-testid="product-slider-image-button-tile"
                                        data-attr="IMAGE"
                                        class="block relative group rounded-[8px] border-2 transition-colors duration-300 hover:border-yellow-gold focus:border-blue border-transparent w-full h-full aspect-square"
                                      >
                                        <div class="IMAGE-TILE-BUTTON overflow-hidden rounded-md relative w-full h-0 pb-1/1">
                                          <div class="absolute inset-0 flex content-center items-center justify-center overflow-hidden">
                                            <img
                                              alt="product thumbnail 2"
                                              loading="eager"
                                              width="110"
                                              height="110"
                                              decoding="async"
                                              data-nimg="1"
                                              class="w-auto h-auto max-h-full max-w-full"
                                              srcset="
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_128/f_auto/q_auto/v1/9781087780795_01?_a=BAVAZGDW0 1x,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/9781087780795_01?_a=BAVAZGDW0 2x
                                    "
                                              src={product.image}
                                              style={{ color: "transparent" }}
                                            />
                                          </div>
                                        </div>
                                      </button>
                                    </li>
                                    <li class="w-full min-w-[15%] max-w-[80px] aspect-square relative">
                                      <button
                                        data-testid="product-slider-image-button-tile"
                                        data-attr="IMAGE"
                                        class="block relative group rounded-[8px] border-2 transition-colors duration-300 hover:border-yellow-gold focus:border-blue border-transparent w-full h-full aspect-square"
                                      >
                                        <div class="IMAGE-TILE-BUTTON overflow-hidden rounded-md relative w-full h-0 pb-1/1">
                                          <div class="absolute inset-0 flex content-center items-center justify-center overflow-hidden">
                                            <img
                                              alt="product thumbnail 3"
                                              loading="eager"
                                              width="110"
                                              height="110"
                                              decoding="async"
                                              data-nimg="1"
                                              class="w-auto h-auto max-h-full max-w-full"
                                              srcset="
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_128/f_auto/q_auto/v1/9781087780795_02?_a=BAVAZGDW0 1x,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/9781087780795_02?_a=BAVAZGDW0 2x
                                    "
                                              src={product.image}
                                              style={{ color: "transparent" }}
                                            />
                                          </div>
                                        </div>
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                                <div class="relative w-full min-w-[15%] max-w-[80px] self-center block print:!hidden">
                                  <button
                                    data-testid="product-slider-image-button-video-tile"
                                    data-attr="VIDEO"
                                    class="block relative group rounded-[8px] border-2 transition-colors duration-300 hover:border-yellow-gold focus:border-blue border-transparent mb-5 lg:mb-0 w-full h-full aspect-square"
                                  >
                                    <div class="IMAGE-TILE-BUTTON overflow-hidden rounded-md relative w-full h-0 pb-1/1">
                                      <div class="absolute inset-0 flex content-center items-center justify-center overflow-hidden">
                                        <img
                                          src={product.image}
                                          alt="View product videos.  Opens to a modal."
                                          class="w-auto h-auto object-cover h-full w-full"
                                          width="110"
                                          height="110"
                                          loading="eager"
                                        />
                                      </div>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        width="50%"
                                        height="100%"
                                        class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 fill-white"
                                        data-testid="product-slider-image-button-play-circle"
                                      >
                                        <path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m188.3-108.9c-7.6 4.2-12.3 12.3-12.3 20.9v176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"></path>
                                      </svg>
                                    </div>
                                    <p
                                      class="absolute -bottom-4 translate-y-1/2 text-xs xl:text-sm whitespace-nowrap w-full text-center"
                                      data-testid="product-slider-image-button-video-count"
                                    >
                                      4 videos
                                    </p>
                                  </button>
                                </div>
                              </div>
                              <div class="text-center mt-4 md:mb-0 rows w-full lg:text-lg print:hidden lg:pl-[15%]">
                                <button
                                  class="view-sample-btn link fill-blue hover:fill-blue-hover"
                                  data-testid="view-sample-button"
                                >
                                  View Sample
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    width="1em"
                                    height="1em"
                                    class="inline-block ml-2 relative -top-0.5"
                                    aria-hidden="true"
                                  >
                                    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4 142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32M144 256a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-64c0 35.3-28.7 64-64 64-7.1 0-13.9-1.2-20.3-3.3-5.5-1.8-11.9 1.6-11.7 7.4.3 6.9 1.3 13.8 3.2 20.7 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1-5.8-.2-9.2 6.1-7.4 11.7 2.1 6.4 3.3 13.2 3.3 20.3"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                width: "1px",
                                height: "1px",
                                padding: 0,
                                margin: "-1px",
                                overflow: "hidden",
                                clip: "rect(0, 0, 0, 0)",
                                whiteSpace: "nowrap",
                                borderWidth: 0,
                                display: "none",
                              }}
                            ></div>
                          </section>
                        </div>
                        <div class="row-start-1 col-span-full md:col-span-2 md:row-span-1 print:block print:w-1/2 print:float-right">
                          <div class="relative mt-1">
                            <p
                              class="text-gray-74 text-sm mb-1 md:mb-2 lg:mb-4"
                              data-testid="pdp-item-number"
                            >
                              Item #: 005841383
                            </p>
                            <div class="absolute right-0 top-[26px] sm:top-px xl:-top-1 print:hidden">
                              <div
                                class="product-share relative flex"
                                data-testid="share-print"
                              >
                                <div class="relative inline-block">
                                  <button
                                    class="link ml-2 flex items-center fill-blue hover:fill-blue-hover"
                                    data-testid="share-social-buttons-click"
                                    id="headlessui-popover-button-:R2kejf9m:"
                                    type="button"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 576 512"
                                      width="1em"
                                      height="1em"
                                      aria-hidden="true"
                                      class="relative text-lg"
                                    >
                                      <path d="M352 224h-46.5c-45 0-81.5 36.5-81.5 81.5 0 22.3 10.3 34.3 19.2 40.5 6.8 4.7 12.8 12 12.8 20.3 0 9.8-8 17.8-17.8 17.8h-2.5c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144h80V34.7C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9l138.2 124.4c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2H384c-17.7 0-32-14.3-32-32zM80 96c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-48c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112c0-44.2 35.8-80 80-80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                                    </svg>
                                    <span class="[.product-share_&amp;]:sr-only xl:[.product-share_&amp;]:not-sr-only !ml-2">
                                      Share
                                    </span>
                                  </button>
                                </div>
                                <button
                                  class="share-btn-prt link hidden md:flex items-center pl-4 fill-blue hover:fill-blue-hover"
                                  data-testid="print-button"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    width="1em"
                                    height="1em"
                                    aria-hidden="true"
                                    class="relative text-lg"
                                  >
                                    <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64h226.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0zm256 352v96H128v-96zm64 32h32c17.7 0 32-14.3 32-32v-96c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32h32v64c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64zm-16-136a24 24 0 1 1 0 48 24 24 0 1 1 0-48"></path>
                                  </svg>
                                  <span class="sr-only xl:not-sr-only !ml-2">
                                    Print
                                  </span>
                                </button>
                              </div>
                            </div>
                            <div class="text-xl lg:text-2xl font-semibold mb-2 pr-8 sm:pr-0">
                              <h1 class="inline">{product.name}</h1>
                            </div>
                            <section
                              class="text-sm leading-loose mb-3 line-clamp-2 -mt-0.5"
                              aria-label="Contributor details for A Short Guide to Groups"
                              title="Jared Musgrove (Author), Justin Elafros (Author)"
                              data-testid="contributors"
                            >
                              <span class="inline-block mr-2">by</span>
                              <ul class="contents" aria-label="contributors">
                                <li class="inline mr-2">
                                  <span>
                                    <a
                                      href="/en/contributors/jared-musgrove"
                                      class="link inline-block"
                                      aria-label="profile for contributor: Jared Musgrove"
                                    >
                                      {product.Author}
                                    </a>
                                    <span class="text-gray-74"> (Author)</span>
                                  </span>
                                </li>
                              </ul>
                            </section>
                            <div class="row-start-4 mb-4 flex flex-wrap items-center gap-y-1">
                              <a
                                href="#ratingsAndReviews"
                                class="link flex items-center"
                                aria-label="4.7 out of 5-star rating from 16 reviews"
                                data-testid="stars"
                              >
                                <div
                                  class="flex flex-row justify-between mr-2 w-[126px]"
                                  aria-hidden="true"
                                >
                                  <div class="flex flex-row relative w-[22px]">
                                    <span
                                      class="block absolute overflow-hidden left-0 top-0 bottom-0"
                                      style={{ width: "100%" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        width="22"
                                        height="20"
                                        decoding="async"
                                        data-nimg="1"
                                        class="relative !max-w-none w-[22px]"
                                        src={product.image}
                                        style={{ color: "transparent" }}
                                      />
                                    </span>
                                    <img
                                      alt=""
                                      loading="lazy"
                                      width="22"
                                      height="20"
                                      decoding="async"
                                      data-nimg="1"
                                      class="w-full relative"
                                      src={product.image}
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                  <div class="flex flex-row relative w-[22px]">
                                    <span
                                      class="block absolute overflow-hidden left-0 top-0 bottom-0"
                                      style={{ width: "100%" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        width="22"
                                        height="20"
                                        decoding="async"
                                        data-nimg="1"
                                        class="relative !max-w-none w-[22px]"
                                        src={product.image}
                                        style={{ color: "transparent" }}
                                      />
                                    </span>
                                    <img
                                      alt=""
                                      loading="lazy"
                                      width="22"
                                      height="20"
                                      decoding="async"
                                      data-nimg="1"
                                      class="w-full relative"
                                      src={product.image}
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                  <div class="flex flex-row relative w-[22px]">
                                    <span
                                      class="block absolute overflow-hidden left-0 top-0 bottom-0"
                                      style={{ width: "100%" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        width="22"
                                        height="20"
                                        decoding="async"
                                        data-nimg="1"
                                        class="relative !max-w-none w-[22px]"
                                        src={product.image}
                                        style={{ color: "transparent" }}
                                      />
                                    </span>
                                    <img
                                      alt=""
                                      loading="lazy"
                                      width="22"
                                      height="20"
                                      decoding="async"
                                      data-nimg="1"
                                      class="w-full relative"
                                      src={product.image}
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                  <div class="flex flex-row relative w-[22px]">
                                    <span
                                      class="block absolute overflow-hidden left-0 top-0 bottom-0"
                                      style={{ width: "100%" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        width="22"
                                        height="20"
                                        decoding="async"
                                        data-nimg="1"
                                        class="relative !max-w-none w-[22px]"
                                        src={product.image}
                                        style={{ color: "transparent" }}
                                      />
                                    </span>
                                    <img
                                      alt=""
                                      loading="lazy"
                                      width="22"
                                      height="20"
                                      decoding="async"
                                      data-nimg="1"
                                      class="w-full relative"
                                      srcset="
                              https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0 1x,
                              https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0 2x
                            "
                                      src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0"
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                  <div class="flex flex-row relative w-[22px]">
                                    <span
                                      class="block absolute overflow-hidden left-0 top-0 bottom-0"
                                      style={{ width: "70%" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        width="22"
                                        height="20"
                                        decoding="async"
                                        data-nimg="1"
                                        class="relative !max-w-none w-[22px]"
                                        srcset="
                                https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                              "
                                        src={product.image}
                                        style={{ color: "transparent" }}
                                      />
                                    </span>
                                    <img
                                      alt=""
                                      loading="lazy"
                                      width="22"
                                      height="20"
                                      decoding="async"
                                      data-nimg="1"
                                      class="w-full relative"
                                      srcset="
                              https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0 1x,
                              https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-transparent?_a=BAVAZGDW0 2x
                            "
                                      src={product.image}
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                </div>
                                <span
                                  class="inline-block"
                                  data-testid="yotpoReviewSummaryLabel"
                                >
                                  <span class="sm:sr-only">(</span>16
                                  <span class="sm:sr-only">)</span>
                                  <span class="sr-only sm:not-sr-only">
                                    Reviews
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <section class="PRODUCT-DETAILS-LOW pb-12 row-start-4 col-span-full md:col-start-4 md:row-start-2 print:block print:w-1/2 print:float-right print:clear-right">
                          <div class="PRICE-BLOCK mb-4 flex flex-wrap gap-y-2 gap-x-4">
                            <div class="w-full md:w-max" data-testid="pricing">
                              <span
                                class="inline-block text-3xl font-semibold"
                                data-testid="pricing-main"
                              >
                                {product.discountPrice}
                              </span>
                              <div class="flex text-sm">
                                <span
                                  class="inline-block line-through text-gray-74 mr-2"
                                  data-testid="pricing-reg"
                                >
                                  was {product.price}
                                </span>
                                <span
                                  class="inline-block text-green-text"
                                  data-testid="pricing-savings"
                                >
                                  save 25%
                                </span>
                              </div>
                            </div>
                            <div
                              class="w-full md:w-max"
                              data-testid="bulk-pricing"
                            >
                              <div class="BULK relative">
                                <button
                                  class="text-green-text fill-green-text hover:fill-green-hover hover:text-green-hover bg-green-background flex items-center rounded px-3 py-2 text-sm text-left w-full sm:w-max md:w-full xl:w-max print:text-gray"
                                  id="headlessui-disclosure-button-:R8eejf9m:"
                                  type="button"
                                  aria-expanded="false"
                                >
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                      width="1em"
                                      height="1em"
                                      class="mr-2 text-lg"
                                      aria-hidden="true"
                                    >
                                      <path d="M93.7 32H208v128H0L50.7 58.5C58.9 42.3 75.5 32 93.7 32M240 32h114.3c18.2 0 34.8 10.3 42.9 26.5L448 160H240zM0 192h448v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm244 40c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5-13.9 8.3-25.9 22.8-25.8 43.9.1 20.3 12 33.1 24.7 40.7 11 6.6 24.7 10.8 35.6 14l1.7.5c12.6 3.8 21.8 6.8 28 10.7 5.1 3.2 5.8 5.4 5.9 8.2.1 5-1.8 8-5.9 10.5-5 3.1-12.9 5-21.4 4.7-11.1-.4-21.5-3.9-35.1-8.5q-3.45-1.2-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9.6 4 1.3 6.1 2.1 8.3 2.9 17.9 6.2 28.2 8.4v14.6c0 11 9 20 20 20s20-9 20-20V426c8-1.7 16-4.5 23.2-9 14.3-8.9 25.1-24.1 24.8-45-.3-20.3-11.7-33.4-24.6-41.6-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5-5.2-3.1-5.3-4.9-5.3-6.7 0-3.7 1.4-6.5 6.2-9.3 5.4-3.2 13.6-5.1 21.5-5 9.6.1 20.2 2.2 31.2 5.2 10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7v-13.9z"></path>
                                    </svg>
                                  </span>
                                  <span class="grow">
                                    <span>Bulk &amp; save up to </span>
                                    <span class="font-bold">45</span>
                                    <span>%</span>
                                  </span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    width="1em"
                                    height="1em"
                                    aria-hidden="true"
                                    class="text-base relative transition ml-2"
                                  >
                                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                                  </svg>
                                </button>
                                <div
                                  class="absolute text-green-text bg-green-background rounded px-3 py-2 z-10 translate-y-1 text-center text-sm w-full sm:w-max md:w-full xl:w-max hidden print:block print:static print:text-gray print:text-left print:pl-4"
                                  id="headlessui-disclosure-panel-:R8eejf9mH1:"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="bg-red-alertbg text-red-alerttext text-sm rounded-md px-4 py-3 mb-2 max-w-xs hidden"
                            role="alert"
                          >
                            <p></p>
                          </div>
                          <div
                            class="bg-blue-info text-blue-infotext text-sm rounded-md px-4 py-3 mb-2 max-w-xs hidden"
                            role="alert"
                          >
                            <p></p>
                          </div>
                          <section
                            class="QUANTITY mb-4"
                            data-testid="quantity-and-cart-actions-005841383"
                          >
                            <div>
                              <h2
                                class="font-semibold mb-2 block"
                                data-testid="quantity-and-cart-actions-title"
                              >
                                Quantity
                              </h2>
                              <div class="relative sm:grid sm:grid-cols-[max-content,min-content] sm:gap-x-2">
                                <div class="relative">
                                  <section class="flex flex-row stretch gap-x-2 w-full">
                                    <button
                                      aria-label="decrease quantity"
                                      disabled=""
                                      class="rounded bg-gray-e w-1/4 sm:w-14 leading-none text-lg"
                                      data-testid="quantity-decrease"
                                    >
                                      <span aria-hidden="true">-</span>
                                    </button>
                                    <div class="relative w-1/2 sm:w-16 sha">
                                      <label class="w-full">
                                        <input
                                          type="number"
                                          class="rounded border leading-none text-center number-spin-none text-lg p-1 w-full border-gray-e"
                                          min="1"
                                          max="9999"
                                          step="1"
                                          pattern="[0-9]*"
                                          data-testid="quantity-input"
                                          id="product-quantity-input"
                                          value="1"
                                        />
                                        <span class="sr-only">
                                          Quantity to add to cart
                                        </span>
                                      </label>
                                      <div
                                        class="absolute top-full w-auto left-1/2 -translate-x-1/4 z-2000"
                                        role="alert"
                                        data-testid="cart-popover"
                                      ></div>
                                    </div>
                                    <button
                                      aria-label="increase quantity"
                                      class="rounded bg-gray-e w-1/4 sm:w-14 leading-none text-lg hover:bg-gray-d"
                                      data-testid="quantity-increase"
                                    >
                                      <span aria-hidden="true">+</span>
                                    </button>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section>
                            <div
                              class="ATC-BUTTONS flex flex-wrap sm:flex-row mb-4 -mx-2 gap-y-2 lg:max-w-[300px] 2xl:max-w-none"
                              data-testid="pdp-atc-buttons"
                            >
                              <div class="px-2 w-full sm:w-[256px] md:w-full md:max-w-full lg:w-auto lg:min-w-[256px]">
                                <button
                                  class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-yellow text-gray border-2 border-yellow hover:text-gray-3 hover:bg-yellow-hover focus:text-gray-3 focus:bg-yellow-hover active:bg-yellow-active px-4 pt-1 pb-1.5 text-base atc-btn__pdp font-semibold border-2 border-yellow w-full max-w-full flex justify-center items-center"
                                  data-testid="pdp-add-to-cart-button"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    width="1em"
                                    height="1em"
                                    aria-hidden="true"
                                    class="mr-2 fill-gray"
                                  >
                                    <path d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20"></path>
                                  </svg>
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                            <div></div>
                          </section>
                          <div class="SHIPPING-MESSAGES mb-4">
                            <div data-testid="productShippingMessages">
                              <div
                                data-testid="freeShippingMessageContainer"
                                class="mb-2 flex items-center"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                  width="26px"
                                  height="26px"
                                  class="block mr-2 fill-green"
                                  aria-hidden="true"
                                >
                                  <path d="M112 0C85.5 0 64 21.5 64 48v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48zm432 237.3V256H416v-96h50.7zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96m272 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0"></path>
                                </svg>
                                <p class="text-sm inline">
                                  <strong>Free Shipping</strong>
                                  <span>on orders over $50</span>
                                </p>
                                <span
                                  class="relative inline-block top-0.5 ml-2"
                                  data-tracking-component="free-shipping-popover"
                                >
                                  <button
                                    class="text-blue hover:text-blue-hover relative underline hover:no-underline focus:no-underline font-semibold fill-blue transition-colors hover:fill-blue-hover"
                                    data-testid="free-shipping-popover-button"
                                    data-tracking-component="button"
                                    data-tracking-id="open"
                                    id="headlessui-popover-button-:R1m6ejf9m:"
                                    type="button"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      width="1em"
                                      height="1em"
                                      aria-label="Need more information?"
                                    >
                                      <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-86.2-346.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1 0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6-13.3 0-24-10.7-24-24v-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1 0-8.4-6.8-15.1-15.1-15.1h-58.3c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1-64 0"></path>
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <div class="flex items-center">
                                <p class="font-semibold text-sm">
                                  Usually ships in 1 to 2 business days.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="text-sm" data-testid="return-policy">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              width="23"
                              height="23"
                              class="inline-block mr-2 ml-1 relative -top-0.5 fill-blue-focusborder"
                              aria-hidden="true"
                            >
                              <path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2l17.6-17.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3-163.8-62.5-226.3 0z"></path>
                            </svg>
                            Return Policy -
                            <button class="link">
                              View the Lifeway Return Policy
                            </button>
                          </div>
                        </section>
                      </div>
                    </section>
                    <section
                      id="together"
                      class="bg-gray-f7 mb-6 max-w-full overflow-x-hidden"
                    >
                      <div class="max-w-screen-2xl mx-auto px-4 py-6">
                        <h2 class="text-2xl font-semibold mb-6 sm:mb-8">
                          Frequently bought together
                        </h2>
                        <div class="pb-4">
                          <div class="flex flex-wrap -mx-3 lg:-mx-4">
                            <div
                              class="w-1/3 md:w-1/4 md:max-w-[280px] relative text-center px-3 lg:px-6 border-r border-d"
                              data-testid="fbt-this-item-col"
                            >
                              <div class="relative w-full h-0 pb-1/1 mb-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  width="1em"
                                  height="1em"
                                  class="absolute -right-3 lg:-right-6 top-1/2 translate-x-1/2 -translate-y-1/2 text-sm md:text-base lg:text-xl z-1 fill-gray"
                                  aria-hidden="true"
                                >
                                  <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-24-168v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24"></path>
                                </svg>
                                <p class="font-semibold absolute z-1 top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-sm px-2 pt-1 pb-1.5 min-w-max bg-white rounded-2xl shadow-md-all">
                                  This item
                                </p>
                                <div class="absolute inset-0 flex">
                                  <img
                                    alt="A Short Guide to Groups"
                                    loading="lazy"
                                    width="300"
                                    height="300"
                                    decoding="async"
                                    data-nimg="1"
                                    class="max-h-full max-w-full m-auto h-auto w-auto"
                                    srcset="
                            https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/9781087780795?_a=BAVAZGDW0 1x,
                            https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/9781087780795?_a=BAVAZGDW0 2x
                          "
                                    src={product.image}
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                              </div>
                              <p class="font-semibold text-sm mb-3">
                                A Short Guide to Groups
                              </p>
                              <div>
                                <label
                                  for="bought-together-005841383"
                                  class="pr-2 inline-block"
                                >
                                  <input
                                    id="bought-together-005841383"
                                    type="checkbox"
                                    disabled=""
                                    class="checked:bg-blue checked:ring-blue focus:ring-blue focus:checked:bg-blue rounded border border-gray"
                                    checked=""
                                  />
                                </label>
                                <p class="font-semibold inline-block">$11.24</p>
                              </div>
                            </div>
                            <div
                              class="w-1/3 md:w-1/4 md:max-w-[280px] relative text-center px-3 lg:px-6"
                              data-testid="fbt-rec-item-col"
                            >
                              <div class="relative w-full h-0 pb-1/1 mb-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  width="1em"
                                  height="1em"
                                  class="absolute -right-3 lg:-right-6 top-1/2 translate-x-1/2 -translate-y-1/2 text-sm md:text-base lg:text-xl z-1 fill-gray"
                                  aria-hidden="true"
                                >
                                  <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-24-168v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24"></path>
                                </svg>
                                <a
                                  href="/en/product/la-iglesia-que-discipula-P005836492"
                                  class="absolute inset-0 flex"
                                >
                                  <img
                                    alt="La iglesia que discipula"
                                    loading="lazy"
                                    width="300"
                                    height="300"
                                    decoding="async"
                                    data-nimg="1"
                                    class="max-h-full max-w-full m-auto h-auto w-auto"
                                    srcset="
                            https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/9781087758633?_a=BAVAZGDW0 1x,
                            https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/9781087758633?_a=BAVAZGDW0 2x
                          "
                                    src={product.image}
                                    style={{ color: "transparent" }}
                                  />
                                </a>
                              </div>
                              <p class="font-semibold text-sm mb-3">
                                <a
                                  href="/en/product/la-iglesia-que-discipula-P005836492"
                                  class="link"
                                >
                                  La iglesia que discipula
                                </a>
                              </p>
                              <div>
                                <label
                                  for="bought-together-005836492"
                                  class="pr-2 inline-block"
                                >
                                  <input
                                    id="bought-together-005836492"
                                    type="checkbox"
                                    class="checked:bg-blue checked:ring-blue focus:ring-blue focus:checked:bg-blue rounded border border-gray cursor:pointer"
                                    value="1"
                                    checked=""
                                  />
                                </label>
                                <p class="font-semibold inline-block">$14.99</p>
                              </div>
                            </div>
                            <div
                              class="w-1/3 md:w-1/4 md:max-w-[280px] relative text-center px-3 lg:px-6"
                              data-testid="fbt-rec-item-col"
                            >
                              <div class="relative w-full h-0 pb-1/1 mb-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  width="1em"
                                  height="1em"
                                  class="absolute -right-3 lg:-right-6 top-1/2 translate-x-1/2 -translate-y-1/2 text-sm md:text-base lg:text-xl z-1 fill-gray hidden"
                                  aria-hidden="true"
                                >
                                  <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-24-168v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24"></path>
                                </svg>
                                <a
                                  href="/en/product/our-cry-for-revival-P005847647"
                                  class="absolute inset-0 flex"
                                >
                                  <img
                                    alt="Our Cry for Revival"
                                    loading="lazy"
                                    width="300"
                                    height="300"
                                    decoding="async"
                                    data-nimg="1"
                                    class="max-h-full max-w-full m-auto h-auto w-auto"
                                    srcset="
                            https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/9781430095866?_a=BAVAZGDW0 1x,
                            https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/9781430095866?_a=BAVAZGDW0 2x
                          "
                                    src={product.image}
                                    style={{ color: "transparent" }}
                                  />
                                </a>
                              </div>
                              <p class="font-semibold text-sm mb-3">
                                <a
                                  href="/en/product/our-cry-for-revival-P005847647"
                                  class="link"
                                >
                                  Our Cry for Revival
                                </a>
                              </p>
                              <div>
                                <label
                                  for="bought-together-005847647"
                                  class="pr-2 inline-block"
                                >
                                  <input
                                    id="bought-together-005847647"
                                    type="checkbox"
                                    class="checked:bg-blue checked:ring-blue focus:ring-blue focus:checked:bg-blue rounded border border-gray cursor:pointer"
                                    value="1"
                                    checked=""
                                  />
                                </label>
                                <p class="font-semibold inline-block">$14.99</p>
                              </div>
                            </div>
                            <div
                              class="w-full text-center md:text-left md:w-1/4 md:max-w-[280px] mt-4 px-3 relative pt-[3%] lg:pt-[34px]"
                              data-testid="fbt-atc-block"
                            >
                              <p class="text-xl">Price for all 3</p>
                              <p
                                class="font-semibold text-2xl mb-2"
                                data-testid="fbt-price"
                              >
                                $41.22
                              </p>
                              <div class="relative w-max m-auto md:mx-0">
                                <button class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-yellow text-gray border-2 border-yellow hover:text-gray-3 hover:bg-yellow-hover focus:text-gray-3 focus:bg-yellow-hover active:bg-yellow-active px-4 pt-1 pb-1.5 text-base atc-btn__pdp relative font-semibold mx-auto md:ml-0 flex justify-center items-center whitespace-nowrap">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    width="1em"
                                    height="1em"
                                    aria-hidden="true"
                                    class="mr-2 hidden lg:block fill-gray"
                                  >
                                    <path d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20"></path>
                                  </svg>
                                  Add all 3 to Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      data-testid="about-this-item-main-section"
                      class="mb-12 print:clear-both"
                    >
                      <div class="max-w-screen-2xl mx-auto px-4">
                        <h2
                          id="about"
                          class="text-2xl font-semibold pb-4 mb-6 border-b border-d"
                        >
                          About this Item
                        </h2>
                        <div class="ABOUT-SECTION-CONTENT flex flex-wrap -mx-4 gap-y-6">
                          <div
                            data-testid="about-this-item-content-block"
                            class="custom-rich-text px-4 w-full md:w-1/2"
                          >
                            <h3 class="text-xl font-semibold mb-4">Overview</h3>
                            <span>{product.description}</span>
                          </div>
                          <div
                            data-testid="about-this-item-media-block-wrapper"
                            class="px-4 w-full md:w-1/2 flex flex-col gap-y-6"
                          >
                            <div
                              data-testid="about-this-item-video-wrapper"
                              class="w-full break-inside-avoid"
                            >
                              <div class="custom-video-embed w-full h-auto relative overflow-hidden aspect-video rounded-xl">
                                <video-js
                                  data-account="1143621176001"
                                  data-player="YJXhO2osU"
                                  data-embed="default"
                                  data-video-id="6327091335112"
                                  data-playlist-id=""
                                  data-application-id=""
                                  data-testid="custom-video-player"
                                  class="absolute top-0 left-0 w-full h-full bottom-0 right-0 video-js vjs-paused vjs-controls-enabled vjs-workinghover vjs-v8 vjs-user-active vjs-layout-medium bc-player-YJXhO2osU_default bc-player-YJXhO2osU_default-index-0 vjs-mouse vjs-plugins-ready vjs-player-info vjs-contextmenu-ui vjs-viewability vjs-errors vjs-thumbnails vjs-quality-menu"
                                  id="vjs_video_14080"
                                  tabindex="-1"
                                  lang="en"
                                  translate="no"
                                  role="region"
                                  aria-label="Video Player"
                                >
                                  <video
                                    tabindex="-1"
                                    id="vjs_video_14080_html5_api"
                                    class="vjs-tech"
                                    data-testid="custom-video-player"
                                    data-application-id=""
                                    data-playlist-id=""
                                    data-video-id="6327091335112"
                                    data-embed="default"
                                    data-player="YJXhO2osU"
                                    data-account="1143621176001"
                                    poster="https://cf-images.us-east-1.prod.boltdns.net/v1/jit/1143621176001/b380dda0-4d68-4f44-bc4c-bcf74b61d0ee/main/1280x720/29s546ms/match/image.jpg"
                                    src={product.image}
                                    aria-labelledby="vjs-title-bar-title-14167"
                                  ></video>
                                  <div class="vjs-poster" aria-disabled="false">
                                    <picture class="vjs-poster" tabindex="-1">
                                      <img
                                        loading="lazy"
                                        alt=""
                                        src={product.image}
                                      />
                                    </picture>
                                  </div>
                                  <div class="vjs-title-bar">
                                    <div
                                      class="vjs-title-bar-title"
                                      id="vjs-title-bar-title-14167"
                                    >
                                      How can groups ministry help my church?
                                    </div>
                                    <div
                                      class="vjs-title-bar-description"
                                      id="vjs-title-bar-description-14168"
                                    ></div>
                                    <button
                                      class="vjs-share-control vjs-button"
                                      type="button"
                                      aria-disabled="false"
                                      title="Share"
                                    >
                                      <span
                                        class="vjs-icon-placeholder"
                                        aria-hidden="true"
                                      ></span>
                                      <span class="" aria-live="polite">
                                        Share
                                      </span>
                                    </button>
                                  </div>
                                  <div
                                    class="vjs-text-track-display"
                                    translate="yes"
                                    aria-live="off"
                                    aria-atomic="true"
                                  >
                                    <div
                                      style={{
                                        position: "absolute",
                                        inset: 0,
                                        margin: "1.5%",
                                      }}
                                    ></div>
                                  </div>
                                  <div class="vjs-loading-spinner" dir="ltr">
                                    <span class="vjs-control-text">
                                      Video Player is loading.
                                    </span>
                                  </div>
                                  <button
                                    class="vjs-big-play-button"
                                    type="button"
                                    title="Play Video"
                                    aria-disabled="false"
                                  >
                                    <span
                                      class="vjs-icon-placeholder"
                                      aria-hidden="true"
                                    ></span>
                                    <span
                                      class="vjs-control-text"
                                      aria-live="polite"
                                    >
                                      Play Video
                                    </span>
                                  </button>
                                  <div class="vjs-control-bar" dir="ltr">
                                    <button
                                      class="vjs-play-control vjs-control vjs-button"
                                      type="button"
                                      title="Play"
                                      aria-disabled="false"
                                    >
                                      <span
                                        class="vjs-icon-placeholder"
                                        aria-hidden="true"
                                      ></span>
                                      <span
                                        class="vjs-control-text"
                                        aria-live="polite"
                                      >
                                        Play
                                      </span>
                                    </button>
                                    <button
                                      class="vjs-skip-backward-undefined vjs-control vjs-button vjs-hidden"
                                      type="button"
                                      title="Skip Backward"
                                      aria-disabled="false"
                                    >
                                      <span
                                        class="vjs-icon-placeholder"
                                        aria-hidden="true"
                                      ></span>
                                      <span
                                        class="vjs-control-text"
                                        aria-live="polite"
                                      >
                                        Skip Backward
                                      </span>
                                    </button>
                                    <button
                                      class="vjs-skip-forward-undefined vjs-control vjs-button vjs-hidden"
                                      type="button"
                                      title="Skip Forward"
                                      aria-disabled="false"
                                    >
                                      <span
                                        class="vjs-icon-placeholder"
                                        aria-hidden="true"
                                      ></span>
                                      <span
                                        class="vjs-control-text"
                                        aria-live="polite"
                                      >
                                        Skip Forward
                                      </span>
                                    </button>
                                    <div class="vjs-volume-panel vjs-control vjs-volume-panel-vertical">
                                      <button
                                        class="vjs-mute-control vjs-control vjs-button vjs-vol-3"
                                        type="button"
                                        title="Mute"
                                        aria-disabled="false"
                                      >
                                        <span
                                          class="vjs-icon-placeholder"
                                          aria-hidden="true"
                                        ></span>
                                        <span
                                          class="vjs-control-text"
                                          aria-live="polite"
                                        >
                                          Mute
                                        </span>
                                      </button>
                                      <div class="vjs-volume-control vjs-control vjs-volume-vertical">
                                        <div
                                          tabindex="0"
                                          class="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-vertical"
                                          role="slider"
                                          aria-valuenow="100"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                          aria-label="Volume Level"
                                          aria-live="polite"
                                          aria-valuetext="100%"
                                        >
                                          <div class="vjs-mouse-display">
                                            <div
                                              class="vjs-volume-tooltip"
                                              aria-hidden="true"
                                            ></div>
                                          </div>
                                          <div class="vjs-volume-level">
                                            <span class="vjs-control-text"></span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="vjs-current-time vjs-time-control vjs-control">
                                      <span
                                        class="vjs-control-text"
                                        role="presentation"
                                      >
                                        Current Time&nbsp;
                                      </span>
                                      <span
                                        class="vjs-current-time-display"
                                        role="presentation"
                                      >
                                        0:00
                                      </span>
                                    </div>
                                    <div
                                      class="vjs-time-control vjs-time-divider"
                                      aria-hidden="true"
                                    >
                                      <div>
                                        <span>/</span>
                                      </div>
                                    </div>
                                    <div class="vjs-duration vjs-time-control vjs-control">
                                      <span
                                        class="vjs-control-text"
                                        role="presentation"
                                      >
                                        Duration&nbsp;
                                      </span>
                                      <span
                                        class="vjs-duration-display"
                                        role="presentation"
                                      >
                                        0:59
                                      </span>
                                    </div>
                                    <div class="vjs-progress-control vjs-control">
                                      <div
                                        tabindex="0"
                                        class="vjs-progress-holder vjs-slider vjs-slider-horizontal"
                                        role="slider"
                                        aria-valuenow="0.00"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        aria-label="Progress Bar"
                                        aria-valuetext="0:00 of 0:59"
                                      >
                                        <div
                                          class="vjs-load-progress"
                                          style={{ width: "0%" }}
                                        >
                                          <span class="vjs-control-text">
                                            <span>Loaded</span>:
                                            <span class="vjs-control-text-loaded-percentage">
                                              0.00%
                                            </span>
                                          </span>
                                          <div
                                            data-start="0"
                                            data-end="0"
                                            style={{
                                              left: "0%",
                                              width: "0%",
                                            }}
                                          ></div>
                                        </div>
                                        <div class="vjs-mouse-display">
                                          <div
                                            class="vjs-time-tooltip"
                                            aria-hidden="true"
                                          ></div>
                                        </div>
                                        <div
                                          class="vjs-play-progress vjs-slider-bar"
                                          aria-hidden="true"
                                          style={{ width: "0%" }}
                                        >
                                          <div
                                            class="vjs-time-tooltip"
                                            aria-hidden="true"
                                            style={{ right: "0px" }}
                                          >
                                            0:00
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="vjs-live-control vjs-control vjs-hidden">
                                      <div
                                        class="vjs-live-display"
                                        aria-live="off"
                                      >
                                        <span class="vjs-control-text">
                                          Stream Type&nbsp;
                                        </span>
                                        LIVE
                                      </div>
                                    </div>
                                    <button
                                      class="vjs-seek-to-live-control vjs-control"
                                      type="button"
                                      title="Seek to live, currently behind live"
                                      aria-disabled="false"
                                    >
                                      <span
                                        class="vjs-icon-placeholder"
                                        aria-hidden="true"
                                      ></span>
                                      <span
                                        class="vjs-control-text"
                                        aria-live="polite"
                                      >
                                        Seek to live, currently behind live
                                      </span>
                                      <span
                                        class="vjs-seek-to-live-text"
                                        aria-hidden="true"
                                      >
                                        LIVE
                                      </span>
                                    </button>
                                    <div class="vjs-remaining-time vjs-time-control vjs-control">
                                      <span
                                        class="vjs-control-text"
                                        role="presentation"
                                      >
                                        Remaining Time&nbsp;
                                      </span>
                                      <span aria-hidden="true">-</span>
                                      <span
                                        class="vjs-remaining-time-display"
                                        role="presentation"
                                      >
                                        0:59
                                      </span>
                                    </div>
                                    <div class="vjs-custom-control-spacer vjs-spacer">
                                      &nbsp;
                                    </div>
                                    <div class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button">
                                      <div
                                        class="vjs-playback-rate-value"
                                        id="vjs-playback-rate-value-label-vjs_video_14080_component_14413"
                                      >
                                        1x
                                      </div>
                                      <button
                                        class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-button"
                                        type="button"
                                        aria-disabled="false"
                                        title="Playback Rate"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        aria-describedby="vjs-playback-rate-value-label-vjs_video_14080_component_14413"
                                      >
                                        <span
                                          class="vjs-icon-placeholder"
                                          aria-hidden="true"
                                        ></span>
                                        <span
                                          class="vjs-control-text"
                                          aria-live="polite"
                                        >
                                          Playback Rate
                                        </span>
                                      </button>
                                      <div class="vjs-menu">
                                        <ul
                                          class="vjs-menu-content"
                                          role="menu"
                                        >
                                          <li
                                            class="vjs-menu-item"
                                            tabindex="-1"
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span class="vjs-menu-item-text">
                                              2x
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            ></span>
                                          </li>
                                          <li
                                            class="vjs-menu-item"
                                            tabindex="-1"
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span class="vjs-menu-item-text">
                                              1.75x
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            ></span>
                                          </li>
                                          <li
                                            class="vjs-menu-item"
                                            tabindex="-1"
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span class="vjs-menu-item-text">
                                              1.5x
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            ></span>
                                          </li>
                                          <li
                                            class="vjs-menu-item"
                                            tabindex="-1"
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span class="vjs-menu-item-text">
                                              1.25x
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            ></span>
                                          </li>
                                          <li
                                            class="vjs-menu-item vjs-selected"
                                            tabindex="-1"
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="true"
                                          >
                                            <span class="vjs-menu-item-text">
                                              1x
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            >
                                              , selected
                                            </span>
                                          </li>
                                          <li
                                            class="vjs-menu-item"
                                            tabindex="-1"
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span class="vjs-menu-item-text">
                                              0.75x
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            ></span>
                                          </li>
                                          <li
                                            class="vjs-menu-item"
                                            tabindex="-1"
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span class="vjs-menu-item-text">
                                              0.5x
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            ></span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                      <button
                                        class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                        type="button"
                                        aria-disabled="false"
                                        title="Chapters"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <span
                                          class="vjs-icon-placeholder"
                                          aria-hidden="true"
                                        ></span>
                                        <span
                                          class="vjs-control-text"
                                          aria-live="polite"
                                        >
                                          Chapters
                                        </span>
                                      </button>
                                      <div class="vjs-menu">
                                        <ul class="vjs-menu-content">
                                          <li
                                            class="vjs-menu-title"
                                            tabindex="-1"
                                          >
                                            Chapters
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                      <button
                                        class="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                        type="button"
                                        aria-disabled="false"
                                        title="Descriptions"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <span
                                          class="vjs-icon-placeholder"
                                          aria-hidden="true"
                                        ></span>
                                        <span
                                          class="vjs-control-text"
                                          aria-live="polite"
                                        >
                                          Descriptions
                                        </span>
                                      </button>
                                      <div class="vjs-menu">
                                        <ul class="vjs-menu-content">
                                          <li
                                            class="vjs-menu-item vjs-selected"
                                            tabindex="-1"
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="true"
                                          >
                                            <span class="vjs-menu-item-text">
                                              descriptions off
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            >
                                              , selected
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                      <button
                                        class="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                        type="button"
                                        aria-disabled="false"
                                        title="Captions"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <span
                                          class="vjs-icon-placeholder"
                                          aria-hidden="true"
                                        ></span>
                                        <span
                                          class="vjs-control-text"
                                          aria-live="polite"
                                        >
                                          Captions
                                        </span>
                                      </button>
                                      <div class="vjs-menu">
                                        <ul class="vjs-menu-content">
                                          <li
                                            class="vjs-menu-item vjs-texttrack-settings"
                                            tabindex="-1"
                                            role="menuitem"
                                            aria-disabled="false"
                                          >
                                            <span class="vjs-menu-item-text">
                                              captions settings
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            >
                                              , opens captions settings dialog
                                            </span>
                                          </li>
                                          <li
                                            class="vjs-menu-item vjs-selected"
                                            tabindex="-1"
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="true"
                                          >
                                            <span class="vjs-menu-item-text">
                                              captions off
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            >
                                              , selected
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                      <button
                                        class="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                        type="button"
                                        aria-disabled="false"
                                        title="Audio Track"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <span
                                          class="vjs-icon-placeholder"
                                          aria-hidden="true"
                                        ></span>
                                        <span
                                          class="vjs-control-text"
                                          aria-live="polite"
                                        >
                                          Audio Track
                                        </span>
                                      </button>
                                      <div class="vjs-menu">
                                        <ul class="vjs-menu-content">
                                          <li
                                            class="vjs-menu-item vjs-selected vjs-main-menu-item"
                                            tabindex="-1"
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="true"
                                          >
                                            <span class="vjs-menu-item-text">
                                              en (Main)
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            >
                                              , selected
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div
                                      class="vjs-quality-menu-wrapper vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-quality-menu-button-use-resolution"
                                      aria-label="Quality Levels"
                                    >
                                      <button
                                        class="vjs-quality-menu-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                        type="button"
                                        aria-disabled="false"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        title="Quality Levels"
                                      >
                                        <span
                                          class="vjs-icon-placeholder"
                                          aria-hidden="true"
                                        ></span>
                                        <span
                                          class="vjs-control-text"
                                          aria-live="polite"
                                        >
                                          Quality Levels
                                        </span>
                                      </button>
                                      <div class="vjs-menu">
                                        <ul
                                          class="vjs-menu-content"
                                          role="menu"
                                        >
                                          <li
                                            class="vjs-menu-item"
                                            tabindex="-1"
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span class="vjs-menu-item-text">
                                              720p
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            >
                                              720p
                                            </span>
                                            <span class="vjs-quality-menu-item-sub-label">
                                              HD
                                            </span>
                                          </li>
                                          <li
                                            class="vjs-menu-item"
                                            tabindex="-1"
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span class="vjs-menu-item-text">
                                              540p
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            >
                                              540p
                                            </span>
                                            <span class="vjs-quality-menu-item-sub-label"></span>
                                          </li>
                                          <li
                                            class="vjs-menu-item"
                                            tabindex="-1"
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span class="vjs-menu-item-text">
                                              360p
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            >
                                              360p
                                            </span>
                                            <span class="vjs-quality-menu-item-sub-label"></span>
                                          </li>
                                          <li
                                            class="vjs-menu-item"
                                            tabindex="-1"
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span class="vjs-menu-item-text">
                                              270p
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            >
                                              270p
                                            </span>
                                            <span class="vjs-quality-menu-item-sub-label"></span>
                                          </li>
                                          <li
                                            class="vjs-menu-item vjs-selected"
                                            tabindex="-1"
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="true"
                                          >
                                            <span class="vjs-menu-item-text">
                                              Auto
                                            </span>
                                            <span
                                              class="vjs-control-text"
                                              aria-live="polite"
                                            >
                                              A, selected
                                            </span>
                                            <span class="vjs-quality-menu-item-sub-label"></span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <button
                                      class="vjs-picture-in-picture-control vjs-hidden vjs-control vjs-button vjs-disabled"
                                      type="button"
                                      title="Picture-in-Picture"
                                      aria-disabled="true"
                                      disabled="disabled"
                                    >
                                      <span
                                        class="vjs-icon-placeholder"
                                        aria-hidden="true"
                                      ></span>
                                      <span
                                        class="vjs-control-text"
                                        aria-live="polite"
                                      >
                                        Picture-in-Picture
                                      </span>
                                    </button>
                                    <button
                                      class="vjs-fullscreen-control vjs-control vjs-button"
                                      type="button"
                                      title="Fullscreen"
                                      aria-disabled="false"
                                    >
                                      <span
                                        class="vjs-icon-placeholder"
                                        aria-hidden="true"
                                      ></span>
                                      <span
                                        class="vjs-control-text"
                                        aria-live="polite"
                                      >
                                        Fullscreen
                                      </span>
                                    </button>
                                  </div>
                                  <div
                                    class="vjs-error-display vjs-modal-dialog vjs-hidden"
                                    tabindex="-1"
                                    aria-describedby="vjs_video_14080_component_14714_description"
                                    aria-hidden="true"
                                    aria-label="Modal Window"
                                    role="dialog"
                                    aria-live="polite"
                                  >
                                    <p
                                      class="vjs-modal-dialog-description vjs-control-text"
                                      id="vjs_video_14080_component_14714_description"
                                    >
                                      This is a modal window.
                                    </p>
                                    <div
                                      class="vjs-modal-dialog-content"
                                      role="document"
                                    ></div>
                                  </div>
                                  <div
                                    class="vjs-modal-dialog vjs-hidden vjs-text-track-settings"
                                    tabindex="-1"
                                    aria-describedby="vjs_video_14080_component_14720_description"
                                    aria-hidden="true"
                                    aria-label="Caption Settings Dialog"
                                    role="dialog"
                                    aria-live="polite"
                                  >
                                    <p
                                      class="vjs-modal-dialog-description vjs-control-text"
                                      id="vjs_video_14080_component_14720_description"
                                    >
                                      Beginning of dialog window. Escape will
                                      cancel and close the window.
                                    </p>
                                    <div
                                      class="vjs-modal-dialog-content"
                                      role="document"
                                    >
                                      <div class="vjs-track-settings-colors">
                                        <fieldset class="vjs-fg vjs-track-setting">
                                          <legend id="captions-text-legend-vjs_video_14080_component_14720">
                                            Text
                                          </legend>
                                          <span class="vjs-text-color">
                                            <label
                                              id="captions-foreground-color-vjs_video_14080_component_14720"
                                              class="vjs-label"
                                              for="vjs_select_14747"
                                            >
                                              Color
                                            </label>
                                            <select
                                              id="vjs_select_14747"
                                              aria-labelledby="captions-text-legend-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720"
                                            >
                                              <option
                                                id="captions-foreground-color-vjs_video_14080_component_14720-White"
                                                value="#FFF"
                                                aria-labelledby="captions-text-legend-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720-White"
                                              >
                                                White
                                              </option>
                                              <option
                                                id="captions-foreground-color-vjs_video_14080_component_14720-Black"
                                                value="#000"
                                                aria-labelledby="captions-text-legend-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720-Black"
                                              >
                                                Black
                                              </option>
                                              <option
                                                id="captions-foreground-color-vjs_video_14080_component_14720-Red"
                                                value="#F00"
                                                aria-labelledby="captions-text-legend-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720-Red"
                                              >
                                                Red
                                              </option>
                                              <option
                                                id="captions-foreground-color-vjs_video_14080_component_14720-Green"
                                                value="#0F0"
                                                aria-labelledby="captions-text-legend-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720-Green"
                                              >
                                                Green
                                              </option>
                                              <option
                                                id="captions-foreground-color-vjs_video_14080_component_14720-Blue"
                                                value="#00F"
                                                aria-labelledby="captions-text-legend-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720-Blue"
                                              >
                                                Blue
                                              </option>
                                              <option
                                                id="captions-foreground-color-vjs_video_14080_component_14720-Yellow"
                                                value="#FF0"
                                                aria-labelledby="captions-text-legend-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720-Yellow"
                                              >
                                                Yellow
                                              </option>
                                              <option
                                                id="captions-foreground-color-vjs_video_14080_component_14720-Magenta"
                                                value="#F0F"
                                                aria-labelledby="captions-text-legend-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720-Magenta"
                                              >
                                                Magenta
                                              </option>
                                              <option
                                                id="captions-foreground-color-vjs_video_14080_component_14720-Cyan"
                                                value="#0FF"
                                                aria-labelledby="captions-text-legend-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720 captions-foreground-color-vjs_video_14080_component_14720-Cyan"
                                              >
                                                Cyan
                                              </option>
                                            </select>
                                          </span>
                                          <span class="vjs-text-opacity vjs-opacity">
                                            <label
                                              id="captions-foreground-opacity-vjs_video_14080_component_14720"
                                              class="vjs-label"
                                              for="vjs_select_14752"
                                            >
                                              Opacity
                                            </label>
                                            <select
                                              id="vjs_select_14752"
                                              aria-labelledby="captions-text-legend-vjs_video_14080_component_14720 captions-foreground-opacity-vjs_video_14080_component_14720"
                                            >
                                              <option
                                                id="captions-foreground-opacity-vjs_video_14080_component_14720-Opaque"
                                                value="1"
                                                aria-labelledby="captions-text-legend-vjs_video_14080_component_14720 captions-foreground-opacity-vjs_video_14080_component_14720 captions-foreground-opacity-vjs_video_14080_component_14720-Opaque"
                                              >
                                                Opaque
                                              </option>
                                              <option
                                                id="captions-foreground-opacity-vjs_video_14080_component_14720-SemiTransparent"
                                                value="0.5"
                                                aria-labelledby="captions-text-legend-vjs_video_14080_component_14720 captions-foreground-opacity-vjs_video_14080_component_14720 captions-foreground-opacity-vjs_video_14080_component_14720-SemiTransparent"
                                              >
                                                Semi-Transparent
                                              </option>
                                            </select>
                                          </span>
                                        </fieldset>
                                        <fieldset class="vjs-bg vjs-track-setting">
                                          <legend id="captions-background-vjs_video_14080_component_14720">
                                            Text Background
                                          </legend>
                                          <span class="vjs-bg-color">
                                            <label
                                              id="captions-background-color-vjs_video_14080_component_14720"
                                              class="vjs-label"
                                              for="vjs_select_14762"
                                            >
                                              Color
                                            </label>
                                            <select
                                              id="vjs_select_14762"
                                              aria-labelledby="captions-background-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720"
                                            >
                                              <option
                                                id="captions-background-color-vjs_video_14080_component_14720-Black"
                                                value="#000"
                                                aria-labelledby="captions-background-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720-Black"
                                              >
                                                Black
                                              </option>
                                              <option
                                                id="captions-background-color-vjs_video_14080_component_14720-White"
                                                value="#FFF"
                                                aria-labelledby="captions-background-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720-White"
                                              >
                                                White
                                              </option>
                                              <option
                                                id="captions-background-color-vjs_video_14080_component_14720-Red"
                                                value="#F00"
                                                aria-labelledby="captions-background-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720-Red"
                                              >
                                                Red
                                              </option>
                                              <option
                                                id="captions-background-color-vjs_video_14080_component_14720-Green"
                                                value="#0F0"
                                                aria-labelledby="captions-background-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720-Green"
                                              >
                                                Green
                                              </option>
                                              <option
                                                id="captions-background-color-vjs_video_14080_component_14720-Blue"
                                                value="#00F"
                                                aria-labelledby="captions-background-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720-Blue"
                                              >
                                                Blue
                                              </option>
                                              <option
                                                id="captions-background-color-vjs_video_14080_component_14720-Yellow"
                                                value="#FF0"
                                                aria-labelledby="captions-background-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720-Yellow"
                                              >
                                                Yellow
                                              </option>
                                              <option
                                                id="captions-background-color-vjs_video_14080_component_14720-Magenta"
                                                value="#F0F"
                                                aria-labelledby="captions-background-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720-Magenta"
                                              >
                                                Magenta
                                              </option>
                                              <option
                                                id="captions-background-color-vjs_video_14080_component_14720-Cyan"
                                                value="#0FF"
                                                aria-labelledby="captions-background-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720 captions-background-color-vjs_video_14080_component_14720-Cyan"
                                              >
                                                Cyan
                                              </option>
                                            </select>
                                          </span>
                                          <span class="vjs-bg-opacity vjs-opacity">
                                            <label
                                              id="captions-background-opacity-vjs_video_14080_component_14720"
                                              class="vjs-label"
                                              for="vjs_select_14767"
                                            >
                                              Opacity
                                            </label>
                                            <select
                                              id="vjs_select_14767"
                                              aria-labelledby="captions-background-vjs_video_14080_component_14720 captions-background-opacity-vjs_video_14080_component_14720"
                                            >
                                              <option
                                                id="captions-background-opacity-vjs_video_14080_component_14720-Opaque"
                                                value="1"
                                                aria-labelledby="captions-background-vjs_video_14080_component_14720 captions-background-opacity-vjs_video_14080_component_14720 captions-background-opacity-vjs_video_14080_component_14720-Opaque"
                                              >
                                                Opaque
                                              </option>
                                              <option
                                                id="captions-background-opacity-vjs_video_14080_component_14720-SemiTransparent"
                                                value="0.5"
                                                aria-labelledby="captions-background-vjs_video_14080_component_14720 captions-background-opacity-vjs_video_14080_component_14720 captions-background-opacity-vjs_video_14080_component_14720-SemiTransparent"
                                              >
                                                Semi-Transparent
                                              </option>
                                              <option
                                                id="captions-background-opacity-vjs_video_14080_component_14720-Transparent"
                                                value="0"
                                                aria-labelledby="captions-background-vjs_video_14080_component_14720 captions-background-opacity-vjs_video_14080_component_14720 captions-background-opacity-vjs_video_14080_component_14720-Transparent"
                                              >
                                                Transparent
                                              </option>
                                            </select>
                                          </span>
                                        </fieldset>
                                        <fieldset class="vjs-window vjs-track-setting">
                                          <legend id="captions-window-vjs_video_14080_component_14720">
                                            Caption Area Background
                                          </legend>
                                          <span class="vjs-window-color">
                                            <label
                                              id="captions-window-color-vjs_video_14080_component_14720"
                                              class="vjs-label"
                                              for="vjs_select_14777"
                                            >
                                              Color
                                            </label>
                                            <select
                                              id="vjs_select_14777"
                                              aria-labelledby="captions-window-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720"
                                            >
                                              <option
                                                id="captions-window-color-vjs_video_14080_component_14720-Black"
                                                value="#000"
                                                aria-labelledby="captions-window-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720-Black"
                                              >
                                                Black
                                              </option>
                                              <option
                                                id="captions-window-color-vjs_video_14080_component_14720-White"
                                                value="#FFF"
                                                aria-labelledby="captions-window-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720-White"
                                              >
                                                White
                                              </option>
                                              <option
                                                id="captions-window-color-vjs_video_14080_component_14720-Red"
                                                value="#F00"
                                                aria-labelledby="captions-window-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720-Red"
                                              >
                                                Red
                                              </option>
                                              <option
                                                id="captions-window-color-vjs_video_14080_component_14720-Green"
                                                value="#0F0"
                                                aria-labelledby="captions-window-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720-Green"
                                              >
                                                Green
                                              </option>
                                              <option
                                                id="captions-window-color-vjs_video_14080_component_14720-Blue"
                                                value="#00F"
                                                aria-labelledby="captions-window-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720-Blue"
                                              >
                                                Blue
                                              </option>
                                              <option
                                                id="captions-window-color-vjs_video_14080_component_14720-Yellow"
                                                value="#FF0"
                                                aria-labelledby="captions-window-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720-Yellow"
                                              >
                                                Yellow
                                              </option>
                                              <option
                                                id="captions-window-color-vjs_video_14080_component_14720-Magenta"
                                                value="#F0F"
                                                aria-labelledby="captions-window-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720-Magenta"
                                              >
                                                Magenta
                                              </option>
                                              <option
                                                id="captions-window-color-vjs_video_14080_component_14720-Cyan"
                                                value="#0FF"
                                                aria-labelledby="captions-window-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720 captions-window-color-vjs_video_14080_component_14720-Cyan"
                                              >
                                                Cyan
                                              </option>
                                            </select>
                                          </span>
                                          <span class="vjs-window-opacity vjs-opacity">
                                            <label
                                              id="captions-window-opacity-vjs_video_14080_component_14720"
                                              class="vjs-label"
                                              for="vjs_select_14782"
                                            >
                                              Opacity
                                            </label>
                                            <select
                                              id="vjs_select_14782"
                                              aria-labelledby="captions-window-vjs_video_14080_component_14720 captions-window-opacity-vjs_video_14080_component_14720"
                                            >
                                              <option
                                                id="captions-window-opacity-vjs_video_14080_component_14720-Transparent"
                                                value="0"
                                                aria-labelledby="captions-window-vjs_video_14080_component_14720 captions-window-opacity-vjs_video_14080_component_14720 captions-window-opacity-vjs_video_14080_component_14720-Transparent"
                                              >
                                                Transparent
                                              </option>
                                              <option
                                                id="captions-window-opacity-vjs_video_14080_component_14720-SemiTransparent"
                                                value="0.5"
                                                aria-labelledby="captions-window-vjs_video_14080_component_14720 captions-window-opacity-vjs_video_14080_component_14720 captions-window-opacity-vjs_video_14080_component_14720-SemiTransparent"
                                              >
                                                Semi-Transparent
                                              </option>
                                              <option
                                                id="captions-window-opacity-vjs_video_14080_component_14720-Opaque"
                                                value="1"
                                                aria-labelledby="captions-window-vjs_video_14080_component_14720 captions-window-opacity-vjs_video_14080_component_14720 captions-window-opacity-vjs_video_14080_component_14720-Opaque"
                                              >
                                                Opaque
                                              </option>
                                            </select>
                                          </span>
                                        </fieldset>
                                      </div>
                                      <div class="vjs-track-settings-font">
                                        <fieldset class="vjs-font-percent vjs-track-setting">
                                          <legend id="captions-font-size-vjs_video_14080_component_14720">
                                            Font Size
                                          </legend>
                                          <select
                                            id="vjs_select_14797"
                                            aria-labelledby="captions-font-size-vjs_video_14080_component_14720"
                                          >
                                            <option
                                              id="vjs-track-option-14798-50"
                                              value="0.50"
                                              aria-labelledby="captions-font-size-vjs_video_14080_component_14720 vjs-track-option-14798-50"
                                            >
                                              50%
                                            </option>
                                            <option
                                              id="vjs-track-option-14799-75"
                                              value="0.75"
                                              aria-labelledby="captions-font-size-vjs_video_14080_component_14720 vjs-track-option-14799-75"
                                            >
                                              75%
                                            </option>
                                            <option
                                              id="vjs-track-option-14800-100"
                                              value="1.00"
                                              aria-labelledby="captions-font-size-vjs_video_14080_component_14720 vjs-track-option-14800-100"
                                            >
                                              100%
                                            </option>
                                            <option
                                              id="vjs-track-option-14801-125"
                                              value="1.25"
                                              aria-labelledby="captions-font-size-vjs_video_14080_component_14720 vjs-track-option-14801-125"
                                            >
                                              125%
                                            </option>
                                            <option
                                              id="vjs-track-option-14802-150"
                                              value="1.50"
                                              aria-labelledby="captions-font-size-vjs_video_14080_component_14720 vjs-track-option-14802-150"
                                            >
                                              150%
                                            </option>
                                            <option
                                              id="vjs-track-option-14803-175"
                                              value="1.75"
                                              aria-labelledby="captions-font-size-vjs_video_14080_component_14720 vjs-track-option-14803-175"
                                            >
                                              175%
                                            </option>
                                            <option
                                              id="vjs-track-option-14804-200"
                                              value="2.00"
                                              aria-labelledby="captions-font-size-vjs_video_14080_component_14720 vjs-track-option-14804-200"
                                            >
                                              200%
                                            </option>
                                            <option
                                              id="vjs-track-option-14805-300"
                                              value="3.00"
                                              aria-labelledby="captions-font-size-vjs_video_14080_component_14720 vjs-track-option-14805-300"
                                            >
                                              300%
                                            </option>
                                            <option
                                              id="vjs-track-option-14806-400"
                                              value="4.00"
                                              aria-labelledby="captions-font-size-vjs_video_14080_component_14720 vjs-track-option-14806-400"
                                            >
                                              400%
                                            </option>
                                          </select>
                                        </fieldset>
                                        <fieldset class="vjs-edge-style vjs-track-setting">
                                          <legend id="captions-edge-style-vjs_video_14080_component_14720">
                                            Text Edge Style
                                          </legend>
                                          <select
                                            id="vjs_select_14816"
                                            aria-labelledby="captions-edge-style-vjs_video_14080_component_14720"
                                          >
                                            <option
                                              id="vjs-track-option-14817-None"
                                              value="none"
                                              aria-labelledby="captions-edge-style-vjs_video_14080_component_14720 vjs-track-option-14817-None"
                                            >
                                              None
                                            </option>
                                            <option
                                              id="vjs-track-option-14818-Raised"
                                              value="raised"
                                              aria-labelledby="captions-edge-style-vjs_video_14080_component_14720 vjs-track-option-14818-Raised"
                                            >
                                              Raised
                                            </option>
                                            <option
                                              id="vjs-track-option-14819-Depressed"
                                              value="depressed"
                                              aria-labelledby="captions-edge-style-vjs_video_14080_component_14720 vjs-track-option-14819-Depressed"
                                            >
                                              Depressed
                                            </option>
                                            <option
                                              id="vjs-track-option-14820-Uniform"
                                              value="uniform"
                                              aria-labelledby="captions-edge-style-vjs_video_14080_component_14720 vjs-track-option-14820-Uniform"
                                            >
                                              Uniform
                                            </option>
                                            <option
                                              id="vjs-track-option-14821-Dropshadow"
                                              value="dropshadow"
                                              aria-labelledby="captions-edge-style-vjs_video_14080_component_14720 vjs-track-option-14821-Dropshadow"
                                            >
                                              Drop shadow
                                            </option>
                                          </select>
                                        </fieldset>
                                        <fieldset class="vjs-font-family vjs-track-setting">
                                          <legend id="captions-font-family-vjs_video_14080_component_14720">
                                            Font Family
                                          </legend>
                                          <select
                                            id="vjs_select_14831"
                                            aria-labelledby="captions-font-family-vjs_video_14080_component_14720"
                                          >
                                            <option
                                              id="vjs-track-option-14832-ProportionalSansSerif"
                                              value="proportionalSansSerif"
                                              aria-labelledby="captions-font-family-vjs_video_14080_component_14720 vjs-track-option-14832-ProportionalSansSerif"
                                            >
                                              Proportional Sans-Serif
                                            </option>
                                            <option
                                              id="vjs-track-option-14833-MonospaceSansSerif"
                                              value="monospaceSansSerif"
                                              aria-labelledby="captions-font-family-vjs_video_14080_component_14720 vjs-track-option-14833-MonospaceSansSerif"
                                            >
                                              Monospace Sans-Serif
                                            </option>
                                            <option
                                              id="vjs-track-option-14834-ProportionalSerif"
                                              value="proportionalSerif"
                                              aria-labelledby="captions-font-family-vjs_video_14080_component_14720 vjs-track-option-14834-ProportionalSerif"
                                            >
                                              Proportional Serif
                                            </option>
                                            <option
                                              id="vjs-track-option-14835-MonospaceSerif"
                                              value="monospaceSerif"
                                              aria-labelledby="captions-font-family-vjs_video_14080_component_14720 vjs-track-option-14835-MonospaceSerif"
                                            >
                                              Monospace Serif
                                            </option>
                                            <option
                                              id="vjs-track-option-14836-Casual"
                                              value="casual"
                                              aria-labelledby="captions-font-family-vjs_video_14080_component_14720 vjs-track-option-14836-Casual"
                                            >
                                              Casual
                                            </option>
                                            <option
                                              id="vjs-track-option-14837-Script"
                                              value="script"
                                              aria-labelledby="captions-font-family-vjs_video_14080_component_14720 vjs-track-option-14837-Script"
                                            >
                                              Script
                                            </option>
                                            <option
                                              id="vjs-track-option-14838-SmallCaps"
                                              value="small-caps"
                                              aria-labelledby="captions-font-family-vjs_video_14080_component_14720 vjs-track-option-14838-SmallCaps"
                                            >
                                              Small Caps
                                            </option>
                                          </select>
                                        </fieldset>
                                      </div>
                                      <div class="vjs-track-settings-controls">
                                        <button
                                          class="vjs-default-button"
                                          type="button"
                                          title="restore all settings to the default values"
                                          aria-disabled="false"
                                        >
                                          Reset
                                        </button>
                                        <button
                                          class="vjs-done-button"
                                          type="button"
                                          title="restore all settings to the default values"
                                          aria-disabled="false"
                                        >
                                          Done
                                        </button>
                                      </div>
                                    </div>
                                    <button
                                      class="vjs-close-button vjs-control vjs-button vjs-icon-cancel"
                                      type="button"
                                      title="Close Modal Dialog"
                                      aria-disabled="false"
                                    >
                                      <span
                                        class="vjs-icon-placeholder"
                                        aria-hidden="true"
                                      ></span>
                                      <span
                                        class="vjs-control-text"
                                        aria-live="polite"
                                      >
                                        Close Modal Dialog
                                      </span>
                                    </button>
                                    <p class="vjs-control-text">
                                      End of dialog window.
                                    </p>
                                  </div>
                                  <div
                                    class="vjs-player-info-modal vjs-modal-dialog vjs-hidden"
                                    tabindex="-1"
                                    aria-describedby="vjs_video_14080_component_25036_description"
                                    aria-hidden="true"
                                    aria-label="Player Information Dialog"
                                    role="dialog"
                                    aria-live="polite"
                                  >
                                    <button
                                      class="vjs-close-button vjs-control vjs-button"
                                      type="button"
                                      title="Close Modal Dialog"
                                      aria-disabled="false"
                                    >
                                      <span
                                        class="vjs-icon-placeholder"
                                        aria-hidden="true"
                                      ></span>
                                      <span
                                        class="vjs-control-text"
                                        aria-live="polite"
                                      >
                                        Close Modal Dialog
                                      </span>
                                    </button>
                                    <p
                                      class="vjs-modal-dialog-description vjs-control-text"
                                      id="vjs_video_14080_component_25036_description"
                                    >
                                      This is a modal window. This modal can be
                                      closed by pressing the Escape key or
                                      activating the close button.
                                    </p>
                                    <div
                                      class="vjs-modal-dialog-content"
                                      role="document"
                                    ></div>
                                  </div>
                                  <div
                                    class="vjs-social-overlay vjs-modal-dialog vjs-hidden"
                                    tabindex="-1"
                                    aria-describedby="vjs_video_14080_component_25109_description"
                                    aria-hidden="true"
                                    aria-label="Sharing Dialog"
                                    role="dialog"
                                    aria-live="polite"
                                  >
                                    <button
                                      class="vjs-close-button vjs-control vjs-button"
                                      type="button"
                                      title="Close Modal Dialog"
                                      aria-disabled="false"
                                    >
                                      <span
                                        class="vjs-icon-placeholder"
                                        aria-hidden="true"
                                      ></span>
                                      <span
                                        class="vjs-control-text"
                                        aria-live="polite"
                                      >
                                        Close Modal Dialog
                                      </span>
                                    </button>
                                    <p
                                      class="vjs-modal-dialog-description vjs-control-text"
                                      id="vjs_video_14080_component_25109_description"
                                    >
                                      This is a modal window. This modal can be
                                      closed by pressing the Escape key or
                                      activating the close button.
                                    </p>
                                    <div
                                      class="vjs-modal-dialog-content"
                                      role="document"
                                    ></div>
                                  </div>
                                </video-js>
                              </div>
                            </div>
                            <div class="w-full">
                              <div>
                                <h3 class="text-xl font-semibold mb-4">
                                  Downloads
                                </h3>
                                <ul
                                  data-testid="about-this-item-downloads-wrapper"
                                  class="flex flex-col gap-y-2"
                                >
                                  <li class="bg-gray-f7 text-lg p-4 rounded-2xl flex items-center">
                                    <a
                                      href="https://lifeway.s3.amazonaws.com/samples/edoc/005841383_AShortGuidetoGroups.pdf"
                                      class="link inline-block mr-2 font-semibold max-w-[19.5rem] xl:max-w-full truncate fill-blue hover:fill-blue-hover"
                                      download=""
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        width="1em"
                                        height="1em"
                                        aria-hidden="true"
                                        class="inline-block mr-2 relative -top-0.5 text-xl"
                                      >
                                        <path d="M369 217 241 345c-9.4 9.4-24.6 9.4-33.9 0L79 217c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87L200 24c0-13.3 10.7-24 24-24s24 10.7 24 24v246.1l87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM48 344v80c0 22.1 17.9 40 40 40h272c22.1 0 40-17.9 40-40v-80c0-13.3 10.7-24 24-24s24 10.7 24 24v80c0 48.6-39.4 88-88 88H88c-48.6 0-88-39.4-88-88v-80c0-13.3 10.7-24 24-24s24 10.7 24 24"></path>
                                      </svg>
                                      005841383_AShortGuidetoGroups.pdf
                                    </a>
                                    <span class="text-base whitespace-nowrap">
                                      (1.52MB - PDF)
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      data-testid="specifications"
                      class="max-w-screen-2xl mx-auto px-4 mb-12"
                    >
                      <h2
                        id="specifications"
                        class="text-2xl font-semibold pb-6 mb-6 border-b border-d"
                      >
                        Specifications
                      </h2>
                      <dl
                        title="Specifications"
                        class="columns-1 md:columns-2 md:[.bundle-product-details-drawer_&amp;]:columns-1"
                      >
                        <div class="odd:bg-gray-e odd:rounded-2xl py-4 px-2 lg:px-4 inline-block w-full">
                          <dt class="inline-block w-1/2 px-4 align-top font-semibold">
                            Case Quantity
                          </dt>
                          <dd class="inline-block w-1/2 px-4">
                            {product.quantityAvailable}
                          </dd>
                        </div>
                        <div class="odd:bg-gray-e odd:rounded-2xl py-4 px-2 lg:px-4 inline-block w-full">
                          <dt class="inline-block w-1/2 px-4 align-top font-semibold">
                            Format
                          </dt>
                          <dd class="inline-block w-1/2 px-4">
                            {product.format}
                          </dd>
                        </div>
                        <div class="odd:bg-gray-e odd:rounded-2xl py-4 px-2 lg:px-4 inline-block w-full">
                          <dt class="inline-block w-1/2 px-4 align-top font-semibold">
                            ISBN10
                          </dt>
                          <dd class="inline-block w-1/2 px-4">
                            {product.ISBN}
                          </dd>
                        </div>

                        <div class="odd:bg-gray-e odd:rounded-2xl py-4 px-2 lg:px-4 inline-block w-full">
                          <dt class="inline-block w-1/2 px-4 align-top font-semibold">
                            Language
                          </dt>
                          <dd class="inline-block w-1/2 px-4">
                            {product.language}
                          </dd>
                        </div>
                        <div class="odd:bg-gray-e odd:rounded-2xl py-4 px-2 lg:px-4 inline-block w-full">
                          <dt class="inline-block w-1/2 px-4 align-top font-semibold">
                            Number of Pages
                          </dt>
                          <dd class="inline-block w-1/2 px-4">192</dd>
                        </div>
                        <div class="odd:bg-gray-e odd:rounded-2xl py-4 px-2 lg:px-4 inline-block w-full">
                          <dt class="inline-block w-1/2 px-4 align-top font-semibold">
                            Packaging Height
                          </dt>
                          <dd class="inline-block w-1/2 px-4">0.8</dd>
                        </div>
                        <div class="odd:bg-gray-e odd:rounded-2xl py-4 px-2 lg:px-4 inline-block w-full">
                          <dt class="inline-block w-1/2 px-4 align-top font-semibold">
                            Packaging Length
                          </dt>
                          <dd class="inline-block w-1/2 px-4">7.3</dd>
                        </div>
                        <div class="odd:bg-gray-e odd:rounded-2xl py-4 px-2 lg:px-4 inline-block w-full">
                          <dt class="inline-block w-1/2 px-4 align-top font-semibold">
                            Packaging Width
                          </dt>
                          <dd class="inline-block w-1/2 px-4">5.2</dd>
                        </div>
                        <div class="odd:bg-gray-e odd:rounded-2xl py-4 px-2 lg:px-4 inline-block w-full">
                          <dt class="inline-block w-1/2 px-4 align-top font-semibold">
                            Product Group
                          </dt>
                          <dd class="inline-block w-1/2 px-4">Books</dd>
                        </div>
                        <div class="odd:bg-gray-e odd:rounded-2xl py-4 px-2 lg:px-4 inline-block w-full">
                          <dt class="inline-block w-1/2 px-4 align-top font-semibold">
                            Product Type
                          </dt>
                          <dd class="inline-block w-1/2 px-4">
                            {product.productType}
                          </dd>
                        </div>
                        <div class="odd:bg-gray-e odd:rounded-2xl py-4 px-2 lg:px-4 inline-block w-full">
                          <dt class="inline-block w-1/2 px-4 align-top font-semibold">
                            Publication Date
                          </dt>
                          <dd class="inline-block w-1/2 px-4">2023-05-23</dd>
                        </div>
                        <div class="odd:bg-gray-e odd:rounded-2xl py-4 px-2 lg:px-4 inline-block w-full">
                          <dt class="inline-block w-1/2 px-4 align-top font-semibold">
                            Publisher
                          </dt>
                          <dd class="inline-block w-1/2 px-4">
                            B&amp;H Publishing Group
                          </dd>
                        </div>
                      </dl>
                    </section>
                    <section
                      id="ratingsAndReviews"
                      class="customYotpo max-w-full overflow-x-hidden"
                      data-testid="yotpoContainer"
                    >
                      <div
                        class="yotpo yotpo-main-widget border-t border-r-0 border-e"
                        data-product-id="005841383"
                        data-price="14.99"
                        data-currency="USD"
                        data-name="A Short Guide to Groups"
                        data-testid="yotpoDiv"
                        data-yotpo-element-id="1"
                      ></div>
                    </section>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
};

export default ProductDet;
