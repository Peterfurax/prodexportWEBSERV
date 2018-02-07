import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
const Cards = ({post}) => (
    <Card>
      <CardHeader
        title={post.title}
        subtitle={post.author}
        avatar={post.thumbnail}
      />
      <CardTitle title={post.title} subtitle={post.url} />
      <CardText>
        {post.selftext}
      </CardText>
    </Card>
)

Cards.propTypes = {
  post: PropTypes.array.isRequired
}

export default Cards
