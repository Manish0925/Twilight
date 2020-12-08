import React from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      useravatar: "",
      password: "",
      redirect: false,
      incorrect: false,
      register: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    console.log("Entered login handle");
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((user) => user.json())
      .then((user) => {
        if (user.length) {
          this.setState({
            redirect: true,
            useravatar: user[0].useravatar,
            incorrect: false,
          });
        } else {
          this.setState({ incorrect: true });
        }
      });
  }

  render() {
    if (this.state.register) {
      return <Redirect push to="/Register" />;
    }

    if (this.state.redirect) {
      return (
        <Redirect
          push
          to={{
            pathname: "/Home",
            state: {
              username: this.state.username,
              useravatar: this.state.useravatar,
            },
          }}
        />
      );
    }
    if (this.state.incorrect) {
      return (
        <div>
          <a className="Nav-brand-logo" href="/">
            Twilight
          </a>
          <hr />
          <form onSubmit={this.handleLogin}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br />
            <br />
            <h3>Login Page</h3>
            <label htmlFor="username">Username: </label>
            &nbsp;&nbsp;
            <input
              type="text"
              value={this.state.username}
              placeholder="enter a username"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <div>
              <label htmlFor="password">Password: </label>
              &nbsp;&nbsp;
              <input
                type="password"
                value={this.state.password}
                placeholder="enter a password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Login
            </button>
            <p>Incorrect username or password entered</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>Don't have an account?</p>
            <button
              class="btn btn-secondary"
              onClick={(e) => this.setState({ register: true })}
            >
              Register
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <form onSubmit={this.handleLogin}>
          <a className="Nav-brand-logo" href="/">
            Twilight
          </a>
          <hr />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h4>Login Page</h4>
          <label htmlFor="username">
            <b>Username: </b>
          </label>
            &nbsp;&nbsp;
          <input
            type="text"
            value={this.state.username}
            placeholder="enter a username"
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <div>
            <label htmlFor="password">
              <b>Password: </b>
            &nbsp;&nbsp;
            </label>
            <input
              type="password"
              value={this.state.password}
              placeholder="enter a password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>Don't have an account?</p>
          <button
            class="btn btn-secondary"
            onClick={(e) => this.setState({ register: true })}
          >
            Register
          </button>
        </form>
      );
    }
  }
}

export default Login;
