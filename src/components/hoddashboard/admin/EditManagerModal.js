import React, { useState, useEffect } from "react";
import axios from "axios";

const EditManagerModal = ({
  showModal,
  setShowModal,
  userId,
  updateTableData,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    personaladdress: "",
    managedPoints: [],
  });

  const apiUrl = process.env.REACT_APP_API_URL;

  // Fetch the sales user details for editing
  // useEffect(() => {
  //   if (userId && showModal) {
  //     axios
  //       .get(`${apiUrl}/api/users/${userId}`)
  //       .then((response) => {
  //         setFormData(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user data:", error);
  //       });
  //   }
  // }, [userId, showModal]);
  useEffect(() => {
    if (userId && showModal) {
      const token = localStorage.getItem("jwtToken"); // Assuming you store your JWT in localStorage

      axios
        .get(`${apiUrl}/api/sales/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const data = response.data;
          setFormData({
            ...data,
            managedPoints: data.managedPoints || [], // Default to an empty array if undefined
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [userId, showModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSave = async () => {
  //   try {
  //     await axios.put(`${apiUrl}/api/sales/${userId}`, formData);
  //     setShowModal(false);
  //     updateTableData();
  //     alert("User updated successfully");
  //   } catch (error) {
  //     console.error("Error updating user:", error);
  //     alert("Failed to update user. Please try again.");
  //   }
  // };
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("jwtToken");

      // Ensure managedPoints is an array
      if (typeof formData.managedPoints === "string") {
        formData.managedPoints = formData.managedPoints
          .split(",")
          .map((point) => point.trim());
      }

      // Only send the fields that are allowed to be updated
      const allowedFields = [
        "username",
        "email",
        "phone",
        "personaladdress",
        "managedPoints",
        "disbursements",
        "role",
      ];

      const filteredFormData = {};
      for (let key in formData) {
        if (allowedFields.includes(key)) {
          filteredFormData[key] = formData[key];
        }
      }

      console.log("Sending data:", filteredFormData);

      await axios.put(`${apiUrl}/api/sales/${userId}`, filteredFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setShowModal(false); // Close the modal
      updateTableData(); // Update the table data after the save
      alert("User updated successfully"); // Notify the user of success
    } catch (error) {
      console.error(
        "Error updating user:",
        error.response?.data || error.message
      );
      alert("Failed to update user. Please try again."); // Notify the user of failure
    }
  };

  return (
    <div
      className={`modal ${showModal ? "show" : ""}`}
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit POS Operator</h5>
            <button
              type="button"
              className="close"
              onClick={() => setShowModal(false)}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="personaladdress"
                value={formData.personaladdress}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Points</label>
              <input
                type="text"
                name="managedPoints"
                value={
                  Array.isArray(formData.managedPoints)
                    ? formData.managedPoints.join(", ")
                    : ""
                }
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditManagerModal;
