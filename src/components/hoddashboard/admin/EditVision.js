import React, { useState, useEffect } from "react";
import axios from "axios";

const EditVision = ({
  showEditModal,
  setShowEditModal,
  updateTableData,
  visionId,
}) => {
  const [title, setTitle] = useState("");
  const [affirmation, setAffirmation] = useState("");
  const [statement, setStatement] = useState("");
  const [visibility, setVisibility] = useState("Public");
  const [imageUrl, setImageUrl] = useState("");

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (visionId && showEditModal) {
      console.log("Fetching vision with ID:", visionId);
      axios
        .get(`${apiUrl}/api/get-single/${visionId}`)
        .then((response) => {
          const { title, affirmation, statement, visibility, imageUrl } =
            response.data;
          setTitle(title);
          setAffirmation(affirmation);
          setStatement(statement);
          setVisibility(visibility);
          setImageUrl(imageUrl);
        })
        .catch((error) => {
          console.error("Error fetching vision data:", error);
          setMessage("Error fetching data.");
        });
    }
  }, [visionId, showEditModal]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "affirmation":
        setAffirmation(value);
        break;
      case "statement":
        setStatement(value);
        break;
      case "visibility":
        setVisibility(value);
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

      const response = await axios.put(
        `${apiUrl}/api/editvision/${visionId}`,
        {
          title,
          affirmation,
          statement,
          visibility,
          imageUrl,
        },
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
      setMessage("Error editing vision.");
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
                Edit Vision
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
                  <label>Affirmation</label>
                  <textarea
                    className="form-control"
                    name="affirmation"
                    value={affirmation}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <br />
                <div className="form-group">
                  <label>Statement</label>
                  <textarea
                    className="form-control"
                    name="statement"
                    value={statement}
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

export default EditVision;
