import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, hourlyRate, hours, total) {
  return { name, hourlyRate, hours, total};
}

const rows = [
  createData('Employee 1', 12.5, 10, 125),
  createData('Employee 2', 12.5, 10, 125),
  createData('Employee 3', 15, 10, 150),
  createData('Employee 4', 15, 10, 150),
  createData('Employee 5', 15, 10, 150),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell align="right">Hourly Rate</TableCell>
              <TableCell align="right">Hours</TableCell>
              <TableCell align="right">Total</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.hourlyRate}</TableCell>
                  <TableCell align="right">{row.hours}</TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}
