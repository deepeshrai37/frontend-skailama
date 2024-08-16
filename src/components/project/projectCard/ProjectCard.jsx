/* eslint-disable react/prop-types */
import './projectCard.css'
import { useNavigate } from 'react-router-dom';
const ProjectCard = ({ project}) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    if (project) {
      console.log('Navigating to project:', project);
      navigate(`/project/${project._id}`, { state: { project } });
    }
  };
  return (
    <div className="project-card" onClick={handleCardClick}>
      <div className="project-icon">
        <span>{project.name.charAt(0).toUpperCase()}</span>
      </div>
      <div className="project-details">
        <h2 className="project-name">{project.name}</h2>
        <p className="project-episodes">{project.episodes.length} Episodes </p>
        <p className="project-updated">Last edited a week ago</p>
      </div>
    </div>
  );
};

export default ProjectCard;