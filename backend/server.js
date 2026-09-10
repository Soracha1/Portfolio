const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const projects = [
  {
    id: 1,
    title: "NewsAI",
    description: "ระบบ LINE Chatbot สำหรับกรองและสรุปข่าวสารอัตโนมัติ (พัฒนาร่วมกับ Kirakorn Suwannakosum)",
    tags: ["Gemini AI", "Make.com"]
  },
  {
    id: 2,
    title: "DressRental",
    description: "เว็บแอปพลิเคชันสำหรับบริการเช่าชุดสตรี พร้อมระบบจัดการฐานข้อมูลหลังบ้าน",
    tags: ["ASP.NET Core MVC", "SQL Server"]
  },
  {
    id: 3,
    title: "SHARK SOUND",
    description: "Web Application สำหรับการจัดการ โหลด และเล่นไฟล์เสียง",
    tags: ["React", "JavaScript"]
  }
];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(5000, () => {
  console.log('Backend server running on http://localhost:5000');
});