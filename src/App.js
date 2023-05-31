import React, { useState } from 'react';

import './App.css';
import Register from './Registers';
import Login from './Logins';

function App (){
  const [currentForm, setCurrentForm] = useState('Login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className='App'>
      {
        currentForm == 'login' ? <Login onFormSwitch = {toggleForm} /> : <Register onFormSwitch = {toggleForm} />
      }
      
    </div>
  );
}

export default App;

/*import React from 'react';
import StringEnding from './StringEnding';

function App() {
  return (
    <div>
      <StringEnding string="Hello, World!" ending="World!" />
    </div>
  );
}

export default App;*/