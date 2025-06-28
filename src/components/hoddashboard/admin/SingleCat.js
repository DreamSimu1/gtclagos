import React, { useState } from "react";
import { FiBookOpen, FiChevronDown } from "react-icons/fi";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import { useLocation } from "react-router-dom";
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
const SingleCat = () => {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  const [search, setSearch] = useState("");
  const location = useLocation();

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

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
                  <div class="w-full text-gray font-sofia">
                    <div
                      id="heading-tag:v_b_s_bible_study_-_h_tag"
                      data-testid="heading-tag-component"
                      class="w-full max-w-screen-2xl mx-auto px-4"
                    >
                      <h1 class="font-sofia font-semibold text-2xl md:text-[32px] leading-normal">
                        VBS Bible Study Curriculum
                      </h1>
                    </div>
                    <div class="extended-rte">
                      <div
                        class="mx-auto py-6 px-4 2xl:px-4 2xl:max-w-screen-2xl"
                        style={{ textAlign: "center" }}
                      >
                        <div class="custom-rich-text w-full after:content-[''] after:w-full after:table after:clear-both">
                          <h3>
                            <a
                              href="/en/shop/vacation-bible-school/bible-study?prod.taxonomy.lwc%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Vacation%20Bible%20School&amp;prod.taxonomy.lwc%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B1%5D=Bible%20Study&amp;prod.taxonomy.lwc%5BrefinementList%5D%5Bgrades%5D%5B0%5D=Preschool%20Multi-Age&amp;prod.taxonomy.lwc%5BrefinementList%5D%5Bgrades%5D%5B1%5D=Babies%20-%202%20Year%20Olds&amp;prod.taxonomy.lwc%5BrefinementList%5D%5Bgrades%5D%5B2%5D=3%20Year%20Olds%20-%20Pre-K&amp;prod.taxonomy.lwc%5BrefinementList%5D%5Bgrades%5D%5B3%5D=Kindergarten"
                              class="peer-[.btn]:ml-4 peer-[.btn]:inline-block"
                            >
                              Preschool
                            </a>
                            |
                            <a
                              href="/en/shop/vacation-bible-school/bible-study?prod.taxonomy.lwc%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Vacation%20Bible%20School&amp;prod.taxonomy.lwc%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B1%5D=Bible%20Study&amp;prod.taxonomy.lwc%5BrefinementList%5D%5Bgrades%5D%5B0%5D=Kids%20Multi-Age&amp;prod.taxonomy.lwc%5BrefinementList%5D%5Bgrades%5D%5B1%5D=Grades%201-2&amp;prod.taxonomy.lwc%5BrefinementList%5D%5Bgrades%5D%5B2%5D=Grades%203-4"
                              class="peer-[.btn]:ml-4 peer-[.btn]:inline-block"
                            >
                              Kids Grades 1-4
                            </a>
                            |
                            <a
                              href="/en/shop/vacation-bible-school/bible-study?prod.taxonomy.lwc%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Vacation%20Bible%20School&amp;prod.taxonomy.lwc%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B1%5D=Bible%20Study&amp;prod.taxonomy.lwc%5BrefinementList%5D%5Bgrades%5D%5B0%5D=Preteen"
                              class="peer-[.btn]:ml-4 peer-[.btn]:inline-block"
                            >
                              Preteen
                            </a>
                            |
                            <a
                              href="/en/shop/vacation-bible-school/bible-study?prod.taxonomy.lwc%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Vacation%20Bible%20School&amp;prod.taxonomy.lwc%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B1%5D=Bible%20Study&amp;prod.taxonomy.lwc%5BrefinementList%5D%5Bgrades%5D%5B0%5D=Teen"
                              class="peer-[.btn]:ml-4 peer-[.btn]:inline-block"
                            >
                              Teen
                            </a>
                            |
                            <a
                              href="/en/shop/vacation-bible-school/bible-study?prod.taxonomy.lwc%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Vacation%20Bible%20School&amp;prod.taxonomy.lwc%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B1%5D=Bible%20Study&amp;prod.taxonomy.lwc%5BrefinementList%5D%5Bgrades%5D%5B0%5D=Adult"
                              class="peer-[.btn]:ml-4 peer-[.btn]:inline-block"
                            >
                              Adult
                            </a>
                            |
                            <a
                              href="/en/shop/vacation-bible-school/bible-study?prod.taxonomy.lwc%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Vacation%20Bible%20School&amp;prod.taxonomy.lwc%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B1%5D=Bible%20Study&amp;prod.taxonomy.lwc%5BrefinementList%5D%5Bgrades%5D%5B0%5D=Special%20Needs"
                              class="peer-[.btn]:ml-4 peer-[.btn]:inline-block"
                            >
                              Special Needs
                            </a>
                            |
                            <a
                              href="/en/shop/vacation-bible-school/bible-study?prod.taxonomy.lwc%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Vacation%20Bible%20School&amp;prod.taxonomy.lwc%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B1%5D=Bible%20Study&amp;prod.taxonomy.lwc%5BrefinementList%5D%5Blanguage%5D%5B0%5D=Spanish"
                              class="peer-[.btn]:ml-4 peer-[.btn]:inline-block"
                            >
                              Spanish
                            </a>
                          </h3>
                          <p></p>
                        </div>
                      </div>
                    </div>
                    <div id="results">
                      <div class="max-w-screen-2xl mx-auto p-4">
                        <div class="list-grid-block" id="list-grid-PRODUCT">
                          <div>
                            <div
                              class="flex flex-wrap justify-start mb-4"
                              data-testid="listing-title"
                            >
                              <h2 class="font-semibold text-xl mr-2">Shop</h2>
                              <p class="text-lg">
                                (
                                <span data-testid="listing-title-total-results">
                                  61
                                </span>
                                Products)
                              </p>
                            </div>
                            <section
                              id="list-filter-navbar-wrap-PRODUCT"
                              class=""
                              aria-label="PRODUCT results filters"
                            >
                              <div
                                id="list-filter-navbar"
                                class="w-full top-0 bg-white z-2 pt-2 border-b border-e border-r-0 mb-4 pb-2"
                                style={{
                                  transition: "padding-bottom 0.2s linear",
                                }}
                              >
                                <div class="max-w-screen-2xl">
                                  <div class="flex gap-x-4 w-full items-center relative pr-[76px]">
                                    <div id="main-filter-button" class="pb-2">
                                      <button class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-gray-fa text-gray border border-d hover:border-gray hover:shadow-2nd-button-inner px-4 py-1.5 text-sm !rounded-full !px-4 !py-1.5 whitespace-nowrap flex items-center border-2 !border-gray">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 448 512"
                                          width="1em"
                                          height="1em"
                                          class="inline-block mr-1 fill-gray"
                                          aria-hidden="true"
                                        >
                                          <path d="M0 80c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 96 0 88.8 0 80m64 160c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16m224 160c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16"></path>
                                        </svg>
                                        All Filters (1)
                                      </button>
                                    </div>
                                    <div class="overflow-x-hidden -mx-3 !pb-2 hidden sm:block">
                                      <div
                                        id="filters-slider"
                                        class="filters-slider relative group"
                                      >
                                        <div
                                          class="swiper swiper-initialized swiper-horizontal swiper-watch-progress !pb-0 !px-1"
                                          aria-label="Filter options"
                                        >
                                          <ul
                                            class="swiper-wrapper"
                                            id="swiper-wrapper-05cd6369443f6899"
                                            aria-live="polite"
                                            style={{
                                              transform:
                                                "translate3d(0px, 0px, 0px)",
                                            }}
                                          >
                                            <li
                                              class="swiper-slide !w-auto flex items-center mx-2 swiper-slide-visible swiper-slide-active"
                                              role="group"
                                              aria-label="1 / 14"
                                            >
                                              <span class="relative inline-block">
                                                <button
                                                  class="px-4 py-1.5 text-sm leading-relaxed text-center transition-all duration-200 solid-focus-ring bg-gray-fa text-gray border border-d hover:border-gray hover:shadow-2nd-button-inner !rounded-full whitespace-nowrap flex items-center"
                                                  data-testid="listing-sort-button"
                                                  id="headlessui-popover-button-:r2:"
                                                  type="button"
                                                  aria-expanded="false"
                                                >
                                                  <span class="mr-2">
                                                    Sorted By:
                                                  </span>
                                                  <span class="font-bold">
                                                    Featured
                                                  </span>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    width="1em"
                                                    height="1em"
                                                    class="text-base relative transition ml-2 fill-gray"
                                                  >
                                                    <path d="M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4l180.7-180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                                  </svg>
                                                </button>
                                              </span>
                                            </li>
                                            <li
                                              class="swiper-slide !w-auto flex items-center swiper-slide-visible swiper-slide-next"
                                              role="group"
                                              aria-label="2 / 14"
                                            >
                                              <button
                                                class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-gray-fa text-gray border border-d hover:border-gray hover:shadow-2nd-button-inner px-4 py-1.5 text-sm !rounded-full !px-4 !py-1.5 inline-block whitespace-nowrap flex items-center mx-2 border-2 !border-gray"
                                                id="hierarchical-item-categories"
                                              >
                                                Categories (2)
                                              </button>
                                            </li>
                                            <li
                                              class="swiper-slide !w-auto flex items-center swiper-slide-visible"
                                              role="group"
                                              aria-label="3 / 14"
                                            >
                                              <button
                                                class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-gray-fa text-gray border border-d hover:border-gray hover:shadow-2nd-button-inner px-4 py-1.5 text-sm !rounded-full !px-4 !py-1.5 inline-block whitespace-nowrap flex items-center mx-2"
                                                id="refinement-item-themeYear"
                                              >
                                                Theme Year
                                              </button>
                                            </li>
                                            <li
                                              class="swiper-slide !w-auto flex items-center swiper-slide-visible"
                                              role="group"
                                              aria-label="4 / 14"
                                            >
                                              <button
                                                class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-gray-fa text-gray border border-d hover:border-gray hover:shadow-2nd-button-inner px-4 py-1.5 text-sm !rounded-full !px-4 !py-1.5 inline-block whitespace-nowrap flex items-center mx-2"
                                                id="refinement-item-grades"
                                              >
                                                Grades
                                              </button>
                                            </li>
                                            <li
                                              class="swiper-slide !w-auto flex items-center swiper-slide-visible"
                                              role="group"
                                              aria-label="5 / 14"
                                            ></li>
                                            <li
                                              class="swiper-slide !w-auto flex items-center swiper-slide-visible"
                                              role="group"
                                              aria-label="6 / 14"
                                            ></li>
                                            <li
                                              class="swiper-slide !w-auto flex items-center swiper-slide-visible"
                                              role="group"
                                              aria-label="7 / 14"
                                            >
                                              <button
                                                class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-gray-fa text-gray border border-d hover:border-gray hover:shadow-2nd-button-inner px-4 py-1.5 text-sm !rounded-full !px-4 !py-1.5 inline-block whitespace-nowrap flex items-center mx-2"
                                                id="refinement-item-mediumFormat"
                                              >
                                                Formats
                                              </button>
                                            </li>
                                            <li
                                              class="swiper-slide !w-auto flex items-center swiper-slide-visible"
                                              role="group"
                                              aria-label="8 / 14"
                                            >
                                              <button
                                                class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-gray-fa text-gray border border-d hover:border-gray hover:shadow-2nd-button-inner px-4 py-1.5 text-sm !rounded-full !px-4 !py-1.5 inline-block whitespace-nowrap flex items-center mx-2"
                                                id="numeric-item-price"
                                              >
                                                Price
                                              </button>
                                            </li>
                                            <li
                                              class="swiper-slide !w-auto flex items-center swiper-slide-visible"
                                              role="group"
                                              aria-label="9 / 14"
                                            >
                                              <button
                                                class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-gray-fa text-gray border border-d hover:border-gray hover:shadow-2nd-button-inner px-4 py-1.5 text-sm !rounded-full !px-4 !py-1.5 inline-block whitespace-nowrap flex items-center mx-2"
                                                id="refinement-item-averageCustomerRatingInt"
                                              >
                                                Review Rating
                                              </button>
                                            </li>
                                            <li
                                              class="swiper-slide !w-auto flex items-center"
                                              role="group"
                                              aria-label="10 / 14"
                                            >
                                              <button
                                                class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-gray-fa text-gray border border-d hover:border-gray hover:shadow-2nd-button-inner px-4 py-1.5 text-sm !rounded-full !px-4 !py-1.5 inline-block whitespace-nowrap flex items-center mx-2"
                                                id="toggle-item-isFreeShippingEligible"
                                              >
                                                Free Shipping
                                              </button>
                                            </li>
                                            <li
                                              class="swiper-slide !w-auto flex items-center"
                                              role="group"
                                              aria-label="11 / 14"
                                            ></li>
                                            <li
                                              class="swiper-slide !w-auto flex items-center"
                                              role="group"
                                              aria-label="12 / 14"
                                            ></li>
                                            <li
                                              class="swiper-slide !w-auto flex items-center"
                                              role="group"
                                              aria-label="13 / 14"
                                            >
                                              <button
                                                class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-gray-fa text-gray border border-d hover:border-gray hover:shadow-2nd-button-inner px-4 py-1.5 text-sm !rounded-full !px-4 !py-1.5 inline-block whitespace-nowrap flex items-center mx-2"
                                                id="toggle-item-isDigital"
                                              >
                                                Digital
                                              </button>
                                            </li>
                                            <li
                                              class="swiper-slide !w-auto flex items-center"
                                              role="group"
                                              aria-label="14 / 14"
                                            >
                                              <button
                                                class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-gray-fa text-gray border border-d hover:border-gray hover:shadow-2nd-button-inner px-4 py-1.5 text-sm !rounded-full !px-4 !py-1.5 inline-block whitespace-nowrap flex items-center mx-2"
                                                id="refinement-item-language"
                                              >
                                                Language
                                              </button>
                                            </li>
                                          </ul>
                                          <span
                                            class="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                          ></span>
                                        </div>
                                        <div class="filters-slider-nav absolute h-0 w-full left-0 top-1/2 right-0 bottom-0">
                                          <div class="filters-slider-nav-inner relative h-full">
                                            <div class="filters-slider-nav absolute top-0 left-0 -translate-y-1/2 z-2">
                                              <button
                                                id="filters-prev"
                                                class="filters-nav-btn nav-btn filters-prev block p-1.5 bg-white border border-e shadow-sm-all rounded-full transition-all hover:shadow-md-all fill-gray-74 hover:fill-gray focus:fill-gray z-1 relative peer group-hover:aria-disabled:border-[#bbbbbb] group-hover:aria-disabled:opacity-30 group-hover:aria-disabled:cursor-not-allowed opacity-0 group-hover:opacity-100 focus:opacity-100 swiper-button-disabled"
                                                disabled=""
                                                tabindex="-1"
                                                aria-label="Previous slide"
                                                aria-controls="swiper-wrapper-05cd6369443f6899"
                                                aria-disabled="true"
                                              >
                                                <span class="sr-only">
                                                  Previous
                                                </span>
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 320 512"
                                                  width="1em"
                                                  height="1em"
                                                  aria-hidden="true"
                                                  class="text-sm"
                                                >
                                                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
                                                </svg>
                                              </button>
                                              <div
                                                aria-hidden="true"
                                                class="w-8 h-[38px] absolute top-1/2 -translate-y-1/2 left-0 transition-all bg-gradient-to-r from-white to-transparent z-0 peer-disabled:hidden"
                                              ></div>
                                            </div>
                                            <div class="filters-slider-nav absolute top-0 right-0 -translate-y-1/2 z-2">
                                              <button
                                                id="filters-next"
                                                class="filters-nav-btn nav-btn filters-next block p-1.5 bg-white border border-e shadow-sm-all rounded-full transition-all hover:shadow-md-all fill-gray-74 hover:fill-gray focus:fill-gray z-1 relative peer group-hover:aria-disabled:border-[#bbbbbb] group-hover:aria-disabled:opacity-30 group-hover:aria-disabled:cursor-not-allowed opacity-0 group-hover:opacity-100 focus:opacity-100"
                                                tabindex="0"
                                                aria-label="Next slide"
                                                aria-controls="swiper-wrapper-05cd6369443f6899"
                                                aria-disabled="false"
                                              >
                                                <span class="sr-only">
                                                  Next
                                                </span>
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 320 512"
                                                  width="1em"
                                                  height="1em"
                                                  aria-hidden="true"
                                                  class="text-sm"
                                                >
                                                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                                                </svg>
                                              </button>
                                              <div
                                                aria-hidden="true"
                                                class="w-8 h-[38px] absolute top-1/2 -translate-y-1/2 right-0 transition-all bg-gradient-to-l from-white to-transparent z-0 peer-disabled:hidden"
                                              ></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id="list-grid-toggle"
                                      class="pb-2 flex flex-row items-center min-w-[58px] absolute right-0"
                                    >
                                      <button
                                        class="w-[28px] h-[28px] flex items-center justify-center rounded-lg transition-colors group mr-0.5 bg-gray cursor-default fill-white"
                                        data-testid="grid-view-button"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 448 512"
                                          width="20"
                                          height="22"
                                          alt="View results in a grid layout"
                                          preserveAspectRatio="none"
                                        >
                                          <path d="M88 64c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H40c-4.4 0-8-3.6-8-8V72c0-4.4 3.6-8 8-8zM40 32C17.9 32 0 49.9 0 72v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40zm48 192c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H40c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8zm-48-32c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40zm0 192h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H40c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8m-40 8v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40M248 64c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V72c0-4.4 3.6-8 8-8zm-48-32c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40zm0 192h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8m-40 8v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40h-48c-22.1 0-40 17.9-40 40m88 152c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8zm-48-32c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40zM360 64h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V72c0-4.4 3.6-8 8-8m-40 8v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40h-48c-22.1 0-40 17.9-40 40m88 152c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8zm-48-32c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40zm0 192h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8m-40 8v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40h-48c-22.1 0-40 17.9-40 40"></path>
                                        </svg>
                                      </button>
                                      <button
                                        class="w-[28px] h-[28px] flex items-center justify-center rounded-lg transition-colors group hover:bg-gray fill-gray hover:fill-white"
                                        data-testid="list-view-button"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                          width="20"
                                          height="22"
                                          alt="View results in a list layout"
                                          preserveAspectRatio="none"
                                        >
                                          <path d="M192 64v96h288V96c0-17.7-14.3-32-32-32zm-32 0H64c-17.7 0-32 14.3-32 32v64h128zM32 192v128h128V192zm0 160v64c0 17.7 14.3 32 32 32h96v-96zm160 96h256c17.7 0 32-14.3 32-32v-64H192zm288-128V192H192v128zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"></path>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                            <section>
                              <div class="max-w-screen-2xl w-full overflow-hidden max-h-[96px]">
                                <div class="flex flex-wrap items-center gap-x-4">
                                  <h3 class="sr-only">Applied filters</h3>
                                  <div
                                    class="flex items-center border border-d rounded-full bg-gray-fa py-1.5 p-3 pr-2.5 mb-4"
                                    data-testid="applied-filter-categories.lvl0"
                                  >
                                    <p class="text-sm leading-5">
                                      Vacation Bible School/Bible Study
                                    </p>
                                    <button
                                      aria-label="remove Vacation Bible School/Bible Study filter"
                                      class="text-base ml-1.5"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                        width="1em"
                                        height="1em"
                                        aria-hidden="true"
                                        class="relative top-px fill-gray"
                                      >
                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256z"></path>
                                      </svg>
                                    </button>
                                  </div>
                                  <p class="mb-4">
                                    <button class="link">clear all</button>
                                  </p>
                                </div>
                              </div>
                            </section>
                            <aside class="fixed transition-all right-0 lg:[.cart-pane-on_&amp;]:right-[160px] 2xl:[.cart-pane-on_&amp;]:right-[160px] 2xl:[.cart-pane-on.cart-pane-open_&amp;]:right-[375px] z-100 max-w-0 bottom-1/2 font-sofia translate-x-full overflow-hidden z-50">
                              <a
                                id="scroll-to-top-results"
                                href="#results"
                                class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring px-4 py-1.5 text-sm scroll-to-top-button relative shadow-md-all items-center rounded-r-none !border-r-0 border-white !border-1 shadow-md-all fill-white button bg-blue text-white border-2 border-blue hover:text-white hover:bg-blue-hover focus:text-white focus:bg-blue-hover active:bg-blue-active"
                                aria-hidden="true"
                                aria-label="Scroll back to top of results list"
                                data-testid="scroll-to-top-results"
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
                                  Results Top
                                </span>
                              </a>
                            </aside>
                            <ul
                              class="gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8 xl:gap-x-8 xl:gap-y-10 pt-2 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
                              aria-label="Results listing for PRODUCT "
                              data-testid="list-grid-results-listing"
                            >
                              <li
                                class="list-grid-product-tile relative pt-7 pb-3"
                                data-testid="product-tile"
                              >
                                <section
                                  class="IMAGE-SECTION mb-2"
                                  data-testid="plp-image-block"
                                >
                                  <div class="relative aspect-square">
                                    <a
                                      href="/books/single-book"
                                      class="IMAGE-SQUARE search-tile__link aspect-square relative w-full h-full object-bottom object-contain flex items-center justify-center"
                                      data-product="005850072"
                                      data-position="1"
                                      data-analytics-product="005850072"
                                      data-analytics-position="1"
                                    >
                                      <img
                                        alt="VBS 2025 Grades 1-2 Bible Study Leader Guide"
                                        loading="lazy"
                                        width="360"
                                        height="360"
                                        decoding="async"
                                        data-nimg="1"
                                        class="w-full h-full aspect-square object-contain"
                                        sizes="(max-width: 719px) 49vw, (max-width:  719px) 67vw,  (max-width: 1149px) 32vw, (max-width: 1439px) 24vw, (min-width: 1440px) 350px"
                                        srcset="
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/9798384513131?_a=BAVAZGDW0   256w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/9798384513131?_a=BAVAZGDW0   384w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/9798384513131?_a=BAVAZGDW0   640w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/9798384513131?_a=BAVAZGDW0   750w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/9798384513131?_a=BAVAZGDW0   828w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/9798384513131?_a=BAVAZGDW0 1080w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/9798384513131?_a=BAVAZGDW0 1200w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/9798384513131?_a=BAVAZGDW0 1920w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/9798384513131?_a=BAVAZGDW0 2048w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/9798384513131?_a=BAVAZGDW0 3840w
                                    "
                                        src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/9798384513131?_a=BAVAZGDW0"
                                        style={{ color: "transparent" }}
                                      />
                                    </a>
                                  </div>
                                </section>
                                <section
                                  class="PRODUCT-DETAILS"
                                  id="product-listing:pos-1:title"
                                  data-testid="plp-product-details"
                                >
                                  <h3
                                    class="text-sm sm:text-lg font-semibold line-clamp-2 mt-2"
                                    data-testid="product-title"
                                  >
                                    <a
                                      href="/books/single-book"
                                      title="VBS 2025 Grades 1-2 Bible Study Leader Guide"
                                      class="search-tile__link"
                                      data-product="005850072"
                                      data-position="1"
                                      data-analytics-product="005850072"
                                      data-analytics-position="1"
                                    >
                                      VBS 2025 Grades 1-2 Bible Study Leader
                                      Guide
                                    </a>
                                  </h3>
                                  <p
                                    class="text-xs sm:text-sm"
                                    data-testid="contributor"
                                  >
                                    by Lifeway Kids
                                  </p>
                                  <p
                                    class="text-xs text-gray-a"
                                    data-testid="item-number-block"
                                  >
                                    Item #
                                    <span data-testid="item-number">
                                      005850072
                                    </span>
                                  </p>
                                  <div
                                    class="REVIEWS text-sm sm:text-base flex flex-wrap items-center mt-2"
                                    data-testid="star-rating"
                                  >
                                    <div
                                      class="flex flex-row justify-between mr-2 w-[82px] sm:w-[126px] relative top-0.5"
                                      aria-hidden="true"
                                    >
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                    </div>
                                    <p class="inline-block !mr-2 sr-only sm:not-sr-only">
                                      4.7
                                    </p>
                                    <p class="inline-block">
                                      (95<span class="sr-only"> reviews</span>)
                                    </p>
                                  </div>
                                </section>
                                <section
                                  class="PRICE-ATC-AUTOSHIP-BULK-AVAILABILITY mt-2 md:mt-0"
                                  id="product-listing:pos-1:atc"
                                  data-testid="price-atc-autoship-bulk-availability"
                                >
                                  <div
                                    class="PRICE-ATC-AUTOSHIP flex flex-wrap justify-between mt-2"
                                    data-testid="price-atc-autoship"
                                  >
                                    <div class="pr-4">
                                      <div class="mb-2">
                                        <p class="text-xl font-bold leading-6 sm:text-2xl">
                                          <span
                                            class="inline-block relative"
                                            data-testid="product-price"
                                          >
                                            <span
                                              class="absolute w-full top-1 bottom-0 hidden"
                                              aria-hidden="true"
                                              style={{
                                                background: `linear-gradient(
                                             to left top,
                                             rgba(187, 187, 187, 0) 0%,
                                             rgba(187, 187, 187, 0) calc(50% - 0.8px),
                                             rgb(187, 187, 187) 50%,
                                             rgba(187, 187, 187, 0) calc(50% + 0.8px),
                                             rgba(187, 187, 187, 0) 100%
                                           )`,
                                              }}
                                            ></span>
                                            $8.75
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                    <div class="text-right">
                                      <button
                                        class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-yellow text-gray border-2 border-yellow hover:text-gray-3 hover:bg-yellow-hover focus:text-gray-3 focus:bg-yellow-hover active:bg-yellow-active px-4 pt-1 pb-1.5 text-base atc-search__btn !rounded-full whitespace-nowrap flex items-center !py-2 !px-5"
                                        data-testid="search-add-to-cart-button-005850072"
                                        data-product="005850072"
                                        data-position="1"
                                        data-analytics-product="005850072"
                                        data-analytics-position="1"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                          width="1em"
                                          height="1em"
                                          class="fill-gray"
                                          aria-hidden="true"
                                        >
                                          <path d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20"></path>
                                        </svg>
                                        <span class="sr-only sm:pl-1.5 sm:not-sr-only">
                                          Add
                                          <span class="sr-only"> to Cart</span>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    class="BULK relative hidden"
                                    data-testid="bulk-discounts"
                                  >
                                    <button
                                      class="text-green-text bg-green-background flex items-center rounded px-3 py-2 text-sm text-left mt-2 fill-green-text w-full"
                                      data-testid="bulk-discounts-button"
                                      id="headlessui-disclosure-button-:r5:"
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
                                      <span class="grow hidden">Bulk Save</span>
                                      <span class="grow">
                                        Bulk &amp; save up to
                                        <span class="font-bold">0</span>%
                                      </span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        width="1em"
                                        height="1em"
                                        class="text-lg relative transition ml-2"
                                      >
                                        <path d="M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4l180.7-180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="BO-AVAILABILITY mt-2">
                                    <p class="text-sm flex">
                                      <span
                                        class="inline-block"
                                        data-testid="availability-message-with-date"
                                      >
                                        Usually ships in 1 to 2 business days.
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    class="flex flex-wrap mt-2"
                                    data-testid="free-shipping-message"
                                  >
                                    <p class="text-sm text-green relative inline">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                        width="1em"
                                        height="1em"
                                        class="inline-block relative text-lg -top-0.5 mr-1 fill-green"
                                        aria-hidden="true"
                                      >
                                        <path d="M112 0C85.5 0 64 21.5 64 48v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48zm432 237.3V256H416v-96h50.7zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96m272 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0"></path>
                                      </svg>
                                      Free shipping
                                    </p>
                                    <div>
                                      <span class="text-green inline-block ml-1">
                                        *
                                      </span>
                                      <span
                                        class="relative inline-block top-0.5 ml-1 !-top-0"
                                        data-tracking-component="free-shipping-popover"
                                      >
                                        <button
                                          class="text-blue hover:text-blue-hover relative underline hover:no-underline focus:no-underline font-semibold fill-blue transition-colors hover:fill-blue-hover"
                                          data-testid="free-shipping-popover-button"
                                          data-tracking-component="button"
                                          data-tracking-id="open"
                                          id="headlessui-popover-button-:r7:"
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
                                  </div>
                                </section>
                              </li>
                              <li
                                class="list-grid-product-tile relative pt-7 pb-3"
                                data-testid="product-tile"
                              >
                                <section
                                  class="IMAGE-SECTION mb-2"
                                  data-testid="plp-image-block"
                                >
                                  <div class="relative aspect-square">
                                    <a
                                      href="/books/single-book"
                                      class="IMAGE-SQUARE search-tile__link aspect-square relative w-full h-full object-bottom object-contain flex items-center justify-center"
                                      data-product="005850074"
                                      data-position="2"
                                      data-analytics-product="005850074"
                                      data-analytics-position="2"
                                    >
                                      <img
                                        alt="VBS 2025 Grades 3-4 Bible Study Leader Guide"
                                        loading="lazy"
                                        width="360"
                                        height="360"
                                        decoding="async"
                                        data-nimg="1"
                                        class="w-full h-full aspect-square object-contain"
                                        sizes="(max-width: 719px) 49vw, (max-width:  719px) 67vw,  (max-width: 1149px) 32vw, (max-width: 1439px) 24vw, (min-width: 1440px) 350px"
                                        srcset="
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/9798384513155?_a=BAVAZGDW0   256w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/9798384513155?_a=BAVAZGDW0   384w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/9798384513155?_a=BAVAZGDW0   640w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/9798384513155?_a=BAVAZGDW0   750w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/9798384513155?_a=BAVAZGDW0   828w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/9798384513155?_a=BAVAZGDW0 1080w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/9798384513155?_a=BAVAZGDW0 1200w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/9798384513155?_a=BAVAZGDW0 1920w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/9798384513155?_a=BAVAZGDW0 2048w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/9798384513155?_a=BAVAZGDW0 3840w
                                    "
                                        src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/9798384513155?_a=BAVAZGDW0"
                                        style={{ color: "transparent" }}
                                      />
                                    </a>
                                  </div>
                                </section>
                                <section
                                  class="PRODUCT-DETAILS"
                                  id="product-listing:pos-2:title"
                                  data-testid="plp-product-details"
                                >
                                  <h3
                                    class="text-sm sm:text-lg font-semibold line-clamp-2 mt-2"
                                    data-testid="product-title"
                                  >
                                    <a
                                      href="/books/single-book"
                                      title="VBS 2025 Grades 3-4 Bible Study Leader Guide"
                                      class="search-tile__link"
                                      data-product="005850074"
                                      data-position="2"
                                      data-analytics-product="005850074"
                                      data-analytics-position="2"
                                    >
                                      VBS 2025 Grades 3-4 Bible Study Leader
                                      Guide
                                    </a>
                                  </h3>
                                  <p
                                    class="text-xs sm:text-sm"
                                    data-testid="contributor"
                                  >
                                    by Lifeway Kids
                                  </p>
                                  <p
                                    class="text-xs text-gray-a"
                                    data-testid="item-number-block"
                                  >
                                    Item #
                                    <span data-testid="item-number">
                                      005850074
                                    </span>
                                  </p>
                                  <div
                                    class="REVIEWS text-sm sm:text-base flex flex-wrap items-center mt-2"
                                    data-testid="star-rating"
                                  >
                                    <div
                                      class="flex flex-row justify-between mr-2 w-[82px] sm:w-[126px] relative top-0.5"
                                      aria-hidden="true"
                                    >
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                    </div>
                                    <p class="inline-block !mr-2 sr-only sm:not-sr-only">
                                      4.7
                                    </p>
                                    <p class="inline-block">
                                      (95<span class="sr-only"> reviews</span>)
                                    </p>
                                  </div>
                                </section>
                                <section
                                  class="PRICE-ATC-AUTOSHIP-BULK-AVAILABILITY mt-2 md:mt-0"
                                  id="product-listing:pos-2:atc"
                                  data-testid="price-atc-autoship-bulk-availability"
                                >
                                  <div
                                    class="PRICE-ATC-AUTOSHIP flex flex-wrap justify-between mt-2"
                                    data-testid="price-atc-autoship"
                                  >
                                    <div class="pr-4">
                                      <div class="mb-2">
                                        <p class="text-xl font-bold leading-6 sm:text-2xl">
                                          <span
                                            class="inline-block relative"
                                            data-testid="product-price"
                                          >
                                            <span
                                              class="absolute w-full top-1 bottom-0 hidden"
                                              aria-hidden="true"
                                              style={{
                                                background: `linear-gradient(
                                             to left top,
                                             rgba(187, 187, 187, 0) 0%,
                                             rgba(187, 187, 187, 0) calc(50% - 0.8px),
                                             rgb(187, 187, 187) 50%,
                                             rgba(187, 187, 187, 0) calc(50% + 0.8px),
                                             rgba(187, 187, 187, 0) 100%
                                           )`,
                                              }}
                                            ></span>
                                            $8.75
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                    <div class="text-right">
                                      <button
                                        class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-yellow text-gray border-2 border-yellow hover:text-gray-3 hover:bg-yellow-hover focus:text-gray-3 focus:bg-yellow-hover active:bg-yellow-active px-4 pt-1 pb-1.5 text-base atc-search__btn !rounded-full whitespace-nowrap flex items-center !py-2 !px-5"
                                        data-testid="search-add-to-cart-button-005850074"
                                        data-product="005850074"
                                        data-position="2"
                                        data-analytics-product="005850074"
                                        data-analytics-position="2"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                          width="1em"
                                          height="1em"
                                          class="fill-gray"
                                          aria-hidden="true"
                                        >
                                          <path d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20"></path>
                                        </svg>
                                        <span class="sr-only sm:pl-1.5 sm:not-sr-only">
                                          Add
                                          <span class="sr-only"> to Cart</span>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    class="BULK relative hidden"
                                    data-testid="bulk-discounts"
                                  >
                                    <button
                                      class="text-green-text bg-green-background flex items-center rounded px-3 py-2 text-sm text-left mt-2 fill-green-text w-full"
                                      data-testid="bulk-discounts-button"
                                      id="headlessui-disclosure-button-:ra:"
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
                                      <span class="grow hidden">Bulk Save</span>
                                      <span class="grow">
                                        Bulk &amp; save up to
                                        <span class="font-bold">0</span>%
                                      </span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        width="1em"
                                        height="1em"
                                        class="text-lg relative transition ml-2"
                                      >
                                        <path d="M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4l180.7-180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="BO-AVAILABILITY mt-2">
                                    <p class="text-sm flex">
                                      <span
                                        class="inline-block"
                                        data-testid="availability-message-with-date"
                                      >
                                        Usually ships in 1 to 2 business days.
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    class="flex flex-wrap mt-2"
                                    data-testid="free-shipping-message"
                                  >
                                    <p class="text-sm text-green relative inline">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                        width="1em"
                                        height="1em"
                                        class="inline-block relative text-lg -top-0.5 mr-1 fill-green"
                                        aria-hidden="true"
                                      >
                                        <path d="M112 0C85.5 0 64 21.5 64 48v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48zm432 237.3V256H416v-96h50.7zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96m272 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0"></path>
                                      </svg>
                                      Free shipping
                                    </p>
                                    <div>
                                      <span class="text-green inline-block ml-1">
                                        *
                                      </span>
                                      <span
                                        class="relative inline-block top-0.5 ml-1 !-top-0"
                                        data-tracking-component="free-shipping-popover"
                                      >
                                        <button
                                          class="text-blue hover:text-blue-hover relative underline hover:no-underline focus:no-underline font-semibold fill-blue transition-colors hover:fill-blue-hover"
                                          data-testid="free-shipping-popover-button"
                                          data-tracking-component="button"
                                          data-tracking-id="open"
                                          id="headlessui-popover-button-:rc:"
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
                                  </div>
                                </section>
                              </li>
                              <li
                                class="list-grid-product-tile relative pt-7 pb-3"
                                data-testid="product-tile"
                              >
                                <section
                                  class="IMAGE-SECTION mb-2"
                                  data-testid="plp-image-block"
                                >
                                  <div class="relative aspect-square">
                                    <a
                                      href="/books/single-book"
                                      class="IMAGE-SQUARE search-tile__link aspect-square relative w-full h-full object-bottom object-contain flex items-center justify-center"
                                      data-product="005850083"
                                      data-position="3"
                                      data-analytics-product="005850083"
                                      data-analytics-position="3"
                                    >
                                      <img
                                        alt="VBS 2025 VBX Preteen Bible Study Leader Guide"
                                        loading="lazy"
                                        width="360"
                                        height="360"
                                        decoding="async"
                                        data-nimg="1"
                                        class="w-full h-full aspect-square object-contain"
                                        sizes="(max-width: 719px) 49vw, (max-width:  719px) 67vw,  (max-width: 1149px) 32vw, (max-width: 1439px) 24vw, (min-width: 1440px) 350px"
                                        srcset="
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/9798384513247?_a=BAVAZGDW0   256w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/9798384513247?_a=BAVAZGDW0   384w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/9798384513247?_a=BAVAZGDW0   640w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/9798384513247?_a=BAVAZGDW0   750w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/9798384513247?_a=BAVAZGDW0   828w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/9798384513247?_a=BAVAZGDW0 1080w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/9798384513247?_a=BAVAZGDW0 1200w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/9798384513247?_a=BAVAZGDW0 1920w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/9798384513247?_a=BAVAZGDW0 2048w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/9798384513247?_a=BAVAZGDW0 3840w
                                    "
                                        src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/9798384513247?_a=BAVAZGDW0"
                                        style={{ color: "transparent" }}
                                      />
                                    </a>
                                  </div>
                                </section>
                                <section
                                  class="PRODUCT-DETAILS"
                                  id="product-listing:pos-3:title"
                                  data-testid="plp-product-details"
                                >
                                  <h3
                                    class="text-sm sm:text-lg font-semibold line-clamp-2 mt-2"
                                    data-testid="product-title"
                                  >
                                    <a
                                      href="/books/single-book"
                                      title="VBS 2025 VBX Preteen Bible Study Leader Guide"
                                      class="search-tile__link"
                                      data-product="005850083"
                                      data-position="3"
                                      data-analytics-product="005850083"
                                      data-analytics-position="3"
                                    >
                                      VBS 2025 VBX Preteen Bible Study Leader
                                      Guide
                                    </a>
                                  </h3>
                                  <p
                                    class="text-xs sm:text-sm"
                                    data-testid="contributor"
                                  >
                                    by Lifeway Kids
                                  </p>
                                  <p
                                    class="text-xs text-gray-a"
                                    data-testid="item-number-block"
                                  >
                                    Item #
                                    <span data-testid="item-number">
                                      005850083
                                    </span>
                                  </p>
                                  <div
                                    class="REVIEWS text-sm sm:text-base flex flex-wrap items-center mt-2"
                                    data-testid="star-rating"
                                  >
                                    <div
                                      class="flex flex-row justify-between mr-2 w-[82px] sm:w-[126px] relative top-0.5"
                                      aria-hidden="true"
                                    >
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                    </div>
                                    <p class="inline-block !mr-2 sr-only sm:not-sr-only">
                                      4.7
                                    </p>
                                    <p class="inline-block">
                                      (95<span class="sr-only"> reviews</span>)
                                    </p>
                                  </div>
                                </section>
                                <section
                                  class="PRICE-ATC-AUTOSHIP-BULK-AVAILABILITY mt-2 md:mt-0"
                                  id="product-listing:pos-3:atc"
                                  data-testid="price-atc-autoship-bulk-availability"
                                >
                                  <div
                                    class="PRICE-ATC-AUTOSHIP flex flex-wrap justify-between mt-2"
                                    data-testid="price-atc-autoship"
                                  >
                                    <div class="pr-4">
                                      <div class="mb-2">
                                        <p class="text-xl font-bold leading-6 sm:text-2xl">
                                          <span
                                            class="inline-block relative"
                                            data-testid="product-price"
                                          >
                                            <span
                                              class="absolute w-full top-1 bottom-0 hidden"
                                              aria-hidden="true"
                                              style={{
                                                background: `linear-gradient(
                                             to left top,
                                             rgba(187, 187, 187, 0) 0%,
                                             rgba(187, 187, 187, 0) calc(50% - 0.8px),
                                             rgb(187, 187, 187) 50%,
                                             rgba(187, 187, 187, 0) calc(50% + 0.8px),
                                             rgba(187, 187, 187, 0) 100%
                                           )`,
                                              }}
                                            ></span>
                                            $8.75
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                    <div class="text-right">
                                      <button
                                        class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-yellow text-gray border-2 border-yellow hover:text-gray-3 hover:bg-yellow-hover focus:text-gray-3 focus:bg-yellow-hover active:bg-yellow-active px-4 pt-1 pb-1.5 text-base atc-search__btn !rounded-full whitespace-nowrap flex items-center !py-2 !px-5"
                                        data-testid="search-add-to-cart-button-005850083"
                                        data-product="005850083"
                                        data-position="3"
                                        data-analytics-product="005850083"
                                        data-analytics-position="3"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                          width="1em"
                                          height="1em"
                                          class="fill-gray"
                                          aria-hidden="true"
                                        >
                                          <path d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20"></path>
                                        </svg>
                                        <span class="sr-only sm:pl-1.5 sm:not-sr-only">
                                          Add
                                          <span class="sr-only"> to Cart</span>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    class="BULK relative hidden"
                                    data-testid="bulk-discounts"
                                  >
                                    <button
                                      class="text-green-text bg-green-background flex items-center rounded px-3 py-2 text-sm text-left mt-2 fill-green-text w-full"
                                      data-testid="bulk-discounts-button"
                                      id="headlessui-disclosure-button-:rf:"
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
                                      <span class="grow hidden">Bulk Save</span>
                                      <span class="grow">
                                        Bulk &amp; save up to
                                        <span class="font-bold">0</span>%
                                      </span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        width="1em"
                                        height="1em"
                                        class="text-lg relative transition ml-2"
                                      >
                                        <path d="M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4l180.7-180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="BO-AVAILABILITY mt-2">
                                    <p class="text-sm flex">
                                      <span
                                        class="inline-block"
                                        data-testid="availability-message-with-date"
                                      >
                                        Usually ships in 1 to 2 business days.
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    class="flex flex-wrap mt-2"
                                    data-testid="free-shipping-message"
                                  >
                                    <p class="text-sm text-green relative inline">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                        width="1em"
                                        height="1em"
                                        class="inline-block relative text-lg -top-0.5 mr-1 fill-green"
                                        aria-hidden="true"
                                      >
                                        <path d="M112 0C85.5 0 64 21.5 64 48v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48zm432 237.3V256H416v-96h50.7zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96m272 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0"></path>
                                      </svg>
                                      Free shipping
                                    </p>
                                    <div>
                                      <span class="text-green inline-block ml-1">
                                        *
                                      </span>
                                      <span
                                        class="relative inline-block top-0.5 ml-1 !-top-0"
                                        data-tracking-component="free-shipping-popover"
                                      >
                                        <button
                                          class="text-blue hover:text-blue-hover relative underline hover:no-underline focus:no-underline font-semibold fill-blue transition-colors hover:fill-blue-hover"
                                          data-testid="free-shipping-popover-button"
                                          data-tracking-component="button"
                                          data-tracking-id="open"
                                          id="headlessui-popover-button-:rh:"
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
                                  </div>
                                </section>
                              </li>
                              <li
                                class="list-grid-product-tile relative pt-7 pb-3"
                                data-testid="product-tile"
                              >
                                <section
                                  class="IMAGE-SECTION mb-2"
                                  data-testid="plp-image-block"
                                >
                                  <div class="relative aspect-square">
                                    <a
                                      href="/books/single-book"
                                      class="IMAGE-SQUARE search-tile__link aspect-square relative w-full h-full object-bottom object-contain flex items-center justify-center"
                                      data-product="005850189"
                                      data-position="4"
                                      data-analytics-product="005850189"
                                      data-analytics-position="4"
                                    >
                                      <img
                                        alt="VBS 2025 3s-PreK Leader Pack"
                                        loading="lazy"
                                        width="360"
                                        height="360"
                                        decoding="async"
                                        data-nimg="1"
                                        class="w-full h-full aspect-square object-contain"
                                        sizes="(max-width: 719px) 49vw, (max-width:  719px) 67vw,  (max-width: 1149px) 32vw, (max-width: 1439px) 24vw, (min-width: 1440px) 350px"
                                        srcset="
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/9798384513650?_a=BAVAZGDW0   256w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/9798384513650?_a=BAVAZGDW0   384w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/9798384513650?_a=BAVAZGDW0   640w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/9798384513650?_a=BAVAZGDW0   750w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/9798384513650?_a=BAVAZGDW0   828w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/9798384513650?_a=BAVAZGDW0 1080w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/9798384513650?_a=BAVAZGDW0 1200w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/9798384513650?_a=BAVAZGDW0 1920w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/9798384513650?_a=BAVAZGDW0 2048w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/9798384513650?_a=BAVAZGDW0 3840w
                                    "
                                        src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/9798384513650?_a=BAVAZGDW0"
                                        style={{ color: "transparent" }}
                                      />
                                    </a>
                                  </div>
                                </section>
                                <section
                                  class="PRODUCT-DETAILS"
                                  id="product-listing:pos-4:title"
                                  data-testid="plp-product-details"
                                >
                                  <h3
                                    class="text-sm sm:text-lg font-semibold line-clamp-2 mt-2"
                                    data-testid="product-title"
                                  >
                                    <a
                                      href="/books/single-book"
                                      title="VBS 2025 3s-PreK Leader Pack"
                                      class="search-tile__link"
                                      data-product="005850189"
                                      data-position="4"
                                      data-analytics-product="005850189"
                                      data-analytics-position="4"
                                    >
                                      VBS 2025 3s-PreK Leader Pack
                                    </a>
                                  </h3>
                                  <p
                                    class="text-xs sm:text-sm"
                                    data-testid="contributor"
                                  >
                                    by Lifeway Kids
                                  </p>
                                  <p
                                    class="text-xs text-gray-a"
                                    data-testid="item-number-block"
                                  >
                                    Item #
                                    <span data-testid="item-number">
                                      005850189
                                    </span>
                                  </p>
                                  <div
                                    class="REVIEWS text-sm sm:text-base flex flex-wrap items-center mt-2"
                                    data-testid="star-rating"
                                  >
                                    <div
                                      class="flex flex-row justify-between mr-2 w-[82px] sm:w-[126px] relative top-0.5"
                                      aria-hidden="true"
                                    >
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                    </div>
                                    <p class="inline-block !mr-2 sr-only sm:not-sr-only">
                                      4.7
                                    </p>
                                    <p class="inline-block">
                                      (95<span class="sr-only"> reviews</span>)
                                    </p>
                                  </div>
                                </section>
                                <section
                                  class="PRICE-ATC-AUTOSHIP-BULK-AVAILABILITY mt-2 md:mt-0"
                                  id="product-listing:pos-4:atc"
                                  data-testid="price-atc-autoship-bulk-availability"
                                >
                                  <div
                                    class="PRICE-ATC-AUTOSHIP flex flex-wrap justify-between mt-2"
                                    data-testid="price-atc-autoship"
                                  >
                                    <div class="pr-4">
                                      <div class="mb-2">
                                        <p class="text-xl font-bold leading-6 sm:text-2xl">
                                          <span
                                            class="inline-block relative"
                                            data-testid="product-price"
                                          >
                                            <span
                                              class="absolute w-full top-1 bottom-0 hidden"
                                              aria-hidden="true"
                                              style={{
                                                background: `linear-gradient(
                                             to left top,
                                             rgba(187, 187, 187, 0) 0%,
                                             rgba(187, 187, 187, 0) calc(50% - 0.8px),
                                             rgb(187, 187, 187) 50%,
                                             rgba(187, 187, 187, 0) calc(50% + 0.8px),
                                             rgba(187, 187, 187, 0) 100%
                                           )`,
                                              }}
                                            ></span>
                                            $28.99
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                    <div class="text-right">
                                      <button
                                        class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-yellow text-gray border-2 border-yellow hover:text-gray-3 hover:bg-yellow-hover focus:text-gray-3 focus:bg-yellow-hover active:bg-yellow-active px-4 pt-1 pb-1.5 text-base atc-search__btn !rounded-full whitespace-nowrap flex items-center !py-2 !px-5"
                                        data-testid="search-add-to-cart-button-005850189"
                                        data-product="005850189"
                                        data-position="4"
                                        data-analytics-product="005850189"
                                        data-analytics-position="4"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                          width="1em"
                                          height="1em"
                                          class="fill-gray"
                                          aria-hidden="true"
                                        >
                                          <path d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20"></path>
                                        </svg>
                                        <span class="sr-only sm:pl-1.5 sm:not-sr-only">
                                          Add
                                          <span class="sr-only"> to Cart</span>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    class="BULK relative hidden"
                                    data-testid="bulk-discounts"
                                  >
                                    <button
                                      class="text-green-text bg-green-background flex items-center rounded px-3 py-2 text-sm text-left mt-2 fill-green-text w-full"
                                      data-testid="bulk-discounts-button"
                                      id="headlessui-disclosure-button-:rk:"
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
                                      <span class="grow hidden">Bulk Save</span>
                                      <span class="grow">
                                        Bulk &amp; save up to
                                        <span class="font-bold">0</span>%
                                      </span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        width="1em"
                                        height="1em"
                                        class="text-lg relative transition ml-2"
                                      >
                                        <path d="M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4l180.7-180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="BO-AVAILABILITY mt-2">
                                    <p class="text-sm flex">
                                      <span
                                        class="inline-block"
                                        data-testid="availability-message-with-date"
                                      >
                                        Usually ships in 1 to 2 business days.
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    class="flex flex-wrap mt-2"
                                    data-testid="free-shipping-message"
                                  >
                                    <p class="text-sm text-green relative inline">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                        width="1em"
                                        height="1em"
                                        class="inline-block relative text-lg -top-0.5 mr-1 fill-green"
                                        aria-hidden="true"
                                      >
                                        <path d="M112 0C85.5 0 64 21.5 64 48v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48zm432 237.3V256H416v-96h50.7zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96m272 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0"></path>
                                      </svg>
                                      Free shipping
                                    </p>
                                    <div>
                                      <span class="text-green inline-block ml-1">
                                        *
                                      </span>
                                      <span
                                        class="relative inline-block top-0.5 ml-1 !-top-0"
                                        data-tracking-component="free-shipping-popover"
                                      >
                                        <button
                                          class="text-blue hover:text-blue-hover relative underline hover:no-underline focus:no-underline font-semibold fill-blue transition-colors hover:fill-blue-hover"
                                          data-testid="free-shipping-popover-button"
                                          data-tracking-component="button"
                                          data-tracking-id="open"
                                          id="headlessui-popover-button-:rm:"
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
                                  </div>
                                </section>
                              </li>
                              <li
                                class="list-grid-product-tile relative pt-7 pb-3"
                                data-testid="product-tile"
                              >
                                <section
                                  class="IMAGE-SECTION mb-2"
                                  data-testid="plp-image-block"
                                >
                                  <div class="relative aspect-square">
                                    <a
                                      href="/books/single-book"
                                      class="IMAGE-SQUARE search-tile__link aspect-square relative w-full h-full object-bottom object-contain flex items-center justify-center"
                                      data-product="005850073"
                                      data-position="5"
                                      data-analytics-product="005850073"
                                      data-analytics-position="5"
                                    >
                                      <img
                                        alt="VBS 2025 Grades 1-2 Bible Study Leader Pack"
                                        loading="lazy"
                                        width="360"
                                        height="360"
                                        decoding="async"
                                        data-nimg="1"
                                        class="w-full h-full aspect-square object-contain"
                                        sizes="(max-width: 719px) 49vw, (max-width:  719px) 67vw,  (max-width: 1149px) 32vw, (max-width: 1439px) 24vw, (min-width: 1440px) 350px"
                                        srcset="
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/9798384513148?_a=BAVAZGDW0   256w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/9798384513148?_a=BAVAZGDW0   384w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/9798384513148?_a=BAVAZGDW0   640w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/9798384513148?_a=BAVAZGDW0   750w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/9798384513148?_a=BAVAZGDW0   828w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/9798384513148?_a=BAVAZGDW0 1080w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/9798384513148?_a=BAVAZGDW0 1200w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/9798384513148?_a=BAVAZGDW0 1920w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/9798384513148?_a=BAVAZGDW0 2048w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/9798384513148?_a=BAVAZGDW0 3840w
                                    "
                                        src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/9798384513148?_a=BAVAZGDW0"
                                        style={{ color: "transparent" }}
                                      />
                                    </a>
                                  </div>
                                </section>
                                <section
                                  class="PRODUCT-DETAILS"
                                  id="product-listing:pos-5:title"
                                  data-testid="plp-product-details"
                                >
                                  <h3
                                    class="text-sm sm:text-lg font-semibold line-clamp-2 mt-2"
                                    data-testid="product-title"
                                  >
                                    <a
                                      href="/books/single-book"
                                      title="VBS 2025 Grades 1-2 Bible Study Leader Pack"
                                      class="search-tile__link"
                                      data-product="005850073"
                                      data-position="5"
                                      data-analytics-product="005850073"
                                      data-analytics-position="5"
                                    >
                                      VBS 2025 Grades 1-2 Bible Study Leader
                                      Pack
                                    </a>
                                  </h3>
                                  <p
                                    class="text-xs sm:text-sm"
                                    data-testid="contributor"
                                  >
                                    by Lifeway Kids
                                  </p>
                                  <p
                                    class="text-xs text-gray-a"
                                    data-testid="item-number-block"
                                  >
                                    Item #
                                    <span data-testid="item-number">
                                      005850073
                                    </span>
                                  </p>
                                  <div
                                    class="REVIEWS text-sm sm:text-base flex flex-wrap items-center mt-2"
                                    data-testid="star-rating"
                                  >
                                    <div
                                      class="flex flex-row justify-between mr-2 w-[82px] sm:w-[126px] relative top-0.5"
                                      aria-hidden="true"
                                    >
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                    </div>
                                    <p class="inline-block !mr-2 sr-only sm:not-sr-only">
                                      4.7
                                    </p>
                                    <p class="inline-block">
                                      (95<span class="sr-only"> reviews</span>)
                                    </p>
                                  </div>
                                </section>
                                <section
                                  class="PRICE-ATC-AUTOSHIP-BULK-AVAILABILITY mt-2 md:mt-0"
                                  id="product-listing:pos-5:atc"
                                  data-testid="price-atc-autoship-bulk-availability"
                                >
                                  <div
                                    class="PRICE-ATC-AUTOSHIP flex flex-wrap justify-between mt-2"
                                    data-testid="price-atc-autoship"
                                  >
                                    <div class="pr-4">
                                      <div class="mb-2">
                                        <p class="text-xl font-bold leading-6 sm:text-2xl">
                                          <span
                                            class="inline-block relative"
                                            data-testid="product-price"
                                          >
                                            <span
                                              class="absolute w-full top-1 bottom-0 hidden"
                                              aria-hidden="true"
                                              style={{
                                                background: `linear-gradient(
                                             to left top,
                                             rgba(187, 187, 187, 0) 0%,
                                             rgba(187, 187, 187, 0) calc(50% - 0.8px),
                                             rgb(187, 187, 187) 50%,
                                             rgba(187, 187, 187, 0) calc(50% + 0.8px),
                                             rgba(187, 187, 187, 0) 100%
                                           )`,
                                              }}
                                            ></span>
                                            $28.99
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                    <div class="text-right">
                                      <button
                                        class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-yellow text-gray border-2 border-yellow hover:text-gray-3 hover:bg-yellow-hover focus:text-gray-3 focus:bg-yellow-hover active:bg-yellow-active px-4 pt-1 pb-1.5 text-base atc-search__btn !rounded-full whitespace-nowrap flex items-center !py-2 !px-5"
                                        data-testid="search-add-to-cart-button-005850073"
                                        data-product="005850073"
                                        data-position="5"
                                        data-analytics-product="005850073"
                                        data-analytics-position="5"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                          width="1em"
                                          height="1em"
                                          class="fill-gray"
                                          aria-hidden="true"
                                        >
                                          <path d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20"></path>
                                        </svg>
                                        <span class="sr-only sm:pl-1.5 sm:not-sr-only">
                                          Add
                                          <span class="sr-only"> to Cart</span>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    class="BULK relative hidden"
                                    data-testid="bulk-discounts"
                                  >
                                    <button
                                      class="text-green-text bg-green-background flex items-center rounded px-3 py-2 text-sm text-left mt-2 fill-green-text w-full"
                                      data-testid="bulk-discounts-button"
                                      id="headlessui-disclosure-button-:rp:"
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
                                      <span class="grow hidden">Bulk Save</span>
                                      <span class="grow">
                                        Bulk &amp; save up to
                                        <span class="font-bold">0</span>%
                                      </span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        width="1em"
                                        height="1em"
                                        class="text-lg relative transition ml-2"
                                      >
                                        <path d="M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4l180.7-180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="BO-AVAILABILITY mt-2">
                                    <p class="text-sm flex">
                                      <span
                                        class="inline-block"
                                        data-testid="availability-message-with-date"
                                      >
                                        Usually ships in 1 to 2 business days.
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    class="flex flex-wrap mt-2"
                                    data-testid="free-shipping-message"
                                  >
                                    <p class="text-sm text-green relative inline">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                        width="1em"
                                        height="1em"
                                        class="inline-block relative text-lg -top-0.5 mr-1 fill-green"
                                        aria-hidden="true"
                                      >
                                        <path d="M112 0C85.5 0 64 21.5 64 48v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48zm432 237.3V256H416v-96h50.7zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96m272 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0"></path>
                                      </svg>
                                      Free shipping
                                    </p>
                                    <div>
                                      <span class="text-green inline-block ml-1">
                                        *
                                      </span>
                                      <span
                                        class="relative inline-block top-0.5 ml-1 !-top-0"
                                        data-tracking-component="free-shipping-popover"
                                      >
                                        <button
                                          class="text-blue hover:text-blue-hover relative underline hover:no-underline focus:no-underline font-semibold fill-blue transition-colors hover:fill-blue-hover"
                                          data-testid="free-shipping-popover-button"
                                          data-tracking-component="button"
                                          data-tracking-id="open"
                                          id="headlessui-popover-button-:rr:"
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
                                  </div>
                                </section>
                              </li>
                              <li
                                class="list-grid-product-tile relative pt-7 pb-3"
                                data-testid="product-tile"
                              >
                                <section
                                  class="IMAGE-SECTION mb-2"
                                  data-testid="plp-image-block"
                                >
                                  <div class="relative aspect-square">
                                    <a
                                      href="/books/single-book"
                                      class="IMAGE-SQUARE search-tile__link aspect-square relative w-full h-full object-bottom object-contain flex items-center justify-center"
                                      data-product="005850071"
                                      data-position="6"
                                      data-analytics-product="005850071"
                                      data-analytics-position="6"
                                    >
                                      <img
                                        alt="VBS 2025 Kids Activity Book"
                                        loading="lazy"
                                        width="360"
                                        height="360"
                                        decoding="async"
                                        data-nimg="1"
                                        class="w-full h-full aspect-square object-contain"
                                        sizes="(max-width: 719px) 49vw, (max-width:  719px) 67vw,  (max-width: 1149px) 32vw, (max-width: 1439px) 24vw, (min-width: 1440px) 350px"
                                        srcset="
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/9798384513124?_a=BAVAZGDW0   256w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/9798384513124?_a=BAVAZGDW0   384w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/9798384513124?_a=BAVAZGDW0   640w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/9798384513124?_a=BAVAZGDW0   750w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/9798384513124?_a=BAVAZGDW0   828w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/9798384513124?_a=BAVAZGDW0 1080w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/9798384513124?_a=BAVAZGDW0 1200w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/9798384513124?_a=BAVAZGDW0 1920w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/9798384513124?_a=BAVAZGDW0 2048w,
                                      https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/9798384513124?_a=BAVAZGDW0 3840w
                                    "
                                        src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/9798384513124?_a=BAVAZGDW0"
                                        style={{ color: "transparent" }}
                                      />
                                    </a>
                                  </div>
                                </section>
                                <section
                                  class="PRODUCT-DETAILS"
                                  id="product-listing:pos-6:title"
                                  data-testid="plp-product-details"
                                >
                                  <h3
                                    class="text-sm sm:text-lg font-semibold line-clamp-2 mt-2"
                                    data-testid="product-title"
                                  >
                                    <a
                                      href="/books/single-book"
                                      title="VBS 2025 Kids Activity Book"
                                      class="search-tile__link"
                                      data-product="005850071"
                                      data-position="6"
                                      data-analytics-product="005850071"
                                      data-analytics-position="6"
                                    >
                                      VBS 2025 Kids Activity Book
                                    </a>
                                  </h3>
                                  <p
                                    class="text-xs sm:text-sm"
                                    data-testid="contributor"
                                  >
                                    by Lifeway Kids
                                  </p>
                                  <p
                                    class="text-xs text-gray-a"
                                    data-testid="item-number-block"
                                  >
                                    Item #
                                    <span data-testid="item-number">
                                      005850071
                                    </span>
                                  </p>
                                  <div
                                    class="REVIEWS text-sm sm:text-base flex flex-wrap items-center mt-2"
                                    data-testid="star-rating"
                                  >
                                    <div
                                      class="flex flex-row justify-between mr-2 w-[82px] sm:w-[126px] relative top-0.5"
                                      aria-hidden="true"
                                    >
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                      <div class="flex flex-row relative w-[14px] sm:w-[22px]">
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
                                            class="relative !max-w-none w-[14px] sm:w-[22px]"
                                            srcset="
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_32/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 1x,
                                          https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0 2x
                                        "
                                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_48/f_auto/q_auto/v1/review-star-solid?_a=BAVAZGDW0"
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
                                    </div>
                                    <p class="inline-block !mr-2 sr-only sm:not-sr-only">
                                      4.7
                                    </p>
                                    <p class="inline-block">
                                      (95<span class="sr-only"> reviews</span>)
                                    </p>
                                  </div>
                                </section>
                                <section
                                  class="PRICE-ATC-AUTOSHIP-BULK-AVAILABILITY mt-2 md:mt-0"
                                  id="product-listing:pos-6:atc"
                                  data-testid="price-atc-autoship-bulk-availability"
                                >
                                  <div
                                    class="PRICE-ATC-AUTOSHIP flex flex-wrap justify-between mt-2"
                                    data-testid="price-atc-autoship"
                                  >
                                    <div class="pr-4">
                                      <div class="mb-2">
                                        <p class="text-xl font-bold leading-6 sm:text-2xl">
                                          <span
                                            class="inline-block relative"
                                            data-testid="product-price"
                                          >
                                            <span
                                              class="absolute w-full top-1 bottom-0 hidden"
                                              aria-hidden="true"
                                              style={{
                                                background: `linear-gradient(
                                             to left top,
                                             rgba(187, 187, 187, 0) 0%,
                                             rgba(187, 187, 187, 0) calc(50% - 0.8px),
                                             rgb(187, 187, 187) 50%,
                                             rgba(187, 187, 187, 0) calc(50% + 0.8px),
                                             rgba(187, 187, 187, 0) 100%
                                           )`,
                                              }}
                                            ></span>
                                            $3.50
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                    <div class="text-right">
                                      <button
                                        class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-yellow text-gray border-2 border-yellow hover:text-gray-3 hover:bg-yellow-hover focus:text-gray-3 focus:bg-yellow-hover active:bg-yellow-active px-4 pt-1 pb-1.5 text-base atc-search__btn !rounded-full whitespace-nowrap flex items-center !py-2 !px-5"
                                        data-testid="search-add-to-cart-button-005850071"
                                        data-product="005850071"
                                        data-position="6"
                                        data-analytics-product="005850071"
                                        data-analytics-position="6"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                          width="1em"
                                          height="1em"
                                          class="fill-gray"
                                          aria-hidden="true"
                                        >
                                          <path d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20"></path>
                                        </svg>
                                        <span class="sr-only sm:pl-1.5 sm:not-sr-only">
                                          Add
                                          <span class="sr-only"> to Cart</span>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    class="BULK relative hidden"
                                    data-testid="bulk-discounts"
                                  >
                                    <button
                                      class="text-green-text bg-green-background flex items-center rounded px-3 py-2 text-sm text-left mt-2 fill-green-text w-full"
                                      data-testid="bulk-discounts-button"
                                      id="headlessui-disclosure-button-:ru:"
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
                                      <span class="grow hidden">Bulk Save</span>
                                      <span class="grow">
                                        Bulk &amp; save up to
                                        <span class="font-bold">0</span>%
                                      </span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        width="1em"
                                        height="1em"
                                        class="text-lg relative transition ml-2"
                                      >
                                        <path d="M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4l180.7-180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="BO-AVAILABILITY mt-2">
                                    <p class="text-sm flex">
                                      <span
                                        class="inline-block"
                                        data-testid="availability-message-with-date"
                                      >
                                        Usually ships in 1 to 2 business days.
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    class="flex flex-wrap mt-2"
                                    data-testid="free-shipping-message"
                                  >
                                    <p class="text-sm text-green relative inline">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                        width="1em"
                                        height="1em"
                                        class="inline-block relative text-lg -top-0.5 mr-1 fill-green"
                                        aria-hidden="true"
                                      >
                                        <path d="M112 0C85.5 0 64 21.5 64 48v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48zm432 237.3V256H416v-96h50.7zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96m272 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0"></path>
                                      </svg>
                                      Free shipping
                                    </p>
                                    <div>
                                      <span class="text-green inline-block ml-1">
                                        *
                                      </span>
                                      <span
                                        class="relative inline-block top-0.5 ml-1 !-top-0"
                                        data-tracking-component="free-shipping-popover"
                                      >
                                        <button
                                          class="text-blue hover:text-blue-hover relative underline hover:no-underline focus:no-underline font-semibold fill-blue transition-colors hover:fill-blue-hover"
                                          data-testid="free-shipping-popover-button"
                                          data-tracking-component="button"
                                          data-tracking-id="open"
                                          id="headlessui-popover-button-:r10:"
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
                                  </div>
                                </section>
                              </li>
                            </ul>
                            <div aria-hidden="true"></div>
                            <div
                              class="w-3/4 max-w-[326px] leading-none text-center py-8 mx-auto"
                              data-testid="result-and-load-more"
                            >
                              <div>
                                <p
                                  role="status"
                                  data-testid="load-more-number-of-results"
                                >
                                  Showing
                                  <span data-testid="load-more-results-showing">
                                    24
                                  </span>
                                  of
                                  <span data-testid="load-more-total-results">
                                    61
                                  </span>
                                  Products
                                </p>
                              </div>
                              <div
                                class="inline-block flex items-center my-4"
                                aria-hidden="true"
                                data-testid="results-progress-bar"
                              >
                                <div class="grow rounded-xl bg-gray-e relative overflow-hidden h-4 w-full translate-y-[2px]">
                                  <div
                                    class="bg-gray absolute top-0 bottom-0 left-0"
                                    style={{ width: "39.3443%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default SingleCat;
