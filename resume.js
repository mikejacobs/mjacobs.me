import { html } from "https://unpkg.com/htm/preact/index.mjs?module";

export function AboutPage(_) {
  return html`
    <style>
      #container {
        font-size: 14px;
      }
      section {
        margin-top: 80px;
      }
      .flex-container {
        /* display: flex; */
        /* flex-wrap: wrap; */
        /* flex-direction: row; */
      }
      .half {
        /* padding-left: 50%; */

        /* box-sizing: border-box; */
      }
      /* .half:first-child {
        padding-right: 70px;
      }
      .half:nth-child(2n) {
        padding-left: 70px;
      } */
      .subsection {
        margin-bottom: 160px;
        margin-left: 30%;
        margin-right: 30%;
        margin-top: -36px;
      }
      h1 {
        line-height: 36px;
        margin-bottom: 0px;
        font-size: 36px;
      }
      h3,
      h4 {
        margin: 0px;
      }
      h4 {
        margin-bottom: 20px;
      }
      @media only screen and (max-width: 1200px) {
        .half {
          width: 100%;
          padding: 0px !important;
        }
        h1 {
          line-height: 40px;
          margin-bottom: 20px;
        }
        .subsection {
          margin-bottom: 100px;
          margin-left: 0%;
          margin-right: 0%;
          margin-top: 0px;
        }
      }
      .skill-area {
        margin: 0px 0px 40px 0px;
      }

      .skill-area h3 {
        margin: 0px 0px 10px 0px;
        display: block;
      }
      .head {
        border-radius: 999px;
        width: 200px;
        float: right;
        /* margin-left: -12.5%; */
        /* shape-outside: circle(50%); */
        shape-outside: circle() margin-box;
        shape-margin: 10px;
        margin: 20px 20px 20px 20px;
      }
      .job {
        margin-bottom: 80px;
      }
      .work-location,
      .work-time {
        float: right;
        font-size: 14px;
        color: gray;
      }
      .work-time {
        font-style: italic;
      }
    </style>
    <div class="flex-container">
      <section class="half">
        <h1>About</h1>
        <div class="subsection">
          <img class="head" src="fish_eye.jpg" />
          <p>Hi! I'm Mike. I design and build software that helps people to make better decisions, to extend their abilities, and to make their work easier. Most of my career has been about creating ways for humans to interact with complex systems.</p>
          <p>My experience making software has given me a broad set of skills within the development process. While I am often hired as a designer, I have also worked as an engineer and a product manager${unicode.mdash} now I shine in the overlap of these roles. Regardless of role, I place special importance on understanding user needs and validating ideas through user testing.</p>
          <p>My proudest moments are from projects that led me to make meaningful connections with people different from myself${unicode.mdash} tech-illiterate, non-native english speakers, formerly-incarcerated, criminal defense attorneys, government workers${unicode.mdash} with the goal of using tech to make their lives better.</p>
          <p>I believe in wielding technology with care to create a more equitable future, as well as actively working to avoid and reduce its potential for harm. I feel strongly about using my skills toward eliminating power/race/class/gender disparities, and I am seeking others that are doing the same.</p>
          <p>I also make art and music, and enjoy bringing these other disciplines into software and vice versa.</p>
        </div>
      </section>
      <section class="half">
        <h1>Experience</h1>
        <div class="subsection">
          <div class="job">
            <h3>
              Various (contractor)
              <span class="work-location">Remote from Atlanta, GA</span>
            </h3>
            <h4>
              Designer / Engineer / Advisor
              <span class="work-time">Apr '20 - Present</span>
            </h4>
            <div></div>
          </div>
          <div class="job">
            <h3>
              Promise Networks
              <span class="work-location">Oakland, CA </span>
            </h3>
            <h4>
              Lead Designer / Engineer
              <span class="work-time">Jan '18 - Jul '19</span>
            </h4>
            <div>
              Promise’s company mission was to keep people out of jail. In my time there, we partnered with county governments, public defenders, and formerly-incarcerated people to design and launch a service that could function as a drop-in pre-trial support program for criminal justice systems${String.fromCharCode(8212)} a humane alternative to jail for those that could not afford cash bail.
              <br />
              <br />
              My responsibilities included: service design, product design for multiple web and mobile products, as well as major contributor to front-end engineering, fundraising, and sales support efforts.
            </div>
          </div>
          <div class="job">
            <h3>
              Uber Technologies
              <span class="work-location">San Francisco, CA & NYC, NY</span>
            </h3>
            <h4>
              Lead UX Designer / Engineer
              <span class="work-time">Feb '13 - Apr '17</span>
            </h4>
            <div>
              Contributed design and code to many different parts of the company, especially: internal tools, and the rider and driver apps.
              <ul>
                <li>Became Uber’s first Design Engineer; helped evolve the Design team’s process to utilize prototyping and user testing.</li>
                <li>Designed a major feature in the Rider app which allowed city operations teams to communicate with riders.</li>
                <li>Co-led the launch of UberPool: designed, prototyped, tested, launched, and refined the UberPool product. Received a patent for the UberPool map UI.</li>
                <li>Brought design to the Uber Data team; designed and engineered many of the internal data visualization tools that gave city operations teams and executives insight into business performance.</li>
                <li>Led design and product management on the Observability Applications team in NYC. Researched, designed, and oversaw building of reporting, monitoring, and alerting tools to help internal developers ensure the reliability and efficiency of Uber's back-end systems.</li>
              </ul>
            </div>
          </div>
          <div class="job">
            <h3>
              Hello Chair
              <span class="work-location">San Francisco, CA</span>
            </h3>
            <h4>
              Co-Founder, Designer, etc.
              <span class="work-time">May '07 - Apr '12</span>
            </h4>
            <div>Co-founded Hello Chair with the goal of applying cutting edge machine learning to solve a variety of problems in internet ad targeting and product recommendations—notably App Store discoverability. Responsibilities included: design, front-end development, accounting, marketing, hiring, managing, and many of the other odds and ends involved in running a small software startup. Hello Chair was lucky enough to have been backed by an amazing group of investors, including: Y-Combinator, Mitch Kapor, Chris Sacca and Harrison Metal.</div>
          </div>
        </div>
      </section>
      <section>
        <h1>Skills</h1>
        <div class="subsection">
          <div class="skill-area">
            <h3>Design</h3>
            <li>UX+UI / Product design</li>
            <li>User research + testing</li>
            <li>Service design</li>
            <li>Information design + data visualization</li>
            <li>Prototyping</li>
            <li>Branding</li>
            <li>Music composition + production</li>
            <li>Sound design</li>
          </div>
          <div class="skill-area">
            <h3>Engineering</h3>
            <li>Javascript (vanilla/React/D3)</li>
            <li>HTML, CSS</li>
            <li>Swift</li>
            <li>React Native</li>
            <li>Python</li>
          </div>
          <div class="skill-area">
            <h3>Product Management</h3>
            <li>Product strategy + vision</li>
            <li>Product research</li>
            <li>Stakeholder management</li>
            <li>Requirements gathering + documentation</li>
          </div>
        </div>
      </section>
    </div>
  `;
}
