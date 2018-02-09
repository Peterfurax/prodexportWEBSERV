import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader } from "material-ui/Card";
import CardsGraph from "./CardsGraph";
import CardsDoc from "./CardsDoc";
const Cards = ({ post }) => (
  <Card>
    <CardHeader title={post.id} subtitle={post.datedExport} />
    {console.log(post)}
    <ul>{post.files.doc.map((post, i) => <CardsDoc doc={post} key={i} />)}</ul>
    <ul>
      {post.files.graph.map((post, i) => <CardsGraph graph={post} key={i} />)}
    </ul>
  </Card>
);

Cards.propTypes = {
  post: PropTypes.object.isRequired
};

export default Cards;
