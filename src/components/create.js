import React, { useContext, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { CredentialsContext } from '../App';
import {handleErrors} from '../pages/SignUpForm'


export default function Create(){
    
const [title, setTitle]=useState('');
const [description, setDescription] = useState('');
const [error, setError]=useState('');
const [credentails,setCredentials] = useContext(CredentialsContext)
const username = credentails.username
const create = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/exercises/add', {
      method: 'POST',
       headers:{
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({
        username,title,description
       })
    })
    .then(handleErrors)
    .then(() => {
      alert('post created')
    //   history.push("/")
    })
    .catch((error) => {
      setError(error.message);
    })
  };

//   const history = useHistory();

    return <div>
        <h1>Create Post</h1>
        {error && <h4 style={{color:"red"}}>{error} </h4>}
         <form onSubmit={create}>
              <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title"/>
              <br/>
              <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description"/>
              <br/>
              <br/>
              <button type="submit">Create</button>
        </form> 
    </div>
}