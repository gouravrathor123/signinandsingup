import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CredentialsContext } from '../App';
// import axios from 'axios';
// class SignUpForm extends Component {
//     constructor() {
//         super();

//         this.state = {
//             email: '',
//             password: '',
//             name: '',
//             // hasAgreed: false
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
//         console.log(this.state);

//         axios.post('http://localhost:5000/users/add', this.state)
//           .then(this.handleErrors)
//           .then(res => console.log(res.data))
//           .catch((error) => {
//             console.log(JSON.stringify(error));
//             console.log("we are here", error)
//           })

//           alert('signed up')
//     }

//     render() {
//         return (
//         <div className="FormCenter">
//             <h1>SignUp</h1>
//             <form onSubmit={this.handleSubmit} className="FormFields">
//               <div className="FormField">
//                 <label className="FormField__Label" htmlFor="name">Full Name</label>
//                 <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
//               </div>
//               <div className="FormField">
//                 <label className="FormField__Label" htmlFor="password">Password</label>
//                 <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
//               </div>
//               <div className="FormField">
//                 <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
//                 <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
//               </div>

//               {/* <div className="FormField">
//                 <label className="FormField__CheckboxLabel">
//                     <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
//                 </label>
//               </div> */}

//               <div className="FormField">
//                   <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
//               </div>
//             </form>
//           </div>
//         );
//     }
// }

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
    history.push("/")
  })
  .catch((error) => {
    setError(error.message);
  })
};
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
