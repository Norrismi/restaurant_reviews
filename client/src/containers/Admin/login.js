import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";

//can use component will mount and request with axios

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    success: false
  };

  handleInputEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleInputPassword = event => {
    this.setState({ password: event.target.value });
  };

  submitForm = event => {
    event.preventDefault();
    this.props.dispatch(loginUser(this.state));
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.login.isAuth) {
      this.props.history.push("/user");
    }
  }

  //should add validation in form
  render() {
    let user = this.props.user;
    return (
      <div className="login-container">
        <form onSubmit={this.submitForm}>
          <h2>Login here</h2>

          <div className="form-element">
            <input
              type="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleInputEmail}
            />
          </div>

          <div className="form-element">
            <input
              type="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleInputPassword}
            />
          </div>
          <button type="submit">Login</button>
          <div className="error">
            {user.login ? <div>{user.login.message}</div> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Login);
