// import { lazy, Suspense } from "react";
// import Profile from "./forms/Profile";
// import Analytics from "./Analytics";
// import Landing from "./Landing";

// // // Use React.lazy directly
// // const Analytics = lazy(() => import("./Analytics"));

// // Fallback UI while loading
// const LoadingFallback = () => <div>Loading...</div>;

// const StudentRoute = [
//   // {
//   //   path: "/student/dashboard",
//   //   element: (
//   //     <Suspense fallback={<LoadingFallback />}>
//   //       <Analytics />
//   //     </Suspense>
//   //   ),
//   //   auth: "student",
//   // },
//   // {
//   //   path: "/student/dashboard",
//   //   element: <Analytics />,
//   //   auth: "student",
//   // },
//   {
//     path: "/student/dashboard",
//     element: <Landing />,
//     auth: "student",
//   },
//   {
//     path: "/student/dashboard/profile",
//     element: <Profile />,
//     auth: "student",
//   },
// ];

// export default StudentRoute;
import Landing from "./Landing";
import MarkSheet from "./MarkSheet";
import Teacher from "./Teacher";
import Profile from "./forms/Profile";

// Optional fallback
const LoadingFallback = () => <div>Loading...</div>;

const StudentRoute = [
  {
    path: "/student/dashboard",
    element: <Landing />,
    auth: "student",
  },
  {
    path: "/student/dashboard/teacher",
    element: <Teacher />,
    auth: "student",
  },
  {
    path: "/student/dashboard/profile",
    element: <Profile />,
    auth: "student",
  },
  {
    path: "/student/dashboard/student_mark_sheet",
    element: <MarkSheet />,
    auth: "student",
  },
];

export default StudentRoute;
