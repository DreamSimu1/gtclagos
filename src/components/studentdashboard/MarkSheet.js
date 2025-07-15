import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useAuth from "../hooks/useAuth";

const MarkSheet = () => {
  const [studentData, setStudentData] = useState(null);
  const { user } = useAuth();
  console.log("User:", user);

  const { data, loading, error } = useFetch(`/students/${user._id}`);

  useEffect(() => {
    console.log("Data from useFetch:", data);
    if (data && data.studentName && data.classname) {
      console.log("Fetched student data:", data);
      setStudentData(data);
    }
  }, [data]);

  return (
    <Fragment>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  Marksheet for {user?.studentName} ({user?.classname}) //
                  Marksheet for {studentData?.studentName}{" "}
                  {studentData?.classname &&
                    `(${studentData.classname.toUpperCase()})`}
                </h4>
              </div>

              <div className="card-body">
                <div
                  className="marksheet-buttons"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
                  <Link
                    to={`/student/dashboard/first_term_report_card/${studentData?._id}`}
                  >
                    <button className="btn btn-primary w-100">
                      First Term Report Card
                    </button>
                  </Link>

                  <Link
                    to={`/student/dashboard/second_term_report_card/${studentData?._id}`}
                  >
                    <button className="btn btn-primary w-100">
                      Second Term Report Card
                    </button>
                  </Link>

                  <Link
                    to={`/student/dashboard/third_term_report_card/${studentData?._id}`}
                  >
                    <button className="btn btn-primary w-100">
                      Third Term Report Card
                    </button>
                  </Link>

                  <button className="btn btn-secondary w-100">
                    Cumulative Result
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MarkSheet;
