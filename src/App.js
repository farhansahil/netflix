import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchData from "./components/FetchData";
import Navbar from "./components/Navbar";
import Science from "./components/Science";
import Horror from "./components/Horror";
import Romance from "./components/Romance";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<FetchData />} />          
          <Route exact path="science" element={<Science />} />
          <Route exact path="horror" element={<Horror />} />
          <Route exact path="romance" element={<Romance />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
