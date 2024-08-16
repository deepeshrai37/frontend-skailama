import { useState } from 'react';
import './welcome.css';
import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
const WelcomePage = () => {
  const [email, setEmail] = useState("testuser@example.com");
  const [password, setPassword] = useState("password123");
  const navigate=useNavigate();
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const response=await authService.login(email, password);
      if(response.email===email){
        navigate("/project")
      }
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="welcome-container">
      <div className="promo-section">
        <div className="overlay"></div>
        <div className="promo-content">
          <div className="logo-container">
            <img src="assets/qi_logo.png" alt="Ques.AI logo" height="56px" width="56px"/>
            <h2>Ques.AI</h2>
          </div>
          <h1>Your podcast <br /> will no longer <br /> be just a hobby.</h1>
          <p>Supercharge Your Distribution using our AI assistant!</p>
        </div>
      </div>
      <div className="login-section">
      
        <div className="login-box">
        <img src="/assets/color_logo.png" alt="Ques.AI logo" height="90px" width="90px"/>
        
          <h2 className='title1'>Welcome to</h2>
          <h2 className='title2'>Ques.AI</h2>
          <form onSubmit={handleOnSubmit}>
            <input className='place' type="email" placeholder="Email Address" required value={email}
            onChange={(e) => setEmail(e.target.value)} />
            <input className='place' type="password" placeholder="Password" required
            value={password} onChange={(e)=>setPassword(e.target.value)} />
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/">Forgot password?</a>
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="or-section">
            <img src="/assets/Line 12.png" alt="" />
            <span>or</span>
            <img src="/assets/Line 12.png" alt="" />
          </div>
          <button className="google-login">
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" />
            Continue with Google
          </button>
          <p>Don’t have an account? <a href="/">Create Account</a></p>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
