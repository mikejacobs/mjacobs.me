// htm + preact -- no build!
import { html, render } from "https://unpkg.com/htm/preact/index.mjs?module";
import { deets } from "./detail.js";
import { AboutPage } from "./about.js";

function ProjectCard({ project, offset, context }) {
  const { title, directory, preview, description, hasDetail, externalLink } = project;
  const link = externalLink ? externalLink : `?${context}=${directory}`;
  return html`
    <div
      class="project-card${hasDetail ? " hasDetail" : ""}"
      style="animation-duration: ${offset}00ms;transform: scale(1);opacity: 1;"
    >
      <a href=${link}>
        <div style="position:relative;">
          <img class="preview" src="/${context}/${directory}/${preview}" />

          <div class="burst"></div>
        </div>
        <div class="project-info">
          <h2>${title}</h2>
          <div class="description">
            ${description}
            <!-- ${hasDetail && html`<br /><span class="study">Case study</span>`} -->
          </div>
        </div>
      </a>
    </div>
  `;
}

function ProjectCardInactive({ project, offset, context }) {
  const { title, directory, preview, description, hasDetail } = project;
  return html`
    <div
      class="project-card${hasDetail ? " hasDetail" : ""}"
      style="animation-duration: ${offset}00ms;transform: scale(1);opacity: 1;"
    >
      <div style="position:relative;">
        <img class="preview" src="/${context}/${directory}/${preview}" />

        <div class="burst"></div>
      </div>
      <div class="project-info">
        <h2>${title}</h2>
        <div class="description">
          ${description}
          <!-- ${hasDetail && html`<br /><span class="study">Case study</span>`} -->
        </div>
      </div>
    </div>
  `;
}

function ProjectDetail({ project, context }) {
  const { title, directory, preview, description } = project;
  return html`
    <link rel="stylesheet" href="detail.css" />

    <div class="detail-head">
      <h2 class="intro">
        <strong>
          <a href="?${context}">${String.fromCharCode(8592)} MICHAEL JACOBS</a>
        </strong>
      </h2>
      <h3>${title}</h3>
    </div>
    <!-- <img class="preview" src="/${context}/${directory}/${preview}" /> -->
    <!-- <div class="description">${description}</div> -->
    <div class="detail-body">
      <${deets[directory]} path="/${context}/${directory}" />
    </div>
  `;
}

function ProjectGrid({ content, context }) {
  // let divider =
  //   String.fromCharCode(160) +
  //   String.fromCharCode(183) +
  //   String.fromCharCode(160);
  return html`
    <div class="indexContainer">
      ${content
        // .sort((a, b) => b.date - a.date)
        // .sort((a, b) =>
        // a.hasDetail === b.hasDetail ? 0 : a.hasDetail ? -1 : 1
        // )
        .map(
          (project, i) =>
            html`<${project.hasDetail ? ProjectCard : ProjectCardInactive}
              project="${project}"
              offset=${i}
              context=${context}
            />`
        )}
    </div>
  `;
}

function Nav({ context, blurb }) {
  const nbsp = String.fromCharCode(160);
  let position = context == "work" || context == "art" ? " stuck" : "";
  return html`
    <div class="intro${position}">
      <div class="nav">
        <a href="/"><strong>Michael${nbsp}Jacobs</strong></a>
        <!-- <a href="?work" class=${context == "work" && "active"}>Work</a> -->
        <a href="?art" class=${context == "art" && "active"}>Art</a>
        <!-- <a href="?about" class=${context == "about" && "active"}>About</a> -->
        <!-- <a href="?resume" class=${context == "resume" && "active"}
          >Course${nbsp}of${nbsp}Life</a
        > -->
        <a href="?contact" class=${context == "contact" && "active"}>Contact</a>
      </div>
      ${blurb && html`<span class="blurb"> ${blurb} </span>`}
    </div>
  `;
}

function ContactPage(_) {
  let num = 30;
  let height = 500;
  // let delayVal = 1000 * Math.random();
  let arr = new Array(num).fill(num);
  let text = "LET'S WORK TOGETHER!";
  let yoffset = 0;
  return html` <style>
      #container {
        height: 100%;
      }
      #anim {
        position: relative;
        width: 500px;
        height: 500px;
        overflow: hidden;
        background: #bec93a;
        border-radius: 500px;
        margin: 0px auto;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
      #anim a {
        border-radius: 500px;
        color: black;
        line-height: 500px;
        text-align: center;
        width: 100%;
        display: block;
        z-index: 2;
        top: 0px;
        left: 0px;
        position: absolute;
      }
      #anim a span {
        background: #bec93a;
        padding: 10px;
      }
      #anim a:hover span {
        background: white;
      }
      .animtext {
        /* margin-top: 0px; */
        /* margin-top: -20px; */
        text-align: center;
        position: absolute;
        width: 100%;
        overflow: hidden;
        /*background: black;*/
        transition-duration: 5s;
        transition-property: margin-top;
        /* transition-timing-function: cubic-bezier(1, -0.6, 0, 1.65); */
        transition-timing-function: ease-in-out;
        /* margin-top: 4px; */
        /*opacity: .2;*/
        z-index: 1;
        font-size: 42px;
        font-family: "Helvetica Neue", "Arial Narrow", sans-serif;
        font-weight: 100;
        vertical-align: middle;
        top: 10%;
        letter-spacing: 2px;
      }
      .animtext span {
        /* top: 0px; */
        height: 0px;
        position: relative;
        /*background: white;*/
        /* transition: all 5s cubic-bezier(1, -0.6, 0, 1.65); */
        transition: all 5s ease-in-out;

        line-height: 0px;
        top: -1000px;
        height: 0px;
        color: white;
      }
      .animtext a:hover {
        color: white;
      }

      @keyframes spanim {
        to {
          top: 128px;
          height: 128px;
        }

        from {
          top: 0px;
          height: 0px;
        }
      }
      @keyframes lineanim {
        to {
          line-height: 320px;
        }

        from {
          line-height: 0px;
        }
      }

      .animtext span {
        /* animation-duration: 2s; */
        animation: spanim 2s, lineanim 7s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-fill-mode: forwards;
        /* animation-timing-function: cubic-bezier(1, -0.6, 0, 1.65, 3); */
        /* animation-timing-function: cubic-bezier(0.5, -10.5, 0, 3); */
        animation-timing-function: ease-in-out;
      }

      .animtext.backwards span {
        animation: spanim 2s, lineanim 7s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-fill-mode: backwards;
        /* animation-timing-function: cubic-bezier(1, -0.6, 0, 1.65, 3); */
        /* animation-timing-function: cubic-bezier(0.5, -10.5, 0, 3); */
        animation-timing-function: ease-in-out;
      }
    </style>
    <div id="anim">
      <a href="mailto:mike@mjacobs.me"><span>mike@mjacobs.me</span></a>
      ${arr.map((e, i) => {
        var martop = i % 2 == 0 ? yoffset - (i + 1) * (height / num) : yoffset + i * (height / num);
        return html`
          <h1
            class=${`animtext ${i % 2 == 0 ? "backwards" : ""}`}
            style="transition-duration: ${0.05 * i}s; margin-top: ${martop}"
          >
            <span style="animation-delay: ${0.05 * i}s"> ${text} </span>
          </h1>
        `;
      })}
    </div>`;
}

function ContactPage2(_) {
  return html`<style>
      #marquee {
        background: #bec93a;
        margin: 100px -50px -50px -50px;
        padding-bottom: 100px;
        overflow-x: hidden;
        font-size: 30px;
        line-height: 0px;
        font-weight: bold;
      }
      #marquee a,
      #marquee span {
        margin-right: 60px;
      }
      #marquee span {
        color: white;
      }
      #marquee p {
        /* position: absolute; */
        width: 100%;
        white-space: nowrap;
        /* height: 100%; */
        /* margin: 0; */
        /* line-height: 50px; */
        text-align: center;
        transform: translateX(-100%);
        animation: scroll-left 10s linear infinite alternate;
      }
      #marquee p:nth-child(odd) {
        transform: translateX(0%);
        animation: scroll-left 10s linear infinite alternate-reverse;
      }
      @keyframes scroll-left {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      @keyframes scroll-right {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0%);
        }
      }
    </style>
    <div id="marquee">
      ${[...Array(15).keys()].map(
        (i) =>
          html` <p style="animation-delay:${i * 4}00ms">
            <a href="mailto:mike@mjacobs.me" target="_self">mike@mjacobs.me</a>
            <span>Let's work together!</span>
            <a href="mailto:mike@mjacobs.me" target="_self">mike@mjacobs.me</a>
            <span>Let's work together!</span>
            <a href="mailto:mike@mjacobs.me" target="_self">mike@mjacobs.me</a>
            <span>Let's work together!</span>
            <a href="mailto:mike@mjacobs.me" target="_self">mike@mjacobs.me</a>
            <span>Let's work together!</span>
            <a href="mailto:mike@mjacobs.me" target="_self">mike@mjacobs.me</a>
            <span>Let's work together!</span>
            <a href="mailto:mike@mjacobs.me" target="_self">mike@mjacobs.me</a>
            <span>Let's work together!</span>
          </p>`
      )}
      <!-- <img style="width:100%" src="outro.png" /> -->
    </div>`;
}

function Route({ context, detail, data }) {
  console.log("context", context);
  switch (context) {
    case "art":
      // sort the art by date, keep the order for work
      data.sort((a, b) => b.date - a.date);
    case "work":
      return detail == undefined
        ? html` <${Nav}
              context=${context}
              blurb=${context == "art"
                ? html`Playful misuse, amateur mistakes, lazy shortcuts, glitchy games, noise,
                  feedback, janky hardware, and shoddy software.`
                : html`Product designer / engineer with an interest in building a more equitable
                    future. For a full portfolio, with documented work examples,
                    please${unicode.space}<a href="?contact">get in touch</a>.
                    <!-- <button class="more">More</button> --> `}
            />
            <${ProjectGrid} content=${data} context=${context} />`
        : html`<${ProjectDetail} project="${detail}" context=${context} />`;
    case "about":
      return html`<${Nav} context=${context} /><${AboutPage} />`;
    case "contact":
      return html`<${Nav} context=${context} /> <${ContactPage} />`;
    default:
      // 404
      return html`Error`;
      break;
  }
}

function App(_) {
  // simple routing using URL search query
  var search = "art";
  var selectedContext = "art";
  var selectedProject;
  var data = arts;

  console.log("search", window.location.search.indexOf("?"));
  if (window.location.search.indexOf("?") >= 0) {
    search = window.location.search.split("?")[1].split("=");
    selectedContext = search[0];
    console.log("search", search);
    const contexts = {
      art: arts,
      work: works,
      contact: undefined,
      about: undefined,
    };
    data = contexts[selectedContext] || undefined;
    console.log("data", data);
    selectedProject = data ? data.find((project) => project.directory == search[1]) : "";
  }

  return html` <${Route} context=${selectedContext} detail=${selectedProject} data=${data} /> `;
}

render(html`<div id="container"><${App} /></div>`, document.body);
