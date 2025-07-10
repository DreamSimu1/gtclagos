import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { SessionContext } from "../../SessionContext";
import lagos from "./lagoslogo.png";
import { useReactToPrint } from "react-to-print";
import "./print.css";
import "./report.css";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const BroadSheet = () => {
  const { currentSession } = useContext(SessionContext);
  const apiUrl = process.env.REACT_APP_API_URL;
  const componentRef = useRef();
  const [exams, setExams] = useState([]);
  const [sections, setSections] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [students, setStudents] = useState([]);
  const [scores, setScores] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [selectedExam, setSelectedExam] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [firstTermScores, setFirstTermScores] = useState({});
  const [secondTermScores, setSecondTermScores] = useState({});

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
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Broadsheet Report",
    onAfterPrint: () => console.log("Print success"),
  });

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

  // const fetchBroadSheet = async () => {
  //   try {
  //     setIsLoading(true); // start loader
  //     console.log("🔄 Fetching broad sheet data...");

  //     const studentRes = await axios.get(
  //       `${apiUrl}/api/section/${selectedSection}/students/${currentSession._id}`
  //     );
  //     const allStudents = studentRes.data?.data || [];
  //     const filteredStudents = allStudents.filter(
  //       (s) => s.tech === selectedTech
  //     );

  //     console.log(
  //       "👨‍🎓 Filtered Students:",
  //       filteredStudents.map((s) => s.fullname)
  //     );

  //     // const selectedExamObj = exams.find((e) => e._id === selectedExam);
  //     const selectedExamObj = exams.find(
  //       (e) => String(e._id) === String(selectedExam)
  //     );

  //     // const isSecondTerm = selectedExamObj?.term === "Second Term";
  //     const isSecondTerm = selectedExamObj?.name
  //       ?.toUpperCase()
  //       .includes("SECOND TERM");

  //     console.log("📘 Selected Exam Object:", selectedExamObj);
  //     console.log("🧠 Is Second Term:", isSecondTerm);

  //     const scoreRes = await axios.get(
  //       `${apiUrl}/api/offline/get-broadsheet/${selectedExam}/${selectedSection}/${selectedTech}`
  //     );

  //     let tempFirstTermScores = {};

  //     if (isSecondTerm) {
  //       // const firstTermExam = exams.find(
  //       //   (e) => e.term === "First Term" && e.sessionId === currentSession._id
  //       // );
  //       const firstTermExam = exams.find(
  //         (e) =>
  //           e.name?.toUpperCase().includes("FIRST TERM") &&
  //           String(e.session) === String(currentSession._id)
  //       );

  //       if (firstTermExam?._id) {
  //         console.log("✅ Found matching 1st Term Exam:", firstTermExam);

  //         const token = localStorage.getItem("jwtToken");
  //         const headers = {
  //           Authorization: `Bearer ${token}`,
  //         };

  //         for (const student of filteredStudents) {
  //           try {
  //             const res = await axios.get(
  //               `${apiUrl}/api/offline/get-scores-by-student/${student._id}/${currentSession._id}`,
  //               { headers }
  //             );

  //             const scores = res.data?.scores || [];
  //             console.log(`📚 Scores for ${student.fullname}:`, scores);

  //             let matchedFirstTermScoreCount = 0;

  //             scores.forEach((score) => {
  //               const examName = score.examId?.name?.toUpperCase() || "UNKNOWN";

  //               console.log(
  //                 `🔍 Checking score for ${student.fullname} - Subject: ${
  //                   score.subjectId?.name || "Unknown"
  //                 }, Exam Name: ${examName}`
  //               );

  //               if (examName.includes("FIRST TERM") && score.subjectId?._id) {
  //                 const studentId = student._id;
  //                 const subjectId = score.subjectId._id;

  //                 if (!tempFirstTermScores[studentId]) {
  //                   tempFirstTermScores[studentId] = {};
  //                 }

  //                 tempFirstTermScores[studentId][subjectId] = {
  //                   test: score.testscore || 0,
  //                   exam: score.examscore || 0,
  //                   total: (score.testscore || 0) + (score.examscore || 0),
  //                 };

  //                 matchedFirstTermScoreCount++;
  //               }
  //             });

  //             if (matchedFirstTermScoreCount === 0) {
  //               console.warn(
  //                 `⚠️ No matching 1st Term scores for ${student.fullname}`
  //               );
  //             }
  //           } catch (error) {
  //             console.error(
  //               `❌ Error fetching 1st term scores for ${student.fullname}`,
  //               error
  //             );
  //           }
  //         }

  //         console.log(
  //           "✅ Final First Term Scores Object:",
  //           JSON.stringify(tempFirstTermScores, null, 2)
  //         );
  //         setFirstTermScores(tempFirstTermScores);
  //       } else {
  //         console.warn("⚠️ First Term Exam not found for current session.");
  //       }
  //     }

  //     setStudents(filteredStudents);
  //     setScores(scoreRes.data?.scores || {});
  //     setFirstTermScores(tempFirstTermScores); // always set what we built
  //     setShowTable(true);

  //     console.log("✅ Scores for current term:", scoreRes.data?.scores || {});
  //     console.log("✅ BroadSheet ready to render.");
  //   } catch (err) {
  //     console.error("❌ Error fetching broadsheet:", err);
  //   } finally {
  //     setIsLoading(false); // stop loader
  //   }
  // };
  const fetchBroadSheet = async () => {
    try {
      setIsLoading(true);
      console.log("🔄 Fetching broad sheet data...");

      const studentRes = await axios.get(
        `${apiUrl}/api/section/${selectedSection}/students/${currentSession._id}`
      );
      const allStudents = studentRes.data?.data || [];
      const filteredStudents = allStudents.filter(
        (s) => s.tech === selectedTech
      );

      console.log(
        "👨‍🎓 Filtered Students:",
        filteredStudents.map((s) => s.fullname)
      );

      const selectedExamObj = exams.find(
        (e) => String(e._id) === String(selectedExam)
      );

      const examName = selectedExamObj?.name?.toUpperCase() || "";
      const isSecondTerm = examName.includes("SECOND TERM");
      const isThirdTerm = examName.includes("THIRD TERM");

      console.log("📘 Selected Exam:", examName);
      console.log("🧠 Is Second Term:", isSecondTerm);
      console.log("🧠 Is Third Term:", isThirdTerm);

      const scoreRes = await axios.get(
        `${apiUrl}/api/offline/get-broadsheet/${selectedExam}/${selectedSection}/${selectedTech}`
      );

      const token = localStorage.getItem("jwtToken");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      let tempFirstTermScores = {};
      let tempSecondTermScores = {};

      if (isSecondTerm || isThirdTerm) {
        const firstTermExam = exams.find(
          (e) =>
            e.name?.toUpperCase().includes("FIRST TERM") &&
            String(e.session) === String(currentSession._id)
        );

        if (firstTermExam?._id) {
          console.log("✅ Found 1st Term Exam:", firstTermExam.name);

          for (const student of filteredStudents) {
            try {
              const res = await axios.get(
                `${apiUrl}/api/offline/get-scores-by-student/${student._id}/${currentSession._id}`,
                { headers }
              );

              const scores = res.data?.scores || [];
              scores.forEach((score) => {
                const examTitle = score.examId?.name?.toUpperCase() || "";
                if (examTitle.includes("FIRST TERM") && score.subjectId?._id) {
                  const sid = student._id;
                  const subid = score.subjectId._id;
                  if (!tempFirstTermScores[sid]) tempFirstTermScores[sid] = {};
                  tempFirstTermScores[sid][subid] = {
                    test: score.testscore || 0,
                    exam: score.examscore || 0,
                    total: (score.testscore || 0) + (score.examscore || 0),
                  };
                }
              });
            } catch (err) {
              console.error("❌ Error fetching 1st term scores:", err);
            }
          }
        } else {
          console.warn("⚠️ No 1st term exam found.");
        }
      }

      // 👇 Fetch 2nd term scores if third term
      if (isThirdTerm) {
        const secondTermExam = exams.find(
          (e) =>
            e.name?.toUpperCase().includes("SECOND TERM") &&
            String(e.session) === String(currentSession._id)
        );

        if (secondTermExam?._id) {
          console.log("✅ Found 2nd Term Exam:", secondTermExam.name);

          for (const student of filteredStudents) {
            try {
              const res = await axios.get(
                `${apiUrl}/api/offline/get-scores-by-student/${student._id}/${currentSession._id}`,
                { headers }
              );

              const scores = res.data?.scores || [];
              scores.forEach((score) => {
                const examTitle = score.examId?.name?.toUpperCase() || "";
                if (examTitle.includes("SECOND TERM") && score.subjectId?._id) {
                  const sid = student._id;
                  const subid = score.subjectId._id;
                  if (!tempSecondTermScores[sid])
                    tempSecondTermScores[sid] = {};
                  tempSecondTermScores[sid][subid] = {
                    test: score.testscore || 0,
                    exam: score.examscore || 0,
                    total: (score.testscore || 0) + (score.examscore || 0),
                  };
                }
              });
            } catch (err) {
              console.error("❌ Error fetching 2nd term scores:", err);
            }
          }
        } else {
          console.warn("⚠️ No 2nd term exam found.");
        }
      }

      // ✅ Set states
      setStudents(filteredStudents);
      setScores(scoreRes.data?.scores || {});
      setFirstTermScores(tempFirstTermScores); // reused as needed
      setSecondTermScores(tempSecondTermScores); // must declare via useState
      setShowTable(true);

      console.log("✅ Broadsheet data ready.");
    } catch (err) {
      console.error("❌ Error fetching broadsheet:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // const getScore = (studentId, subjectId, field, term = "current") => {
  //   const source = term === "first" ? firstTermScores : scores;

  //   return source?.[studentId]?.[subjectId]?.[field] || "";
  // };
  const getScore = (studentId, subjectId, field, term = "current") => {
    let source = scores;

    if (term === "first") source = firstTermScores;
    else if (term === "second") source = secondTermScores;

    return source?.[studentId]?.[subjectId]?.[field] || "";
  };

  const selectedSectionName =
    sections.find((s) => s._id === selectedSection)?.name || "";
  const selectedTechLabel =
    techTabs.find((t) => t.key === selectedTech)?.label || "";
  const selectedExamName =
    exams.find((exam) => exam._id === selectedExam)?.name || "";
  const handleDownloadExcel = () => {
    if (!students.length || !subjects.length) return;

    const data = students.map((student, index) => {
      const row = {
        "#": index + 1,
        "Student Name": student.fullname,
      };

      let total = 0;

      subjects.forEach((subj) => {
        const test = getScore(student._id, subj._id, "test") || 0;
        const exam = getScore(student._id, subj._id, "exam") || 0;
        const totalSubj = getScore(student._id, subj._id, "total") || 0;
        total += Number(totalSubj);

        row[`${subj.name} - Test`] = test;
        row[`${subj.name} - Exam`] = exam;
        row[`${subj.name} - Total`] = totalSubj;
      });

      row["Total"] = total;
      row["Average"] = (total / subjects.length).toFixed(2);

      return row;
    });

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Broadsheet");

    const filename = `Broadsheet_${selectedTechLabel}_${selectedExamName}_${selectedSectionName}.xlsx`;
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const blob = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(blob, filename);
  };
  const handleDownloadPDF = () => {
    const input = componentRef.current;
    if (!input) return;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "pt", "a4");

      const imgWidth = 820; // size of PDF content
      const pageHeight = 595;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 20, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 20, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(
        `Broadsheet_${selectedTechLabel}_${selectedExamName}_${selectedSectionName}.pdf`
      );
    });
  };
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

            {/*} <button
              className="btn btn-primary"
              onClick={fetchBroadSheet}
              disabled={!(selectedExam && selectedSection && selectedTech)}
            >
              Load BroadSheet
            </button>*/}
            <button
              className="btn btn-primary"
              onClick={fetchBroadSheet}
              disabled={
                isLoading || !(selectedExam && selectedSection && selectedTech)
              }
            >
              {isLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </>
              ) : (
                "Load BroadSheet"
              )}
            </button>

            {showTable && (
              <div style={{ overflowX: "auto" }} className="mt-4">
                <button
                  onClick={handlePrint}
                  type="button"
                  className="force-mobile-button"
                >
                  Print this out!
                </button>
                <button
                  type="button"
                  className="force-mobile-button"
                  onClick={handleDownloadExcel}
                >
                  Download as Excel
                </button>
                <button
                  onClick={handleDownloadPDF}
                  type="button"
                  className="force-mobile-button"
                >
                  Download as PDF
                </button>

                <div style={{ display: showTable ? "block" : "none" }}>
                  <div
                    ref={componentRef}
                    style={{
                      width: "max-content", // allow full table width
                      overflow: "visible", // prevent clipping
                    }}
                  >
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
                          Lateef Jakande road, Agidingbi, P.M.B 101233 Lagos
                          State
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
                          {subjects.map((subj) => {
                            let colSpan = 3;
                            if (selectedExamName.includes("Second Term"))
                              colSpan = 4;
                            if (selectedExamName.includes("Third Term"))
                              colSpan = 5;

                            return (
                              <th key={subj._id} colSpan={colSpan}>
                                {subj.name}
                              </th>
                            );
                          })}
                          <th>Total</th>
                          <th>Average</th>
                          <th>Remarks</th>
                        </tr>

                        <tr>
                          <th></th>
                          <th></th>
                          {subjects.map((subj) => (
                            <React.Fragment key={subj._id + "_headers"}>
                              {(selectedExamName.includes("Second Term") ||
                                selectedExamName.includes("Third Term")) && (
                                <th>BF</th>
                              )}
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
                                const firstTerm = Number(
                                  getScore(
                                    student._id,
                                    subj._id,
                                    "total",
                                    "first"
                                  ) || 0
                                );
                                const secondTerm = Number(
                                  getScore(
                                    student._id,
                                    subj._id,
                                    "total",
                                    "second"
                                  ) || 0
                                );
                                const test = Number(
                                  getScore(
                                    student._id,
                                    subj._id,
                                    "test",
                                    "current"
                                  ) || 0
                                );
                                const exam = Number(
                                  getScore(
                                    student._id,
                                    subj._id,
                                    "exam",
                                    "current"
                                  ) || 0
                                );
                                const totalCurrent = test + exam;

                                let bf = 0;
                                let finalTotal = 0;

                                if (selectedExamName.includes("Third Term")) {
                                  bf = Math.round((firstTerm + secondTerm) / 2);
                                  finalTotal = Math.round(
                                    (bf + totalCurrent) / 2
                                  );
                                } else if (
                                  selectedExamName.includes("Second Term")
                                ) {
                                  bf = firstTerm;
                                  finalTotal = Math.round(
                                    (bf + totalCurrent) / 2
                                  );
                                } else {
                                  finalTotal = totalCurrent;
                                }

                                overallTotal += finalTotal;

                                return (
                                  <React.Fragment
                                    key={student._id + "_" + subj._id}
                                  >
                                    {(selectedExamName.includes(
                                      "Second Term"
                                    ) ||
                                      selectedExamName.includes(
                                        "Third Term"
                                      )) && <td>{bf}</td>}
                                    <td>{test}</td>
                                    <td>{exam}</td>
                                    <td>{finalTotal}</td>
                                  </React.Fragment>
                                );
                              })}

                              <td>{overallTotal}</td>
                              <td>
                                {(overallTotal / subjects.length).toFixed(2)}
                              </td>
                              <td></td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadSheet;
