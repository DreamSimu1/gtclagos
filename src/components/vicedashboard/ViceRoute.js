import Profile from "./forms/Profile";
import Landing from "./Landing";
import Teacher from "./Teacher";

// Optional fallback
const LoadingFallback = () => <div>Loading...</div>;

const ViceRoute = [
  {
    path: "/vice/dashboard",
    element: <Landing />,
    auth: "vice",
  },
  {
    path: "/vice/dashboard/teacher",
    element: <Teacher />,
    auth: "vice",
  },
  {
    path: "/vice/dashboard/profile",
    element: <Profile />,
    auth: "vice",
  },
];

export default ViceRoute;
