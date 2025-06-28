import React, { useEffect, useState, useContext } from "react";
import TopNav from "../TopNav";
import useAuth from "../../hooks/useAuth";
import SideNav from "../SideNav";
import { FaUserCircle } from "react-icons/fa";

import axios from "axios";
import { DarkModeContext } from "../../../context/darkModeContext";

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null); // local profile state
  const { user } = useAuth(); // Get authenticated user from context
  const apiUrl = process.env.REACT_APP_API_URL;
  const { darkMode } = useContext(DarkModeContext); // <--- this line is missing
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("Stored user from localStorage:", storedUser);

    if (storedUser?._id) {
      axios
        .get(`${apiUrl}/api/auth/profile/${storedUser._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        })
        .then((res) => {
          console.log("Profile API response:", res.data);
          setProfile(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to load profile", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [apiUrl]);

  // Debug: log the current profile on each render
  console.log("Current profile state:", profile);

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      const res = await axios.put(
        `${apiUrl}/api/auth/profile/${storedUser._id}`,
        {
          fullname: profile.fullname,
          email: profile.email,
          ...(password && { password, confirmPassword }),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );

      alert("Profile updated successfully!");
      setProfile(res.data.data); // Update local state with new values
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("Failed to update profile", err);
      alert("Failed to update profile");
    }
  };

  return (
    <div>
      <form onSubmit={handleSaveChanges}>
        <div class="setting-title">
          <h4
            style={{
              color: darkMode ? "#fff" : "#000",
            }}
          >
            Profile Settings
          </h4>
        </div>
        <div class="card-title-head">
          <h6
            style={{
              color: darkMode ? "#fff" : "#000",
            }}
          >
            <span>
              <i
                data-feather="user"
                class="feather-chevron-up"
                style={{
                  color: darkMode ? "#fff" : "#000",
                }}
              ></i>
            </span>
            User Information
          </h6>
        </div>
        {/*}  <div class="profile-pic-upload">
          <div class="profile-pic">
            <span>
              <i data-feather="plus-circle" class="plus-down-add"></i> Profile
              Photo
            </span>
          </div>
          <div class="new-employee-field">
            <div class="mb-0">
              <label
                className="image-upload mb-0"
                style={{
                  // backgroundColor: darkMode ? "#212121" : "#f5f5f5",

                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 20px",
                  textAlign: "center",
                  cursor: "pointer",
                  borderRadius: "4px",
                  height: "50px", // Optional: consistent height
                }}
              >
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                  }}
                />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",

                    color: "white",
                  }}
                >
                  Change Image
                </span>
              </label>

              <span style={{ color: darkMode ? "#fff" : "#000" }}>
                For better preview recommended size is 450px x 450px. Max size
                5MB.
              </span>
            </div>
          </div>
        </div>*/}
        <div class="row">
          <div class="col-md-12">
            <div class="mb-3">
              <label
                class="form-label"
                style={{ color: darkMode ? "#fff" : "#000" }}
              >
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                style={{
                  backgroundColor: "transparent",

                  color: darkMode ? "#fff" : "#000",
                  border: "1px solid #ccc",
                }}
                value={profile?.fullname || ""} // use optional chaining and fallback to empty string
                onChange={(e) => {
                  setProfile((prev) => ({ ...prev, fullname: e.target.value }));
                }}
              />
            </div>
          </div>

          <div class="col-md-12">
            <div class="mb-3">
              <label
                class="form-label"
                style={{ color: darkMode ? "#fff" : "#000" }}
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                style={{
                  backgroundColor: "transparent",

                  color: darkMode ? "#fff" : "#000",
                  border: "1px solid #ccc",
                }}
                value={profile?.email || ""}
                onChange={(e) => {
                  setProfile((prev) => ({ ...prev, email: e.target.value }));
                }}
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="mb-3">
              <label
                class="form-label"
                style={{ color: darkMode ? "#fff" : "#000" }}
              >
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                style={{
                  backgroundColor: "transparent",
                  color: darkMode ? "#fff" : "#000",
                  border: "1px solid #ccc",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div class="col-md-12">
            <div class="mb-3">
              <label
                class="form-label"
                style={{ color: darkMode ? "#fff" : "#000" }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                style={{
                  backgroundColor: "transparent",
                  color: darkMode ? "#fff" : "#000",
                  border: "1px solid #ccc",
                }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div class="text-end settings-bottom-btn">
          <button
            type="button"
            class="btn btn-cancel me-2 "
            style={{ backgroundColor: "red", color: "white" }}
          >
            Cancel
          </button>
          <button
            type="submit"
            class="btn btn-submit "
            style={{
              backgroundColor: darkMode ? "#212121" : "#f5f5f5",

              color: darkMode ? "#fff" : "#000",
            }}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
