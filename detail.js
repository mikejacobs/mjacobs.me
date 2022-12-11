import { html } from "https://unpkg.com/htm/preact/index.mjs?module";

function TextBlock({ text }) {
  return html`<div class="text-block">${text}</div>`;
}

function TextBlockCenter({ text }) {
  return html`<div class="text-block-center">${text}</div>`;
}

function FlexColumns({ cols, overfit }) {
  return html`
    <style></style>
    <div class="flex-column-wrapper">
      ${cols.map(
        (col) =>
          html`<div
            class="flex-column${overfit ? " overfit" : ""}"
            style="width: ${100 / cols.length}%"
          >
            <div>
              ${col.image ? html`<img src=${col.image} />` : null}
              <div style="padding-left:40px">
                <strong>${col.title}</strong>
                <br />
                <br />
                ${col.detail}
              </div>
            </div>
          </div>`
      )}
    </div>
  `;
}

export let deets = {
  uberpool: function ({ path }) {
    return html`
      <section>
        <h2>Uber Pool</h2>
        <h3>6/2014 - 11/2014</h3>
        <img src="${path}header.png" />
        <${TextBlock}
          text="In mid 2014, Uber started researching a new, experimental ride option: carpooling. In theory, adding more passengers to a car could make more efficient use of the limited supply of drivers, and make Uber more affordable than UberX and competitors. I was brought in as the initial discovery phase was being completed. Surveys and interviews indicated that some riders would be willing to share a car with someone in return for a discounted ride, and drivers would appreciate making more money. My role was to design the rider experience, co-leading design and collaborating with the designer on the driver experience. In order to test the feasability of a radically different service before fully committing to a rider app redesign, we chose to work with the developers to create a quick and dirty alpha version within the existing rider app that functioned almost entirely through push notifications. This allowed us to work out any issues with the experience from the server side, rather than baking it into the app."
        />
      </section>
      <section>role? responsibilities? goals? principles?</section>
      <section>
        <h2>What is Uber Pool?</h2>
        <${FlexColumns}
          cols=${[
            {
              image: path + "/ux-before.png",
              title: "↑ Driver experience before Uber Pool",
              detail:
                "Worked with other team leads to figure out the high level steps of both the rider and driver experience. We then worked with stakeholders (managers and executives) to ensure this fit their vision for the service.",
            },
            {
              image: path + "/ux-after.png",
              title: "↑ Uber Pool driver experience",
              detail:
                "Worked with other team leads to figure out the high level steps of both the rider and driver experience. We then worked with stakeholders (managers and executives) to ensure this fit their vision for the service.",
            },
          ]}
        />
      </section>

      <section>
        <h2>UX Design Process</h2>
        <${FlexColumns}
          overfit="true"
          cols=${[
            {
              image: path + "/process1.png",
              title: "↑ Synthesize: Brainstorming",
              detail:
                "Worked with other team leads to figure out the high level steps of both the rider and driver experience. We then worked with stakeholders (managers and executives) to ensure this fit their vision for the service.",
            },
            {
              image: path + "/process2.png",
              title: "↑ Define: Journey map",
              detail:
                "I translated the steps for the rider into the stages of the Uber trip flow as it was already established in the app, then fleshed out the communication touchpoints (push notifications) with a copywriter.",
            },
            {
              image: path + "/process3.png",
              title: "↑ Design: Flow diagrams + prototype",
              detail:
                "I designed a flow chart for the rider experience— created in a way that would easily export as an interactive prototype. Then worked with the design co-lead and design manager to refine it. Once completed, the prototype served as a presentation tool and a development guide for engineering.",
            },
            {
              image: path + "/process4.png",
              title: "↑ Deliver: Closed alpha launch",
              detail:
                "A fully functioning experience, usable by anyone with the Uber app and a flagged account. I worked closely with engineering to fix UX issues as they arose in development, and took on the role of primary user tester out in the field.",
            },
          ]}
        />
      </section>
      <section style="text-align:center">
        <h2>Alpha Launch</h2>
        <img src="${path}/alpha.png" />
        These are the images
      </section>
      <section style="text-align:center">
        <h2>Post-Launch Refinements</h2>
        <img src="${path}/pool.gif" />
        <p class="text-block-center">
          Once we validated the basic experience, I worked with a visual designer to design key
          aspects into the app. The pickup and drop off order. The name of your co-rider.
        </p>
      </section>
    `;
  },
  metaflux: function ({ path }) {
    return html`
      Group art show<br />
      09/22/18 - 11/17/18
      <br /><br />With:

      <p>
        <a href="https://nicolation.net">Nicole Aptekar</a><br />
        <a href="http://onecm.com">Ryan Alexander</a><br />
        <a href="http://harvey-moon.com">Harvey Moon</a><br />
        <a href="http://gabrieldunne.com">Gabriel Dunne</a><br />
      </p>
      <br /><br />
      About the show: meta (a) pertaining to or noting an abstract, high-level analysis or
      commentary, especially one that consciously references something of its own type. flux (n)
      continuous change, passage, or movement Framing understanding through routines and systems,
      Metaflux is a body of procedure-oriented artworks based on system-focused approaches and
      integrations. The processes examined by the artists featured in Metaflux are intrinsic to
      navigating shifts and changes by establishing routines and frameworks. The artifacts of these
      personal frameworks, as well as the frameworks themselves, represent the efforts to create
      reliable variables and constructs in a life defined by constant transition and flux.
      <br />
      <br />

      <p><img src="${path}/photosphere.jpg" /></p>
      <p><img src="${path}/output.gif" /></p>
      <p><img src="${path}/1.jpg" /></p>
      <p><img src="${path}/2.jpg" /></p>
      <p><img src="${path}/3.jpg" /></p>
      <p><img src="${path}/4.jpg" /></p>
    `;
  },
  video: function ({ path }) {
    return html`
      <style>
        .iframes {
          max-width: 900px;
        }
        iframe {
          height: 500px;
          margin: 60px auto 0px auto;
        }
      </style>

      Various videos made over the years

      <div class="iframes">
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/z7vsPmbeN_s"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/tc0yMRtPbEQ"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/fca2zeBcpMI"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/SNlX4YqY02Q"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    `;
  },
  reclaimed: function ({ path }) {
    return html` Coming soon `;
  },
  talka: function ({ path }) {
    return html`
      <a href="https://itunes.apple.com/us/app/talka/id1046174058?mt=8">Talka</a> turns your iPhone
      into a singer${unicode.mdash}or robot beatboxer${unicode.mdash}capable of vocal acrobatics
      that would make Meredith Monk melt. And, with Talka, you conduct eight of them! Spin wondrous
      little word loops. Slide their pitch. Vary their speed. Switch their language to use different
      voices and pronunciations. Let Talka talk and sing you into a more musical future.

      <!-- Talka was made over two weeks in October 2015 as a final project for the <a href="http://codepath.com/">Codepath</a> iOS for Designers class, where it won the award for Best iOS App. -->

      <div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
        <iframe
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          src="https://www.youtube.com/embed/lWMDW_RzU90"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <br />
      <div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
        <iframe
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          src="https://www.youtube.com/embed/lhJFkRuibjg"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/lWMDW_RzU90" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
      <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/lhJFkRuibjg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
      <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/lWMDW_RzU90" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
    `;
  },
  jacmb: function ({ path }) {
    return html`
      <iframe
        width="100%"
        height="500"
        scrolling="yes"
        frameborder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1539197581&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"
      ></iframe>
      <br><br><br>
      Selected solo music 2011 - 2018:

      <iframe
        width="100%"
        height="500"
        scrolling="yes"
        frameborder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/357480211&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"
      ></iframe>
    `;
  },
  pendrillum: function ({ path }) {
    return html`
      <p>Pendrillum is a home(made art) improvement machine.</p>
      <p>
        Q: What does it look like to take a drill outside of the accepted spectrum of use, and even
        beyond what are considered to be${String.fromCharCode(160)}
        <a href="https://www.youtube.com/watch?v=6och7-0iI00">unusual hacks</a>?
      </p>
      <p>A: A fish out of water</p>

      <p>
        <video src="${path}/drill.mp4" controls></video>
        <img src="${path}/1.jpeg" />
        <img src="${path}/2.jpeg" />
        <img src="${path}/3.jpeg" />
      </p>
    `;
  },
  tens: function ({ path }) {
    return html`
      <style>
        .iframes {
          max-width: 900px;
        }
        iframe {
          height: 500px;
          margin: 60px auto 0px auto;
        }
      </style>

      <div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
        <iframe
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          src="https://www.youtube.com/embed/whjlLivmA0E"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    `;
  },
  pixel: function ({ path }) {
    return html`
      Fun little app I made in 2010 for drawing repeating pixelated designs.

      <img src="./screenshot.png" width="100%" style="max-width: 100% !important" />
      <a
        style="background: cerillian; display:block;width:100%; text-align:center;font-size:40px; font-weight:bold;"
        href="http://mjacobs.me/patternmaker/"
        >Try it out!</a
      >
    `;
  },
  graphix: function ({ path }) {
    let numCircles = 15;
    return [...Array(numCircles).keys()].map((i) => {
      return html`<img src="${path}/circles/${i + 1}.png" /><img
          src="${path}/circles/${i + 1}b.png"
        />`;
    });
  },
  fleas: function ({ path }) {
    return html`
      Another fun (and anxiety-inducing) little game I made in 2010 after a roommate's cat came home
      with fleas.

      <img src="${path}/fleas2.png" width="100%" style="max-width: 100% !important" />
      <a
        style="background: cerillian; display:block;width:100%; text-align:center;font-size:40px; font-weight:bold;"
        href="http://mjacobs.me/fleas/"
        >Try it out!</a
      >
    `;
  },
  brandoSkirts: function ({ path }) {
    return html`
      <iframe
        style="border: 0; width: 100%; max-width:100% !important; height: 472px;"
        src="https://bandcamp.com/EmbeddedPlayer/album=4038781229/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
        seamless
        ><a href="http://brandoskirts.bandcamp.com/album/buffalo-buffalo-buffalo"
          >Buffalo Buffalo Buffalo by Brando Skirts</a
        ></iframe
      >

      Released May 20, 2006 Mike Jacobs: production, drums, percussion, trumpet, keyboards,
      programming, vocals, washing machine, field recording, ipod malfunction, bass guitar. Carter
      Maness: vocals, poetics, guitar, noise, theory, ukulele, bass guitar, saxophone, wurlitzer.
      Joel Arthur plays bass on "Grim Dissection of Perpetual Dissatisfaction" and "Snot Incubator"
      Luke Iannini and Kim Lance sing on "Awkward Wedding Night"
    `;
  },
  vectorray: function ({ path }) {
    return html`
      Recursive Drawing App

      <p><img src="${path}/vectorray_1.jpg" /></p>
      <p><img src="${path}/vectorray_10.jpg" /></p>
      <p><img src="${path}/vectorray_11.jpg" /></p>
      <p><img src="${path}/vectorray_12.jpg" /></p>
      <p><img src="${path}/vectorray_13.jpg" /></p>
      <p><img src="${path}/vectorray_14.jpg" /></p>
      <p><img src="${path}/vectorray_15.jpg" /></p>
      <p><img src="${path}/vectorray_16.jpg" /></p>
      <p><img src="${path}/vectorray_17.jpg" /></p>
      <p><img src="${path}/vectorray_18.jpg" /></p>
      <p><img src="${path}/vectorray_19.jpg" /></p>
      <p><img src="${path}/vectorray_2.jpg" /></p>
      <p><img src="${path}/vectorray_3.jpg" /></p>
      <p><img src="${path}/vectorray_4.jpg" /></p>
      <p><img src="${path}/vectorray_5.jpg" /></p>
      <p><img src="${path}/vectorray_6.jpg" /></p>
      <p><img src="${path}/vectorray_7.jpg" /></p>
      <p><img src="${path}/vectorray_8.jpg" /></p>
    `;
  },
  aristid: function ({ path }) {
    return html`
      Scrambling music with code

      <iframe
        width="100%"
        height="500"
        scrolling="no"
        frameborder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/242000489&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
      ></iframe>
      <br />
      <br />
      <br />
      <!-- <h4> A little bit about the project:</h4> -->
      <p>
        This project uses the
        <a href="https://github.com/algorithmic-music-exploration/amen">Amen library</a>
        to rip apart songs and piece them back together again using a two-tiered
        <a href="https://en.wikipedia.org/wiki/L-system">Lindenmayer system</a>
        for composition: one for beats, another for song structure.
      </p>

      <!--
  <p>
    An interesting line of exploration developed in my solo music a few years ago. I found myself in Ableton Live slicing up other artists' songs into slivers of sound ${unicode.mdash} often only long enough to get a single drum hit ${unicode.mdash} and then rearranging them to form beats and musical phrases. Here's a short example:
  </p>
  
  <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/37168086&color=%23ff5500&inverse=false&auto_play=false&show_user=true">
  </iframe>
  <p>
    The main ingredient in that example is: Peter John and Bjorn's Let's Call It Off<br><br>
    <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123022952&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
    </p>
  <p>
    My intent was to sample just the (impecible) drum hits from this song. But, without access to the original, isolated drum recording, any attempt to extract them left me with other bits of song: vocals, guitars, bass. ("try to pull a noodle from the spaghetti and you're gonna get some sauce"). A frustration at first. But, after piecing together a beat, I came to realize that the sauce made things more interesting.
  </p>
  <p>
    After using this technique a few times in songs, and enjoying the results, I figured this was the sort of thing that would be better done with the aid of code. I found the <a href="https://github.com/algorithmic-music-exploration/amen">Amen library</a>, which does a great job
    of doing the slicing. It quickly finds "hits" in the song, and gives you a nice set of code tools for remixing.
  </p> -->
    `;
  },
  hyperlasso: function ({ path }) {
    return html` Coming soon `;
  },
  monsterPlotter: function ({ path }) {
    return html`
      <p>Large format plotter built mostly from big box store parts.</p>
      <img src="${path}/IMG_3374.jpg" />
      <img src="${path}/IMG_3368-side.jpg" />
      <img src="${path}/IMG_3424.jpg" />
      <video src="${path}/straight.mp4" controls></video>
      <video src="${path}/top_down.mp4" controls></video>
      <img src="${path}/IMG_3485.jpg" />
      <video src="${path}/fund.mov" controls loop></video>
      <img src="${path}/image_from_ios.jpg" />
      <video src="${path}/my-video3.mp4" controls></video>
      <img src="${path}/IMG_3233.JPG" />
      <!-- <p>
  Documentation coming soon. For now:
  <ul>
  <li><a href="https://www.instagram.com/p/B_yHMaBBIrq/">Instagram post 4</a></li>
  <li><a href="https://www.instagram.com/p/B_ukwqsBscZ/">Instagram post 3</a></li>
  <li><a href="https://www.instagram.com/p/B_ujdGsBgf3/">Instagram post 2</a></li>
  <li><a href="https://www.instagram.com/p/B--v_v9huLz/">Instagram post 1</a></li>
  
  </p> -->

      <!-- <p><img src="./side.mp4"></p>
  <p><img src="./0.jpg"></p>
  <p><img src="./straight.mp4"></p>
  <p><img src="./1.jpg"></p>
  <p><img src="./top_down.mp4"></p> -->
    `;
  },
  plotter: function ({ path }) {
    return html`
      <br />
      <br />

      <p>
        In June 2017, in an attempt to break an over reliance on the computer, I acquired a small
        plotter and spent the next two months experimenting. I gave it pens, markers, paints, and
        screw drivers which I then used to etch designs into wet paint. After a little while, I
        found myself wanting to make larger pieces, so I built a pantograph to multiply the reach of
        the device 2-3x. Here is a selection of that line of experiments in (rouhgly) reverse
        chronological order.
      </p>
      <br />
      <br />
      <br />

      <p><img src="${path}/plotter.jpg" /></p>
      <p><img src="${path}/solder.jpg" /></p>
      <p><img src="${path}/wave.jpg" /></p>
      <p><img src="${path}/hots.jpg" /></p>
      <p><img src="${path}/hi.jpg" /></p>
      <p><img src="${path}/cloth.jpg" /></p>
      <p><img src="${path}/fingermachine.gif" /></p>
      <p><img src="${path}/helpmachine.gif" /></p>
      <p><img src="${path}/38.jpg" /></p>
      <p><img src="${path}/37.jpg" /></p>
      <p><img src="${path}/36.jpg" /></p>
      <p><img src="${path}/35.jpg" /></p>
      <p><img src="${path}/34.jpg" /></p>
      <p><img src="${path}/33.jpg" /></p>
      <p><img src="${path}/32.jpg" /></p>
      <p><img src="${path}/31.jpg" /></p>
      <p><img src="${path}/30.jpg" /></p>
      <p><img src="${path}/29.jpg" /></p>
      <p><img src="${path}/28.jpg" /></p>
      <p><img src="${path}/27.jpg" /></p>
      <p><img src="${path}/26.jpg" /></p>
      <p><img src="${path}/25.jpg" /></p>
      <p><img src="${path}/24.jpg" /></p>
      <p><img src="${path}/23.jpg" /></p>
      <p><img src="${path}/22.jpg" /></p>
      <p><img src="${path}/21.jpg" /></p>
      <p><img src="${path}/20.jpg" /></p>
      <p><img src="${path}/19.jpg" /></p>
      <p><img src="${path}/18.jpg" /></p>
      <p><img src="${path}/17.jpg" /></p>
      <p><img src="${path}/16.jpg" /></p>
      <p><img src="${path}/15.jpg" /></p>
      <p><img src="${path}/14.jpg" /></p>
      <p><img src="${path}/13.jpg" /></p>
      <p><img src="${path}/12.jpg" /></p>
      <p><img src="${path}/11.jpg" /></p>
      <p><img src="${path}/10.jpg" /></p>
      <p><img src="${path}/9.jpg" /></p>
      <p><img src="${path}/8.jpg" /></p>
      <p><img src="${path}/7.jpg" /></p>
      <p><img src="${path}/6.jpg" /></p>
      <p><img src="${path}/5.jpg" /></p>
      <p><img src="${path}/4.jpg" /></p>
      <p><img src="${path}/3.jpg" /></p>
      <p><img src="${path}/2.jpg" /></p>
      <p><img src="${path}/1.jpg" /></p>
      <script>
        var num = 0;
        var count = 39;
        while (count-- >= num) {
          let i = document.createElement("img");
          i.src = "" + count + ".jpg";
          console.log(i);
        }
      </script>

      <!-- document.querySelectorAll(".KL4Bh img").forEach((e,i)=> {
  document.write("<a href='"+e.src+"' download='"+i+".jpg'><img src='"+e.src+"'></a>")
  }) -->
    `;
  },
  microscope: function ({ path }) {
    return html`
      <style>
        .iframes {
          max-width: 900px;
        }
        iframe {
          height: 500px;
          margin: 60px auto 0px auto;
        }
      </style>

      The Microscope Taught Me There's An Infinite Universe In Both Directions Performed live by
      Michael Jacobs (music) and Alexandra Hay (visuals, microscope) at the Luggage Store in San
      Francisco on April 9th, 2015.

      <div class="iframes">
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/p3eFCb--2iE"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    `;
  },
};
