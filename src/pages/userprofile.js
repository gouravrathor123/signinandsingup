import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import { CredentialsContext } from "../App";

export default function Welcome() {
  const [credentails] = useContext(CredentialsContext);
  const [list,setList] = useState('');
  const [todos,setTodos] = useState([]);
  const [update,setUpdate]= useState('');

  const addtask = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/exercises/add', {
      method: 'POST',
       headers:{
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({
        list
       })
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }


  useEffect(() => {
    axios.get(`http://localhost:5000/exercises/`)
    .then((response) => {
        setTodos(response.data)
    })
  }, []);

  const updated = (id) => {
    axios.put('http://localhost:5000/exercises/update',{
        id:id,
        updatedvalue:update
    })
  }

  const deleted = (id) => {
    axios.delete(`http://localhost:5000/exercises/delete/${id}`)
  }

  return (
    <div>
      <h1>Welcome {credentails && credentails.username}</h1>
      <form onSubmit={addtask}>
      <input type='text' onChange={e=>setList(e.target.value)} placeholder="write the task here"/>
      <button type='submit'>Add Task</button>
      </form>
      <ul>
        {todos.map((val,key) => {
            return (
                <div key={key}> 
                    <li>{val.list}</li>
                    <input type="text" placeholder="updated task" onChange={(e) => setUpdate(e.target.value)}/> 
                    <button onClick={() => updated(val._id)}>Update</button>
                    <br/>
                    <button onClick={() => deleted(val._id)}>Delete</button>
                    <hr/>
                </div>)
        })}
      </ul>
    </div>
  );
}