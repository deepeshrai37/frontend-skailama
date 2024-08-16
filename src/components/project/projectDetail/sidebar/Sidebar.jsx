/* eslint-disable react/prop-types */
import './sidebar.css'
import { jwtDecode } from 'jwt-decode';
const Sidebar = ({ items, selectedItem, onSelect, setHelp }) => {
  //fetch jwtToken from local storage then retriev email from jwtToken and set a value to it
  const jwtToken = localStorage.getItem('token');
  const decode=jwtDecode(jwtToken);
 const handleClick = () => {
  setHelp(true);
 }
  return (
    <div className="sidebar">
      
      <img src='/assets/QuesLogo 1.png' alt='Logo' height="40px" width="150px"/>
     
     
      <ul className="sidebar-nav">
        {items.map((item) => (
          <li
            key={item}
            className={`sidebar-nav-item ${selectedItem === item ? 'active' : ''}`}
            onClick={() => onSelect(item)}
          >
            {item}
          </li>
        ))}
        <li className="sidebar-nav-item upgrade">Upgrade</li>
      </ul>
      <div className="sidebar-footer">
        <div className="help">Help</div>
        <div className="user">
          <img onClick={handleClick} src="/assets/user.png" />
          <div className="username">{decode.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;