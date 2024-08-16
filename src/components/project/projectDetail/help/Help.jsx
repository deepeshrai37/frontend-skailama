/* eslint-disable react/prop-types */
import './help.css'
import { jwtDecode } from 'jwt-decode';
const Help=({setHelp, selectedItem ,project})=>{
  const jwtToken = localStorage.getItem('token');
  const decode=jwtDecode(jwtToken);
  const handleClick=()=>{
    localStorage.removeItem('token');
    window.location.href = '/';
  }
  return (
    <>
    <div className="main-content">
      <div className="breadcrumb">
        Home Page / {project.name} /<span>{selectedItem}</span>
      </div>
      <div className="heading">
<h1 className="back"onClick={()=>setHelp(false)}>
    🔙
  </h1> 
  <h1>Account Settings</h1>
  <div className="logout">
    <img src="/assets/bell.png" alt="" />
    <img onClick={handleClick} className='logo-logout' src="/assets/logout.png" alt="" />
  </div>
</div>
<div className="account-settings">
        <div className="user-info">
          <div className="profile-pic">
            <img src="/assets/username.png" alt="User" />
          </div>
          <div className="user-details">
            <div className="input-group">
              <label>Username</label>
              <input type="text" value={decode.username} readOnly />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" value={decode.email} readOnly />
            </div>
          </div>
        </div>

        <div className="subscriptions">
          <h2>Subscriptions</h2>
          <div className="subscription-card">
            <p>Oops! You do not have any active plans. <a href="/upgrade">Upgrade now!</a></p>
            <button className="upgrade-button">Upgrade</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Help;