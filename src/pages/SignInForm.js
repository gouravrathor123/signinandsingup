/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CredentialsContext } from '../App';
import {handleErrors} from './SignUpForm'

// class SignInForm extends Component {
//     constructor() {
//         super();

//         this.state = {
//             email: '',
//             password: ''
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(e) {
//         let target = e.target;
//         let value = target.type === 'checkbox' ? target.checked : target.value;
//         let name = target.name;

//         this.setState({
//           [name]: value
//         });

//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         console.log('The form was submitted with the following data:');
//         console.log(this.state)

//         axios.post('http://localhost:5000/users/signin', this.state)
//           .then(res => console.log(res.data))
//           .catch()
//     }

//      history = useHistory();

//     render() {
//       const newLocal = this;
//         return (
//         <div className="FormCenter">
//             <h1>SignIn</h1> 
//             <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={newLocal.handleSubmit}>
//             <div className="FormField">
//                 <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
//                 <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
//               </div>

//               <div className="FormField">
//                 <label className="FormField__Label" htmlFor="password">Password</label>
//                 <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
//               </div>
//               <div className="FormField">
//               <button type="submit" className="FormField__Button mr-20">Sign In</button>
//                <Link to="/" className="FormField__Link">Create an account</Link>
//               </div>
//             </form>
//           </div>
//         );
//     }
// }



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
    });
    history.push("/")
  })
  .catch((error) => {
    setError(error.message);
  })

  // console.log('The form was submitted with the following data:');
  //          console.log(this.state);
  
  //          axios.post('http://localhost:5000/users/add', this.state)
  //            .then(this.handleErrors)
  //            .then(res => console.log(res.data))
  //            .catch((error) => {
  //              console.log(JSON.stringify(error));
  //              console.log("we are here", error)
  //            })
  //            alert('signed up')
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

