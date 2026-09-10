import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';
import Tools from './pages/Tools';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </div>
        <footer className="global-footer">
          <p>© {new Date().getFullYear()} Soracha. Crafted with React.</p>
        </footer>
      </div>
    </Router>
  );
}