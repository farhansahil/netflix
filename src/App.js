import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchData from "./components/FetchData";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Series from "./components/Sereis";


const App = () => {
  return (
    <>
    
    <Router >
      <Navbar />
 
      <Routes>
        <Route exact path="/" element={        <Home />}/>
        <Route exact path="/webseries" element={<FetchData />}/>
        <Route exact path="/webseries/:id" element={<Series />}/>

      </Routes> 
    </Router>

    </>
  );
};

export default App;
