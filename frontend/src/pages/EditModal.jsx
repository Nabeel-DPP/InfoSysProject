import React from 'react';
import "./EditModal.css"; // Ensure this CSS file contains updated styles

export const EditModal = ({ rowData, onClose, onEdit, onEditBonus, onEditPrice }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <button className="modal-close-icon" onClick={onClose}>
          &times;
        </button>
        <h4 className="modal-title">Edit Options</h4>
        <p className="modal-description">
          Choose an edit option for Product: <strong>{rowData?.prod_name}</strong>
        </p>
        <div className="modal-buttons">
          <button className="modal-btn primary-btn" onClick={() => onEdit(rowData._id)}>
            Edit Details
          </button>
          <button className="modal-btn secondary-btn" onClick={() => onEditBonus(rowData._id)}>
            Edit Bonus
          </button>
          <button className="modal-btn tertiary-btn" onClick={() => onEditPrice(rowData._id)}>
            Edit Price
          </button>
        </div>
      </div>
    </div>
  );
};
