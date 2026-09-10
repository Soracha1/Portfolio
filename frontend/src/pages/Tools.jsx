import React from 'react';
import './Tools.css';

export default function Tools() {
  const toolCategories = [
    {
      title: "Programming Languages",
      icon: "⟨ ⟩",
      tools: [
        { name: "C#", emoji: "🟣" },
        { name: "JavaScript", emoji: "🟨" },
        { name: "SQL", emoji: "🛢️" }
      ]
    },
    {
      title: "Web Development & Design",
      icon: "🌐",
      tools: [
        { name: "React", emoji: "⚛️" },
        { name: "ASP.NET Core MVC", emoji: "🔷" },
        { name: "HTML5", emoji: "🟠" },
        { name: "CSS3", emoji: "🔵" },
        { name: "Node.js", emoji: "🟩" },
        { name: "Canva", emoji: "🎨" },
        { name: "Figma", emoji: "🖌️" }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      tools: [
        { name: "SQL Server", emoji: "🔴" },
        { name: "MySQL", emoji: "🐬" },
        { name: "MongoDB", emoji: "🍃" }
      ]
    },
    {
      title: "Testing & API Tools",
      icon: "✅",
      tools: [
        { name: "Postman", emoji: "🚀" },
        { name: "Swagger", emoji: "🦄" },
        { name: "Browser DevTools", emoji: "🔧" }
      ]
    },
    {
      title: "Automation & Integration",
      icon: "⚡",
      tools: [
        { name: "Make.com", emoji: "🔗" },
        { name: "LINE Messaging API", emoji: "💬" }
      ]
    },
    {
      title: "AI & LLM Tools",
      icon: "🤖",
      tools: [
        { name: "Gemini AI", emoji: "✨" },
        { name: "ChatGPT", emoji: "🧠" },
        { name: "OpenAI API", emoji: "🤖" },
        { name: "Claude API", emoji: "🟠" }
      ]
    },
    {
      title: "Development Tools",
      icon: "⚙️",
      tools: [
        { name: "Git", emoji: "📦" },
        { name: "GitHub", emoji: "🐙" },
        { name: "VS Code", emoji: "💻" },
        { name: "Docker", emoji: "🐳" }
      ]
    }
  ];

  return (
    <div className="tools-page animate-fade">
      <div className="tools-header">
        <h1>Tools</h1>
        <p>
          Technologies and tools I use for Web Application, API, Database,
          Automation Workflow, AI, Design, and Software Testing.
        </p>
      </div>

      <div className="tools-grid">
        {toolCategories.map((category, index) => (
          <div className="tool-category-card" key={index}>
            <h3 className="category-title">
              <span className="category-icon">
                {category.icon}
              </span>
              {category.title}
            </h3>

            <div className="tools-list">
              {category.tools.map((tool, idx) => (
                <div className="tool-badge" key={idx}>
                  <span className="tool-emoji">
                    {tool.emoji}
                  </span>
                  <span className="tool-name">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}