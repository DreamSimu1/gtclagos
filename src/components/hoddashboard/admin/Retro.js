import React, { useState } from "react";
import axios from "axios";
import "./CreateVision.css";
import { FiChevronDown } from "react-icons/fi";
import TopNav from "../TopNav";

const Retro = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement form submission logic here
  };

  return (
    <>
      <div className="main-wrapper">
        <TopNav />
        <div className="page-wrapper adad">
          <div
            className="content"
            style={{ marginBottom: "50px", marginTop: "50px" }}
          >
            <p className="form-title" style={{ fontSize: "20px" }}>
              Retrospect
            </p>
            <form onSubmit={handleSubmit}>
              <br />
              <div className="form-group">
                <label>What went well</label>
                <textarea className="form-control" required></textarea>
              </div>
              <br />
              <div className="form-group">
                <label>What were the challenges</label>
                <textarea className="form-control" required></textarea>
              </div>
              <br />
              <div className="form-group">
                <label>What can be improved</label>
                <textarea className="form-control" required></textarea>
              </div>
              <br />
              <div className="form-group">
                <label>Attach Note/Media (Optional)</label>
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              <br />
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Retro;
