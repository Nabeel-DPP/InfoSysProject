import React from 'react'
// import "./webLayout.css";
export const WebFooter = () => {
  return (
    <footer className="custom-footer text-white text-center text-lg-start mt-auto">
      <div className="container p-4">
        <div className="row">
          <div className="footer-about col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              This is where you can put some information about your website. Add
              any relevant details, contact info, or a brief description.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-white">Home</a></li>
              <li><a href="#!" className="text-white">About</a></li>
              <li><a href="#!" className="text-white">Services</a></li>
              <li><a href="#!" className="text-white">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-white">Facebook</a></li>
              <li><a href="#!" className="text-white">Twitter</a></li>
              <li><a href="#!" className="text-white">Instagram</a></li>
              <li><a href="#!" className="text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-1 text-dark">
         InfSys Pvt Limited © Kasur
      </div>
    </footer>
  );
}
