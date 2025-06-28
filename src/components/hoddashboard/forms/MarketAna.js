import React, {
  useEffect,
  useRef,
  useState,
  Fragment,
  useContext,
} from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import Sidebars from "../Sidebars";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import "./point.css";
import { useSidebar } from "../SidebarProvider";
import { DarkModeContext } from "../../../context/darkModeContext";
import TradingViewWidget from "./TradingViewWidget"; // Ensure the path is correct

const MarketAna = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#212121" : "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <SideNav />
        <TopNav />
        <div
          className="page-wrapper"
          style={{
            marginTop: "10px",
            backgroundColor: darkMode ? "#212121" : "#f5f5f5",
            marginBottom: "0px",
            color: darkMode ? "white" : "black",
          }}
        >
          <div className="content">
            <h4 style={{ marginBottom: "20px" }}>
              Market Analysis - Live Forex Chart
            </h4>
            <TradingViewWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAna;
