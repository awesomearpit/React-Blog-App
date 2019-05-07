import React from "react";
import UserTableBody from "../Components/UserTableBody";
import UserTableHead from "../Components/UserTableHead";
import { URL } from "../Utils/config";

export default class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.tableheadelements = ["id", "Name", "Company Name", "Blog Posts"];
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch(URL + "/users")
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
        this.setState({
          data: data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <table class="table table-hover table-dark">
        <UserTableHead headElements={this.tableheadelements} />
        <UserTableBody userData={this.state.data} />
      </table>
    );
  }
}
