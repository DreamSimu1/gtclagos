import Landing from "./Landing";
import Teacher from "./Teacher";
import Profile from "./forms/Profile";

// Optional fallback
const LoadingFallback = () => <div>Loading...</div>;

const HodRoute = [
  {
    path: "/hod/dashboard",
    element: <Landing />,
    auth: "hod",
  },
  {
    path: "/hod/dashboard/teacher",
    element: <Teacher />,
    auth: "hod",
  },
  {
    path: "/hod/dashboard/profile",
    element: <Profile />,
    auth: "hod",
  },
];

export default HodRoute;
// This file defines the routes for the student dashboard, including the landing page, teacher information, and profile management.
