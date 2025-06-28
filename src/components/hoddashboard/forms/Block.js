import { React, useEffect, useState } from "react";
// import useFetch from "hooks/useFetch";

import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";

const Block = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <body>
        <div class="main-wrapper">
          <TopNav />

          <SideNav />

          <div class="page-wrapper">
            <div class="content"></div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Block;
