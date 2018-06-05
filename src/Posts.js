import React from "react";
import PropTypes from "prop-types";

const createMarkup = html => ({ __html: html });

const Posts = ({ data = [] }) =>
  data.map(post => (
    <ul className="posts" key={post.i}>
      <img className="post-image" src={post.i} alt="" />
      <div
        className="post-text"
        dangerouslySetInnerHTML={createMarkup(post.t)}
      />
    </ul>
  ));

Posts.propTypes = {
  articles: PropTypes.array
};

export default Posts;