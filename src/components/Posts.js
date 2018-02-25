import React from "react";
import PropTypes from "prop-types";
import Cards from "./Cards";
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";
const Posts = ({ posts }) => (
  <div>
    {posts.map((post, i) => (
      <Paper zDepth={2} key={i} rounded={true}>
        <Cards post={post} />
        <p />
        <Divider />

      </Paper>
    ))}
  </div>
);

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
