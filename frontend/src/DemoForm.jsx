import React, { useState } from 'react';
import './DemoForm.css'; // Separate CSS file for custom styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const DemoForm = () => {
  const [formData, setFormData] = useState({
    distributorName: '',
    contactPerson: '',
    phone: '',
    email: '',
    address: '',
    distributorType: '',
    receiveUpdates: false,
    distributorCategory: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Distributor Information:', formData);
  };

  return (
    <div className="distributor-form__container">
      <h1 className="distributor-form__title">Distributor Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="distributorName"
                value={formData.distributorName}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">Distributor Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">Contact Person</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">Phone</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">Email</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">Address</label>
            </div>
          </div>
        </div>

        {/* Radio Button Group */}
        <div className="row">
          <div className="col-md-12">
            <div className="distributor-radio-group">
              <label className="distributor-radio-label">Distributor Type</label>
              <div className="distributor-radio-options">
                <label className="distributor-radio-option">
                  <input
                    type="radio"
                    name="distributorType"
                    value="Local"
                    checked={formData.distributorType === 'Local'}
                    onChange={handleChange}
                  />
                  Local
                </label>
                <label className="distributor-radio-option">
                  <input
                    type="radio"
                    name="distributorType"
                    value="International"
                    checked={formData.distributorType === 'International'}
                    onChange={handleChange}
                  />
                  International
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Checkbox for Updates */}
        <div className="row">
          <div className="col-md-12">
            <div className="distributor-checkbox-group">
              <label className="distributor-checkbox-label">
                <input
                  type="checkbox"
                  name="receiveUpdates"
                  checked={formData.receiveUpdates}
                  onChange={handleChange}
                />
                Receive Email Updates
              </label>
            </div>
          </div>
        </div>

        {/* Select Dropdown for Distributor Category */}
        <div className="row">
          <div className="col-md-12">
            <div className="distributor-input-group">
              <select
                required
                name="distributorCategory"
                value={formData.distributorCategory}
                onChange={handleChange}
                className="distributor-input"
              >
                <option value="" disabled hidden>
                  Select Category
                </option>
                <option value="Wholesale">Wholesale</option>
                <option value="Retail">Retail</option>
                <option value="Dropshipping">Dropshipping</option>
              </select>
              <label className="distributor-label">Distributor Category</label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="row">
          <div className="col-md-12">
            <button type="submit" className="distributor-submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DemoForm;
