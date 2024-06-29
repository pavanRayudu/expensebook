import React, { useContext, useState } from 'react'
import AuthContext from '../components/context/AuthContext';

const Login = () => {
  const [code, setCode] = useState();
  const { login } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(typeof code)
    if (Number(code) === 2111) {
      login({ code })
    } else {
      alert("Invalid Code !")
    }
  }
  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder='Enter Code' value={code} onChange={(e) => setCode(e.target.value)} />
        {/* <button type='submit' id='login-button'>OK</button> */}
      </form>
    </div>

  )
}

export default Login
