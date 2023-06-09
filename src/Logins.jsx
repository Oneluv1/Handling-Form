import React, { useState } from "react"

export const Login = (props)  => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    
    <div className="auth-form-container">
      <h2>Login</h2>
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id='email' name="email"/>

      <label htmlFor="password">Password</label>
      <input value={pwd} onChange={(e) => setPwd(e.target.value)}type="password" placeholder="*********" id='password' name="password"/>
      <button type="submit">Log In</button>
    </form>
    <button className="link-btn" onClick={()=>props.onFormSwitch('Register')}>Don't have an account? Register here.</button>
    </div>
  )
}
export default Login