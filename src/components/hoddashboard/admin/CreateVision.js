import React, { useState } from "react";
import axios from "axios";
import "./CreateVision.css";
import { FiChevronDown } from "react-icons/fi";

const CreateVision = ({ showModal, setShowModal, updateTableData }) => {
  const [visionTitle, setVisionTitle] = useState("");
  const [affirmation, setAffirmation] = useState("");
  const [visionStatement, setVisionStatement] = useState("");
  const [visibility, setVisibility] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  const [message, setMessage] = useState("");
  const [showMessageModal, setShowMessageModal] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "visionTitle":
        setVisionTitle(value);
        break;
      case "affirmation":
        setAffirmation(value);
        break;
      case "visionStatement":
        setVisionStatement(value);
        break;
      case "visibility":
        setVisibility(value);
        break;
      default:
        break;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", visionTitle);
    formData.append("affirmation", affirmation);
    formData.append("statement", visionStatement);
    formData.append("visibility", visibility);
    if (uploadedImage) {
      formData.append("image", uploadedImage); // Attach the image if available
    }

    try {
      const token = localStorage.getItem("jwtToken");
      const response = await axios.post(
        `${apiUrl}/api/create-vision`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Indicate that we're sending a file
            Authorization: `Bearer ${token}`, // Attach JWT token for authentication
          },
        }
      );
      setMessage(response.data.message);
      setIsSuccess(true); // Set success state
      // Reset the form after successful submission
      setVisionTitle("");
      setAffirmation("");
      setVisionStatement("");
      setVisibility("");
      setUploadedImage(null);
      // Optionally update any parent state here if you need to refresh the table
      await updateTableData(); // Wait for the table to update
      setShowModal(false);
    } catch (error) {
      setMessage("Error creating vision.");

      setIsSuccess(false); // Set failure state
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setShowMessageModal(true); // Show the success/failure modal
    }
  };
  const closeMessageModal = () => {
    setShowMessageModal(false); // Close the modal when the button is clicked.
  };
  return (
    <>
      {showModal && <div className="modal-backdrop show"></div>}
      <div
        className={`modal fade ${showModal ? "show modal-enter" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Your Vision
              </h5>
              <button
                type="button"
                className="close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Upload Image (Optional)</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Vision Title</label>
                  <input
                    className="form-control"
                    name="visionTitle"
                    value={visionTitle}
                    onChange={handleChange}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Affirmation</label>
                  <input
                    className="form-control"
                    name="affirmation"
                    value={affirmation}
                    onChange={handleChange}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Vision Statement</label>
                  <textarea
                    className="form-control"
                    name="visionStatement"
                    value={visionStatement}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <br />
                <div className="form-group">
                  <label>Visibility</label>
                  <select
                    className="form-control"
                    name="visibility"
                    value={visibility}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select Visibility
                    </option>
                    <option>Public</option>
                    <option>Private</option>
                  </select>
                </div>

                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Create Vision
                  </button>
                  <button
                    type="button"
                    className="btn"
                    style={{ backgroundColor: "red", color: "white" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </form>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateVision;
