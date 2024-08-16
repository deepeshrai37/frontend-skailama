import Project from "./components/project/Project"
import ProjectDetail from "./components/project/projectDetail/ProjectDetail"
import WelcomePage from "./components/welcome/Welcome"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route exact path="/project" element={<Project/>}/>
      <Route path="/project/:id" element={<ProjectDetail/>} />
    </Routes> 
   </BrowserRouter>
  )
}

export default App
