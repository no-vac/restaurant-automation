import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import carrot from "./images/carrot.jpg";
import red from "./images/red.png";
import chocolate from "./images/chocolate.jpg";
import iceCream from "./images/iceCream.jpg";
import apple from "./images/apple.png";
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
    <img src={chocolate} alt="chocolate" width="80px" height="60px" />,
    "Chocolate Cake",
    "$4.99",
    quantity,
    add
  ),
  createData(
    <img src={red} alt="red" width="70px" height="60px" />,
    "Red Velvet Cake",
    "$4.99",
    quantity,
    add
  ),
  createData(
    <img src={carrot} alt="carrot" width="80px" height="60px" />,
    "Carrot Cake",
    "$4.50",
    quantity,
    add
  ),
  createData(
    <img src={apple} alt="apple" width="70px" height="50px" />,
    "Apple Pie",
    "$5.50",
    quantity,
    add
  ),
  createData(
    <img src={iceCream} alt="iceCream" width="60px" height="70px" />,
    "Ice Cream",
    "$4.69",
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
