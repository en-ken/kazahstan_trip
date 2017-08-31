import React from 'react';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const FlightSchdule = (props) => {
  const {
    flight,
    flightTime,
    depTime,
    depPort,
    arrTime,
    arrPort,
  } = props;

  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>{flight}        搭乗時間:{flightTime}</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRowColumn>{depTime}</TableRowColumn>
        <TableRowColumn>{depPort}</TableRowColumn>
        <TableRowColumn>→</TableRowColumn>
        <TableRowColumn>{arrTime}</TableRowColumn>
        <TableRowColumn>{arrPort}</TableRowColumn>
      </TableBody>
    </Table>
  );
};

export default FlightSchdule;