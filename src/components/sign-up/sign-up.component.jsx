import React, { Component } from "react";

import { SignUpContainer, TitleStyle } from "./sign-up.styles";

import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.components";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleClick = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <TitleStyle>I do not have an account.</TitleStyle>
        <span>Sign Up With Email And Password</span>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          onChange={this.handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={this.handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={this.handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={this.handleChange}
          required
        />
        <CustomButton onClick={this.handleClick}>SignUp</CustomButton>
      </SignUpContainer>
    );
  }
}

export default SignUp;
