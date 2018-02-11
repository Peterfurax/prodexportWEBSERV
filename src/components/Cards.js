import React from "react";
import {
  Card,
  // CardActions,
  CardHeader,
  // CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
// import FlatButton from "material-ui/FlatButton";
// import Toggle from "material-ui/Toggle";
// import BadgeExampleSimple from "./badge"
import GridListExampleSimple from "./gridMedia";

export default class CardExampleControlled extends React.Component {
  constructor(props) {
    super(props);
    console.log("response", props.post.files);
    this.state = {
      expanded: false
    };
  }
  handleExpandChange = expanded => {
    this.setState({ expanded: expanded });
  };

  handleToggle = (event, toggle) => {
    this.setState({ expanded: toggle });
  };

  handleExpand = () => {
    this.setState({ expanded: true });
  };

  handleReduce = () => {
    this.setState({ expanded: false });
  };

  render() {
    let post = this.props.post;
    let files = post.files;
    // let graphs = files.graph;
    let doc = files.doc[0];
    let art = doc.doc[0].article[0];
    let titre = art.titre[0]["titre-p"][0];
    // let texte = art.texte[0];
    // let signature = texte["composant-signature"][0].signature[0];

    // ARTICLE DBMETADATA
    let dbMetadata = doc.dbMetadata[0];

    // ARTICLE DBMETADATA.SYS
    let sys = dbMetadata.sys[0];
    let loid = sys.loid[0];
    let name = sys.name[0];
    let timeCreated = sys.timeCreated[0];
    let timeModified = sys.timeModified[0];
    let path = sys.path[0];
    let uuid = sys.uuid[0];

    // ARTICLE DBMETADATA.PROPS
    let props = sys.props[0];
    let charsCount = props.charsCount;
    let createdDate = props.createdDate;
    let summary = props.summary;
    let templateName = props.templateName;
    let wordCount = props.wordCount;
    let workfolder = props.workFolder;
    let productInfo = props.productInfo[0];
    let issueDate = productInfo.issueDate[0];
    let productName = productInfo.name[0];

    return (
      <Card
        expanded={this.state.expanded}
        onExpandChange={this.handleExpandChange}
      >
        <CardHeader
          title={titre}
          subtitle={
            summary +
            " || date heure export " +
            timeModified
          }
          avatar="images/1.jpg"
          actAsExpander={true}
          showExpandableButton={true}
        />

        {/* <CardText>        
          <BadgeExampleSimple></BadgeExampleSimple>
        </CardText> */}

        <CardTitle title={name} subtitle={path} expandable={true} />
        <CardText expandable={true}>
          <div>
            <div>loid : {loid}</div>
            <div>name : {name}</div>
            <div>createdDate : {createdDate}</div>
            <div>summary : {summary}</div>
            <div>templateName : {templateName}</div>
            <div>wordCount : {wordCount}</div>
            <div>workfolder : {workfolder}</div>
            <div>issueDate : {issueDate}</div>
            <div>productName : {productName}</div>
            <div>timeCreated : {timeCreated}</div>
            <div>timeModified : {timeModified}</div>
            <div>path : {path}</div>
            <div>charsCount : {charsCount}</div>
            <div>uuid :{uuid}</div>
          </div>
        </CardText>
        <GridListExampleSimple expandable={true} />
      </Card>
    );
  }
}
