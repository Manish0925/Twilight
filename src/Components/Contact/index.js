//src/components/Contact/index.js

import React from "react";
import Header from "../Header";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header
          username={this.props.location.state.username}
          useravatar={this.props.location.state.useravatar}
        />
        <hr/>
        <br />
        <br />
        <br />
        <h1>For further info, contact any of the mentioned nos.:</h1>
        <hr />
        <br />
        <h2>Manish : 8790133019</h2>
        <h2>Justin : 9620700209</h2>
        <h2>Harshit : 9368827972</h2>
        <h2>Dhanush : 6360782242</h2>
        <hr />
      </div>
    );
  }
}

export default Contact;
