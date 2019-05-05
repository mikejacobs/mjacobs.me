import React, { Component } from "react";
import "./About.css";
import { Link } from "@reach/router";
import Name from "../Name";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Link to="/">&larr;&nbsp;Back to work</Link>
        <div className="me">
          {/* <Name num={100} height={500} /> */}
          <img src="me.jpg" alt="" />
        </div>
        <h1>Hi, I'm Michael Jacobs!</h1>
        {/* <p>
          I make art, music, and software in beautiful downtown Oakland,
          California.
        </p> */}
        <ul>
          <li>
            <div className="left">Home:</div>
            <div className="right">Downtown Oakland, CA</div>
          </li>
          <li>
            <div className="left">Guiding principle:</div>
            <div className="right">Playful disrespect</div>
          </li>
          <li>
            <div className="left">Mediums:</div>
            <div className="right">Paint, ink, sound, code, video</div>
          </li>
        </ul>
        <p>
          My creative work is a messy response to the development and use of
          technology. I like to appreciatively explore how tech extends our
          capabilites through automation, precision, and speed, but, I'm also
          frustrated with having to conform to its rigidness and narrowness.
        </p>
        {/* <p className="sidenote">
          "Writing code" involves translating instructions into braindead steps
          that a computer can understand.
        </p> */}
        {/* <p>
          My creative work is a messy response to the complicated feelings
          arising from the development and use of technology. It's both an
          expression of frustration with having to conform to the rigidness and
          narrowness of technology, as well as an appreciative exploration of
          how technology extends our capabilites through automation, precision,
          and speed.
        </p> */}

        {/* <p>Let's break out of the rigidly defined relationships with our
                tools and technologies, repurpose them to do things for which
                they were not designed, and find beauty in their limitations and
                failures.</p> */}
        {/* <p>
          Ultimately, my work is about control. I reasert my control over
          technology by redefining the parameters under which it works, but then
          I give up some control in allowing the technology to create the art.
        </p> */}
        <p>
          My art process utilizes experimentation, sabbotage, misuse, generative
          systems, and shoddily constructed custom software and hardware as a
          way to arrive at unexpected outcomes, which I then curate, or use as
          collaborator to build into final pieces.
        </p>
        {/* <p className="sidenote">
          <span className="pop">IDEA! </span>
          <br />
          Reformat this whole thing as a baseball card
          <img
            style={{ width: 230, height: "auto", marginTop: 10 }}
            src="http://americanhistory.si.edu/sites/default/files/blog_files/a/6a00e553a80e1088340192aa6ef4c4970d-500wi.jpg"
          />
        </p> */}
        <p>
          Outside of creative pursuits, I design and code software as part of an
          effort to create an equitable and humane alternative to incarceration
          with <a href="http://joinpromise.com">Promise</a>.
        </p>

        {/* <div className="nameAnim">
          <Name num={60} height={window.innerHeight} />
        </div> */}
      </div>
    );
  }
}

export default About;
