import React from "react";

export class PushMe extends React.Component {
  render() {
    return (
      <div className="homeButton">
        <button className="button is-link" onClick={this.props.display}>
          {" "}
          Push Me{" "}
        </button>
      </div>
    );
  }
}
