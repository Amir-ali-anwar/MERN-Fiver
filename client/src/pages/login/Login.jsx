import React from "react";
import FormRow from "../../components/input/FormRow";
// import "./Login.scss"
import "../../components/input/register.scss";
function Login() {
  return (
    <div className="login">
      <form>
        <FormRow type="text" name="username" labelText="Username" />
        <FormRow type="password" name="Password" labelText="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
