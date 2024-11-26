import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
    if (!isLoggedIn) navigate('/dashboard');
    else navigate('/');
  };

  return (
    <div style={{ height:'200px', textAlign: 'center',
      alignItems:'center', marginTop: '50px',border:'1px solid',
      padding:'30px',left:'33%',position:'absolute',top:'20%',}}>
      <h1>Welcome to Coligo</h1>
      <button onClick={handleLoginLogout}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Login;
