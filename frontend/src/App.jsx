import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tools from './pages/Tools';
import './App.css';

export default function App() {
  const renderStars = () => {
    return (
      <div className="shooting-stars-container">
        {[...Array(20)].map((_, i) => {
          const randomLeft = Math.random() * 100;
          const randomTop = Math.random() * -100;
          const randomDuration = 2 + Math.random() * 3;
          const randomDelay = Math.random() * 5;
          
          return (
            <span
              key={i}
              className="star"
              style={{
                left: `${randomLeft}%`,
                top: `${randomTop}px`,
                animationDuration: `${randomDuration}s`,
                animationDelay: `${randomDelay}s`,
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <Router basename="/Portfolio">
      {renderStars()} {/* เรียกใช้งานฟังก์ชันดาวตกตรงนี้ */}
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