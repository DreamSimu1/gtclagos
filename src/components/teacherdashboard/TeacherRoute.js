import AllHod from "../principaldashboard/AllHod";
import AllStudent from "../principaldashboard/AllStudent";
import AllSubject from "../principaldashboard/AllSubject";
import AllVice from "../principaldashboard/AllVice";
import BroadSheet from "../principaldashboard/BroadSheet";
import Exam from "../principaldashboard/Exam";
import Examlist from "../principaldashboard/Examlist";
import FirstTermRepCont from "../principaldashboard/FirstTermRepContd";
import MarkSheet from "../principaldashboard/MarkSheet";
import Section from "../principaldashboard/Section";
import SectionTeachersPage from "../principaldashboard/SectionTeachersPage";
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

  {
    path: "/teacher/dashboard/section-teachers/:sectionId",
    element: <SectionTeachersPage />,
    auth: "teacher",
  },
  {
    path: "/teacher/dashboard/students/:sectionId",
    element: <AllStudent />,
    auth: "teacher",
  },
  {
    path: "/teacher/dashboard/subject/:sectionId",
    element: <AllSubject />,
    auth: "teacher",
  },
  {
    path: "/teacher/dashboard/sections",
    element: <Section />,
    auth: "teacher",
  },
  {
    path: "/teacher/dashboard/student_mark_sheet/:id",
    element: <MarkSheet />,
    auth: "teacher",
  },
  {
    path: "/teacher/dashboard/first_term_report_card/:id",
    element: <FirstTermRepCont />,
    auth: "teacher",
  },
  {
    path: "/teacher/dashboard/exam",
    element: <Exam />,
    auth: "teacher",
  },
  {
    path: "/teacher/dashboard/broad_sheet",
    element: <BroadSheet />,
    auth: "teacher",
  },
  {
    path: "/teacher/dashboard/examlist",
    element: <Examlist />,
    auth: "teacher",
  },
  {
    path: "/teacher/dashboard/hod",
    element: <AllHod />,
    auth: "teacher",
  },
  {
    path: "/teacher/dashboard/vice-principal",
    element: <AllVice />,
    auth: "teacher",
  },
];

export default TeacherRoute;
// This file defines the routes for the student dashboard, including the landing page, teacher information, and profile management.
