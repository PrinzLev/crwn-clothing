import React, { useState } from "react";

import { SignUpContainer, TitleStyle } from "./sign-up.styles";

import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.components";

import { signUpStart } from "../../redux/user/user.action";

import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleClick = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }

    signUpStart(displayName, email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <TitleStyle>I do not have an account.</TitleStyle>
      <span>Sign Up With Email And Password</span>
      <FormInput
        type="text"
        name="displayName"
        label="Display Name"
        value={displayName}
        onChange={handleChange}
        required
      />
      <FormInput
        type="email"
        name="email"
        label="Email"
        value={email}
        onChange={handleChange}
        required
      />
      <FormInput
        type="password"
        name="password"
        label="Password"
        value={password}
        onChange={handleChange}
        required
      />
      <FormInput
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        value={confirmPassword}
        onChange={handleChange}
        required
      />
      <CustomButton onClick={handleClick}> SignUp </CustomButton>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (displayName, email, password) =>
    dispatch(signUpStart({ displayName, email, password })),
});

export default connect(null, mapDispatchToProps)(SignUp);
