/* eslint-disable react/prop-types */
import './projectList.css';

const ProjectList = ({ project, setView ,setIndex }) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };

  const handleClick = (index) => {
    setIndex(index);
    setView(true);
  };
  return (
    <div className="project-list-container">
      <h2>Your Files</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Upload Date & Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {project.episodes.map((episode, index) => (
                <tr key={index}>
                <td>{index + 1}</td>
                <td>{episode.name}</td>
                <td>{`${(Date(episode.createdAt)).toLocaleString('en-US',options).substring(0,9)}|${(Date(episode.createdAt)).toLocaleString('en-US',options).substring(15,21)}`}</td>
                <td>
                  <div className="btn">
                    <button className="view-btn"  onClick={() => handleClick(index)}>View</button>
                    <button className="delete-btn">Delete</button>
                    <button className="share-btn">➤</button>
                  </div>
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;
