import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { Home } from "./Home";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css";
import "../js/custom.js";
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
// import "../js/mono.js";


 export const App = () => {
   return (
 <Router>
      <Routes>
        {/* Routes with MainLayout for home and public pages */}
        {/* <Route element={<WebLayout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
        </Route> */}

        {/* Routes with Layout (dashboard layout) */}
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/orders" element={<OrderSection />} />
          <Route path="/stocks" element={<StockSection />} />
          <Route path="/management" element={<ManageSection />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/userActivity" element={<UserActivity />} />
          <Route path="/userAccount" element={<UserAccount />} />
          {/* Uncomment if you want to add more paths */}
          {/* <Route path="/userSetting" element={<UserSetting />} /> */}
        </Route>
      </Routes>
    </Router>
   )
 }
 

