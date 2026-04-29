import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/home/Home.tsx'
import WorkExerperiencePage from './pages/workexperience/workexperiencepage/WorkExerperiencePage.tsx'
import ProjectsPage from './pages/projects/projectspage/ProjectsPage.tsx'
import DrawingsTradPage from './pages/drawingstrad/drawingstradpage/DrawingsTradPage.tsx'
// import Note from './pages/note/Note.tsx'
import DrawingsDigiPage from './pages/drawingsdigi/drawingsdigipage/DrawingsDigiPage.tsx'
import SkillsSection from './pages/skillssection/SkillsSection.tsx'
import SandBox1_skills from './Sandbox/pages/sandbox_1/SandBox1.tsx'

export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Note />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/workexperience" element={<WorkExerperiencePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/drawingstrad" element={<DrawingsTradPage />} />
      <Route path='/drawingsdigi' element={<DrawingsDigiPage />} />
      <Route path='/skills' element={<SkillsSection />} />

      {/* SANDBOX ROUTES */}
      <Route path='/sandbox1-skills' element={<SandBox1_skills />} />
    </Routes>
  )
}
