import { React, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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

const Digital = () => {
  const { user } = useAuth();
  const { isSidebarOpen } = useSidebar(); // Sidebar state
  return (
    <div>
      <body>
        <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <SideNav />
          <TopNav />
          <div className="page-wrapper" style={{ marginTop: "10px" }}>
            <div className="content">
              <div
                class="text-black max-w-screen-2xl px-4 py-8 mx-auto"
                id="featured-categories:homepage_featured_categories"
              >
                <div class="w-full">
                  <div class="text-center mb-6 md:mb-12">
                    <h3 class="text-2xl md:text-3xl xl:text-4xl">
                      Find any digital resources
                    </h3>
                    <h4 class="text-lg mt-4 max-w-xl mx-auto">
                      All digital resources available
                    </h4>
                  </div>
                  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 2xl:gap-12">
                    <div>
                      <a
                        class="text-black hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/books/single-cat"
                        title="Video Sessions"
                        data-link-text="featured-categories::homepage featured categories::featured categories - church ordering"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories - church ordering"
                      >
                        <span class="relative block">
                          <img
                            alt="Video Session"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/church-ordering?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Video Session
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-black hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/books/single-cat"
                        title="Audio Session"
                        data-link-text="featured-categories::homepage featured categories::featured categories vacation bible school"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories vacation bible school"
                      >
                        <span class="relative block">
                          <img
                            alt="Audio Seession"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/VBS-2025-Category-Image-350x350px?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Audio Session
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-black hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/books/single-cat"
                        title="Onine Session"
                        data-link-text="featured-categories::homepage featured categories::featured categories bible studies"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories bible studies"
                      >
                        <span class="relative block">
                          <img
                            alt=""
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/bible_studies_homepage_categories_2024?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Online Session
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-black hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/books/single-cat"
                        title="Virtual Event"
                        data-link-text="featured-categories::homepage featured categories::featured categories sunday school"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories sunday school"
                      >
                        <span class="relative block">
                          <img
                            alt="Stack of Bible study booklets with 'Bible Studies for Life' on top"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_sunschool?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Virtual Event
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-black hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/books/single-cat"
                        data-link-text="featured-categories::homepage featured categories::featured categories bibles"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories bibles"
                      >
                        <span class="relative block">
                          <img
                            alt="Bible"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_bibles?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Webiner
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-black hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/books/single-cat"
                        title="Webinar"
                        data-link-text="featured-categories::homepage featured categories::featured categories church supplies"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories church supplies"
                      >
                        <span class="relative block">
                          <img
                            alt="A prepackaged communion cup with grape juice and a wafer"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_churchsuplies?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Webinar
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-black hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/books/single-cat"
                        title="Podcast"
                        data-link-text="featured-categories::homepage featured categories::featured categories books"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories books"
                      >
                        <span class="relative block">
                          <img
                            alt="Two books: Eyes Up by Alexandra Hoover and A Fruitful Life by Yahaira Ramo"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/featured_category_books_2022_border?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Podcast
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-black hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/books/single-cat"
                        data-link-text="featured-categories::homepage featured categories::featured categories events"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories events"
                      >
                        <span class="relative block">
                          <img
                            alt="Priscilla Shirer speaking passionately on stage"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/catetories_events?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Events
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-black hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/books/single-cat"
                        title="Camps"
                        data-link-text="featured-categories::homepage featured categories::featured categories camps"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories camps"
                      >
                        <span class="relative block">
                          <img
                            alt="A group of energetic young people, with one wearing a pink cowboy hat and sunglasses"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/featured_category_camps?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Camps
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-black hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/books/single-cat"
                        title="Worship "
                        data-link-text="featured-categories::homepage featured categories::featured categories worship"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories worship"
                      >
                        <span class="relative block">
                          <img
                            alt="Close-up of a person playing an acoustic guitar"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/featured_category_worship?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Worship
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-black hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/books/single-cat"
                        data-link-text="featured-categories::homepage featured categories::featured categories bible study video sessions"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories bible study video sessions"
                      >
                        <span class="relative block">
                          <img
                            alt="Bible study video sessions"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/bible_study_video_sessions_homepage_kristi_mclelland?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Bible Study Video Sessions
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        class="text-black hover:underline group outline-0 data-link-track data-analytics-link-track"
                        href="/books/single-cat"
                        title="Clearance"
                        data-link-text="featured-categories::homepage featured categories::featured categories clearance"
                        data-analytics-link-text="featured-categories::homepage featured categories::featured categories clearance"
                      >
                        <span class="relative block">
                          <img
                            alt="Clearance text over a solid yellow background"
                            loading="lazy"
                            width="350"
                            height="350"
                            decoding="async"
                            data-nimg="1"
                            class="mb-1 w-full align-middle rounded-2xl group-image-link-focus-ring aspect-square object-cover"
                            style={{ color: "transparent" }}
                            sizes="(max-width: 719px) 50vw, (max-width: 959px) 33vw, (max-width: 1439px) 25vw, (min-width: 1440px) 330px"
                            srcset="
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_256/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0   256w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0   384w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_640/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0   640w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0   750w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_828/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0   828w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1080/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0 1080w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1200/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0 1200w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_1920/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0 1920w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_2048/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0 2048w,
                        https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0 3840w
                      "
                            src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_3840/f_auto/q_auto/v1/Clearance-450x450-1?_a=BAVAZGDW0"
                          />
                        </span>
                        <p class="text-center text-xs sm:text-base 2xl:text-lg font-bold group-dashed-focus-ring group-hover:underline">
                          Clearance
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <section
                id="best-sellers-slider-rec-for-you"
                class="product-slider-wrapper w-full py-8"
                data-tracking-component="product-slider"
                data-tracking-id="trending-items"
                style={{ backgroundColor: "transparent" }}
              >
                <div
                  id="product-slider:trending_items"
                  class="max-w-[1440px] mx-auto sm:px-4"
                >
                  <h2 class="font-sofia font-semibold text-xl md:text-2xl mb-4 px-4 sm:px-0 lg:mb-6 text-center">
                    Trending DIgital Resources
                  </h2>
                  <section>
                    <div class="main-swiper-wrap relative w-full px-4 group">
                      <div class="swiper swiper-initialized swiper-horizontal swiper-watch-progress !pb-8">
                        <div class="swiper-wrapper">
                          <div
                            class="swiper-slide swiper-slide-visible swiper-slide-active"
                            style={{ width: "285.333px" }}
                          >
                            <div
                              class="flex flex-col max-w-screen-xs px-4 h-full justify-between transform translate-x-0"
                              data-product="001148445"
                              data-analytics-product="001148445"
                              data-testid="best-sellers-slider-rec-for-you-slide-1"
                              data-tracking-component="product-slide"
                              data-tracking-id="001148445"
                            >
                              <div class="flex flex-col p-1 group h-full">
                                <a
                                  class="flex flex-col items-center text-blue hover:text-blue-hover hover:underline slider-tile-link focus-visible solid-focus-ring"
                                  href="/books/single-cat"
                                  title="Communion Cups - Plastic Cups (1000 Count Box)"
                                  data-link-text="product-slider::trending items::communion cups - plastic cups -1000 count box-"
                                  data-analytics-link-text="product-slider::trending items::communion cups - plastic cups -1000 count box-"
                                  data-product="001148445"
                                  data-analytics-product="001148445"
                                  data-slide-count="17"
                                  data-slider-alg="TI"
                                  data-slider-criteria="Trending Items"
                                  data-slider-logic="TI"
                                  data-slide-position="1"
                                  data-slider-title="Trending Items"
                                  data-slider-type="dyn"
                                  data-analytics-slider=""
                                  data-analytics-slider-count="17"
                                  data-analytics-slider-logic="TI"
                                  data-analytics-slider-title="Trending Items"
                                  data-analytics-slider-type="dyn"
                                  data-analytics-slider-position="1"
                                  data-tracking-component="link"
                                  data-tracking-id="image"
                                >
                                  <div class="pb-full relative w-full">
                                    <img
                                      alt="Communion Cups - Plastic Cups (1000 Count Box)"
                                      loading="lazy"
                                      width="350"
                                      height="350"
                                      decoding="async"
                                      data-nimg="1"
                                      class="absolute bottom-0 max-h-full max-w-full left-1/2 transform -translate-x-1/2 w-auto h-auto"
                                      srcset="
                             https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/001148445?_a=BAVAZGDW0 1x,
                             https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/001148445?_a=BAVAZGDW0 2x
                           "
                                      src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/001148445?_a=BAVAZGDW0"
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                </a>
                                <div class="flex flex-col justify-between h-full">
                                  <div class="flex flex-col my-2">
                                    <p class="text-center my-4 line-clamp-3 !my-2 !text-left font-semibold">
                                      <a
                                        class="slider-tile-link"
                                        href="/books/single-cat"
                                        data-product="001148445"
                                        data-analytics-product="001148445"
                                        data-slide-count="17"
                                        data-slider-alg="TI"
                                        data-slider-criteria="Trending Items"
                                        data-slider-logic="TI"
                                        data-slide-position="1"
                                        data-slider-title="Trending Items"
                                        data-slider-type="dyn"
                                        data-analytics-slider=""
                                        data-analytics-slider-count="17"
                                        data-analytics-slider-logic="TI"
                                        data-analytics-slider-title="Trending Items"
                                        data-analytics-slider-type="dyn"
                                        data-analytics-slider-position="1"
                                        data-testid="best-sellers-slider-rec-for-you-link-1"
                                        data-tracking-component="link"
                                        data-tracking-id="product-title"
                                      >
                                        Communion Cups - Plastic Cups (1000
                                        Count Box)
                                      </a>
                                    </p>
                                  </div>
                                  <div>
                                    <div class="flex items-center mb-3">
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
                                        <div class="flex flex-row relative w-[22px]">
                                          <span
                                            class="block absolute overflow-hidden left-0 top-0 bottom-0"
                                            style={{ width: "80%" }}
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
                                        4.8
                                      </p>
                                      <p class="flex">
                                        (686
                                        <span class="sr-only"> reviews</span>)
                                      </p>
                                    </div>
                                    <div class="flex flex-between items-center justify-between min-h-[48px]">
                                      <div>
                                        <div class="text-center text-red text-xl">
                                          <span>
                                            <div class="text-black font-semibold">
                                              $18.28
                                            </div>
                                            <div class="text-sm text-black-64 line-through">
                                              was $21.50
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <button
                                        class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-yellow text-black border-2 border-yellow hover:text-black-3 hover:bg-yellow-hover focus:text-black-3 focus:bg-yellow-hover active:bg-yellow-active px-4 py-1.5 text-sm mt-4 hover:cursor-pointer solid-focus-ring !mt-0 ml-auto !py-3 fill-gray hover:fill-black slider-tile-link"
                                        data-product="001148445"
                                        data-analytics-product="001148445"
                                        data-slide-count="17"
                                        data-slider-alg="TI"
                                        data-slider-criteria="Trending Items"
                                        data-slider-logic="TI"
                                        data-slide-position="1"
                                        data-slider-title="Trending Items"
                                        data-slider-type="dyn"
                                        data-analytics-slider=""
                                        data-analytics-slider-count="17"
                                        data-analytics-slider-logic="TI"
                                        data-analytics-slider-title="Trending Items"
                                        data-analytics-slider-type="dyn"
                                        data-analytics-slider-position="1"
                                        data-testid="best-sellers-slider-rec-for-you-atc-1"
                                        type="button"
                                        data-tracking-component="button"
                                        data-tracking-id="add-to-cart"
                                      >
                                        <span class="sr-only">Add to Cart</span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                          width="1em"
                                          height="1em"
                                          aria-hidden="true"
                                          class="text-base"
                                        >
                                          <path d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20"></path>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="swiper-slide swiper-slide-visible swiper-slide-next"
                            style={{ width: "285.333px" }}
                          >
                            <div
                              class="flex flex-col max-w-screen-xs px-4 h-full justify-between transform translate-x-0"
                              data-product="005849947"
                              data-analytics-product="005849947"
                              data-testid="best-sellers-slider-rec-for-you-slide-2"
                              data-tracking-component="product-slide"
                              data-tracking-id="005849947"
                            >
                              <div class="flex flex-col p-1 group h-full">
                                <a
                                  class="flex flex-col items-center text-blue hover:text-blue-hover hover:underline slider-tile-link focus-visible solid-focus-ring"
                                  href="/books/single-cat"
                                  title="VBS 2025 Certificates Of Completion (Package of 50 Certificates)"
                                  data-link-text="product-slider::trending items::vbs 2025 certificates of completion -package of 50"
                                  data-analytics-link-text="product-slider::trending items::vbs 2025 certificates of completion -package of 50"
                                  data-product="005849947"
                                  data-analytics-product="005849947"
                                  data-slide-count="17"
                                  data-slider-alg="TI"
                                  data-slider-criteria="Trending Items"
                                  data-slider-logic="TI"
                                  data-slide-position="2"
                                  data-slider-title="Trending Items"
                                  data-slider-type="dyn"
                                  data-analytics-slider=""
                                  data-analytics-slider-count="17"
                                  data-analytics-slider-logic="TI"
                                  data-analytics-slider-title="Trending Items"
                                  data-analytics-slider-type="dyn"
                                  data-analytics-slider-position="2"
                                  data-tracking-component="link"
                                  data-tracking-id="image"
                                >
                                  <div class="pb-full relative w-full">
                                    <img
                                      alt="VBS 2025 Certificates Of Completion (Package of 50 Certificates)"
                                      loading="lazy"
                                      width="350"
                                      height="350"
                                      decoding="async"
                                      data-nimg="1"
                                      class="absolute bottom-0 max-h-full max-w-full left-1/2 transform -translate-x-1/2 w-auto h-auto"
                                      srcset="
                             https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/9798384511908?_a=BAVAZGDW0 1x,
                             https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/9798384511908?_a=BAVAZGDW0 2x
                           "
                                      src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/9798384511908?_a=BAVAZGDW0"
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                </a>
                                <div class="flex flex-col justify-between h-full">
                                  <div class="flex flex-col my-2">
                                    <p class="text-center my-4 line-clamp-3 !my-2 !text-left font-semibold">
                                      <a
                                        class="slider-tile-link"
                                        href="/books/single-cat"
                                        data-product="005849947"
                                        data-analytics-product="005849947"
                                        data-slide-count="17"
                                        data-slider-alg="TI"
                                        data-slider-criteria="Trending Items"
                                        data-slider-logic="TI"
                                        data-slide-position="2"
                                        data-slider-title="Trending Items"
                                        data-slider-type="dyn"
                                        data-analytics-slider=""
                                        data-analytics-slider-count="17"
                                        data-analytics-slider-logic="TI"
                                        data-analytics-slider-title="Trending Items"
                                        data-analytics-slider-type="dyn"
                                        data-analytics-slider-position="2"
                                        data-testid="best-sellers-slider-rec-for-you-link-2"
                                        data-tracking-component="link"
                                        data-tracking-id="product-title"
                                      >
                                        VBS 2025 Certificates Of Completion
                                        (Package of 50 Certificates)
                                      </a>
                                    </p>
                                  </div>
                                  <div>
                                    <div class="flex items-center mb-3">
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
                                        <div class="flex flex-row relative w-[22px]">
                                          <span
                                            class="block absolute overflow-hidden left-0 top-0 bottom-0"
                                            style={{ width: "80%" }}
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
                                        4.8
                                      </p>
                                      <p class="flex">
                                        (86<span class="sr-only"> reviews</span>
                                        )
                                      </p>
                                    </div>
                                    <div class="flex flex-between items-center justify-between min-h-[48px]">
                                      <div>
                                        <div class="text-center text-red text-xl !text-black font-semibold">
                                          <span>$5.25</span>
                                        </div>
                                      </div>
                                      <button
                                        class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-yellow text-black border-2 border-yellow hover:text-black-3 hover:bg-yellow-hover focus:text-black-3 focus:bg-yellow-hover active:bg-yellow-active px-4 py-1.5 text-sm mt-4 hover:cursor-pointer solid-focus-ring !mt-0 ml-auto !py-3 fill-gray hover:fill-black slider-tile-link"
                                        data-product="005849947"
                                        data-analytics-product="005849947"
                                        data-slide-count="17"
                                        data-slider-alg="TI"
                                        data-slider-criteria="Trending Items"
                                        data-slider-logic="TI"
                                        data-slide-position="2"
                                        data-slider-title="Trending Items"
                                        data-slider-type="dyn"
                                        data-analytics-slider=""
                                        data-analytics-slider-count="17"
                                        data-analytics-slider-logic="TI"
                                        data-analytics-slider-title="Trending Items"
                                        data-analytics-slider-type="dyn"
                                        data-analytics-slider-position="2"
                                        data-testid="best-sellers-slider-rec-for-you-atc-2"
                                        type="button"
                                        data-tracking-component="button"
                                        data-tracking-id="add-to-cart"
                                      >
                                        <span class="sr-only">Add to Cart</span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                          width="1em"
                                          height="1em"
                                          aria-hidden="true"
                                          class="text-base"
                                        >
                                          <path d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20"></path>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="swiper-slide swiper-slide-visible"
                            style={{ width: "285.333px" }}
                          >
                            <div
                              class="flex flex-col max-w-screen-xs px-4 h-full justify-between transform translate-x-0"
                              data-product="005849030"
                              data-analytics-product="005849030"
                              data-testid="best-sellers-slider-rec-for-you-slide-3"
                              data-tracking-component="product-slide"
                              data-tracking-id="005849030"
                            >
                              <div class="flex flex-col p-1 group h-full">
                                <a
                                  class="flex flex-col items-center text-blue hover:text-blue-hover hover:underline slider-tile-link focus-visible solid-focus-ring"
                                  href="/books/single-cat"
                                  title="I Surrender All"
                                  data-link-text="product-slider::trending items::i surrender all"
                                  data-analytics-link-text="product-slider::trending items::i surrender all"
                                  data-product="005849030"
                                  data-analytics-product="005849030"
                                  data-slide-count="17"
                                  data-slider-alg="TI"
                                  data-slider-criteria="Trending Items"
                                  data-slider-logic="TI"
                                  data-slide-position="3"
                                  data-slider-title="Trending Items"
                                  data-slider-type="dyn"
                                  data-analytics-slider=""
                                  data-analytics-slider-count="17"
                                  data-analytics-slider-logic="TI"
                                  data-analytics-slider-title="Trending Items"
                                  data-analytics-slider-type="dyn"
                                  data-analytics-slider-position="3"
                                  data-tracking-component="link"
                                  data-tracking-id="image"
                                >
                                  <div class="pb-full relative w-full">
                                    <img
                                      alt="I Surrender All"
                                      loading="lazy"
                                      width="350"
                                      height="350"
                                      decoding="async"
                                      data-nimg="1"
                                      class="absolute bottom-0 max-h-full max-w-full left-1/2 transform -translate-x-1/2 w-auto h-auto"
                                      srcset="
                             https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/9798384505266?_a=BAVAZGDW0 1x,
                             https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/9798384505266?_a=BAVAZGDW0 2x
                           "
                                      src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/9798384505266?_a=BAVAZGDW0"
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                </a>
                                <div class="flex flex-col justify-between h-full">
                                  <div class="flex flex-col my-2">
                                    <p class="text-center my-4 line-clamp-3 !my-2 !text-left font-semibold">
                                      <a
                                        class="slider-tile-link"
                                        href="/books/single-cat"
                                        data-product="005849030"
                                        data-analytics-product="005849030"
                                        data-slide-count="17"
                                        data-slider-alg="TI"
                                        data-slider-criteria="Trending Items"
                                        data-slider-logic="TI"
                                        data-slide-position="3"
                                        data-slider-title="Trending Items"
                                        data-slider-type="dyn"
                                        data-analytics-slider=""
                                        data-analytics-slider-count="17"
                                        data-analytics-slider-logic="TI"
                                        data-analytics-slider-title="Trending Items"
                                        data-analytics-slider-type="dyn"
                                        data-analytics-slider-position="3"
                                        data-testid="best-sellers-slider-rec-for-you-link-3"
                                        data-tracking-component="link"
                                        data-tracking-id="product-title"
                                      >
                                        I Surrender All
                                      </a>
                                    </p>
                                  </div>
                                  <div>
                                    <div class="flex items-center mb-3">
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
                                        <div class="flex flex-row relative w-[22px]">
                                          <span
                                            class="block absolute overflow-hidden left-0 top-0 bottom-0"
                                            style={{ width: "90%" }}
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
                                        4.9
                                      </p>
                                      <p class="flex">
                                        (146
                                        <span class="sr-only"> reviews</span>)
                                      </p>
                                    </div>
                                    <div class="flex flex-between items-center justify-between min-h-[48px]">
                                      <div>
                                        <div class="text-center text-red text-xl">
                                          <span>
                                            <div class="text-black font-semibold">
                                              $8.99
                                            </div>
                                            <div class="text-sm text-black-64 line-through">
                                              was $17.99
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <button
                                        class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-yellow text-black border-2 border-yellow hover:text-black-3 hover:bg-yellow-hover focus:text-black-3 focus:bg-yellow-hover active:bg-yellow-active px-4 py-1.5 text-sm mt-4 hover:cursor-pointer solid-focus-ring !mt-0 ml-auto !py-3 fill-gray hover:fill-black slider-tile-link"
                                        data-product="005849030"
                                        data-analytics-product="005849030"
                                        data-slide-count="17"
                                        data-slider-alg="TI"
                                        data-slider-criteria="Trending Items"
                                        data-slider-logic="TI"
                                        data-slide-position="3"
                                        data-slider-title="Trending Items"
                                        data-slider-type="dyn"
                                        data-analytics-slider=""
                                        data-analytics-slider-count="17"
                                        data-analytics-slider-logic="TI"
                                        data-analytics-slider-title="Trending Items"
                                        data-analytics-slider-type="dyn"
                                        data-analytics-slider-position="3"
                                        data-testid="best-sellers-slider-rec-for-you-atc-3"
                                        type="button"
                                        data-tracking-component="button"
                                        data-tracking-id="add-to-cart"
                                      >
                                        <span class="sr-only">Add to Cart</span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                          width="1em"
                                          height="1em"
                                          aria-hidden="true"
                                          class="text-base"
                                        >
                                          <path d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20"></path>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="swiper-slide"
                            style={{ width: "285.333px" }}
                          >
                            <div
                              class="flex flex-col max-w-screen-xs px-4 h-full justify-between transform translate-x-0"
                              data-product="005075106.2025-SUM"
                              data-analytics-product="005075106.2025-SUM"
                              data-testid="best-sellers-slider-rec-for-you-slide-4"
                              data-tracking-component="product-slide"
                              data-tracking-id="005075106.2025-sum"
                            >
                              <div class="flex flex-col p-1 group h-full">
                                <a
                                  class="flex flex-col items-center text-blue hover:text-blue-hover hover:underline slider-tile-link focus-visible solid-focus-ring"
                                  href="/books/single-cat"
                                  title="Open Windows Large Print - Summer 2025"
                                >
                                  <div class="pb-full relative w-full">
                                    <img
                                      alt="Open Windows Large Print - Summer 2025"
                                      loading="lazy"
                                      width="350"
                                      height="350"
                                      decoding="async"
                                      data-nimg="1"
                                      class="absolute bottom-0 max-h-full max-w-full left-1/2 transform -translate-x-1/2 w-auto h-auto"
                                      srcset="
                             https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_384/f_auto/q_auto/v1/005075106.2025-SUM?_a=BAVAZGDW0 1x,
                             https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/005075106.2025-SUM?_a=BAVAZGDW0 2x
                           "
                                      src="https://assets.lifeway.com/image/upload/d_noimage.jpg/c_limit,w_750/f_auto/q_auto/v1/005075106.2025-SUM?_a=BAVAZGDW0"
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                </a>
                                <div class="flex flex-col justify-between h-full">
                                  <div class="flex flex-col my-2">
                                    <p class="text-center my-4 line-clamp-3 !my-2 !text-left font-semibold">
                                      <a
                                        class="slider-tile-link"
                                        href="/books/single-cat"
                                        data-product="005075106.2025-SUM"
                                        data-analytics-product="005075106.2025-SUM"
                                        data-slide-count="17"
                                        data-slider-alg="TI"
                                        data-slider-criteria="Trending Items"
                                        data-slider-logic="TI"
                                        data-slide-position="4"
                                        data-slider-title="Trending Items"
                                        data-slider-type="dyn"
                                        data-analytics-slider=""
                                        data-analytics-slider-count="17"
                                        data-analytics-slider-logic="TI"
                                        data-analytics-slider-title="Trending Items"
                                        data-analytics-slider-type="dyn"
                                        data-analytics-slider-position="4"
                                        data-testid="best-sellers-slider-rec-for-you-link-4"
                                        data-tracking-component="link"
                                        data-tracking-id="product-title"
                                      >
                                        Open Windows Large Print - Summer 2025
                                      </a>
                                    </p>
                                  </div>
                                  <div>
                                    <div class="flex items-center mb-3">
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
                                        <div class="flex flex-row relative w-[22px]">
                                          <span
                                            class="block absolute overflow-hidden left-0 top-0 bottom-0"
                                            style={{ width: "90%" }}
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
                                        4.9
                                      </p>
                                      <p class="flex">
                                        (715
                                        <span class="sr-only"> reviews</span>)
                                      </p>
                                    </div>
                                    <div class="flex flex-between items-center justify-between min-h-[48px]">
                                      <div>
                                        <div class="text-center text-red text-xl !text-black font-semibold">
                                          <span>$3.90</span>
                                        </div>
                                      </div>
                                      <button
                                        class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-yellow text-black border-2 border-yellow hover:text-black-3 hover:bg-yellow-hover focus:text-black-3 focus:bg-yellow-hover active:bg-yellow-active px-4 py-1.5 text-sm mt-4 hover:cursor-pointer solid-focus-ring !mt-0 ml-auto !py-3 fill-gray hover:fill-black slider-tile-link"
                                        data-product="005075106.2025-SUM"
                                        data-analytics-product="005075106.2025-SUM"
                                        data-slide-count="17"
                                        data-slider-alg="TI"
                                        data-slider-criteria="Trending Items"
                                        data-slider-logic="TI"
                                        data-slide-position="4"
                                        data-slider-title="Trending Items"
                                        data-slider-type="dyn"
                                        data-analytics-slider=""
                                        data-analytics-slider-count="17"
                                        data-analytics-slider-logic="TI"
                                        data-analytics-slider-title="Trending Items"
                                        data-analytics-slider-type="dyn"
                                        data-analytics-slider-position="4"
                                        data-testid="best-sellers-slider-rec-for-you-atc-4"
                                        type="button"
                                        data-tracking-component="button"
                                        data-tracking-id="add-to-cart"
                                      >
                                        <span class="sr-only">Add to Cart</span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 576 512"
                                          width="1em"
                                          height="1em"
                                          aria-hidden="true"
                                          class="text-base"
                                        >
                                          <path d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20"></path>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Digital;
