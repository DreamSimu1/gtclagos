import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { SessionContext } from "../../SessionContext";
import lagos from "./lagoslogo.png";
const BroadSheet = () => {
  const { currentSession } = useContext(SessionContext);
  const apiUrl = process.env.REACT_APP_API_URL;

  const [exams, setExams] = useState([]);
  const [sections, setSections] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [students, setStudents] = useState([]);
  const [scores, setScores] = useState({});

  const [selectedExam, setSelectedExam] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [showTable, setShowTable] = useState(false);

  const techTabs = [
    { key: "tech_1", label: "Tech 1", color: "#1b8914" },
    { key: "tech_2", label: "Tech 2", color: "#5191fc" },
    { key: "tech_3", label: "Tech 3", color: "#feba43" },
  ];

  useEffect(() => {
    if (currentSession?._id) {
      fetchExams();
      fetchSections();
    }
  }, [currentSession]);

  useEffect(() => {
    if (selectedSection && selectedTech && currentSession?._id) {
      fetchSubjects();
    }
  }, [selectedSection, selectedTech, currentSession]);

  const fetchExams = async () => {
    try {
      const res = await axios.get(
        `${apiUrl}/api/offline/get-exams/${currentSession._id}`
      );
      setExams(res.data || []);
    } catch (err) {
      console.error("Error fetching exams:", err);
    }
  };

  const fetchSections = async () => {
    try {
      const res = await axios.get(
        `${apiUrl}/api/section/${currentSession._id}`
      );
      setSections(res.data?.data || []);
    } catch (err) {
      console.error("Error fetching sections:", err);
    }
  };

  const fetchSubjects = async () => {
    try {
      const res = await axios.get(
        `${apiUrl}/api/subject/all/${selectedSection}/${currentSession._id}`
      );
      const techSubjects =
        res.data?.filter((s) => s.classname === selectedTech) || [];
      setSubjects(techSubjects);
    } catch (err) {
      console.error("Error fetching subjects:", err);
    }
  };

  const fetchBroadSheet = async () => {
    try {
      const studentRes = await axios.get(
        `${apiUrl}/api/section/${selectedSection}/students/${currentSession._id}`
      );
      const allStudents = studentRes.data?.data || [];
      const filteredStudents = allStudents.filter(
        (s) => s.tech === selectedTech
      );

      const scoreRes = await axios.get(
        `${apiUrl}/api/offline/get-broadsheet/${selectedExam}/${selectedSection}/${selectedTech}`
      );

      setStudents(filteredStudents);
      setScores(scoreRes.data?.scores || {});
      setShowTable(true);
    } catch (err) {
      console.error("Error fetching broadsheet:", err);
    }
  };

  const getScore = (studentId, subjectId, field) => {
    return scores?.[studentId]?.[subjectId]?.[field] || "";
  };
  const selectedSectionName =
    sections.find((s) => s._id === selectedSection)?.name || "";
  const selectedTechLabel =
    techTabs.find((t) => t.key === selectedTech)?.label || "";
  const selectedExamName =
    exams.find((exam) => exam._id === selectedExam)?.name || "";

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <div className="card p-4">
            <div className="row g-3 mb-3">
              <div className="col-md-4">
                <select
                  className="form-select"
                  value={selectedExam}
                  onChange={(e) => setSelectedExam(e.target.value)}
                >
                  <option value="">Select Exam</option>
                  {exams.map((exam) => (
                    <option key={exam._id} value={exam._id}>
                      {exam.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <select
                  className="form-select"
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                >
                  <option value="">Select Section</option>
                  {sections.map((section) => (
                    <option key={section._id} value={section._id}>
                      {section.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <select
                  className="form-select"
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                >
                  <option value="">Select Tech</option>
                  {techTabs.map((tech) => (
                    <option key={tech.key} value={tech.key}>
                      {tech.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              className="btn btn-primary"
              onClick={fetchBroadSheet}
              disabled={!(selectedExam && selectedSection && selectedTech)}
            >
              Load BroadSheet
            </button>

            {showTable && (
              <div style={{ overflowX: "auto" }} className="mt-4">
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  <div className="logo">
                    {/*} <img
                                    src={`https://edupros.s3.amazonaws.com/${accountSettings.schoolLogo}`}
                                    style={{
                                      width: "200px",
                                      height: "180px",
                                    }}
                                    alt="School Logo"
                                  />*/}
                    <img
                      src={lagos}
                      alt="Logo 2"
                      style={{
                        width: "200px",
                        height: "180px",
                      }}
                    />
                  </div>
                  <div className="bd_title">
                    <h3 style={{ color: "#042954", margin: "10px 0" }}>
                      LAGOS STATE TECHNICAL AND VOCATIONAL EDUCATION BOARD
                    </h3>
                    <h3 style={{ color: "#042954", margin: "10px 0" }}>
                      GOVERNMENT TECHNICAL COLLEGE AGIDINGBI LAGOS
                    </h3>
                    {/*<h1
                                    style={{
                                      fontSize: "25px",
                                      fontWeight: "800",
                                      textTransform: "uppercase",
                                      margin: "10px 0",
                                    }}
                                  >
                                    {accountSettings.name || ""}
                                  </h1>*/}
                    <h4 style={{ fontSize: "18px", margin: "5px 0" }}>
                      Lateef Jakande road, Agidingbi, P.M.B 101233 Lagos State
                    </h4>
                    <p style={{ color: "#042954", margin: "5px 0" }}>
                      Email: gotecolagos@yahoo.com
                    </p>
                    <h3 style={{ color: "#042954", margin: "10px 0" }}>
                      2024/2025 {selectedTechLabel} {selectedExamName} Broad
                      Sheet
                    </h3>

                    <h3 style={{ color: "#042954", margin: "10px 0" }}>
                      {selectedSectionName} Section
                    </h3>
                  </div>
                </div>

                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Student Name</th>
                      {subjects.map((subj) => (
                        <th key={subj._id} colSpan="3">
                          {subj.name}
                        </th>
                      ))}
                      <th>Total</th>
                      <th>Average</th>
                      <th>Remarks</th>
                    </tr>
                    <tr>
                      <th></th>
                      <th></th>
                      {subjects.map((subj) => (
                        <React.Fragment key={subj._id + "_headers"}>
                          <th>Test</th>
                          <th>Exam</th>
                          <th>Total</th>
                        </React.Fragment>
                      ))}
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, index) => {
                      let overallTotal = 0;
                      return (
                        <tr key={student._id}>
                          <td>{index + 1}</td>
                          <td>{student.fullname}</td>
                          {subjects.map((subj) => {
                            const test = getScore(
                              student._id,
                              subj._id,
                              "test"
                            );
                            const exam = getScore(
                              student._id,
                              subj._id,
                              "exam"
                            );
                            const total = getScore(
                              student._id,
                              subj._id,
                              "total"
                            );
                            overallTotal += Number(total || 0);
                            return (
                              <React.Fragment
                                key={student._id + "_" + subj._id}
                              >
                                <td>{test}</td>
                                <td>{exam}</td>
                                <td>{total}</td>
                              </React.Fragment>
                            );
                          })}
                          <td>{overallTotal}</td>
                          <td>{(overallTotal / subjects.length).toFixed(2)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadSheet;
