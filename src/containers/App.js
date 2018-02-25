import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit,
  searchTerm
} from "../actions";
// import Picker from "../components/Picker";
// import Posts from "../components/Posts";
import AppBarre from "../components/appBar";
import TabsExampleSwipeable from "../components/tab";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";
import ButtonExportArticles from "../components/button/ButtonExportArticles";
import ButtonExportGraphiques from "../components/button/ButtonExportGraphiques";
const nearbyIcon = <IconLocationOn />;
class App extends Component {
  static propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
    searchTerm: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }

  handleChange = nextSubreddit => {
    this.props.dispatch(selectSubreddit(nextSubreddit));
  };

  handleRefreshClick = e => {
    e.preventDefault();

    const { dispatch, selectedSubreddit } = this.props;
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
    dispatch(searchTerm("selectedSubreddit"));
  };

  render() {
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;
    const isEmpty = posts.length === 0;
    return (
      <div>
        {/* <AppBarre /> */}
        {isEmpty ? (
          isFetching ? (
            <h2>Loading...</h2>
          ) : (
            <h2>Empty.</h2>
          )
        ) : (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            {/* <AppBarExampleIcon /> */}

            {/* <Picker
          value={selectedSubreddit}
          onChange={this.handleChange}
          options={["web2web", "print"]}
        /> */}
            <TabsExampleSwipeable posts={posts} />
            {!isFetching && (
              <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
                <Paper zDepth={1}>
                  <BottomNavigation>
                    <ButtonExportArticles />
                    <ButtonExportGraphiques />
                    <BottomNavigationItem
                      label="Rafraichir"
                      icon={nearbyIcon}
                      onClick={this.handleRefreshClick}
                    />
                  </BottomNavigation>
                </Paper>
              </div>
            )}
            <p>
              {lastUpdated && (
                <span>
                  Derniere mise à jour{" "}
                  {new Date(lastUpdated).toLocaleTimeString()}.{" "}
                </span>
              )}
            </p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state;
  const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
    selectedSubreddit
  ] || {
    isFetching: true,
    items: []
  };

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated,
    searchTerm
  };
};

export default connect(mapStateToProps)(App);
