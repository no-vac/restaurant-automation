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
import burger from "./images/burger.png";
import steak from "./images/steak.png";
import salmon from "./images/salmon.jpeg";
import spaghetti from "./images/spaghetti.png";
import chicken from "./images/chicken.jpeg";
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
    <img src={burger} alt="burger" width="60px" height="50px" />,
    "Burger",
    "$8.99",
    quantity,
    add
  ),
  createData(
    <img src={spaghetti} alt="spaghetti" width="70px" height="50px" />,
    "Spaghetti",
    "$10.69",
    quantity,
    add
  ),
  createData(
    <img src={steak} alt="steak" width="60px" height="50px" />,
    "Steak",
    "$12.99",
    quantity,
    add
  ),
  createData(
    <img src={salmon} alt="salmon" width="70px" height="50px" />,
    "Salmon",
    "$14.50",
    quantity,
    add
  ),
  createData(
    <img src={chicken} alt="chicken" width="70px" height="50px" />,
    "Chicken",
    "$8.99",
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
