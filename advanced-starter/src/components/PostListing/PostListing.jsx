import React from "react";
import { Link } from "gatsby";

import styles from "../../pages/index.module.css";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        description: postEdge.node.frontmatter.description,
        title: postEdge.node.frontmatter.title,
        featuredImage: postEdge.node.frontmatter.featuredImage.publicURL,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return postList.map(post => (
      <div className={styles.indexPost} key={post.title}>
        <Link className={styles.indexPostLink} to={post.path} key={post.title}>
          {/* <h1 className={styles.post}>{post.title}</h1> */}
          <img src={post.featuredImage} />
          <span className={styles.projectTitle}>{post.title}</span>
        </Link>
        <div className={styles.tags}>
          <span className={styles.tag}>{post.description}</span>
        </div>
      </div>
    ));
  }
}

export default PostListing;
