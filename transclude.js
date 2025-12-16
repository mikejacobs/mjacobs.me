// TODO:
// - research alternatives: https://github.com/justinfagnani/html-include-element,

var transclusions = [];
function transclude(src, toReplace, live, callback, cache) {
  // this function is meant to be called in javascript
  if (!toReplace) {
    throw Error("No destination element provided for transclusion");
  }
  console.log(`transclude src:`, src);
  toReplace.setAttribute("src", src);
  if (live) {
    transcludeAndSubscribe(src, callback);
  } else if (cache) {
    // Try to get from localStorage
    let cached = localStorage.getItem("transclude:" + src);
    if (cached) {
      doTransclusion(callback ? callback(cached) : cached, src);
    } else {
      fetch(src)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          } else {
            return response.text();
          }
        })
        .then((html) => {
          localStorage.setItem("transclude:" + src, html);
          doTransclusion(callback ? callback(html) : html, src);
        })
        .catch((err) => {
          console.error("Transclusion error:", src, err);
        });
    }
  } else {
    fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.text();
        }
      })
      .then((html) => doTransclusion(callback ? callback(html) : html, src))
      .catch((err) => {
        console.error("Transclusion error:", src, err);
      });
  }
}
function transcludeFromElement(toReplace, live) {
  // this function is meant to handle
  // <transclude-html src="..."> tags in html

  // get the callback script (if any)
  // this is a hack to get the callback script from the transclude-html element
  // <transclude-html><script>...</script></transclude-html>
  let childScript = toReplace.querySelector("script");
  var callback = false;
  if (childScript) {
    callback = eval(childScript.innerText);
  }

  let src = toReplace.getAttribute("src");
  let cache = toReplace.hasAttribute("cache");

  if (live || toReplace.hasAttribute("live")) {
    transcludeAndSubscribe(src, callback);
  } else {
    transclude(src, toReplace, false, callback, cache);
  }
}

function transcludeAndSubscribe(src, callback) {
  var tws;
  var reconnecting = false;
  function connect_ws() {
    let url = window.location.host + src;
    tws = new WebSocket(`wss://${url}/live`);
    // tws.onopen = () => {};

    tws.onmessage = (msg) => {
      doTransclusion(callback ? callback(msg.data) : msg.data, src);
    };

    tws.onclose = tws.onerror = debounceReconnect;
  }
  function debounceReconnect() {
    if (!reconnecting) {
      reconnecting = true;
      setTimeout(() => {
        reconnecting = false;
        tws = undefined;
        connect_ws();
      }, 1000);
    }
  }
  connect_ws();
}

function doTransclusion(html, src) {
  // Find the original <transclude-html> element to copy classes from
  var toReplace = document.querySelector(`transclude-html[src="${src}"]`);
  if (transclusions.includes(src)) {
    // we're updating a transclusion
    // this should only happen if the transclusion is live
    console.log("updating transclusion");
    transclusion = document.querySelector(`transcluded-content[src="${src}"]`);
    transclusion.innerHTML = "";
  } else {
    // make a new container
    var transclusion = document.createElement("transcluded-content");
    transclusion.setAttribute("src", src);
    // Copy classes from <transclude-html> to <transcluded-content>
    if (toReplace && toReplace.classList && toReplace.classList.length > 0) {
      transclusion.className = toReplace.className;
    }
    transclusions.push(src);
  }
  let completionEvent = createEventTransclusionComplete(src);
  var newHTML = textToHTMLFrag(html);
  // in the future, this is how we select specific parts of the page to transclude!
  let hasSrcInHTML = newHTML.querySelector("transclude-src");
  if (hasSrcInHTML) {
    newHTML = hasSrcInHTML;
  }
  // append html fragment instead of setting innerHTML
  // because this way runs the scripts in the html
  transclusion.appendChild(newHTML);

  // both the initializing element and container (made after a transclusion)
  // should have a src attribute, we can use this to manage the content
  // in future transclusions
  if (toReplace) {
    toReplace.replaceWith(transclusion);
  } else {
    document.querySelector(`[src="${src}"]`).replaceWith(transclusion);
  }
  dispatchEvent(completionEvent);
}

function createEventTransclusionComplete(src) {
  return new CustomEvent("transclusionComplete", { detail: src });
}

window.addEventListener("load", (_) => {
  // set up observer to look for transclusions added after the initial pass (below)
  // this is how we get nested transclusions
  var transclude_observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((added_node) => {
        // handle the case where the transclude-html tag
        // only comes in as a child of an added node
        try {
          if (added_node.querySelectorAll) {
            newElements = added_node.querySelectorAll("transclude-html");
            for (const element of newElements) {
              transcludeFromElement(element, false);
            }
          }
        } catch (error) {}

        // handle the case where the transclude-html tag is added directly
        if (added_node.tagName == "TRANSCLUDE-HTML") {
          transcludeFromElement(added_node, false);
        }
      });
    });
  });
  transclude_observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // initial pass to look for transclusions in this document
  Array.from(document.querySelectorAll("transclude-html")).forEach((el) =>
    transcludeFromElement(el, false)
  );
});

function textToHTMLFrag(text) {
  return document.createRange().createContextualFragment(text);
}

document.addEventListener("DOMContentLoaded", function () {
  // Hide the body until all initial transclusions are complete
  // this is to prevent the page from flashing

  // Only count transclude-html elements that do NOT have the 'live' attribute
  const transcludeEls = Array.from(document.querySelectorAll("transclude-html")).filter(
    (el) => !el.hasAttribute("live")
  );
  let remaining = transcludeEls.length;
  if (remaining === 0) {
    document.body.classList.remove("transcluding");
    document.body.classList.add("transcluded");
  } else {
    document.body.classList.add("transcluding");
    window.addEventListener("transclusionComplete", function handler(e) {
      remaining--;
      if (remaining === 0) {
        document.body.classList.remove("transcluding");
        document.body.classList.add("transcluded");
        window.removeEventListener("transclusionComplete", handler);
      }
    });
  }
});
