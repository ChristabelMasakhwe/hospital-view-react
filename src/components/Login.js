import React, {useState} from 'react'
import Signup from "./Signup";
import LoginForm from './LoginForm';


function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
  
    return (
      <div id="signup" align="center">
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <p>
              Don't have an account? &nbsp;
              <button  onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
            </p>
          </>
          
        ) : (
          <>
            <Signup onLogin={onLogin} />
            <p>
              Already have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p>
          </>
        )}
        </div>
    );
  }
 
  export default Login;