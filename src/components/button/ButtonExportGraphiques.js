import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import ActionAndroid from "material-ui/svg-icons/editor/attach-file";

const styles = {
  button: {
    margin: 12
  },
  exampleImageInput: {
    cursor: "pointer",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    opacity: 0
  }
};

const ButtonExportGraphiques = () => (
  <RaisedButton
    label="Graphiques CSV"
    labelPosition="before"
    primary={false}
    icon={<ActionAndroid />}
    style={styles.button}
    href="http:\\localhost:4001\graph"
  />
);

export default ButtonExportGraphiques;
