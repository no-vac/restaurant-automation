import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, TextField, FormControlLabel } from "@material-ui/core";
import water from "../../images/water.jpeg";
import icedTea from "../../images/icedTea.jpeg";
import coffee from "../../images/coffee.png";
import tea from "../../images/tea.jpeg";
import soda from "../../images/soda.jpeg";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

const quantity = (
  <FormControl variant="outlined">
    <InputLabel>Qty</InputLabel>
    <Select style={{ height: 35 }} defaultValue={1} id="qty" label="Qty">
      <MenuItem value={1}>1</MenuItem>
      <MenuItem value={2}>2</MenuItem>
      <MenuItem value={3}>3</MenuItem>
      <MenuItem value={4}>4</MenuItem>
      <MenuItem value={5}>5</MenuItem>
    </Select>
  </FormControl>
);

const add = (
  <Button variant="outlined" color="primary">
    Add
  </Button>
);

function createData(image, item, price, quantity, add) {
  return { image, item, price, quantity, add };
}

const rows = [
  createData(
    <img src={water} alt="water" width="40px" height="50px" />,
    "Water",
    "$0.99",
    quantity,
    add
  ),
  createData(
    <img src={soda} alt="soda" width="45px" height="60px" />,
    "Soda",
    "$1.99",
    quantity,
    add
  ),
  createData(
    <img src={icedTea} alt="icedTea" width="45px" height="65px" />,
    "Iced Tea",
    "$2.99",
    quantity,
    add
  ),
  createData(
    <img src={coffee} alt="coffee" width="50px" height="40px" />,
    "Coffee",
    "$1.99",
    quantity,
    add
  ),
  createData(
    <img src={tea} alt="tea" width="50px" height="40px" />,
    "Tea",
    "$1.99",
    quantity,
    add
  )
];

export default function SimpleTable() {
  const classes = useStyles();
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.image}>
              <TableCell align="center">{row.image}</TableCell>
              <TableCell align="center">{row.item}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center" style={{ paddingRight: 20 }}>
                {row.add}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
