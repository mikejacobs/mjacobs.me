import React, { Component } from "react";
import "./About.css";
import { Link } from "@reach/router";
import Name from "../Name";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Link to="/">&larr;&nbsp;Work</Link>
        <h1>Hi, I'm Michael Jacobs!</h1>
        <p>I make art in Oakland, California.</p>
        <p>
          My work is a messy response to the complicated feelings arising from
          the creation and use of technology. It's both an expression of
          frustration with having to conform to the rigidness and narrowness of
          technology, as well as an appreciative exploration of how technology
          extends our capabilites through automation, precision, and speed.
        </p>
        <p>
          Ultimately, my work is about control. I reasert my control over
          technology by redefining the parameters under which is works, but then
          I give up that control in allowing the technology to create the art.
        </p>
        <p>
          My process utilizes experimentation, sabbotage, misuse, generative
          systems, and shoddily constructed custom software and hardware as a
          way to arrive at unexpected outcomes, which I then curate, or use as
          collaborator to build into final pieces.
        </p>
        <p>
          Outside of art, I design and code software as part of an effort to
          create an equitable and humane alternative to incarceration with{" "}
          <a href="http://joinpromise.com">Promise</a>.
        </p>

        <div className="nameAnim">
          <Name num={40} height={500} />
        </div>
      </div>
    );
  }
}

export default About;
