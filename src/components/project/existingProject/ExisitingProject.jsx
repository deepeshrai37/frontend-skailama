import { useCallback, useState } from "react";
import AddProject from "../addProject/AddProject";
import './exisitingProject.css'
import ProjectCard from "../projectCard/ProjectCard";

/* eslint-disable react/prop-types */
const ExisitingProject=({projects})=>{
  const [formModalIsOpen, setFormModalIsOpen] = useState(false);
  const openFormModal = useCallback(() => {
    setFormModalIsOpen(true);
  }, []);
  return (
    
    <>
    <div className="navbar">
   <img src="/assets/QuesLogo 1.png" alt="" />
   <div className="nav-items">
    <img src="/assets/Icon.png" alt="" height="50px" width="50px" />
    <img src="/assets/notifications.png" alt="" height="50px" width="50px" />
   </div>
   </div>
   <div className="content">
    <h1>Projects</h1>
    <button onClick={openFormModal}>
       <div className="btn-items">
       <img className="btn-img" src="/assets/Vector (7).png" alt="" height="35px" width="35px"/>
       Create New Project
       </div>
      </button>
    <AddProject formModalIsOpen={formModalIsOpen} setFormModalIsOpen={setFormModalIsOpen}/>
   </div>
   <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>

    </>
  )
}

export default ExisitingProject;