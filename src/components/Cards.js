import React, { Component } from "react";
import Divider from "material-ui/Divider";
// import { List, ListItem } from "material-ui/List";
// import Paper from "material-ui/Paper";
// import Subheader from "material-ui/Subheader";
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
// import Tabledate from "./table/dateTable";
// import TableExampleComplex from "./table/table";
let style = {
  paddingTop: 0,
  paddingBottom: 0
};
export default class CardExampleControlled extends Component {
  constructor(props) {
    super(props);
    // console.log("response", props.post.files);
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

    let files = "files" in post ? post.files : ""
    // let graphs = files.graph;
    let doc = files.doc[0];
    let art = doc.doc[0].article[0];
    let titre = art.titre[0]["titre-p"][0];
    // let texte = art.texte[0];
    // let signature = texte["composant-signature"][0].signature[0];

    // ARTICLE DBMETADATA
    let dbMetadata = doc.dbMetadata[0];
    let compoundUserMetadata = dbMetadata.compoundUserMetadata[0];
    let UserMetadata = dbMetadata.compoundUserMetadata[0].Metadata[0];
    let UserMetadataCustomer = UserMetadata.Customer[0];

    let UserMetadataGeneral = UserMetadata.General[0];
    let signature = UserMetadataCustomer.Authors[0].Author[0];
    let web = UserMetadataCustomer.Web[0];
    let webCategory = web.WebCategory[0];
    let WebSegment = webCategory.WebSegment[0].WebCaption[0];
    let WebSource = webCategory.WebSource[0].WebCaption[0];
    console.log(webCategory.WebSousSegment[0])
  
    // let WebSousSegment = webCategory.WebSousSegment[0]
    // let WebSousSegmentCaption = "WebCaption" in WebSousSegment ? WebSousSegment.WebCaption[0]:"";
    // let WebSousTheme = webCategory.WebSousTheme[0].WebCaption[0];
    // let WebTheme = webCategory.WebTheme[0].WebCaption[0];

    // console.log(UserMetadataGeneral);
    let sdvKey = web.WebObjId[0];
    let WebType = web.WebType[0];
    let WebPriority = web.WebPriority[0];
    let WebPublicationDate = web.WebPublicationDate[0];
    let WebRelegationDate = web.WebRelegationDate[0];
    let WebUnpublicationDate = web.WebUnpublicationDate[0];

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

    let objectDate = {
      timeCreated: timeCreated,
      timeModified: timeModified,
      issueDate: issueDate,
      WebPublicationDate: WebPublicationDate,
      WebRelegationDate: WebRelegationDate,
      WebUnpublicationDate: WebUnpublicationDate
    };

    return (
      <div>
        <Card
          expanded={this.state.expanded}
          onExpandChange={this.handleExpandChange}
        >
          <CardHeader
            title={titre}
            subtitle={signature}
            avatar="images/1.jpg"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <div>
            <CardTitle title={titre} subtitle={summary} />
              <GridListExampleSimple expandable={true} />
              
              <h3>ID</h3>
              <ul>
                <li>loid : {loid}</li>
                <li>uuid : {uuid}</li>
                <li>sdvKey : {sdvKey}</li>
              </ul>
              <Divider />
              <h3>Article</h3>
              <ul>
                <li>Fichier : {name}</li>
                <li>workfolder : {workfolder}</li>
                <li>Produit : {productName}</li>
                <li>Signature : {signature}</li>
                <li>Résumé : {summary}</li>
                <li>template : {templateName}</li>
                <li>Mots : {wordCount}</li>
                <li>Caractères : {charsCount}</li>
                <li>Lien methode : {path}</li>
              </ul>
              <Divider />
              <h3>Web Categories</h3>
              <ul>
                <li>Type : {WebType}</li>
                <li>Priority : {WebPriority}</li>
                {/* <li>Segment : {WebSegment}</li>
                <li>Source : {WebSource}</li>
                <li>SousSegment : {WebSousSegment}</li>
                <li>SousTheme : {WebSousTheme}</li>
                <li>Theme : {WebTheme}</li> */}
              </ul>
              <Divider />
              <h3>Date</h3>
              <ul>
                <li>issueDate : {issueDate}</li>
                <li>createdDate : {createdDate}</li>
                <li>timeCreated : {timeCreated}</li>
                <li>timeModified : {timeModified}</li>
                <li>WebPublicationDate : {WebPublicationDate}</li>
                <li>WebRelegationDate : {WebRelegationDate}</li>
                <li>WebUnpublicationDate : {WebUnpublicationDate}</li>
              </ul>
              <Divider />
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}
