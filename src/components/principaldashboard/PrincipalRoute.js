import Account from "./Account";
import AllHod from "./AllHod";
import AllStudent from "./AllStudent";
import AllSubject from "./AllSubject";
import AllVice from "./AllVice";
import BroadSheet from "./BroadSheet";
import Exam from "./Exam";
import Examlist from "./Examlist";
import FirstTermRepCont from "./FirstTermRepContd";
import Profile from "./forms/Profile";
import Landing from "./Landing";
import ManagePsy from "./ManagePsy";
import MarkSheet from "./MarkSheet";
import PsyCat from "./PsyCat";
import SecondTermRepCont from "./SecondTermRepContd";
import Section from "./Section";
import SectionTeachersPage from "./SectionTeachersPage";
import Teacher from "./Teacher";
import ThirdTermRepCont from "./ThirdTermRepContd";

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
    path: "/principal/dashboard/psychomotor_report_category",

    element: <ManagePsy />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/manage-psychomotor",
    element: <PsyCat />,
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
    path: "/principal/dashboard/account",
    element: <Account />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/student_mark_sheet/:id",
    element: <MarkSheet />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/first_term_report_card/:id",
    element: <FirstTermRepCont />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/second_term_report_card/:id",
    element: <SecondTermRepCont />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/third_term_report_card/:id",
    element: <ThirdTermRepCont />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/exam",
    element: <Exam />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/broad_sheet",
    element: <BroadSheet />,
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
    path: "/principal/dashboard/vice-principal",
    element: <AllVice />,
    auth: "principal",
  },
  {
    path: "/principal/dashboard/profile",
    element: <Profile />,
    auth: "principal",
  },
];

export default PrincipalRoute;
