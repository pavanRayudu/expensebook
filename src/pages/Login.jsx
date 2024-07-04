import { useState } from "react";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [error, setError] = useState()
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const auth = useAuth();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.loginInWithEmailAndPassword(loginCredentials).then(res => {
      navigate('/')
    }).catch(err => {
      setError("Invalid Credentials")
      console.error(err)
    }
    )
  }

  return (
    <div className="login-page">
      <h1 id='login-heading'>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="email"
          placeholder='Enter email'
          name="email"
          onChange={(e) => setLoginCredentials({ ...loginCredentials, [e.target.name]: e.target.value })}
        />
        <input
          required
          type="password"
          placeholder='Enter password'
          name="password"
          onChange={(e) => setLoginCredentials({ ...loginCredentials, [e.target.name]: e.target.value })}
        />
        <button type='submit' id='login-btn'>Submit</button>
        <span id="login-error">{error}</span>
      </form>
    </div>

  )
}

export default Login
