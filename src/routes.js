// import { Navigate } from "react-router-dom";

// import AdminRoute from "./components/admindashboard/AdminRoute";
// import sessionRoutes from "./components/sessions/SessionRoutes";
// // import AdminDashboard from "./components/admindashboard/admin/AdminDashboard";

// const routes = [
//   {
//     path: "/admin-dashboard",
//     element: <AdminRoute />,
//   },
//   ...sessionRoutes,
//   { path: "/", element: <Navigate to="/login" /> },
// ];

// export default routes;

// src/routes.js
// import { Navigate } from "react-router-dom";
// import AdminRoute from "./components/admindashboard/AdminRoute";
// import sessionRoutes from "./components/sessions/SessionRoutes";
// import SalesRoute from "./components/salesdashboard/SalesRoute";
// import ManagerRoute from "./components/managerdashboard/ManagerRoute";
// import AuthGuard from "./auth/AuthGuard";

// const routes = [
//   ...sessionRoutes, // Unauthenticated routes
//   {
//     element: <AuthGuard />,
//     children: [...AdminRoute, ...SalesRoute, ...ManagerRoute],
//   },
//   // Ensure this comes last
//   { path: "/", element: <Navigate to="/dashboard/sales-dashboard" /> },
// ];

// export default routes;

// import { Navigate } from "react-router-dom";
// import AdminRoute from "./components/admindashboard/AdminRoute";
// import sessionRoutes from "./components/sessions/SessionRoutes";
// import SalesRoute from "./components/salesdashboard/SalesRoute";
// import ManagerRoute from "./components/managerdashboard/ManagerRoute";
// import AuthGuard from "./auth/AuthGuard";
// import Home from "./pages/Home";
// import GoogleAuthHandler from "./GoogleAuthHandler";
// import NotFound from "./components/sessions/NotFound";

// const routes = [
//   { path: "/oauth-callback", element: <GoogleAuthHandler /> },
//   {
//     element: (
//       <AuthGuard>
//         <MatxLayout />
//       </AuthGuard>
//     ),

//     children: [...AdminRoute, ...SalesRoute, ...ManagerRoute],
//   },
//   ...sessionRoutes,

//   // { path: "/", element: <Navigate to="vision" /> },
//   { path: "/", element: <Navigate to="/login" /> },
//   { path: "*", element: <NotFound /> },
// ];

// export default routes;

// import { Navigate } from "react-router-dom";
// import sessionRoutes from "./components/sessions/SessionRoutes";

// import StudentRoute from "./components/studentdashboard/StudentRoute";

// import AuthGuard from "./auth/AuthGuard";
// import Home from "./pages/Home";
// import GoogleAuthHandler from "./GoogleAuthHandler";
// import NotFound from "./components/sessions/NotFound";

// const routes = [
//   { path: "/oauth-callback", element: <GoogleAuthHandler /> },

//   {
//     element: <AuthGuard />,
//     children: [...StudentRoute],
//   },
//   ...sessionRoutes,

//   // { path: "/", element: <Navigate to="vision" /> },
//   { path: "/", element: <Navigate to="/login" /> },
//   { path: "*", element: <NotFound /> },
// ];

// export default routes;
// routes.js

import { Navigate } from "react-router-dom";
import sessionRoutes from "./components/sessions/SessionRoutes";
import StudentRoute from "./components/studentdashboard/StudentRoute";
import AuthGuard from "./auth/AuthGuard";
import GoogleAuthHandler from "./GoogleAuthHandler";
import NotFound from "./components/sessions/NotFound";
import RoleBasedLayout from "./components/RoleBasedLayout";
import PrincipalRoute from "./components/principaldashboard/PrincipalRoute";
import ViceRoute from "./components/vicedashboard/ViceRoute";
import HodRoute from "./components/hoddashboard/HodRoute";
import TeacherRoute from "./components/teacherdashboard/TeacherRoute";
// ... other routes

const routes = [
  { path: "/oauth-callback", element: <GoogleAuthHandler /> },
  {
    element: <AuthGuard />, // checks token existence
    children: [
      {
        element: <RoleBasedLayout />, // shows sidebar based on role
        children: [
          ...StudentRoute,
          ...ViceRoute,
          ...HodRoute,
          ...PrincipalRoute,
          ...TeacherRoute,
        ],
      },
    ],
  },
  ...sessionRoutes,
  { path: "/", element: <Navigate to="/login" /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
