import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
import "./CustomSnackbar.css"; // For custom styles

const GeneralSnackbar = ({ open, onClose, productDetails }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (open) {
      setProgress(0); // Reset progress
      const timer = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 2 : 100));
      }, 100); // Increment progress every 100ms

      const closeTimer = setTimeout(onClose, 5000); // Auto-close after 5 seconds

      return () => {
        clearInterval(timer);
        clearTimeout(closeTimer);
      };
    }
  }, [open, onClose]);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={onClose}
      autoHideDuration={5000}
      className="custom-snackbar"
    >
      <MuiAlert
      sx={{
        backgroundColor: "#212121", // Dark Grey Background
        color: "#E0F7FA", // Light Cyan Text
        "& .MuiAlert-icon": {
          color: "#00C853", // Green for the Tick Icon
        },
        
      }}
     
     
     elevation={6}
        variant="filled"
        severity="success"
        onClose={onClose}
        className="custom-alert"
      >
        <div className="snackbar-content">
          <h2 className="snackbar-title">Edit Confirmation</h2>
          <ul className="snackbar-list">
            <li>Product ID: <strong> {productDetails.prod_id} </strong></li>
            <li>Product Name: <strong>{productDetails.prod_name} </strong></li>
            <li>Product Form: <strong>{productDetails.prod_form_name} </strong></li>
            <li>Generic: <strong>{productDetails.generic} </strong></li>
            <li>Pack: <strong>{productDetails.pack} </strong></li>
            <li>SSR Status: <strong>{productDetails.ssr_enabled} </strong></li>
            
          </ul>
          <LinearProgress variant="determinate" value={progress} />
        </div>
      </MuiAlert>
    </Snackbar>
  );
};

export default GeneralSnackbar;
