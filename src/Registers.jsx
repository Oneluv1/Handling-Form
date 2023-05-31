import React, { useState } from "react";

export const Register = (props) => {
  const[email, setEmail] = useState('');
  const[pwd, setPwd] = useState('');
  const[name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
    <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Full name</label>
      <input value={name} name="name" id="name" placeholder="Your full name" />
      <label htmlFor="email">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id='email' name="email"/>

      <label htmlFor="password">Password</label>
      <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" placeholder="*************" id='password' name="password"/>

      <button type="submit">Register</button>
    </form>
    <button  className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here.</button>
    </div>
  )
}
export default Register

