import Landing from "./Landing";
import Teacher from "./Teacher";
import Profile from "./forms/Profile";

// Optional fallback
const LoadingFallback = () => <div>Loading...</div>;

const TeacherRoute = [
  {
    path: "/teacher/dashboard",
    element: <Landing />,
    auth: "teacher",
  },
  {
    path: "/teacher/dashboard/teacher",
    element: <Teacher />,
    auth: "teacher",
  },
  {
    path: "/teacher/dashboard/profile",
    element: <Profile />,
    auth: "teacher",
  },
];

export default TeacherRoute;
// This file defines the routes for the student dashboard, including the landing page, teacher information, and profile management.
