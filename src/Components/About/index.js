//src/components/About/index.js

import React from "react";
import "./About.css";
import Header from "../Header";
import 'bootstrap/dist/css/bootstrap.css';

class About extends React.Component {
  render() {
    return (
      <div>
        <Header
          username={this.props.location.state.username}
          useravatar={this.props.location.state.useravatar}
        />
        <hr/>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <h1>Hey user! Welcome to Twilight.<br/>The one of its kind.</h1>
        <h1>Make yourself comfortable here</h1>
        <hr></hr>
      </div>
    );
  }
}

export default About;
