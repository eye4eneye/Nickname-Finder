import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { PushMe } from "../components/PushMe";

class MyName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.display = this.display.bind(this);
  }
  display = () => {
    //This will keep constant range from 1-10.
    var pickNickname = Math.floor(Math.random() * 11);
    let alias = ["Terrence", "T", "TT", "Trey"];
    let name;

    //This conditional statement will decide the name by determining a number from a variable.
    if (pickNickname <= 3) {
      name = alias[0];
    } else if (pickNickname <= 5) {
      name = alias[1];
    } else if ((pickNickname = 8)) {
      name = alias[2];
    } else {
      name = alias[3];
    }
    this.setState({ name });
  };

  render() {
    return (
      <div className="myNameApp">
        <h2>
          {" "}
          {this.state.name && (
            <h1> Today, my name is {this.state.name}. </h1>
          )}{" "}
        </h2>
        <PushMe display={this.display} />
        <div className="subtitle">
          <p> Welcome to my first app built with React. </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyName />, document.getElementById("root"));
