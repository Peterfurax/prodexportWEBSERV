import React from "react";
import PropTypes from "prop-types";
import Cards from "./Cards";
const Posts = ({ posts }) => (
  <span>{posts.map((post, i) => <Cards post={post} key={i} />)}</span>
);

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
