// import React, { useEffect, useState } from "react";
// import Snackbar from "@mui/material/Snackbar";
// import MuiAlert from "@mui/material/Alert";
// import LinearProgress from "@mui/material/LinearProgress";
// import "./CustomSnackbar.css"; // For custom styles

// const QuotaSnackbar = ({ open, onClose, productData }) => {
//   const [progress, setProgress] = useState(0);
//   useEffect(() => {
//     if (open) {
//         console.log("product Data is Reached at Table" , productData)
//       setProgress(0); // Reset progress
//       const timer = setInterval(() => {
//         setProgress((prev) => (prev < 100 ? prev + 2 : 100));

//       }, 100); // Increment progress every 100ms

//       const closeTimer = setTimeout(onClose, 5000); // Auto-close after 5 seconds

//       return () => {
//         clearInterval(timer);
//         clearTimeout(closeTimer);
//       };
//     }
//   }, [open, onClose]);

//   return (
//     <Snackbar
//       open={open}
//       anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//       onClose={onClose}
//       autoHideDuration={5000}
//       className="custom-snackbar"
//     >
//       <MuiAlert
//       sx={{
//         backgroundColor: "#212121", // Dark Grey Background
//         color: "#E0F7FA", // Light Cyan Text
//         "& .MuiAlert-icon": {
//           color: "#00C853", // Green for the Tick Icon
//         },
        
//       }}
     
     
//      elevation={6}
//         variant="filled"
//         severity="success"
//         onClose={onClose}
//         className="quota-alert"
//       >
//         <div className="snackbar-content">
//           <h2 className="snackbar-title">Product Quota Limit Exceed</h2>
//           <ul className="snackbar-list">
//             <li>Product ID: <strong> {productData.prod_id} </strong></li>
//             <li>Product Name: <strong>{productData.prod_name} </strong></li>
//             <li>Product Quota: <strong>{productData.quota} </strong></li>
//           </ul>
//           <LinearProgress variant="determinate" value={progress} />
//         </div>
//       </MuiAlert>
//     </Snackbar>
//   );
// };

// export default QuotaSnackbar;


import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
import "./CustomSnackbar.css"; // For custom styles

const QuotaSnackbar = ({ open, onClose, productData }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (open) {
      console.log("Product data is reached at Table", productData);
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
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      onClose={onClose}
      autoHideDuration={5000}
      className="custom-snackbar"
    >
      <MuiAlert
        sx={{
          backgroundColor: "#D32F2F", // Red Background
          color: "#FFFFFF", // White Text
          "& .MuiAlert-icon": {
            color: "#FFCDD2", // Light Red for the Icon
          },
        }}
        elevation={6}
        variant="filled"
        severity="error"
        onClose={onClose}
        className="quota-alert"
      >
        <div className="snackbar-content">
          <h2 className="snackbar-title">Quota Limit Exceeded!</h2>
          <ul className="snackbar-list">
            <li>Product ID: <strong>{productData.prod_id}</strong></li>
            <li>Product Name: <strong>{productData.prod_name}</strong></li>
            <li>Product Quota: <strong>{productData.quota}</strong></li>
          </ul>
          <LinearProgress
            sx={{
              backgroundColor: "black", // Light red progress bar background
              color: "#FFFF" 
               }}
            variant="determinate"
            value={progress}
          />
        </div>
      </MuiAlert>
    </Snackbar>
  );
};

export default QuotaSnackbar;
