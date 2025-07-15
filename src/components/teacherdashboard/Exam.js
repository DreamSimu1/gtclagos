import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { SessionContext } from "../../SessionContext";
import useAuth from "../hooks/useAuth";

const Exam = () => {
  const { currentSession } = useContext(SessionContext);
  const apiUrl = process.env.REACT_APP_API_URL;
  const { user } = useAuth();
  const [exams, setExams] = useState([]);
  const [sections, setSections] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [students, setStudents] = useState([]);
  const [subjectIdLookup, setSubjectIdLookup] = useState({});
  const [selectedExam, setSelectedExam] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [showTable, setShowTable] = useState(false);

  const techTabs = [
    { key: "tech_1", label: "Tech 1", color: "#1b8914" },
    { key: "tech_2", label: "Tech 2", color: "#5191fc" },
    { key: "tech_3", label: "Tech 3", color: "#feba43" },
  ];
  // useEffect(() => {
  //   const fetchSections = async () => {
  //     try {
  //       if (user?.tradeSection && currentSession?._id) {
  //         console.log("Fetching section for user:", user);
  //         const response = await axios.get(
  //           `${apiUrl}/api/section/one/${user.tradeSection}`
  //         );
  //         console.log("Fetched section:", response.data?.data);
  //         setSections(response.data?.data ? [response.data.data] : []);
  //       } else {
  //         console.warn("Waiting for user or currentSession...");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching sections:", error);
  //     }
  //   };

  //   fetchSections();
  // }, [user, currentSession, apiUrl]);

  useEffect(() => {
    if (currentSession?._id) {
      fetchExams();
      fetchSections();
    }
  }, [currentSession]);

  const fetchSections = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/section/${currentSession._id}`
      );
      setSections(response.data?.data || []);
    } catch (error) {
      console.error("Error fetching sections:", error);
    }
  };
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

  // const fetchSubjects = async () => {
  //   try {
  //     const res = await axios.get(
  //       `${apiUrl}/api/subject/all/${selectedSection}/${currentSession._id}`
  //     );
  //     setSubjects(res.data || []);
  //   } catch (err) {
  //     console.error("Error fetching subjects:", err);
  //   }
  // };
  const fetchSubjects = async () => {
    try {
      const res = await axios.get(
        `${apiUrl}/api/subject/all/${selectedSection}/${currentSession._id}`
      );

      console.log("Fetched subjects from API:", res.data);
      console.log("Current teacher/user ID:", user?._id);

      const filteredSubjects = res.data.filter((subject) => {
        const teacherId =
          typeof subject.teacher === "object"
            ? subject.teacher._id
            : subject.teacher;

        return teacherId === user._id;
      });

      console.log("Filtered subjects:", filteredSubjects);
      setSubjects(filteredSubjects);
    } catch (err) {
      console.error("Error fetching subjects:", err);
    }
  };

  // const fetchStudents = async () => {
  //   try {
  //     const res = await axios.get(
  //       `${apiUrl}/api/section/${selectedSection}/students/${currentSession._id}`
  //     );

  //     const filtered = res.data.filter((s) => s.tech === selectedTech);
  //     const studentsWithScores = filtered.map((student) => ({
  //       ...student,
  //       testscore: 0,
  //       examscore: 0,
  //       marksObtained: 0,
  //       comment: "",
  //     }));
  //     setStudents(studentsWithScores);
  //     setShowTable(true);
  //   } catch (err) {
  //     console.error("Error fetching students:", err);
  //   }
  // };
  // const fetchStudents = async () => {
  //   try {
  //     const res = await axios.get(
  //       `${apiUrl}/api/section/${selectedSection}/students/${currentSession._id}`
  //     );

  //     // Extract the actual student array from the response
  //     const allStudents = res.data?.data || [];

  //     // Filter by selected tech/classname
  //     const filtered = allStudents.filter((s) => s.tech === selectedTech);

  //     const studentsWithScores = filtered.map((student) => ({
  //       ...student,
  //       testscore: "", // now input will appear empty
  //       examscore: "", // now input will appear empty
  //       marksObtained: 0,
  //       comment: "",
  //     }));

  //     setStudents(studentsWithScores);
  //     setShowTable(true);
  //   } catch (err) {
  //     console.error("Error fetching students:", err);
  //   }
  // };
  const fetchStudents = async () => {
    try {
      // Get all students in the section
      const res = await axios.get(
        `${apiUrl}/api/section/${selectedSection}/students/${currentSession._id}`
      );
      const allStudents = res.data?.data || [];
      const filteredStudents = allStudents.filter(
        (s) => s.tech === selectedTech
      );

      // Fetch existing scores
      const scoreRes = await axios.get(
        `${apiUrl}/api/offline/get-all-scores/${selectedExam}/${selectedSubject}`
      );
      const existingScores = scoreRes.data?.scores || [];

      // Merge scores with students
      const merged = filteredStudents.map((student) => {
        const existing = existingScores.find(
          (s) => s.studentId?._id === student._id
        );
        return {
          ...student,
          testscore: existing?.testscore ?? "",
          examscore: existing?.examscore ?? "",
          marksObtained:
            (existing?.testscore || 0) + (existing?.examscore || 0),
          comment: existing?.comment ?? "",
        };
      });

      setStudents(merged);
      setShowTable(true);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  const handleScoreChange = (index, field, value) => {
    const updated = [...students];
    updated[index][field] = Number(value);
    updated[index].marksObtained =
      updated[index].testscore + updated[index].examscore;
    updated[index].comment = generateComment(updated[index].marksObtained);
    setStudents(updated);
  };

  const generateComment = (total) => {
    if (total >= 70) return "Excellent";
    if (total >= 60) return "Very Good";
    if (total >= 50) return "Good";
    if (total >= 40) return "Fair";
    return "Poor";
  };

  // const handleSubmit = async () => {
  //   try {
  //     const payload = {
  //       examId: selectedExam,
  //       subjectId: selectedSubject,
  //       updates: students.map((s) => ({
  //         studentId: s._id,
  //         testscore: s.testscore,
  //         examscore: s.examscore,
  //         marksObtained: s.marksObtained,
  //         comment: s.comment,
  //       })),
  //     };
  //     await axios.post(
  //       `${apiUrl}/api/offline/save-marks/${currentSession._id}`,
  //       payload
  //     );
  //     alert("Marks submitted successfully");
  //   } catch (err) {
  //     console.error("Error submitting marks:", err);
  //     alert("Submission failed");
  //   }
  // };
  // const handleSubmit = async () => {
  //   try {
  //     // const payload = {
  //     //   examId: selectedExam,
  //     //   subjectId: selectedSubject,
  //     //   updates: students.map((s) => ({
  //     //     studentId: s._id,
  //     //     testscore: s.testscore,
  //     //     examscore: s.examscore,
  //     //     marksObtained: Number(s.testscore || 0) + Number(s.examscore || 0),
  //     //     comment: s.comment,
  //     //   })),
  //     // };
  //     const payload = {
  //       examId: selectedExam,
  //       subjectId: selectedSubject,
  //       updates: students.map((s) => ({
  //         studentId: s._id,
  //         testscore: s.testscore,
  //         examscore: s.examscore,
  //         marksObtained: Number(s.testscore || 0) + Number(s.examscore || 0),
  //         comment: s.comment,
  //       })),
  //     };

  //     await axios.put(`${apiUrl}/api/offline/update-all-marks`, payload);
  //     alert("Marks submitted successfully");
  //   } catch (err) {
  //     console.error("Error submitting marks:", err);
  //     alert("Submission failed");
  //   }
  // };
  // const handleSubmit = async () => {
  //   try {
  //     const payload = {
  //       examId: selectedExam,
  //       subjectId: selectedSubject,
  //       updates: students.map((s) => ({
  //         studentId: s._id,
  //         testscore: s.testscore,
  //         examscore: s.examscore,
  //         marksObtained: Number(s.testscore || 0) + Number(s.examscore || 0),
  //         comment: s.comment,
  //       })),
  //     };

  //     await axios.post(
  //       `${apiUrl}/api/offline/save-marks/${currentSession._id}`,
  //       payload
  //     );

  //     alert("Marks submitted successfully");
  //   } catch (err) {
  //     console.error("Error submitting marks:", err);
  //     alert("Submission failed");
  //   }
  // };
  const handleSubmit = async () => {
    try {
      const marks = students.map((student) => ({
        studentId: student._id,
        subjectId: selectedSubject,
        testscore: student.testscore || 0,
        examscore: student.examscore || 0,
        marksObtained: (student.testscore || 0) + (student.examscore || 0),
        comment: student.comment || "",
      }));

      const token = localStorage.getItem("jwtToken");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const checkRes = await fetch(
        `${apiUrl}/api/offline/get-all-scores/${selectedExam}/${selectedSubject}`,
        { headers }
      );

      const data = await checkRes.json();
      const existingMarks = data?.scores || [];

      if (existingMarks.length > 0) {
        // Update
        const res = await fetch(`${apiUrl}/api/offline/update-all-marks`, {
          method: "PUT",
          headers,
          body: JSON.stringify({
            examId: selectedExam,
            subjectId: selectedSubject,
            updates: marks,
          }),
        });

        if (!res.ok) throw new Error("Update failed");
        alert("Marks updated successfully!");
      } else {
        // Save
        const res = await fetch(
          `${apiUrl}/api/offline/save-marks/${currentSession._id}`,
          {
            method: "POST",
            headers,
            body: JSON.stringify({
              examId: selectedExam,
              subjectId: selectedSubject,
              updates: marks,
              session: currentSession._id,
            }),
          }
        );

        if (!res.ok) throw new Error("Save failed");
        alert("Marks saved successfully!");
      }
    } catch (err) {
      console.error("Error submitting marks:", err);
      alert("Failed to submit marks.");
    }
  };

  useEffect(() => {
    if (selectedSection) fetchSubjects();
  }, [selectedSection]);

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <div className="card p-4">
            <div className="row g-3 mb-3">
              <div className="col-md-3">
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

              <div className="col-md-3">
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

              <div className="col-md-3">
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

              <div className="col-md-3">
                <select
                  className="form-select"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  disabled={!selectedTech} // disable if tech not selected
                >
                  <option value="">Select Subject</option>
                  {subjects
                    .filter((subj) => subj.classname === selectedTech) // 🔥 FILTER HERE
                    .map((subj) => (
                      <option key={subj._id} value={subj._id}>
                        {subj.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <button
              className="force-mobile-button"
              onClick={fetchStudents}
              disabled={
                !(
                  selectedExam &&
                  selectedSection &&
                  selectedTech &&
                  selectedSubject
                )
              }
            >
              Load Students
            </button>

            {showTable && (
              <>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Student Name</th>
                      <th>Test Score</th>
                      <th>Exam Score</th>
                      <th>Total</th>
                      <th>Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, index) => (
                      <tr key={student._id}>
                        <td>{index + 1}</td>
                        <td>{student.fullname}</td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={student.testscore}
                            onChange={(e) =>
                              handleScoreChange(
                                index,
                                "testscore",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={student.examscore}
                            onChange={(e) =>
                              handleScoreChange(
                                index,
                                "examscore",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>{student.marksObtained}</td>
                        <td>{student.comment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  className="btn "
                  onClick={handleSubmit}
                  style={{ backgroundColor: "#e63e54", color: "white" }}
                >
                  Submit Marks
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
