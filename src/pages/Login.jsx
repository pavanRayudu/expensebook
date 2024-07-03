import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from '../dbConfig';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useLocalStorage } from '../components/helpers/useLocalStorage';

const Login = () => {
  const[error, setError] = useState("")
  const [setValue] = useLocalStorage()
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginCredentials.email, loginCredentials.password)
      const user = userCredential.user;
      console.log('User signed up:', user.email);
      window.localStorage.setItem('data', JSON.stringify(user.email));

      navigate('/')
    } catch (error) {
      setError("Invalid email or Password")
    }
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

        {error && <span>{error}</span>}
      </form>
      {/* <button onClick={signInwithGoogle}>Sign in with google</button> */}
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>

  )
}

export default Login
