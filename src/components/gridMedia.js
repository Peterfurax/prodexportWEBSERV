import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
// import IconButton from "material-ui/IconButton";
// import StarBorder from "material-ui/svg-icons/toggle/star-border";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto"
  },
  titleStyle: {
    color: "rgb(0, 188, 212)"
  }
};

const tilesData = [
  {
    img: "images/4.jpg",
    title: "Breakfast",
    author: "jill111"
  },
  {
    img: "images/5.jpg",
    title: "Tasty burger",
    author: "pashminu"
  },
  {
    img: "images/6.jpg",
    title: "Tasty burger",
    author: "pashminu"
  }
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map(tile => (
        <GridTile
          key={tile.img}
          title={tile.title}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} alt='' />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;
