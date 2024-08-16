/* eslint-disable react/prop-types */
import './card.css'
const Card = ({ icon, title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <img src={icon} alt={`${title} icon`} />
      
    </div>
  );
};

export default Card;