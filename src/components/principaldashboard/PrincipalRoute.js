import AllHod from "./AllHod";
import AllStudent from "./AllStudent";
import AllSubject from "./AllSubject";
import Exam from "./Exam";
import Examlist from "./Examlist";
import Profile from "./forms/Profile";
import Landing from "./Landing";
import MarkSheet from "./MarkSheet";
import Section from "./Section";
import SectionTeachersPage from "./SectionTeachersPage";
import Teacher from "./Teacher";

// Optional fallback
const LoadingFallback = () => <div>Loading...</div>;

const PrincipalRoute = [
  {
    path: "/principal/dashboard",
    element: <Landing />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/teacher",
    element: <Teacher />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/section-teachers/:sectionId",
    element: <SectionTeachersPage />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/students/:sectionId",
    element: <AllStudent />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/subject/:sectionId",
    element: <AllSubject />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/sections",
    element: <Section />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/student_mark_sheet/:id",
    element: <MarkSheet />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/exam",
    element: <Exam />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/examlist",
    element: <Examlist />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/hod",
    element: <AllHod />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/profile",
    element: <Profile />,
    auth: "principal",
  },
];

export default PrincipalRoute;
