import React from "react";
import FormRow from "../../components/input/FormRow";
import "./Register.scss";

function Register() {
  return (
    <div className="register">
      <form>
        <div className="left">
          <h1>Create a new account</h1>
          <FormRow type="text" name="username" labelText="Username" />
          <FormRow type="email" name="email" labelText="Email" />
          <FormRow type="password" name="Password" labelText="Password" />
          <FormRow type="file" labelText="Profile Picture" />
          <FormRow type="text" name="country" labelText="Country" />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <FormRow type="text" name="phone" labelText="Phone Number" />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;
