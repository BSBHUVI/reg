import React from 'react'
import './Signin.css'
import {app} from './Firebase'
import { useState } from 'react';
import { getAuth,createUserWithEmailAndPassword} from "firebase/auth";

function Signup() {
    const auth = getAuth();
  const [data,setData] = useState({});
  const handleInput = (event)=>{
    let newInput={ [event.target.name] : event.target.value };
    setData({...data,...newInput});
  };
  const handleSubmit=(e)=>{
      e.preventDefault();
    
      
    createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((response) => {
     

    
    console.log(response.user);
    alert('successfully registered')
   
    
    
  })
  .catch((error) => {
    alert(error.message)
    
   
    
  });

  }
  return (
<>

<div className="form card1">

<div className="card_header">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
    </svg>
    <h1 className="form_heading">Register</h1>
  </div>
  <div className="field">
    <input className='input' placeholder='email' type='email' name='email' onChange={(event)=>handleInput(event)}/>
    </div>
    <div className="field">
    <input className='input' type='password' placeholder='password' name='password' onChange={(event)=>handleInput(event)}/>
    </div>
    <div className="field">
    <input className='button inn' type="submit" name="submit" onClick={(event)=>handleSubmit(event)} />
    </div>
</div>


</>
  )
}

export default Signup
