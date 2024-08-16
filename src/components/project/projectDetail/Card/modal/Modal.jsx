/* eslint-disable react/prop-types */
import { useState } from 'react';
import './modal.css';
import axios from 'axios';

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleUpload = async() => {
    const token = localStorage.getItem('token');
    const url = window.location.href;
    const id = url.split('/').pop();
    const episodes = {
      name,
      content: text
    };
    console.log(token,url,id,episodes)
    try {
      // Make a POST request to the server
      const response = await axios.put(
        `https://backend-skailama-rbqq.onrender.com/api/projects/${id}`,
        { "episodes":[episodes] },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.status === 200) {
        console.log('Episode uploaded successfully');
        setName('');
        setText('');
        onClose();
      }
    } catch (error) {
      console.error('Error uploading episode:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <img src="/assets/image 2.png" alt="YouTube" className="youtube-icon" />
          <h2>Upload from YouTube</h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter video name"
          />
          <label>Text</label>
          <textarea
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter video link"
          />
        </div>
        <div className="modal-footer">
          <button className="upload-button" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
