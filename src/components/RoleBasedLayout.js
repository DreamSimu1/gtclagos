// RoleBasedLayout.jsx
import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import StudentSidebar from "./StudentSidebar";
import TeacherSidebar from "./TeacherSidebar";
import PrincipalSidebar from "./PrincipalSidebar";
import HodSidebar from "./HodSidebar";
import ViceSidebar from "./ViceSidebar";
import { jwtDecode } from "jwt-decode";
import TopNav from "./TopNav";
import PrincipalTopNav from "./PrincipalTopNav";
import StudentTopNav from "./StudentTopNav";
import TeacherTopNav from "./TeacherTopNav";
import HodTopNav from "./HodTopNav";
import ViceTopNav from "./ViceTopNav";

// const RoleBasedLayout = () => {
//   const [role, setRole] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("jwtToken");
//     if (!token) return navigate("/login");

//     const decoded = JSON.parse(atob(token.split(".")[1]));
//     console.log("Decoded token:", decoded);
//     setRole(decoded.role);
//   }, [navigate]);

//   const getSidebarByRole = () => {
//     switch (role) {
//       case "student":
//         return <StudentSidebar />;
//       case "teacher":
//         return <TeacherSidebar />;
//       case "vice_principal":
//         return <ViceSidebar />;
//       case "head_of_department":
//         return <HodSidebar />;
//       default:
//         return <p>No sidebar for role: {role}</p>;
//     }
//   };

//   return (
//     <div className="main-wrapper">
//       {getSidebarByRole()}
//       <div className="main-content">
//         <Outlet />
//       </div>
//     </div>
//   );
// };
const RoleBasedLayout = () => {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Detect screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust as needed
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  // useEffect(() => {
  //   const token = localStorage.getItem("jwtToken");
  //   if (!token) return navigate("/login");

  //   try {
  //     const decoded = JSON.parse(atob(token.split(".")[1]));
  //     console.log("Decoded token in layout:", decoded);
  //     setRole(decoded.role);
  //   } catch (err) {
  //     console.error("Token decoding failed:", err);
  //     navigate("/login");
  //   }
  // }, [navigate]);
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) return navigate("/login");

    try {
      const decoded = jwtDecode(token);
      console.log("Decoded in layout:", decoded);
      setRole(decoded.role);
    } catch (err) {
      console.error("Invalid JWT:", err);
      navigate("/login");
    }
  }, []);
  if (!role) return <div></div>;

  const getTopbarByRole = () => {
    switch (role) {
      case "student":
        return <StudentTopNav />;
      case "teacher":
        return <TeacherTopNav />;
      case "principal":
        return <PrincipalTopNav />;
      case "head_of_department":
        return <HodTopNav />;
      case "vice_principal":
        return <ViceTopNav />;
      default:
        return <TopNav />; // fallback
    }
  };

  const getSidebarByRole = () => {
    switch (role) {
      case "student":
        return <StudentSidebar />;
      case "teacher":
        return <TeacherSidebar />;
      case "vice_principal":
        return <ViceSidebar />;
      case "head_of_department":
        return <HodSidebar />;
      case "principal":
        return <PrincipalSidebar />;
      default:
        return <p>No sidebar for role: {role}</p>;
    }
  };

  return (
    <div className="main-wrapper">
      {getTopbarByRole()}
      {/* Only show the sidebar on desktop */}
      {!isMobile && getSidebarByRole()}

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default RoleBasedLayout;
