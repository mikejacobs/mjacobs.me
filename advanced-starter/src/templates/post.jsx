import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
// import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import styles from "./post.module.css";
import { Link } from "@reach/router";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          {/* <SEO postPath={slug} postNode={postNode} postSEO /> */}
          <div className={styles.post}>
            <h1 className={styles.postTitle}>
              <Link to="/">Michael Jacobs</Link> / {post.title}
            </h1>
            {/* <div className={styles.postMeta}>
              <PostTags tags={post.tags} />
            </div> */}
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <UserInfo config={config} />
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        featuredImage {
          publicURL
        }
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
