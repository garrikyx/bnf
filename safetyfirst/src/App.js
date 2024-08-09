import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import ReportHarm from './components/ReportHarm';
import Resources from './components/Resources';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto p-4 mt-16"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/report" element={<ReportHarm />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;