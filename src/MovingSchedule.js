import React from 'react';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const MovingSchedule = (props) => {
  const {
    service,
    totalTime,
    depTime,
    depPort,
    arrTime,
    arrPort,
  } = props;

  const rowStyle = (per) => {return { width: per + '%', textAlign: 'center'}}

  return (
    <Table style={{ tableLayout: 'auto' }}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>{service}</TableHeaderColumn>
          <TableHeaderColumn/>
          <TableHeaderColumn style={{textAlign: 'right'}}>搭乗時間 : {totalTime}</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} >
        <TableRow>
          <TableRowColumn style={rowStyle(30)}>{depTime}</TableRowColumn>
          <TableRowColumn style={rowStyle(50)}>{depPort}</TableRowColumn>
          <TableRowColumn style={rowStyle(20)}>発</TableRowColumn>
        </TableRow>
          <TableRowColumn style={rowStyle(30)}>{arrTime}</TableRowColumn>
          <TableRowColumn style={rowStyle(50)}>{arrPort}</TableRowColumn>
          <TableRowColumn style={rowStyle(20)}>着</TableRowColumn>
        <TableRow>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default MovingSchedule;