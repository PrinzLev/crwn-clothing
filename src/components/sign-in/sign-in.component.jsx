import React from "react";
import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.components";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.util";

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
  handleClick = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account.</h2>
        <span>Enter your email and password.</span>
        <form onSubmit={this.handleClick}>
          <FormInput
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            name="email"
            label="email"
            required
          />
          <FormInput
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            name="password"
            label="password"
            required
          />
          <div className="button">
            <CustomButton type="submit" value="Submit Form">
              Sign In
            </CustomButton>
            <CustomButton
              type="submit"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
