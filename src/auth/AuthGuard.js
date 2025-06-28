// import useAuth from "../components/hooks/useAuth";
// // import { flat } from 'app/utils/utils';
// import { Navigate, useLocation } from "react-router-dom";
// const AuthGuard = ({ children }) => {
//   const { isAuthenticated, isInitialised } = useAuth();
//   const { pathname } = useLocation();

//   const storedAccessToken = localStorage.getItem("jwtToken");

//   // if (!isInitialised) {
//   //   return <div>Loading...</div>;
//   // }

//   if (!isInitialised) {
//     return null; // or a hidden loader
//   }

//   // Check if either isAuthenticated or storedAccessToken exists
//   const isUserAuthenticated = isAuthenticated || storedAccessToken;

//   return isUserAuthenticated ? (
//     <>{children}</>
//   ) : (
//     <Navigate replace to="/login" state={{ from: pathname }} />
//   );
// };

// export default AuthGuard;

// // import { flat } from 'app/utils/utils';
// import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../components/hooks/useAuth";
// const AuthGuard = ({ children }) => {
//   const { isAuthenticated, user } = useAuth();
//   const { pathname } = useLocation();

//   const userHasPermission = () => {
//     // Implement your role-based authorization logic here
//     // Check if the user has the required role to access the current route
//     // You can use the `user` object to determine the user's role

//     // Example: If you have a "role" property in the user object
//     // and you want to allow access to students and teachers only:
//     if (
//       user &&
//       (user.role === "student" ||
//         user.role === "teacher" ||
//         user.role === "head_of_department" ||
//         user.role === "vice_principal" ||
//         user.role === "principal")
//     ) {
//       return true;
//     }

//     return false; // Default to denying access
//   };

//   const authorized = isAuthenticated && userHasPermission();

//   console.log("isAuthenticated:", isAuthenticated);
//   console.log("user:", user);
//   console.log("pathname:", pathname);

//   if (authorized) {
//     console.log("Access granted. Proceeding to the route.");
//     return children;
//   } else {
//     console.log("Access denied. Redirecting to /login");
//     return <Navigate replace to="/login" state={{ from: pathname }} />;
//   }
// };

// // export default AuthGuard;
// import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../components/hooks/useAuth";

// const AuthGuard = ({ children }) => {
//   const { isAuthenticated, isInitialised, user } = useAuth();
//   const { pathname } = useLocation();

//   const userHasPermission = () => {
//     if (
//       user &&
//       [
//         "student",
//         "teacher",
//         "head_of_department",
//         "vice_principal",
//         "principal",
//       ].includes(user.role)
//     ) {
//       return true;
//     }
//     return false;
//   };

//   const authorized = isAuthenticated && userHasPermission();

//   if (!isInitialised) {
//     // 👇 Wait for auth state to be initialized
//     return <div>Loading authentication...</div>;
//   }

//   if (authorized) {
//     return children;
//   } else {
//     console.warn("Unauthorized access. Redirecting to login.");
//     return <Navigate replace to="/login" state={{ from: pathname }} />;
//   }
// };

// export default AuthGuard;
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";

const AuthGuard = () => {
  const { isAuthenticated, isInitialised, user } = useAuth();
  const { pathname } = useLocation();

  const userHasPermission = () => {
    if (
      user &&
      [
        "student",
        "teacher",
        "head_of_department",
        "vice_principal",
        "principal",
      ].includes(user.role)
    ) {
      return true;
    }
    return false;
  };

  const authorized = isAuthenticated && userHasPermission();

  if (!isInitialised) {
    return <div>Loading authentication...</div>;
  }

  if (authorized) {
    return <Outlet />; // ✅ This allows nested routes to render
  } else {
    console.warn("Unauthorized access. Redirecting to login.");
    return <Navigate replace to="/login" state={{ from: pathname }} />;
  }
};

export default AuthGuard;
