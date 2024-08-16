import { useCallback, useState } from "react";
import "./newProject.css"
import AddProject from "../addProject/AddProject";
const NewProject=()=>{
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
   <div className="project-content">
    <h1>Create a New Project</h1>
    <img src="/assets/Group 16.png"></img>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
    <button onClick={openFormModal}>
       <div className="btn-items">
       <img className="btn-img" src="/assets/Vector (7).png" alt="" height="35px" width="35px"/>
       Create New Project
       </div>
      </button>
      <AddProject formModalIsOpen={formModalIsOpen} setFormModalIsOpen={setFormModalIsOpen}/>
   </div>
  
  </>
)
}

export default NewProject;