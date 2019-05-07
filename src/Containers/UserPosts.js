import React, { Component } from "react";
import { URL } from "../Utils/config";
import { Link } from "react-router-dom";

export default class UserPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      limit: 10,
      skip: 0
    };
  }
  componentDidMount() {
    const { userId } = this.props.match.params;
    console.log("id", userId);
    this.getPost(userId, this.state.limit, this.state.skip);
  }

  getPost = (userId, limit, skip) => {
    console.log("getpost", userId, limit, skip);
    fetch(URL + `/posts?userId=${userId}&skip=${skip}&limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
        this.setState({
          data: data
        });
      })
      .catch(err => console.log(err));
  };
  nextClickHandler = limit => {
    console.log("limit before", limit);
    this.setState({
      limit: limit + 10
    });
    console.log("limit after", limit);
  };
  prevClickHandler = skip => {
    console.log("limit before", skip);
    this.setState({
      skip: skip + 10
    });
    console.log("limit after", skip);
  };
  render() {
    return (
      <>
        <h1 className="text-center">All Posts</h1>
        <div className="list-group">
          {this.state.data.map((list, index) => {
            return (
              <a className="list-group-item list-group-item-action">
                {list.title} &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={`/post/${list.id}`}>Details....</Link>
              </a>
            );
          })}
        </div>
        <div className="col-12" style={{ "padding-top": "5px" }}>
          <button
            onClick={() => this.prevClickHandler(this.state.skip)}
            type="button"
            class="btn btn-primary"
          >
            Prev
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => this.nextClickHandler(this.state.limit)}
            type="button"
            class="btn btn-primary"
          >
            Next
          </button>
        </div>
      </>
    );
  }
}
