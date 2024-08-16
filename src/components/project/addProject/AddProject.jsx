/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import './addProject.css'
import { useNavigate } from 'react-router-dom';
const AddProject=({formModalIsOpen, setFormModalIsOpen})=>{
  
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate();
  


  const closeFormModal = useCallback(() => {
    setFormModalIsOpen(false);
    setName('');
    setMessage('');
  },[setFormModalIsOpen]);

  const handleSubmit=async()=>{
    if(name===''){
      setMessage('Project Name is required');
      return;
    }
    const token = localStorage.getItem('token');
   const response=await axios.post('https://backend-skailama-rbqq.onrender.com/api/projects', {name}, {headers: {Authorization: `Bearer ${token}`}})
    if(response.status===201){
      navigate("/project")
    }
    closeFormModal();
  }
  return (
   <>
     <Modal
        isOpen={formModalIsOpen}
        onRequestClose={closeFormModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width:'800px',
            height: '37vh',
            overflow: 'hidden',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            background: '#fff',
            border: 'none',
            display: 'flex',
            flexDirection:'column'
          },
        }}
      >
        <div className="modal-div">
          <h1>Create Project</h1>

          <p>Enter Project Name:</p>
        <input
              type="text"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Type Here"
              required
            />
            <h2 className="error-msg">{message}</h2>
            <div className="btn">
              <button className="cancel-btn" onClick={closeFormModal}>
                Cancel
              </button>
              <button className="submit-btn" onClick={handleSubmit}>Create</button>
            </div>
            
        </div>
            
          
       
      </Modal>
   </>
  )

}

export default AddProject;