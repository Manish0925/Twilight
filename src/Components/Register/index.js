//src/components/About/index.js

import React from "react";
import { Redirect } from "react-router-dom";
import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      username: "",
      useravatar: "",
      password: "",
      redirect: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    console.log("Entered login handle");
    const data = new FormData();
    data.append("userimg", this.state.files[0]);
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    fetch("/login/add", {
      method: "POST",
      body: data,
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 500) {
          console.log("Internal server error");
        }
      })
      .catch((err) => console.log(err));

    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }

    return (
      <form onSubmit={this.handleLogin}>
        <a className="Nav-brand-logo" href="/">
          Twilight
        </a>
        <hr />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br />
        <br />
        <h3>
          Signup Page
        </h3>
        <label htmlFor="username"><b>Username: </b></label>
           &nbsp;&nbsp;
        <input
          type="text"
          value={this.state.username}
          placeholder="Enter username"
          onChange={(e) => this.setState({ username: e.target.value })}
        />
        <div>
          <label htmlFor="password"><b>Password: </b></label>
            &nbsp;&nbsp;
          <input
            type="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="useravatar">
            <b>Upload profile image : </b>
          </label>
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          <input
            type="file"
            name="userimg"
            onChange={(e) => {
              this.setState({ files: e.target.files });
            }}
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button type="submit" class="btn btn-secondary">
          Register
        </button>
      </form>
    );
  }
}

export default Register;
