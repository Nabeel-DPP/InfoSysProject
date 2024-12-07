// import React from "react";
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./PriceEditModal.css"; // Add custom styles for the modal

// const PriceEditModal = ({ show, onClose, productDetails }) => {
//   return (
//     <Modal show={show} onHide={onClose} centered>
//       <Modal.Header closeButton className="modal-header-custom">
//         <Modal.Title>Edit Confirmation</Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="modal-body-custom">
//         <div className="modal-content-wrapper">
//           <h5 className="modal-content-title">Product Edit Details</h5>
//          <ul className="modal-content-list">
//             <li><strong>Product ID:</strong> {productDetails.prod_id}</li>
//             <li><strong>Product Name:</strong> {productDetails.prod_name}</li>
//             <li><strong>Product Form:</strong> {productDetails.prod_form_name}</li>
//             <li><strong>Factory Price (FP):</strong> {productDetails.fp}</li>
//             <li><strong>Trader Price (TP):</strong> {productDetails.tp}</li>
//             <li><strong>Max Retail Price (MRP):</strong> {productDetails.mrp}</li>
//          </ul>
//         </div>
//       </Modal.Body>
//       <Modal.Footer className="modal-footer-custom">
//         <button className="btn btn-info" onClick={onClose}>
//           Close
//         </button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default PriceEditModal;



import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PriceEditModal.css"; // Add custom styles for the modal

const PriceEditModal = ({ show, onClose, productDetails }) => {
  return (
    <Modal  show={show} onHide={onClose} centered >
      <Modal.Header closeButton className="modal-header-custom">
        {/* <Modal.Title>Product Edit Details</Modal.Title> */}
        <h3 className="modal-content-title">Product Edit Details</h3>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <div className="modal-content-wrapper">
          
          <ul className="modal-content-list">
            <li>Product ID:<strong> {productDetails.prod_id}</strong></li>
            <li>Product Name:<strong> {productDetails.prod_name}</strong></li>
            <li>Product Form:<strong> {productDetails.prod_form_name}</strong></li>
            <li>Factory Price (FP): <strong>{productDetails.fp}</strong></li>
            <li>Trader Price (TP): <strong>{productDetails.tp}</strong></li>
            <li>Max Retail Price (MRP):<strong> {productDetails.mrp}</strong></li>
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-footer-custom">
        <button className="btn btn-primary" onClick={onClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default PriceEditModal;
