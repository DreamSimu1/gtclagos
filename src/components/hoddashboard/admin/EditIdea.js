import React, { useState, useEffect } from "react";
import axios from "axios";

const EditIdea = ({
  showEditModal,
  setShowEditModal,
  updateTableData,
  ideaId,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (ideaId && showEditModal) {
      console.log("Fetching idea with ID:", ideaId);
      axios
        .get(`${apiUrl}/api/get-single-idea/${ideaId}`)
        .then((response) => {
          const { title, description, status, imageUrl } = response.data.idea;
          setTitle(title);
          setDescription(description);
          setStatus(status || "Public"); // Use "status" for visibility if provided
          setImageUrl(imageUrl);
        })
        .catch((error) => {
          console.error("Error fetching idea data:", error);
          setMessage("Error fetching data.");
        });
    }
  }, [ideaId, showEditModal]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "status":
        setStatus(value);
        break;
      case "imageUrl":
        setImageUrl(value);
        break;
      default:
        break;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("jwtToken");

      // Construct payload with only the fields that have values
      const payload = {};
      if (title) payload.title = title;
      if (description) payload.description = description;
      if (status) payload.status = status;
      if (imageUrl) payload.imageUrl = imageUrl;

      const response = await axios.put(
        `${apiUrl}/api/editidea/${ideaId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(response.data.message);
      setIsSuccess(true);

      // Update the table and close the modal
      await updateTableData();
      setShowEditModal(false);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error editing idea.");
      setIsSuccess(false);
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      {showEditModal && <div className="modal-backdrop show"></div>}
      <div
        className={`modal fade ${showEditModal ? "show modal-enter" : ""}`}
        style={{ display: showEditModal ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Idea
              </h5>
              <button
                type="button"
                className="close"
                onClick={() => setShowEditModal(false)}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    className="form-control"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <br />
                <div className="form-group">
                  <label>Status</label>
                  <select
                    className="form-control"
                    name="status"
                    value={status}
                    onChange={handleChange}
                    required
                  >
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                  </select>
                </div>
                <br />
                <div className="form-group">
                  <label>Image URL</label>
                  <input
                    className="form-control"
                    name="imageUrl"
                    value={imageUrl}
                    onChange={handleChange}
                  />
                </div>
                <br />
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="btn"
                    style={{ backgroundColor: "red", color: "white" }}
                    onClick={() => setShowEditModal(false)}
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

export default EditIdea;
