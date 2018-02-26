import React from "react";
import SearchInput, { createFilter } from "react-search-input";
import Posts from "../components/Posts";
// import emails from './mails'
let KEYS_TO_FILTERS = [];
KEYS_TO_FILTERS.push("datedExport");
KEYS_TO_FILTERS.push("files.doc.dbMetadata.sys.uuid");
KEYS_TO_FILTERS.push("files.doc.dbMetadata.sys.loid");
KEYS_TO_FILTERS.push("files.doc.dbMetadata.sys.path");
KEYS_TO_FILTERS.push("files.doc.dbMetadata.sys.sdvKey ");

const styles1 = {
  padding: "10px 10px",
  height: "52px",
  
  WebkitTransition: " width 2s"
};
const divStyle = {
  width: "100%",
  padding: "10px 10px",
  backgroundColor: "#303030",
  color: 'white',
  fontSize: 16,
  position: "relative",// note the capital 'W' here
  msTransition: "all" // 'ms' is the only lowercase vendor prefix
};
export default class Searchfilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  render() {
    const posts = this.props.posts;
    const filteredposts = posts.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );

    return (
      <div>
        {console.log(this.props.posts)}
        <SearchInput
          className="search-Input"
          style={divStyle}
          onChange={this.searchUpdated}
        />
        <Posts posts={filteredposts} />
      </div>
    );
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }
}
