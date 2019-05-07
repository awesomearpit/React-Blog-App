import React, { Component } from "react";
import { URL } from "../Utils/config";
import UserPostComment from "../Components/UserPostComment";

export default class UserPostsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      comment: []
    };
  }
  componentDidMount() {
    const { postId } = this.props.match.params;
    console.log("id", postId);
    this.getPostDetails(postId);
  }

  getPostDetails = postId => {
    console.log("getpostdetails", postId);
    fetch(URL + `/posts/${postId}`)
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
        this.setState({
          data: data
        });
      })
      .catch(err => console.log(err));
  };

  getComment = postId => {
    console.log("id", postId);
    fetch(URL + `/comments?postId=${postId}`)
      .then(response => response.json())
      .then(comment => {
        console.log("comment", comment);
        this.setState({
          comment: comment
        });
      })
      .catch(err => console.log(err));
  };

  deletePost = postId => {
    fetch(URL + `/posts/${postId}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then((result, postId) => {
        console.log("result", result);
        console.log("id", postId);
        window.location.href = `/`;
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <>
        <div className="col-12">
          <h2 style={{ "font-weight": "bold" }}>{this.state.data.title}</h2>
          <p style={{ color: "gray" }}>{this.state.data.body}</p>
          <button
            onClick={() => this.getComment(this.state.data.id)}
            class="btn btn-info"
          >
            Comments
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => this.deletePost(this.postId)}
            type="button"
            class="btn btn-danger"
          >
            Delete Post
          </button>
          <br />
          <br />
          <UserPostComment comment={this.state.comment} />
        </div>
      </>
    );
  }
}
