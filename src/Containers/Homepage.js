import React from "react";
import UserTable from "./UserTable";

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="container">
        <UserTable />
      </div>
    );
  }
}
