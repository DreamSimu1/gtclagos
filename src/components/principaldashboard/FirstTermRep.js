import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import axios from "axios";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { SessionContext } from "../../SessionContext";
import useFetch from "../../hooks/useFetch";
import last from "./lastveblogo.png";
import lagos from "./lagoslogo.png";
const FirstTermRep = ({ studentId }) => {
  const componentRef = useRef();
  const gradeDefinitions = [
    { markfrom: 70, markupto: 100, comment: "Excellent", grade: "A" },
    { markfrom: 60, markupto: 69, comment: "Very Good", grade: "B" },
    { markfrom: 50, markupto: 59, comment: "Good", grade: "C" },
    { markfrom: 45, markupto: 49, comment: "Fairly Good", grade: "D" },
    { markfrom: 40, markupto: 44, comment: "Poor", grade: "E" },
    { markfrom: 0, markupto: 39, comment: "Poor", grade: "F" },
  ];

  const handlePrint = useReactToPrint({
    content: () => {
      if (!componentRef.current) {
        alert("Nothing to print.");
        return null;
      }
      return componentRef.current;
    },
  });

  const [studentData, setStudentData] = useState([]);
  const [psyData, setPsyData] = useState(null);
  const { currentSession } = useContext(SessionContext);

  // const { data } = useFetch(`/students/${id}`);

  // const { data } = useFetch(`/auth/student/${studentId}/${currentSession._id}`);
  // const { data } = useFetch(
  //   currentSession?._id
  //     ? `/auth/student/${studentId}/${currentSession._id}`
  //     : null
  // );
  const { data: studentApiResponse } = useFetch(
    currentSession?._id
      ? `/auth/student/${studentId}/${currentSession._id}`
      : null
  );

  // Destructure to get the actual student data
  const student = studentApiResponse?.data;

  // const { data,  } = useFetch(`/students/${user._id}`); // Fetch data using the correct URL

  const [loading, setLoading] = useState(true);
  const [teacherName, setTeacherName] = useState("");

  const [error, setError] = useState(null);
  const [schoolSettings, setSchoolSettings] = useState({
    principalName: "",
    resumptionDate: "",
    signature: "",
  });
  const [accountSettings, setAccountSettings] = useState({
    name: "",
    motto: "",
    address: "",
    phone: "",
    phonetwo: "",
    email: "",
    sessionStart: "",
    sessionEnd: "",
    schoolLogo: "",
  });

  const apiUrl = process.env.REACT_APP_API_URL;

  //   useEffect(() => {
  //   if (!studentId || !currentSession?._id) return;

  //   const fetchData = async () => {
  //     setLoading(true);

  //     try {
  //       const studentScores = await fetchStudentData(studentId);
  //       setStudentData(studentScores);
  //     } catch (error) {
  //       console.error("Error loading student scores:", error);
  //       setError("Failed to load student data");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [studentId, currentSession]);

  useEffect(() => {
    if (!studentId || !currentSession?._id) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const studentScores = await fetchStudentData(studentId);
        const psyRecord = await fetchPsyData(studentId);
        console.log("Fetched Psy Record:", psyRecord);
        setPsyData(psyRecord);
        setStudentData(studentScores);
      } catch (error) {
        setError("Failed to fetch student data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [studentId, currentSession]);

  const fetchPsyData = async (studentId) => {
    console.log("Before API call...");

    try {
      const token = localStorage.getItem("jwtToken");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      if (!currentSession?._id) {
        throw new Error("Missing sessionId");
      }

      const examName = "FIRST TERM";

      const response = await axios.get(
        `${apiUrl}/api/get-psy-by-student/${studentId}/${currentSession._id}`,
        { headers }
      );

      console.log("API response status:", response.status);
      console.log("Original data:", response.data);

      const records = response.data.records;

      const firstTermRecord = records.find(
        (record) => record.examName?.toUpperCase() === examName
      );

      if (!firstTermRecord) {
        // console.warn("No firsr term scores found for the student");
        // alert("No first term scores available for this student.");
        return null;
      }

      console.log("First Term Record:", firstTermRecord);
      return firstTermRecord;
    } catch (error) {
      console.error("Error fetching student data:", error);
      alert("An error occurred while fetching data. Please try again.");
      return null;
    }
  };

  const fetchclassteacher = async (studentId) => {
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        throw new Error("JWT token not found");
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        `${apiUrl}/api/class/${currentSession._id}`,
        { headers }
      );

      // Debug: Log the entire API response
      console.log("API Response for class:", response.data);

      // Assuming 'data' holds the student data
      const studentClassName = student?.classname; // Replace with correct field
      if (!studentClassName) {
        throw new Error("Student's class is not found");
      }

      // Find the class that matches the student's class name
      const matchedClass = response.data.find(
        (classItem) => classItem.name === studentClassName
      );

      if (matchedClass) {
        console.log("Class Teacher:", matchedClass.teacher);
        setTeacherName(matchedClass.teacher);
        return matchedClass.teacher;
      } else {
        console.log("No class found matching the student's class.");
      }
    } catch (error) {
      console.error("Error fetching class teacher:", error);
      // throw new Error("Failed to fetch class teacher");
    }
  };

  useEffect(() => {
    if (studentId && currentSession?._id) {
      fetchclassteacher(studentId);
    }
  }, [studentId, currentSession]);

  const fetchStudentData = async (studentId) => {
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        throw new Error("JWT token not found");
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        `${apiUrl}/api/offline/get-scores-by-student/${studentId}/${currentSession._id}`,
        { headers }
      );

      console.log("Raw Scores Response:", response.data);
      // console.log("Score being checked:", score);
      // console.log("Valid marks?", validMarks, "Is second term?", isSecondTerm);

      const filteredScores = response.data.scores.filter(
        (score) =>
          (score.marksObtained !== undefined || score.marksObtained === 0) &&
          // score.examId.name.toUpperCase() === "SECOND TERM"
          score?.examId?.name?.toUpperCase() === "FIRST TERM"
      );

      if (filteredScores.length === 0) {
        // console.warn("No first term scores found for the student");
        return []; // <<< Important: Return empty array instead of throwing
      }
      console.log("Filtered Scores:", filteredScores);

      const scoresWithPositions = await Promise.all(
        filteredScores.map(async (score) => {
          const { examId, subjectId } = score;

          if (!examId || !subjectId) {
            console.error(
              "Exam ID or Subject ID not found for a score:",
              score
            );
            return { ...score, position: "-" }; // use placeholder
          }

          const allStudentsData = await fetchAllStudentsData(
            examId._id,
            subjectId._id
          );

          const sortedStudents = allStudentsData.sort(
            (a, b) => b.marksObtained - a.marksObtained
          );

          const studentPosition =
            sortedStudents.findIndex(
              (student) => student.studentId?._id === studentId
            ) + 1;

          return {
            ...score,
            position: studentPosition,
          };
        })
      );

      return scoresWithPositions;
    } catch (error) {
      console.error("Error fetching student data:", error);
      return []; // <<< Also important: always return [] on error
    }
  };

  const fetchAllStudentsData = async (examId, subjectId) => {
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        throw new Error("JWT token not found");
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        `${apiUrl}/api/offline/get-all-scores/${examId}/${subjectId}`,
        { headers }
      );

      console.log("All Students Data:", response.data);

      const data = response.data;
      if (data && data.scores) {
        console.log("Number of students with marks:", data.scores.length);
        const studentsWithMarks = data.scores.filter(
          (student) =>
            student.marksObtained !== undefined && student.marksObtained !== 0
        );
        console.log("Students with marks:", studentsWithMarks);

        return studentsWithMarks;
      } else {
        console.log("No scores data available.");
        return [];
      }
    } catch (error) {
      console.error("Error fetching all students data:", error);
      throw new Error("Failed to fetch all students data");
    }
  };

  useEffect(() => {
    const fetchSchoolSettings = async () => {
      try {
        // Log the API URL and parameters being used
        console.log("Fetching School Settings...");
        console.log("API URL:", `${apiUrl}/api/setting`);
        console.log("Parameters:", {
          sessionId: currentSession._id,
          term: "FIRST TERM",
        });

        const response = await axios.get(`${apiUrl}/api/setting`, {
          params: {
            sessionId: currentSession._id,
            term: "FIRST TERM", // Or dynamically determine term
          },
        });

        // Log the full API response
        console.log("Full API Response:", response);

        // Extract data from the API response
        const { data } = response.data;

        // Log the extracted data
        console.log("Extracted Data (School Settings):", data);

        // Update state with the fetched data
        setSchoolSettings(data);
      } catch (error) {
        // Log the error if the API request fails
        console.error("Error fetching school settings:", error);
      }
    };

    fetchSchoolSettings();
  }, [apiUrl, currentSession]);
  useEffect(() => {
    const fetchAccountSettings = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/account-setting`);
        const { data } = response.data;

        // Set the retrieved school settings to the state
        setAccountSettings(data);
      } catch (error) {
        console.error("Error fetching school settings:", error);
      }
    };

    fetchAccountSettings();
  }, [apiUrl]);

  // useEffect(() => {
  //   console.log("useEffect triggered");
  //   console.log("new studentId:", studentId);
  //   console.log("new currentSession:", currentSession);

  //   if (!studentId || !currentSession?._id) return;

  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const data = await fetchPsyData(studentId);
  //       console.log("PsyData new fetched data:", data);

  //       // Assuming data is an array and the first element is the one you want
  //       const studentData = data[0];
  //       console.log("PsyData marks structure:", studentData?.marks); // Access marks directly from the first element

  //       setPsyData(studentData); // Set the student data directly, not the array
  //       // Log the entire psyData
  //       console.log("PsyData after setting:", studentData); // Log the full object
  //     } catch (error) {
  //       setError("Failed to fetch student data");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [studentId, currentSession]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  if (error) {
    return <p>{error}</p>;
  }
  console.log("New Student Data:", studentData); // Log studentData to check its structure

  let totalMarksObtained = 0;

  if (studentData && Array.isArray(studentData)) {
    totalMarksObtained = studentData.reduce(
      (total, score) => total + (score.marksObtained || 0),
      0
    );
  }

  console.log("Total Marks Obtained:", totalMarksObtained); // Log totalMarksObtained

  // const totalMarks = studentData?.scores
  //   ? studentData.scores.length * 100 // Assuming 100 marks per subject
  //   : 0;
  const totalMarks = studentData ? studentData.length * 100 : 0;

  const averageMarks = totalMarks
    ? ((totalMarksObtained / totalMarks) * 100).toFixed(1)
    : 0;

  const calculateGrade = (comment) => {
    // Use your existing gradeDefinitions to find a grade with a similar comment
    const matchingGrade = gradeDefinitions.find((grade) =>
      comment.toLowerCase().includes(grade.comment.toLowerCase())
    );

    // Return the grade if a matching grade is found
    return matchingGrade ? matchingGrade.grade : "-";
  };

  const calculateAverageGrade = () => {
    const gradeToValueMap = {
      A: 5,
      B: 4,
      C: 3,
      D: 2,
      E: 1,
    };

    let totalGradeValues = 0;
    let totalMarksObtained = 0;
    let totalSubjects = 0;

    // Check if there are subjects with valid grades
    const subjectsWithGrades = studentData?.filter(
      (score) => score?.marksObtained !== undefined
    );

    if (!subjectsWithGrades || subjectsWithGrades.length === 0) {
      console.log("No subjects with valid grades found.");
      return "N/A";
    }

    subjectsWithGrades.forEach((score) => {
      const gradeValue = gradeToValueMap[calculateGrade(score?.comment)];
      const marksObtained = score?.marksObtained;

      if (
        !isNaN(gradeValue) &&
        gradeValue !== undefined &&
        !isNaN(marksObtained) &&
        marksObtained !== undefined
      ) {
        console.log("Grade Value:", gradeValue);
        console.log("Marks Obtained:", marksObtained);

        totalGradeValues += gradeValue;
        totalMarksObtained += marksObtained;
        totalSubjects += 1;
      }
    });

    console.log("Total Grade Values:", totalGradeValues);
    console.log("Total Marks Obtained:", totalMarksObtained);
    console.log("Total Subjects:", totalSubjects);

    if (
      totalMarksObtained === 0 ||
      totalGradeValues === 0 ||
      totalSubjects === 0
    ) {
      console.log("Unable to calculate average grade.");
      return "N/A";
    }

    const averageGradeValue = totalGradeValues / totalSubjects;

    console.log("Average Grade Value:", averageGradeValue);

    if (isNaN(averageGradeValue)) {
      console.log("Average grade value is NaN.");
      return "N/A";
    }

    return averageGradeValue.toFixed(2);
  };
  const handleDownloadPDF = () => {
    const input = componentRef.current;
    if (!input) return;

    html2canvas(input, {
      scrollX: 0,
      scrollY: -window.scrollY,
      windowWidth: input.scrollWidth,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      // Use custom page size based on content
      const pdf = new jsPDF("landscape", "pt", [imgWidth, imgHeight]);

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      pdf.save(`ReportCard_${student?.fullname || "Student"}.pdf`);
    });
  };

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <div className="card">
            <div width="100%" overflow="auto">
              <button
                onClick={() => {
                  console.log("Attempting to print...");
                  handlePrint();
                }}
                className="force-mobile-button"
              >
                Print this out!
              </button>
              <button
                onClick={handleDownloadPDF}
                type="button"
                className="force-mobile-button"
              >
                Download as PDF
              </button>
              <div className="comp" ref={componentRef}>
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
                      {student?.classname || ""} First Term Report Card
                    </h3>
                  </div>
                </div>

                <div className="bd_detailssec" style={{ padding: "20px" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      textAlign: "left",
                      border: "1px solid #000",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            padding: "10px",
                            borderRight: "2px solid #000",
                            verticalAlign: "middle",
                            textAlign: "center",
                          }}
                        >
                          <img
                            className="profile-photo"
                            alt="profile-photo"
                            src="https://hlhs.portalreport.org/uploads/user.jpg"
                            style={{
                              width: "100px",
                              height: "100px",
                              borderRadius: "50%",
                              border: "2px solid #000",
                            }}
                          />
                        </td>
                        <td
                          style={{
                            padding: "10px",
                            borderRight: "2px solid #000",
                            verticalAlign: "top",
                          }}
                        >
                          <div style={{ marginBottom: "10px" }}>
                            <span style={{ fontWeight: "bold" }}>
                              Trainee's Name:
                            </span>
                            <span
                              style={{
                                marginLeft: "10px",
                                borderBottom: "1px solid black",
                                display: "inline-block",
                                paddingBottom: "2px",
                                minWidth: "200px",
                              }}
                            >
                              {student?.fullname || "Name not available"}
                            </span>
                          </div>
                          <div style={{ marginBottom: "10px" }}>
                            <span style={{ fontWeight: "bold" }}>
                              Student ID:
                            </span>
                            <span
                              style={{
                                marginLeft: "10px",
                                borderBottom: "1px solid black",
                                display: "inline-block",
                                paddingBottom: "2px",
                                minWidth: "100px",
                              }}
                            >
                              {student?.admNo || "Name not available"}
                            </span>
                          </div>
                          <div style={{ marginBottom: "10px" }}>
                            <span style={{ fontWeight: "bold" }}>Year:</span>
                            <span
                              style={{
                                marginLeft: "10px",
                                borderBottom: "1px solid black",
                                display: "inline-block",
                                paddingBottom: "2px",
                                minWidth: "200px",
                              }}
                            >
                              {currentSession?.name
                                ? `${currentSession.name}`
                                : "No active session"}
                            </span>
                          </div>
                          <div style={{ marginBottom: "10px" }}>
                            <span style={{ fontWeight: "bold" }}>
                              Teacher's Name:
                            </span>
                            <span
                              style={{
                                marginLeft: "10px",
                                borderBottom: "1px solid black",
                                display: "inline-block",
                                paddingBottom: "2px",
                                minWidth: "200px",
                              }}
                            ></span>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "10px",
                            verticalAlign: "top",
                          }}
                        >
                          <div style={{ marginBottom: "10px" }}>
                            <span style={{ fontWeight: "bold" }}>Section:</span>
                            <span
                              style={{
                                marginLeft: "10px",
                                borderBottom: "1px solid black",
                                display: "inline-block",
                                paddingBottom: "2px",
                                minWidth: "100px",
                              }}
                            >
                              {student?.tradeSection?.name ||
                                "Name not available"}
                            </span>
                          </div>
                          <div style={{ marginBottom: "10px" }}>
                            <span style={{ fontWeight: "bold" }}>Class:</span>
                            <span
                              style={{
                                marginLeft: "10px",
                                borderBottom: "1px solid black",
                                display: "inline-block",
                                paddingBottom: "2px",
                                minWidth: "100px",
                              }}
                            >
                              {student?.tech || "Name not available"}
                            </span>
                          </div>
                          <div style={{ marginBottom: "10px" }}>
                            <span style={{ fontWeight: "bold" }}>
                              Next term begins:
                            </span>
                            <span
                              style={{
                                marginLeft: "10px",
                                borderBottom: "1px solid black",
                                display: "inline-block",
                                paddingBottom: "2px",
                                minWidth: "100px",
                              }}
                            >
                              {schoolSettings.resumptionDate
                                ? new Date(
                                    schoolSettings.resumptionDate
                                  ).toLocaleDateString()
                                : ""}
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="tables-container flex">
                  {/* First Table */}

                  <div style={{ overflowX: "auto" }}>
                    <table
                      className="table"
                      id="customers"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th>S/No</th>
                          <th>Subject</th>
                          <th>CA(40)</th>
                          <th>Exam(60)</th>
                          <th>AVE. TOTAL(100)</th>

                          <th>Grade</th>
                        </tr>
                      </thead>
                      <tbody style={{ width: "100% !important" }}>
                        {/* Check if there's data and map through the scores */}
                        {studentData && studentData.length > 0 ? (
                          studentData.map((score, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td> {/* Serial number */}
                              <td>{score?.subjectName || "-"}</td>{" "}
                              {/* Subject Name */}
                              <td>
                                {score?.testscore !== undefined
                                  ? score.testscore
                                  : "-"}
                              </td>{" "}
                              {/* Test Score */}
                              <td>
                                {score?.examscore !== undefined
                                  ? score.examscore
                                  : "-"}
                              </td>{" "}
                              {/* Exam Score */}
                              <td>
                                {score?.marksObtained !== undefined
                                  ? score.marksObtained
                                  : "-"}
                              </td>{" "}
                              {/* Obtained Marks */}
                              <td>
                                {calculateGrade(score?.comment) || "-"}
                              </td>{" "}
                              {/* Grade */}
                              {/* Comment/Remark */}
                            </tr>
                          ))
                        ) : (
                          // Fallback for when no data is available
                          <tr>
                            <td colSpan="8">
                              No data available for this term.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  {/* Second Table */}
                </div>

                <div
                  style={{
                    color: "#000",
                    fontSize: "16px",
                    marginBottom: "20px",
                  }}
                >
                  <table
                    className="table table-bordered"
                    style={{ width: "100%", backgroundColor: "#f9f9f9" }}
                  >
                    <thead style={{ backgroundColor: "#e6f0ff" }}>
                      <tr>
                        <th
                          colSpan="1"
                          style={{
                            fontWeight: "bold",
                            color: "#042954",
                            textAlign: "left",
                          }}
                        >
                          GRADING
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          A = 70% and above (Excellent), B = 60 - 69% (Very
                          Good), C = 50 - 59% (Good), D = 40 - 49% (Fair), E = 0
                          - 39% (Fail)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="remarksbox" style={{ padding: "10px 0" }}>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>CLASS TEACHER'S COMMENT</th>
                        <td colSpan="2">{psyData?.remarks || "No remarks"}</td>
                      </tr>

                      <tr>
                        <th>PRINCIPAL'S COMMENT</th>
                        <td colSpan="2">
                          {psyData?.premarks || "No principal remarks"}
                        </td>
                      </tr>

                      <tr>
                        <th>PRINCIPAL'S NAME</th>
                        <td>{schoolSettings?.principalName || "N/A"}</td>
                        <td style={{ textAlign: "right" }}>
                          <img
                            src={schoolSettings?.signature} // Use full URL directly
                            width="200"
                            alt="Principal Signature"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>SCHOOL RESUMES</th>
                        <td>
                          {schoolSettings.resumptionDate
                            ? new Date(
                                schoolSettings.resumptionDate
                              ).toLocaleDateString()
                            : "N/A"}
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTermRep;
