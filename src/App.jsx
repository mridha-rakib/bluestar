import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import DropdownService from "./pages/DropdownService.jsx";
import ServicePage from "./pages/Services/ServicePage.jsx";
import ServiceDetail from "./pages/Services/ServiceDetails.jsx";



function App() {
  
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/service/:category" element={<ServicePage />} />
          <Route path="/service/:category/:parentId" element={<ServiceDetail />} />
          {/* Optional: details page */}
          {/* <Route path="/service/:category/:projectId" element={<ServiceDetail />} /> */}
        </Routes>
     
    </Router>
  );
}

export default App;
