import React from 'react';
import './Projects.css';

export default function Projects() {
  const allProjects = [
    { 
      id: 1, 
      title: "DressRental", 
      stack: "ASP.NET Core MVC / SQL Server", 
      desc: "แอปพลิเคชันบริการเช่าชุดสตรี พร้อมระบบหลังบ้าน",
      link: "https://github.com/Soracha1/DressRental" 
    },
    { 
      id: 2, 
      title: "SHARK SOUND", 
      stack: "React / Tailwind", 
      desc: "Web Application จัดการ โหลด และเล่นไฟล์เสียง",
      link: "https://github.com/Soracha1/SHARK-SOUND" 
    },
    { 
      id: 3, 
      title: "Document Library", 
      stack: "Web Application", 
      desc: "ระบบจัดการและจัดเก็บเอกสาร",
      link: "https://github.com/Soracha1/document_library" 
    },
    { 
      id: 4, 
      title: "PokerCard", 
      stack: "Software Development", 
      desc: "โปรเจกต์เกี่ยวกับการจำลองหรือจัดการไพ่ Poker",
      link: "https://github.com/Soracha1/PokerCard" 
    },
    { 
      id: 5, 
      title: "Chatbot", 
      stack: "LINE Chatbot / AI", 
      desc: "ระบบแชทบอทอัตโนมัติ (Automation / AI)",
      link: "https://github.com/Soracha1/Chatbot-" 
    }
  ];

  return (
    <div className="projects-page animate-fade">
      <div className="page-heading">
        <h1>All Projects</h1>
        <p>ผลงานการพัฒนา Web Application, Backend APIs และระบบ Automation</p>
      </div>
      
      <div className="projects-grid-full">
        {allProjects.map(p => (
          <div className="project-detail-card" key={p.id}>
            <h2>{p.title}</h2>
            <span className="pill-blue">{p.stack}</span>
            <p>{p.desc}</p>
            <a 
              href={p.link} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-outline"
              style={{ display: 'inline-block' }}
            >
              View Source
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}