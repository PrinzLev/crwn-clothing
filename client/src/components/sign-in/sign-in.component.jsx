import React, { useState } from "react";
import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.components";
import { connect } from "react-redux";
import { SignInContainer, TitleStyle, ButtonContainer } from "./sign-in.styles";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };
  return (
    <SignInContainer>
      <TitleStyle>I already have an account.</TitleStyle>
      <span>Enter your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          handleChange={handleChange}
          value={email}
          name="email"
          label="Email"
          required
        />
        <FormInput
          type="password"
          handleChange={handleChange}
          value={password}
          name="password"
          label="Password"
          required
        />
        <ButtonContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
