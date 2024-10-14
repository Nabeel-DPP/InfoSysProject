import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const AreaForm = () => {
  const [formData, setFormData] = useState({
    AreaId: '',
    AreaName: '',
    ZoneId: '',
    status: '',
    arr_date: '',
    lead_days: '',
    Manager: '',
    E_Mail: '',
    Manager_nick: '',
    area_manager: '',
    area_manager_email: '',
    area_manager_phone: '',
    manager_phone: '',
    FixPay: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:6666/area/", formData); // Post request to the server's '/area' endpoint
    
        if (response.status === 201) {  // Check if the response is OK
          alert('Area added successfully!');
          setFormData({
            AreaId: '',
            AreaName: '',
            ZoneId: '',
            status: '',
            arr_date: '',
            lead_days: '',
            Manager: '',
            E_Mail: '',
            Manager_nick: '',
            area_manager: '',
            area_manager_email: '',
            area_manager_phone: '',
            manager_phone: '',
            FixPay: ''
          });
        } else {
          alert('Failed to add area.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error occurred while submitting the form.');
      }
    
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h3 className="text-center mb-4">Add New Area</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="AreaId">
              <Form.Label>Area ID</Form.Label>
              <Form.Control
                type="number"
                name="AreaId"
                value={formData.AreaId}
                onChange={handleChange}
                placeholder="Enter Area ID"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="AreaName">
              <Form.Label>Area Name</Form.Label>
              <Form.Control
                type="text"
                name="AreaName"
                value={formData.AreaName}
                onChange={handleChange}
                placeholder="Enter Area Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ZoneId">
              <Form.Label>Zone ID</Form.Label>
              <Form.Control
                type="text"
                name="ZoneId"
                value={formData.ZoneId}
                onChange={handleChange}
                placeholder="Enter Zone ID"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                placeholder="Enter Status (e.g., Active, Inactive)"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="arr_date">
              <Form.Label>Arrival Date</Form.Label>
              <Form.Control
                type="date"
                name="arr_date"
                value={formData.arr_date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lead_days">
              <Form.Label>Lead Days</Form.Label>
              <Form.Control
                type="number"
                name="lead_days"
                value={formData.lead_days}
                onChange={handleChange}
                placeholder="Enter Lead Days"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Manager">
              <Form.Label>Manager</Form.Label>
              <Form.Control
                type="text"
                name="Manager"
                value={formData.Manager}
                onChange={handleChange}
                placeholder="Enter Manager Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="E_Mail">
              <Form.Label>Manager Email</Form.Label>
              <Form.Control
                type="email"
                name="E_Mail"
                value={formData.E_Mail}
                onChange={handleChange}
                placeholder="Enter Manager Email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Manager_nick">
              <Form.Label>Manager Nickname</Form.Label>
              <Form.Control
                type="text"
                name="Manager_nick"
                value={formData.Manager_nick}
                onChange={handleChange}
                placeholder="Enter Manager Nickname"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="area_manager">
              <Form.Label>Area Manager</Form.Label>
              <Form.Control
                type="text"
                name="area_manager"
                value={formData.area_manager}
                onChange={handleChange}
                placeholder="Enter Area Manager Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="area_manager_email">
              <Form.Label>Area Manager Email</Form.Label>
              <Form.Control
                type="email"
                name="area_manager_email"
                value={formData.area_manager_email}
                onChange={handleChange}
                placeholder="Enter Area Manager Email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="area_manager_phone">
              <Form.Label>Area Manager Phone</Form.Label>
              <Form.Control
                type="text"
                name="area_manager_phone"
                value={formData.area_manager_phone}
                onChange={handleChange}
                placeholder="Enter Area Manager Phone"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="manager_phone">
              <Form.Label>Manager Phone</Form.Label>
              <Form.Control
                type="text"
                name="manager_phone"
                value={formData.manager_phone}
                onChange={handleChange}
                placeholder="Enter Manager Phone"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="FixPay">
              <Form.Label>Fix Pay</Form.Label>
              <Form.Control
                type="number"
                name="FixPay"
                value={formData.FixPay}
                onChange={handleChange}
                placeholder="Enter Fix Pay"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AreaForm;
