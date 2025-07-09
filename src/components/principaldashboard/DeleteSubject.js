// src/components/modals/DeleteConfirmModal.js
import React from "react";
import "./Modal.css"; // 👈 important if you're using Bootstrap-like classes

const DeleteSubject = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <>
      {/* Modal backdrop */}
      <div className="modal-backdrop show"></div>

      {/* Modal content */}
      <div
        className={`modal fade ${show ? "show modal-enter" : ""}`}
        style={{ display: show ? "block" : "none" }}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-b">
              <h5 className="modal-title text-lg font-semibold">
                Delete Subject?
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body text-sm text-gray-700 my-2">
              Are you sure you want to delete this subject? This action cannot
              be undone.
            </div>
            <div className="modal-footer flex justify-end gap-2 pt-4">
              <button
                onClick={onClose}
                className="btn btn-secondary bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="btn btn-danger bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteSubject;
