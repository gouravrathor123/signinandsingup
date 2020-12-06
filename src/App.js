import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/welcome';
import SignUp from './pages/SignUpForm';
import LogIn from './pages/SignInForm';
import Create from './components/create';
import './App.css';
import Allposts from './components/all-posts';

export const CredentialsContext = React.createContext()

function App(){
  const credentialsState = useState({
    username:"gouravrathor",
    password:"Gourav@123"
  });
  return(
    <div className="App">
    <CredentialsContext.Provider value={credentialsState}>
      <Router>
        <Switch>
          <Route exact path = "/">
            <Welcome />
          </Route>
          <Route exact path = "/sign-up">
            <SignUp />
          </Route>
          <Route exact path = "/log-in">
            <LogIn />
          </Route>
          <Route exact path = '/create-post'>
            <Create />
          </Route>
          <Route exact path = '/all-posts'>
            <Allposts />
          </Route>
        </Switch>
      </Router>
      </CredentialsContext.Provider>
     </div>
  )
}

export default App;