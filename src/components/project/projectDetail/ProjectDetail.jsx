import { useLocation, useNavigate } from 'react-router-dom';
import './projectDetail.css';
import { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import MainContent from './mainContent/MainContent';
import View from './view/View';
import Help from './help/Help';
function ProjectDetail() {
  const [selectedItem, setSelectedItem] = useState('Add your Podcast(s)');
  const [view,setView]=useState(false)
  const [index, setIndex] = useState(0)
  const [help,setHelp] =useState(false)
  const location = useLocation();
  const navigate = useNavigate();
  
  const project = location.state?.project;

  if (!project) {
    navigate('/');
    return null;
  }
  

  const sidebarItems = [
    'Add your Podcast(s)',
    'Create & Repurpose',
    'Podcast Widget'
  ];

  return (
    <div className="project-detail">
      <Sidebar
        items={sidebarItems}
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
        setHelp={setHelp}
      />
      {
      view? <View project={project} setView={setView} index={index} selectedItem={selectedItem}/>
      :help? <Help setHelp={setHelp} selectedItem={selectedItem} project={project}/>
      :<MainContent selectedItem={selectedItem} project={project} setView={setView} setIndex={setIndex} />}
      
    </div>
  );
}


export default ProjectDetail;
