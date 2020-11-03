import React from "react";
import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.components";

import { SignInContainer, TitleStyle, ButtonContainer } from "./sign-in.styles";

import { auth, signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleClick = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <SignInContainer>
        <TitleStyle>I already have an account.</TitleStyle>
        <span>Enter your email and password.</span>
        <form onSubmit={this.handleClick}>
          <FormInput
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            name="email"
            label="Email"
            required
          />
          <FormInput
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            name="password"
            label="Password"
            required
          />
          <ButtonContainer>
            <CustomButton type="submit" value="Submit Form">
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </ButtonContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
