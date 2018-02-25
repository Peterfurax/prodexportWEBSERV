import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";


/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const TableDate = date => (
  <Table>
    <TableHeader   displayRowCheckbox={false} displaySelectAll={false} fixedHeader={true} fixedFooter={true} selectable={false} multiSelectable={false}>
      <TableRow style={{ textAlign: "right" }} >
        <TableHeaderColumn tooltip={"IssueDate"}>IssueDate</TableHeaderColumn>
        <TableHeaderColumn tooltip={"timeCreated"}>
          Date de création
        </TableHeaderColumn>
        <TableHeaderColumn tooltip={"timeModified"}>
          Date dernière modification
        </TableHeaderColumn>
        <TableHeaderColumn tooltip={"WebPublicationDate"}>
          Date de publication web
        </TableHeaderColumn>
        <TableHeaderColumn tooltip={"WebRelegationDate"}>
          Date de relegation web
        </TableHeaderColumn>
        <TableHeaderColumn tooltip={"WebUnpublicationDate"}>
          Date de deplublication web
        </TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} showRowHover={true}>
      <TableRow style={{ textAlign: "center" }}>
        <TableRowColumn>{date.date.issueDate}</TableRowColumn>
        <TableRowColumn>{date.date.timeCreated}</TableRowColumn>
        <TableRowColumn>{date.date.timeModified}</TableRowColumn>
        <TableRowColumn>{date.date.WebPublicationDate}</TableRowColumn>
        <TableRowColumn>{date.date.WebRelegationDate}</TableRowColumn>
        <TableRowColumn>{date.date.WebUnpublicationDate}</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default TableDate;
