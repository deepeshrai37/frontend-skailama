import { useEffect, useState } from "react";
import ExisitingProject from "./existingProject/ExisitingProject";
import NewProject from "./newProject/NewProject";
import axios from "axios";
const Project=()=>{
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get('https://backend-skailama-rbqq.onrender.com/api/projects', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    .then(response => setProjects(response.data))
    .catch(error => console.log(error))

  },[projects])
return (
  <>
 
  {projects.length > 0 ? <ExisitingProject projects={projects}/> : <NewProject/>  }
  </>
)
}

export default Project;