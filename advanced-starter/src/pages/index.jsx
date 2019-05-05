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
              Hi! I'm Michael Jacobs.
              {/* <br />
              <a className={styles.dot} href="dot">
                &middot;
              </a> */}
            </div>
            <p>
              <small>
                I make art, music, and software.
                <br />
                <br />
                <Link to="about">More about me...</Link>
              </small>
            </p>
          </div>
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
