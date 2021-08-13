import React, { Component } from "react";
import "./SignIn.scss";
import CustomButton from "../../custom-button/CustomButton";
import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";

import FormInput from "../../form-input/FormInput";

export default class signIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    // console.log("working");
    
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email:'', password:''});


    } catch (error) {
      console.log("signing in error: ", error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {

    const {email, password} = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password </span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="text"
            value={email}
            onChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            label="password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
