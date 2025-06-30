// import React, { useEffect, useState, Fragment } from "react";
// import { Link, useFetcher, useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";

// const MarkSheet = () => {
//   const [studentData, setStudentData] = useState(null);
//   const { id } = useParams();

//  const { data, loading, error } = useFetch(`/auth/student/${id}`);

//   useEffect(() => {
//     if (data) {
//       console.log("Fetched student data:", data);
//       setStudentData(data);
//     }
//   }, [data]);

//   const studentName = studentData?.student?.studentName ?? "Loading...";
//   const studentClass = studentData?.student?.classname ?? "";

//   if (loading) return <div>Loading student data...</div>;
//   if (error) return <div>Error loading student data. Please try again.</div>;

//   return (
//     <Fragment>
//       <div className="main-wrapper">
//         <div className="page-wrapper">
//           <div className="content">
//             <div className="card">
//               <div className="card-header">
//                 <h4 className="card-title">
//                   Marksheet for {studentName}{" "}
//                   {studentClass && `(${studentClass})`}
//                 </h4>
//               </div>

//               <div className="card-body">
//                 <div
//                   className="marksheet-buttons"
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "15px",
//                   }}
//                 >
//                   <Link to={`/dashboard/first_term_report_card/${id}`}>
//                     <button className="btn btn-primary w-100">
//                       First Term Report Card
//                     </button>
//                   </Link>

//                   <Link to={`/dashboard/term_report_card/${id}`}>
//                     <button className="btn btn-primary w-100">
//                       Second Term Report Card
//                     </button>
//                   </Link>

//                   <Link to={`/dashboard/third_term_report_card/${id}`}>
//                     <button className="btn btn-primary w-100">
//                       Third Term Report Card
//                     </button>
//                   </Link>

//                   <button className="btn btn-secondary w-100">
//                     Cumulative Result
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default MarkSheet;
import React, { useEffect, useState, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const MarkSheet = () => {
  const [studentData, setStudentData] = useState(null);
  const { id } = useParams();

  // Make sure your useFetch correctly uses REACT_APP_API_URL
  const { data, loading, error } = useFetch(`/auth/student/${id}`);

  useEffect(() => {
    if (data?.data) {
      console.log("Fetched student data:", data.data);
      setStudentData(data.data); // set only `data` object, not whole response
    }
  }, [data]);

  // Now access fields from `studentData`
  const studentName = studentData?.fullname ?? "Loading...";
  const studentClass = studentData?.tech ?? "";

  if (loading) return <div>Loading student data...</div>;
  if (error) return <div>Error loading student data. Please try again.</div>;

  return (
    <Fragment>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  Marksheet for {studentName}{" "}
                  {studentClass && `(${studentClass.toUpperCase()})`}
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
                  <Link to={`/dashboard/first_term_report_card/${id}`}>
                    <button className="btn btn-primary w-100">
                      First Term Report Card
                    </button>
                  </Link>

                  <Link to={`/dashboard/term_report_card/${id}`}>
                    <button className="btn btn-primary w-100">
                      Second Term Report Card
                    </button>
                  </Link>

                  <Link to={`/dashboard/third_term_report_card/${id}`}>
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
