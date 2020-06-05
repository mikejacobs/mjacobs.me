import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
// import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Name from "../components/Name";

import styles from "./index.module.css";
import { Link } from "@reach/router";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className={styles.indexContainer}>
          <Helmet title={config.siteTitle} />
          {/* <SEO /> */}
          <div className={styles.indexPost}>
            <div className={styles.name}>
              <div className={styles.nameAnim}>
                <Name num={80} height={250} />
              </div>
              {/* Michael */}
              {/* <br /> */}
              {/* Jacobs */}
              {/* <br />
              <a className={styles.dot} href="dot">
                &middot;
              </a> */}
            </div>
            {/* <p>
              <div>
                <Link to="about">About</Link>
              </div>
            </p> */}
          </div>
          <div className={styles.indexPost} style={{ fontSize: 20 }}>
            Playful misuse, amateur mistakes, lazy shortcuts, generative
            systems, noise, janky hardware, and shoddily constructed custom
            software.
            <br />
            <br />
            <small>
              <a href="http://instagram.com/mjacobs">@mjacobs</a>
            </small>
          </div>
          {/* <div className={styles.indexPost}>
            <div className={styles.name}>
              <div className={styles.nameAnim}>
                <a href="http://instagram.com/mjacobs">

                  <script src="https://cdn.lightwidget.com/widgets/lightwidget.js" />
                  <iframe
                    src="//lightwidget.com/widgets/a9a828bcdbe155a394fc732844902203.html"
                    scrolling="no"
                    allowtransparency="true"
                    className="lightwidget-widget"
                    style={{
                      width: "100%",
                      border: 0
                      // overflow: "hidden",
                      // height: "100%"
                    }}
                  />
                  <span className={styles.projectTitle}>Instagram</span>
                </a>
              </div>
            </div>
          </div> */}
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            description
            featuredImage {
              publicURL
            }
            date
          }
        }
      }
    }
  }
`;
