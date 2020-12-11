import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CredentialsContext } from '../App';
import {handleErrors} from './SignUpForm'


export default function SignInForm(){
  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');
  const [error, setError]=useState('');
  const [,setCredentials] = useContext(CredentialsContext)

const login = (e) => {
  e.preventDefault();
  fetch('http://localhost:5000/users/signin', {
    method: 'POST',
     headers:{
      'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       username,password
     })
  })
  .then(handleErrors)
  .then(() => {
    setCredentials({
      username,
      password,
    },
    sessionStorage.setItem("username",username))
    history.push("/userprofile")
  })
  .catch((error) => {
    setError(error.message);
  })
};

const history = useHistory();


  return <div>
            <h1>Log In</h1>
            {error && <h4 style={{color:"red"}}>{error} </h4>}
            <form onSubmit={login}>
              <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username"/>
              <br/>
              <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
              <br/>
              <br/>
              <button type="submit">Log In</button>
            </form> 
        </div>
}

