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
import chickenNoodle from "../../images/chickenNoodle.png";
import onionSoup from "../../images/onionSoup.png";
import veggieSoup from "../../images/veggieSoup.jpeg";
import houseSalad from "../../images/houseSalad.png";
import caesarSalad from "../../images/caesarSalad.jpg";
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
    <img src={chickenNoodle} alt="chickenNoodle" width="70px" height="60px" />,
    "Chicken Noodle",
    "$4.99",
    quantity,
    add
  ),
  createData(
    <img src={onionSoup} alt="onionSoup" width="70px" height="70px" />,
    "French Onion",
    "$4.99",
    quantity,
    add
  ),
  createData(
    <img src={veggieSoup} alt="veggieSoup" width="70px" height="70px" />,
    "Vegetable",
    "$4.50",
    quantity,
    add
  ),
  createData(
    <img src={houseSalad} alt="houseSalad" width="70px" height="40px" />,
    "House Salad",
    "$6.50",
    quantity,
    add
  ),
  createData(
    <img src={caesarSalad} alt="caesarSalad" width="80px" height="60px" />,
    "Caesar Salad",
    "$6.99",
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
