customElements.define('side-note',
  class extends HTMLElement {
    constructor() {
        super();
        const sideNote = document.getElementById('sidenote-template').content.cloneNode(true);
        sideNote.querySelector("note-content").innerHTML = this.innerHTML
        this.attachShadow({mode: 'open'})
            .appendChild(sideNote.cloneNode(true));
    }
});