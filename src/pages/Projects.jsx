import { useEffect, useState } from "react"
import "./Projects.css"
import SpotlightCard from "../components/SpotlightCard"

function ProjectCard({ imgSrc, title, alias, visitUrl, children }) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <SpotlightCard className="project-card dotted-bg" spotlightColor="#8c00ff0e">
      <div 
        onMouseOver={()=>setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        className="card-content">
        <img src={imgSrc} alt={title} className="card-image" />
        <h2>{title}</h2>
        
        <div className="card-description">{children}</div>

      </div>
    </SpotlightCard>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    fetch("/data/projects.json")
      .then(res => res.json())
      .then(setProjects)
  }, [])
  
  return (
    <div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            imgSrc={project.image}
            >{project.description}</ProjectCard>
        ))}
      </div>
    </div>
  )
}