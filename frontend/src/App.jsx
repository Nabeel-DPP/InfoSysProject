import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { Home } from "./Home";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import "../css/style.css";
import "../js/custom.js";
import 'react-quill/dist/quill.snow.css';
import hotkeys from 'hotkeys-js';
// import "../plugins/DataTables/DataTables-1.10.18/js/jquery.dataTables.min.js";

// import $ from 'jquery';

// import "../js/chart.js";
import { SignUp } from "./pages/SignUp.jsx";
import { Login } from "./pages/Login.jsx";

import "../js/map.js";
import { Analytics } from "./pages/Analytics.jsx";
import { Reset } from "./pages/Reset.jsx";
import { UserProfile } from "./pages/UserProfile.jsx";
import { UserActivity } from "./pages/UserActivity.jsx";
import { UserAccount } from "./pages/UserAccount.jsx";
// import { UserSetting } from "./pages/UserSetting.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { WebLayout } from "./webLayout/WebLayout.jsx";
import { OrderSection } from "./OrderSection.jsx";
import { StockSection } from "./StockSection.jsx";
import { ManageSection } from "./ManageSection.jsx";
import { Distributer } from "./Distributer.jsx";
import { TableForm } from "./TableForm.jsx";
import { CreateForm } from "./CreateForm.jsx";
import EditDistForm from "./EditDistForm.jsx";
import DemoForm from "./DemoForm.jsx";
import { LoginDemo } from "./demo/LoginDemo.jsx";
import AreaForm from "./pages/AreaForm.jsx";
import AreaTable from "./pages/AreaTable.jsx";
import AreaEditForm from "./pages/AreaEditForm.jsx";
import BankTable from "./pages/BankTable.jsx";
import BankInsert from "./pages/BankInsert.jsx";
// import "../js/mono.js";


 export const App = () => {
   return (
 <Router>
      <Routes>
        {/* Routes with MainLayout for home and public pages */}
        {/* <Route element={<WebLayout />}>
          <Route index element={<Home />} />
          
        </Route> */}

        {/* Routes with Layout (dashboard layout) */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/lgDemo" element={<LoginDemo />} />
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/orders" element={<OrderSection />} />
          <Route path="/stocks" element={<StockSection />} />
          <Route path="/dist" element={<Distributer/>} />
          <Route path="/tableForm" element={<TableForm/>} />
          <Route path="/areaForm" element={<AreaForm/>} />
          <Route path="/areaTable" element={<AreaTable/>} />
          <Route path="/areaEdit" element={<AreaEditForm/>} />
          <Route path="/bankTable" element={<BankTable/>} />
          <Route path="/bankInsert" element={<BankInsert/>} />
          <Route path="/demo" element={<DemoForm/>} />
          <Route path="/edit" element={<EditDistForm/>} />
          <Route path="/createForm" element={<CreateForm/>} />
          <Route path="/management" element={<ManageSection />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/userActivity" element={<UserActivity />} />
          <Route path="/userAccount" element={<UserAccount />} />
          
        </Route>
      </Routes>
    </Router>
   )
 }
 

