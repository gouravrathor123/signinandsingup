import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CredentialsContext } from "../App";
import Posts from "../components/posts";

export default function Welcome() {
  const [credentails] = useContext(CredentialsContext);
  // const logout = () => {
  //   setCredentials(null);
  // };

  return (
    <div>
      {/* {credentails && <button onClick={logout}>Logout</button>} */}
      <h1>Welcome {credentails && credentails.username}</h1>
      {!credentails && <Link to="/sign-up" className="aLink">SignUp</Link>}
      <br/>
      <br/>
      {!credentails && <Link to="/log-in" className="aLink">Login</Link>}
      {credentails && <Posts />}
    </div>
  );
}