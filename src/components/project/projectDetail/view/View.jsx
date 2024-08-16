/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import './view.css'
import { useNavigate } from 'react-router-dom';
const View=({selectedItem,project, setView ,index})=>{
  const [edit,setEdit]=useState(false)
  const [content, setContent] = useState(project.episodes[index].content);

  const navigate=useNavigate();

  const handleEdit=()=>{
    setEdit(true)
  }

  const handleDiscard=()=>{
    setEdit(false)
    setContent(project.episodes[index].content)
  }
  const handleSave=async()=>{
    const token = localStorage.getItem('token');
    const url = window.location.href;
    const id = url.split('/').pop();
    try {
      // Make a POST request to the server
      const response = await axios.post(
        `https://backend-skailama-rbqq.onrender.com/api/projects/${id}`,
        { index ,content },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.status === 200) {
        console.log(response)
        const updatedProject =  response.data;
        setContent(updatedProject.episodes[index].content);
        setEdit(false);
        navigate('/project')

      }
    } catch (error) {
      console.error('Error uploading episode:', error);
    }
  }
 return(
  <>
<div className="main-content">
      <div className="breadcrumb">
        Home Page / {project.name} /<span>{selectedItem}</span>
      </div>
      <div className="heading">
<h1 className="back"onClick={()=>setView(false)}>
    🔙
  </h1> 
  <h1>Edit Transcript</h1>
  {edit? <div className="btn-save">
<button className='btn-discard' onClick={handleDiscard}>Discard</button>
<button className='btn-saved' onClick={handleSave}>Save</button>
</div>
  : 
  <div className='btn-edit'>
    <button onClick={handleEdit}>Edit</button>
    </div>
    }
</div>
      <div className="cards">
      <div className="card-element">
        <h1>Speaker</h1>
          <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          readOnly={!edit} // Textarea is only editable when edit is true
          className="textarea-content"
        />
</div>
      
      </div>
    </div>
 
  </>
 )
}

export default View;