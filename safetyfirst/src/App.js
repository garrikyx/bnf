import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import ReportHarm from './components/ReportHarm';
import Resources from './components/Resources';
import './styles/main.css';
import ChatbotWidget from './components/Chatbot';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/report" element={<ReportHarm />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
          <ChatbotWidget></ChatbotWidget>
        </main>
      </div>
    </Router>
  );
};

export default App;