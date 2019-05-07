import React from "react";
import Homepage from "./Homepage";
import AppTitle from "../Components/AppTittle";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.title = "Blog App";
  }
  render() {
    return (
      <div>
        <AppTitle title={this.title} />
        <Homepage />
      </div>
    );
  }
}
