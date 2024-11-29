
import React from 'react';

export const PopUpModal = ({ onConfirm, onCancel }) => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title fs-5" id="staticBackdropLabel">
              Are you sure you want to delete the record?
            </h3>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-danger"
              onClick={onConfirm}
              data-bs-dismiss="modal"
            >
              Yes
            </button>
            <button
              className="btn btn-blue"
              onClick={onCancel}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
