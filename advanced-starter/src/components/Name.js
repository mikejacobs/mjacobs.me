// todo: make more exciting with css chain animations
// -webkit-animation: First 1s, Second 2s;
// https://stackoverflow.com/questions/7825509/css3-chain-animations

import React from "react";
import "./Name.css";
class Name extends React.Component {
  render() {
    let delayVal = 1000 * Math.random();
    let arr = new Array(this.props.num).fill(this.props.num);
    let text = "MICHAEL JACOBS";
    let yoffset = -40;
    return arr.map((e, i) => {
      var martop =
        i % 2 == 0
          ? yoffset - (i + 1) * (this.props.height / this.props.num)
          : yoffset + i * (this.props.height / this.props.num);
      return (
        <h1
          className={`animtext ${i % 2 == 0 ? "backwards" : ""}`}
          style={{
            transitionDuration: 0.05 * i + "s",
            marginTop: martop
          }}
        >
          <span
            style={{
              animationDelay: 0.05 * i + "s"
            }}
          >
            {text}
          </span>
        </h1>
      );
    });
  }
}
export default Name;
