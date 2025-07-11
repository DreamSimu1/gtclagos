import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { SessionContext } from "../../SessionContext";

const Account = () => {
  const { currentSession } = useContext(SessionContext);
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    principalName: "",
    resumptionDate: "",
    signature: null,
  });

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleExamChange = (e) => {
    setSelectedExam(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentSessionId = currentSession?._id;
    if (!currentSessionId) return;

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("principalName", formData.principalName);
    formDataToSend.append("resumptionDate", formData.resumptionDate);
    formDataToSend.append("examName", selectedExam);
    formDataToSend.append("session", currentSessionId);

    if (formData.signature) {
      formDataToSend.append("signature", formData.signature);
    }

    try {
      await axios.post(`${apiUrl}/api/setting`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to update profile.");
    }
  };

  useEffect(() => {
    if (currentSession?._id) {
      fetchExams();
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
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <div className="card p-4">
            <h4 className="mb-4">Profile Setting</h4>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                {/* School Name */}
                <div className="col-md-6">
                  <label className="form-label">Name of School</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter school name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Principal Name */}
                <div className="col-md-6">
                  <label className="form-label">Principal Name</label>
                  <input
                    type="text"
                    name="principalName"
                    className="form-control"
                    placeholder="Enter principal's name"
                    value={formData.principalName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Resumption Date */}
                <div className="col-md-6">
                  <label className="form-label">Resumption Date</label>
                  <input
                    type="date"
                    name="resumptionDate"
                    className="form-control"
                    value={formData.resumptionDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Exam Selection */}
                <div className="col-md-6">
                  <label className="form-label">Select Exam</label>
                  <select
                    name="examName"
                    className="form-select"
                    value={selectedExam}
                    onChange={handleExamChange}
                    required
                  >
                    <option value="">-- Select Exam --</option>
                    {exams?.map((exam) => (
                      <option key={exam._id} value={exam._id}>
                        {exam.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Signature Upload */}
                <div className="col-md-6">
                  <label className="form-label">Upload Signature</label>
                  <input
                    type="file"
                    name="signature"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                {/* Submit Button */}
                <div className="col-12">
                  <button type="submit" className="btn btn-primary mt-3">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
