// htm + preact -- no build!
import { html, render } from "https://unpkg.com/htm/preact/index.mjs?module";

function Project({ project }) {
  const { title, directory, preview, description } = project;
  return html`
    <a class="project-card" href="/projects?${directory}">
      <h1>${title}</h1>
      <img class="preview" src="/projects/${directory}/${preview}" />
      <div class="description">${description}</div>
    </a>
  `;
}

function App(_) {
  return html`
    <h1 class="intro">
      Playful misuse, amateur mistakes, lazy shortcuts, glitchy systems, noise,
      feedback, janky hardware, and shoddy software.
    </h1>
    <div class="indexContainer">
      ${projects
        .sort((a, b) => b.date - a.date)
        .map((project) => html`<${Project} project="${project}" />`)}
    </div>
  `;
}

render(html` <${App} /> `, document.body);
