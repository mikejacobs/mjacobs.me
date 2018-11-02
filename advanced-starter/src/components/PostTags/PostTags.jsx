import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import styles from "./PostTags.module.css";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className={styles.postTagContainer}>
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <button className={styles.button}>{tag}</button>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
