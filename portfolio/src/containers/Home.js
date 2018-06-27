import React from 'react'
import { withSiteData } from 'react-static'
//
import dat from '../data.json'

import './grid.css'

export default withSiteData(() => (
  <div>
    <ul>
      {dat[0]["art"].map((post, index) => (
          <li key={index} style={{backgroundImage: "url(" + post.images[0].thumb + ")" }} >
            {/* <img src={ post.images[0]} alt="" /> */}
            <div className="blurb">
                <div className="b1">
                  {post.title}
                  <a href="#" className="buy sold"><span className="solddot">&middot;</span>${post.price}</a>
                </div>
                <div className="b2">{post.materials}<br/>{post.dimensions}</div>
                <div className="b3">{post.year}</div>
            </div>
          </li>
      ))}
    </ul>
  </div>
))
