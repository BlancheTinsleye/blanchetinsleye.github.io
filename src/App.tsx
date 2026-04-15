import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.tsx'
import WorkExerperiencePage from './pages/workexperience/workexperiencepage/WorkExerperiencePage.tsx'
import ProjectsPage from './pages/projects/projectspage/ProjectsPage.tsx'
import DrawingsTradPage from './pages/drawingstrad/drawingstradpage/DrawingsTradPage.tsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workexperience" element={<WorkExerperiencePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/drawingstrad" element={<DrawingsTradPage />} />
    </Routes>
  )
}
