import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import Main from "./Containers/Main";
import UserPosts from "./Containers/UserPosts";
import UserPostsDetail from "./Containers/UserPostDetail";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/posts/:userId" component={UserPosts} />
            <Route path="/post/:postId" component={UserPostsDetail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
