/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from '../Card/Card';
import FileUpload from '../fileUpload/FileUpload';
import ProjectList from '../ProjectList/ProjectList';
import './mainContent.css';
import Modal from '../Card/modal/Modal';

const MainContent = ({ selectedItem, project,setView , setIndex }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (title, description) => {
    setModalContent({ title, description });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="main-content">
      <div className="breadcrumb">
        Home Page / {project.name} /<span>{selectedItem}</span>
      </div>
      <h1>{selectedItem}</h1>
      <div className="cards">
        <Card
          icon="/assets/image 1.png"
          title="RSS Feed"
          description="Lorem ipsum dolor sit. Dolor lorem sit."
          onClick={() => handleCardClick("RSS Feed", "Lorem ipsum dolor sit. Dolor lorem sit.")}
        />
        <Card
          icon="/assets/image 2.png"
          title="YouTube Video"
          description="Lorem ipsum dolor sit. Dolor lorem sit."
          onClick={() => handleCardClick("YouTube Video", "Lorem ipsum dolor sit. Dolor lorem sit.")}
        />
        <Card
          icon="/assets/image 3.png"
          title="Upload Files"
          description="Lorem ipsum dolor sit. Dolor lorem sit."
          onClick={() => handleCardClick("Upload Files", "Lorem ipsum dolor sit. Dolor lorem sit.")}
        />
      </div>
      {project.episodes.length > 0 ? <ProjectList project={project} setView={setView} setIndex={setIndex} /> : <FileUpload />}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent && (
          <div>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MainContent;
