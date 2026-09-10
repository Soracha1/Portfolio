import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// นำเข้าไอคอนของจริงจาก react-icons/fa (FontAwesome)
import { FaInstagram, FaFacebook, FaLine, FaDiscord, FaEnvelope } from 'react-icons/fa';
import './Home.css';

// หมายเหตุ: ย้ายไฟล์ไปที่โฟลเดอร์ public/ แล้วใช้ Path แบบ Absolute (`/new.jpg`, `/resume.pdf`)
// จึงไม่จำเป็นต้องใช้ import จาก ../assets อีกต่อไป เพื่อป้องกันปัญหา 404 ตอน Deploy

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(() => {
        setProjects([
          { id: 1, title: "AI-driven LINE Chatbot", stack: "N8N / JavaScript" },
          { id: 2, title: "DressRental", stack: "ASP.NET Core / SQL Server" },
          { id: 3, title: "SHARK SOUND", stack: "React / JavaScript" }
        ]);
      });
  }, []);

  return (
    <main className="home-layout animate-fade">

      {/* 1. Hero Section + Profile Picture */}
      <section className="bento-card hero-card">
        <div className="profile-image-container">
          <img
            src={`${process.env.PUBLIC_URL || ''}/new.jpg`}
            alt="Soracha Profile"
            className="profile-img"
          />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">I'm <span className="gradient-text">Soracha</span></h1>
          <h2 className="hero-subtitle">Computer Science & Software Development @ Sripatum University</h2>
          <p className="hero-desc">
            A Bangkok-based software developer passionate about building full-stack web applications, managing databases, and integrating AI into automation systems.
          </p>
          <a href="https://github.com/Soracha1" target="_blank" rel="noreferrer" className="btn-blue">
            GitHub Profile ↗
          </a>
        </div>
      </section>

      {/* 2. Tech Stack & Resume Grid */}
      <div className="home-grid-2">
        <section className="bento-card center-content">
          <h3 className="card-title">Tech Stack</h3>
          <div className="pills-wrapper">
            <span className="tech-pill">React</span>
            <span className="tech-pill">ASP.NET Core</span>
            <span className="tech-pill">SQL Server</span>
            <span className="tech-pill">Node.js</span>
            <span className="tech-pill">n8n</span>
          </div>
        </section>

        <section className="bento-card center-content">
          <h3 className="card-title-large">CV / Resume</h3>

          <a
            href={`${process.env.PUBLIC_URL || ''}/resume.pdf`}
            className="btn-white-large"
            target="_blank"
            rel="noreferrer"
          >
            View Resume ↗
          </a>
        </section>
      </div>

      {/* 3. Featured Projects */}
      <section className="bento-card">
        <div className="card-header">
          <div>
            <h3 className="card-title-left">Featured Projects</h3>
            <span className="badge-blue">Recent Work</span>
          </div>
          <Link to="/projects" className="link-blue">View All Projects ↗</Link>
        </div>

        <div className="projects-preview">
          {projects.map((project) => (
            <div className="project-mini-card" key={project.id}>
              <h4>{project.title}</h4>
              <p>{project.stack}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Contact Section */}
      <section className="bento-card contact-box">
        <div className="card-header">
          <h3 className="card-title-left">Let's Connect</h3>

        </div>
        <div className="contact-grid">
          {/* ใช้ไอคอนของจริงแทน span emoji เดิม */}
          <a href="https://www.instagram.com/rewsrch/" target="_blank" rel="noreferrer" className="social-card ig">
            <FaInstagram className="social-icon" />
            <span className="social-name">Instagram</span>
          </a>
          <a href="https://www.facebook.com/Rew.Soracha" target="_blank" rel="noreferrer" className="social-card fb">
            <FaFacebook className="social-icon" />
            <span className="social-name">Facebook</span>
          </a>
          <a href="https://line.me/ti/p/XByNA_SjNB" target="_blank" rel="noreferrer" className="social-card line">
            <FaLine className="social-icon" />
            <span className="social-name">LINE</span>
          </a>
          <a href="https://discord.gg/rewsrc" target="_blank" rel="noreferrer" className="social-card discord">
            <FaDiscord className="social-icon" />
            <span className="social-name">Discord</span>
          </a>
          <a href="mailto:rewzazx@gmail.com" className="social-card email">
            <FaEnvelope className="social-icon" />
            <span className="social-name">Email</span>
          </a>
        </div>
      </section>

    </main>
  );
}