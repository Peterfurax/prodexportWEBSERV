import React from "react";
import { Tabs, Tab } from "material-ui/Tabs";
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from "react-swipeable-views";
import Posts from "../components/Posts";
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10
  }
};

export default class TabsExampleSwipeable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  handleChange = value => {
    this.setState({
      slideIndex: value
    });
  };

  render() {
    return (
      <div>
        <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
          <Tab label="Articles" value={0} />
          <Tab label="Graphiques" value={1} />
          <Tab label="Statistiques" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
          <h2 style={styles.headline}>Articles</h2>
            <Posts posts={this.props.posts} />
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Graphiques</h2>
            TODO Graphiques<br />
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Statistiques</h2>
            TODO Statistiques<br />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
