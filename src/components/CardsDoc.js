import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardText
} from "material-ui/Card";

const CardsDoc = ({ doc }) => (
  <Card>
    <CardHeader title={doc.$.href} subtitle={doc.$.href} />
    <CardTitle title={doc.title} subtitle={doc.url} />
    {doc.dbMetadata.map((dbMetadata, i) => (
      <CardText key={i}>
        {
          <div>
            {dbMetadata.sys.map((sys, i) => (
              <ul key={i}>
                {console.log(sys)}
                <li>Createur : {sys.creator}</li>
                <li>description : {sys.description}</li>
                <li>lastModifier : {sys.lastModifier}</li>
                <li>locker : {sys.locker}</li>
                <li>loid : {sys.loid}</li>
                <li>name : {sys.name}</li>
                <li>owner : {sys.owner}</li>
                <li>path : {sys.path}</li>
                {/* traiter les PROPS */}
                <li>size : {sys.size}</li>
                <li>statusIdentifier : {sys.statusIdentifier}</li>
                <li>statusName : {sys.statusName}</li>
                <li>timeCreated : {sys.timeCreated}</li>
                <li>timeLocked : {sys.timeLocked}</li>
                <li>timeModified : {sys.timeModified}</li>
                {/* traiter les tl */}
                <li>type : {sys.type}</li>
                <li>updateCounter : {sys.updateCounter}</li>
                <li>uuid : {sys.uuid}</li>
              </ul>
            ))}
          </div>
        }
      </CardText>
    ))}
  </Card>
);

CardsDoc.propTypes = {
  doc: PropTypes.object.isRequired
};

export default CardsDoc;
