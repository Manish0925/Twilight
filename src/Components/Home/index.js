//src/components/Home/index.js

import React from "react";
import "./Home.css";
import Posts from "../Posts";
import { Link } from "react-router-dom";
import Header from "../Header";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsx: [],
    };
  }

  render() {
    //var posts = [];
    var i = 0;
    fetch("/posts", {
      method: "GET",
    })
      .then((posts) => posts.json())
      .then((posts) => {
        var post_jsx = [];
        for (i = 0; i < posts.length; i++) {
          post_jsx.push(
            <Posts
              current_user={this.props.location.state.username}
              current_useravatar={this.props.location.state.useravatar}
              enable_click="true"
              post_id={posts[i]._id}
              media_id={posts[i].media_id}
              username={posts[i].username}
              useravatar={posts[i].useravatar}
              post_caption={posts[i].post_caption}
              date={posts[i].date}
              media_type={posts[i].media_type}
            />
          );
        }
        this.setState({ jsx: post_jsx });
      });

    return (
      <div>
        <Header
          username={this.props.location.state.username}
          useravatar={this.props.location.state.useravatar}
        />
        <hr />
        <div>{this.state.jsx}</div>
        <div className="Floating-Action-Button">
          <Link
            to={{
              pathname: "/Upload",
              state: {
                username: this.props.location.state.username,
                useravatar: this.props.location.state.useravatar,
              },
            }}
          >
            +
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
