import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
