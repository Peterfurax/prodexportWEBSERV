import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardTitle, CardText } from "material-ui/Card";
const CardsGraph = ({ graph }) => (
  <Card>
    <CardHeader
      title={graph.$.href}
      subtitle={graph.$.href}
      avatar={graph.thumbnail}
    />
    <CardTitle title={graph.title} subtitle={graph.url} />
    <CardText>{graph.selftext}</CardText>
  </Card>
);

CardsGraph.propTypes = {
  graph: PropTypes.object.isRequired
};

export default CardsGraph;
