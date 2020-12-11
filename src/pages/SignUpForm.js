import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CredentialsContext } from '../App';
export const handleErrors= async (response) => {
  if(!response.ok){
    const {message} = await response.json();
    throw Error(message);
  }
  return response.json();
}

export default function SignInForm(){

const [username, setUsername]=useState('');
const [password, setPassword]=useState('');
const [email, setEmail]=useState('');
const [error, setError]=useState('');
const [,setCredentials] = useContext(CredentialsContext)

const signup = (e) => {
  e.preventDefault();
  fetch('http://localhost:5000/users/add', {
    method: 'POST',
     headers:{
      'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       username,password,email
     })
  })
  .then(handleErrors)
  .then(() => {
    setCredentials({
      username,
      password,
      email,
    });
    history.push("/userprofile")
  })
  .catch((error) => {
    setError(error.message);
  })
};

const history = useHistory();

return <div>
            <h1>SignUp</h1>
            {error && <h4 style={{color:"red"}}>{error} </h4>}
            <form onSubmit={signup}>
              <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username"/>
              <br/>
              <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
              <br/>
              <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email"/>
              <br/>
              <button type="submit"> Sign Up</button>
            </form> 
        </div>
}
