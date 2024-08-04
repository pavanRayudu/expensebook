import { useState } from "react";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


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
    })
  }
  
  const handleSignInWithGoogle = () => {
    auth.signInWithGoogleAccount().then(res => {
      navigate('/')
    }).catch(err => {
      setError("Invalid Credentials")
      console.error(err)
    })
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
        <button type='submit' id='login-btn'>Sign in</button>
        <span id="login-error">{error}</span>
      </form>
      <hr id="divider" />
      <button onClick={handleSignInWithGoogle} type='button' id='login-with-google-btn'><FcGoogle size={25} /> Sign in with Google</button>
    </div>

  )
}

export default Login
