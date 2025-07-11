import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { SessionContext } from "../../SessionContext";
import { toast } from "react-toastify";

const PsyCat = () => {
  const { currentSession } = useContext(SessionContext);
  const apiUrl = process.env.REACT_APP_API_URL;

  const [exams, setExams] = useState([]);
  const [sections, setSections] = useState([]);
  const [students, setStudents] = useState([]);

  const [selectedExam, setSelectedExam] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedTech, setSelectedTech] = useState("");

  const [showTable, setShowTable] = useState(false);

  const techTabs = [
    { key: "tech_1", label: "Tech 1" },
    { key: "tech_2", label: "Tech 2" },
    { key: "tech_3", label: "Tech 3" },
  ];

  useEffect(() => {
    if (currentSession?._id) {
      fetchExams();
      fetchSections();
    }
  }, [currentSession]);

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

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const res = await axios.get(
        `${apiUrl}/api/section/${selectedSection}/students/${currentSession._id}`
      );
      const allStudents = res.data?.data || [];
      const filtered = allStudents.filter((s) => s.tech === selectedTech);

      const existingRes = await axios.get(
        `${apiUrl}/api/get-all-psy/${selectedExam}`,
        {
          headers,
        }
      );

      const existingScores = existingRes.data?.scores || [];

      const merged = filtered.map((student) => {
        const existing = existingScores.find(
          (s) => s.studentId?._id === student._id
        );
        return {
          ...student,
          remarks: existing?.remarks || "",
          premarks: existing?.premarks || "",
        };
      });

      setStudents(merged);
      setShowTable(true);
    } catch (err) {
      console.error("Error fetching students:", err);
      toast.error("Failed to load students.");
    }
  };

  const handleCommentChange = (index, field, value) => {
    const updated = [...students];
    updated[index][field] = value;
    setStudents(updated);
  };

  // const handleSubmit = async () => {
  //   try {
  //     const updates = students.map((student) => ({
  //       studentId: student._id,
  //       remarks: student.remarks,
  //       premarks: student.premarks,
  //     }));

  //     const token = localStorage.getItem("jwtToken");
  //     const headers = {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     };

  //     const checkRes = await axios.get(
  //       `${apiUrl}/api/get-all-psy/${selectedExam}`,
  //       {
  //         headers,
  //       }
  //     );
  //     const existing = checkRes.data?.scores || [];

  //     if (existing.length > 0) {
  //       // Update
  //       await axios.put(
  //         `${apiUrl}/api/update-all-psy`,
  //         {
  //           examId: selectedExam,
  //           updates,
  //         },
  //         { headers }
  //       );
  //       toast.success("Comments updated successfully!");
  //     } else {
  //       // Save
  //       await axios.post(
  //         `${apiUrl}/api/save-psy/${currentSession._id}`,
  //         {
  //           examId: selectedExam,
  //           updates,
  //           session: currentSession._id,
  //         },
  //         { headers }
  //       );
  //       toast.success("Comments saved successfully!");
  //     }
  //   } catch (err) {
  //     console.error("Error submitting comments:", err);
  //     toast.error("Failed to submit comments.");
  //   }
  // };
  const handleSubmit = async () => {
    try {
      const updates = students.map((student) => ({
        studentId: student._id,
        remarks: student.remarks,
        premarks: student.premarks,
      }));

      const token = localStorage.getItem("jwtToken");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const checkRes = await axios.get(
        `${apiUrl}/api/get-all-psy/${selectedExam}`,
        {
          headers,
        }
      );
      const existing = checkRes.data?.scores || [];

      if (existing.length > 0) {
        // Update
        await axios.put(
          `${apiUrl}/api/update-all-psy`,
          {
            examId: selectedExam,
            updates,
          },
          { headers }
        );
        toast.success("Comments updated successfully!");
        alert("✅ Comments updated successfully!");
      } else {
        // Save
        await axios.post(
          `${apiUrl}/api/save-psy/${currentSession._id}`,
          {
            examId: selectedExam,
            updates,
            session: currentSession._id,
          },
          { headers }
        );
        toast.success("Comments saved successfully!");
        alert("✅ Comments saved successfully!");
      }
    } catch (err) {
      console.error("Error submitting comments:", err);
      toast.error("Failed to submit comments.");
      alert("❌ Failed to submit comments. Please try again.");
    }
  };

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
            </div>

            <button
              className="btn btn-primary mb-3"
              onClick={fetchStudents}
              disabled={!(selectedExam && selectedSection && selectedTech)}
            >
              Load Students
            </button>

            {showTable && (
              <>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Adm No</th>
                      <th>Student Name</th>
                      <th>Class Teacher Comment</th>
                      <th>Principal Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, index) => (
                      <tr key={student._id}>
                        <td>{index + 1}</td>
                        <td>{student.admissionNumber}</td>
                        <td>{student.fullname}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={student.remarks}
                            onChange={(e) =>
                              handleCommentChange(
                                index,
                                "remarks",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={student.premarks}
                            onChange={(e) =>
                              handleCommentChange(
                                index,
                                "premarks",
                                e.target.value
                              )
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <button
                  className="btn"
                  onClick={handleSubmit}
                  style={{ backgroundColor: "#e63e54", color: "white" }}
                >
                  Submit Comments
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsyCat;
