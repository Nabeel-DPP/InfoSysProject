import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { Home } from "./Home";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css";
import "../js/custom.js";
import $ from 'jquery';

// import "../js/chart.js";
import { SignUp } from "./pages/SignUp.jsx";
import { Login } from "./pages/Login.jsx";

import "../js/map.js";
import { Analytics } from "./pages/Analytics.jsx";
import { Reset } from "./pages/Reset.jsx";

// import "../js/mono.js";


 export const App = () => {
   return (
    <Router>
    <Routes>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/reset" element={<Reset />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
               
        {/* <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="table" element={<ReactTable />} /> */}

      </Route>
    </Routes>
  </Router>
   )
 }
 