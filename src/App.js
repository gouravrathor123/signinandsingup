import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/welcome';
import SignUp from './pages/SignUpForm';
import LogIn from './pages/SignInForm';
import Userprofile from './pages/userprofile';
import './App.css';


export const CredentialsContext = React.createContext()

function App(){
  const credentialsState = useState(null);
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
          <Route exact path = "/userprofile">
            <Userprofile />
          </Route>
        </Switch>
      </Router>
      </CredentialsContext.Provider>
     </div>
  )
}

export default App;