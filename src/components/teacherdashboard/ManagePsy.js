import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./sales.css"; // your existing styles

const ManagePsy = () => {
  const navigate = useNavigate();

  return (
    <div
      className="page-wrapper d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <h2 style={{ fontSize: "50px", textAlign: "center" }}>Coming Soon</h2>

      <button className="btn btn-primary mt-4" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default ManagePsy;
