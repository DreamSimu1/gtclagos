import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SessionContext } from "../../SessionContext";

const Settings = () => {
  const { currentSession } = useContext(SessionContext);

  const [formData, setFormData] = useState({
    name: "",
    motto: "",
    address: "",
    phone: "",
    phonetwo: "",
    currency: "",
    email: "",
    sessionStart: "",
    sessionEnd: "",
    schoolLogo: null,
  });

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentSessionId = currentSession?._id;
    if (!currentSessionId) return;

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    }
    formDataToSend.append("session", currentSessionId);

    try {
      await axios.post(`${apiUrl}/api/setting`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Settings updated successfully!");
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to update settings.");
    }
  };

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <div className="card p-4">
            <h4 className="mb-4">System Settings</h4>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
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

                <div className="col-md-6">
                  <label className="form-label">Motto</label>
                  <input
                    type="text"
                    name="motto"
                    className="form-control"
                    placeholder="Enter school motto"
                    value={formData.motto}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="School address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Additional Phone Number</label>
                  <input
                    type="text"
                    name="phonetwo"
                    className="form-control"
                    placeholder="Optional"
                    value={formData.phonetwo}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Currency</label>
                  <input
                    type="text"
                    name="currency"
                    className="form-control"
                    placeholder="e.g. NGN"
                    value={formData.currency}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">School Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter school email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Start Session</label>
                  <input
                    type="text"
                    name="sessionStart"
                    className="form-control"
                    placeholder="e.g. 2024/2025"
                    value={formData.sessionStart}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-3">
                  <label className="form-label">End Session</label>
                  <input
                    type="text"
                    name="sessionEnd"
                    className="form-control"
                    placeholder="e.g. 2025/2026"
                    value={formData.sessionEnd}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Upload School Logo</label>
                  <input
                    type="file"
                    name="schoolLogo"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-primary mt-3">
                    Save Settings
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

export default Settings;
