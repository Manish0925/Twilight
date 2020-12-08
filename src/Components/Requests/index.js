// src/components/Comment/index.js
import React from "react";
import "./Requests.css";

class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleReject = this.handleReject.bind(this);
  }

  handleAccept() {
    fetch("/friends/close", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: this.props.fromusername,
        to: this.props.tousername,
        status: 1,
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  handleReject() {
    fetch("/friends/close", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: this.props.fromusername,
        to: this.props.tousername,
        status: 2,
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <article className="Comments" ref="Comments">
        <header>
          <div className="Comments-user">
            <div className="Comments-user-avatar">
              <img src={this.props.fromuseravatar} alt="Not Found" />
            </div>
            <div className="Comments-user-nickname">
              <span>{this.props.fromusername} </span>
            </div>
            <div className="Comment-meta">sent a friend request</div>
          </div>
        </header>
        <div className="Comments-caption">
          <button class="btn btn-success btn-sm" onClick={this.handleAccept}>Accept</button>
          &nbsp;&nbsp;
          <button class="btn btn-danger btn-sm" onClick={this.handleReject}>Reject</button>
        </div>
      </article>
    );
  }
}
export default Requests;
