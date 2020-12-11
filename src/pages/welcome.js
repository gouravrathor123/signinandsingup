import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CredentialsContext } from "../App";

export default function Welcome() {
  const [credentails] = useContext(CredentialsContext);
  return (
    <div>
      <h1>Welcome</h1>
      {!credentails && <Link to="/sign-up" className="aLink">SignUp</Link>}
      <br/>
      <br/>
      {!credentails && <Link to="/log-in" className="aLink">Login</Link>}
    </div>
  );
}