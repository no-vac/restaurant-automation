import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { green, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  button: {
    backgroundColor: "#FAF84F"
  }
});

function createData(button, button1, button2, button3) {
  return { button, button1, button2, button3 };
}

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: yellow
  },
  status: {
    danger: "red"
  }
});

function handleChange() {
  return makeStyles({
    button: {
      backgroundColor: "#76FA4F"
    }
  });
}

export default function SimpleTable() {
  const classes = useStyles();
  const rows = [
    createData(
      <ThemeProvider theme={theme}>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          style={{ height: "55px", width: "50px" }}
          id="Table1"
          onClick={handleChange}
        >
          Table #1
        </Button>
      </ThemeProvider>,
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          style={{ height: "55px", width: "50px" }}
          id="Table2"
        >
          Table #2
        </Button>
      </ThemeProvider>,
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          style={{ height: "55px", width: "50px" }}
          id="Table3"
        >
          Table #3
        </Button>
      </ThemeProvider>,
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          style={{ height: "55px", width: "50px" }}
          id="Table4"
        >
          Table #4
        </Button>
      </ThemeProvider>
    ),
    createData(
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          style={{ height: "55px", width: "50px" }}
          id="Table5"
        >
          Table #5
        </Button>
      </ThemeProvider>,
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          style={{ height: "55px", width: "50px" }}
          id="Table6"
        >
          Table #6
        </Button>
      </ThemeProvider>,
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          style={{ height: "55px", width: "50px" }}
          id="Table7"
        >
          Table #7
        </Button>
      </ThemeProvider>,
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          style={{ height: "55px", width: "50px" }}
          id="Table8"
        >
          Table #8
        </Button>
      </ThemeProvider>
    ),
    createData(
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          style={{ height: "55px", width: "50px" }}
          id="Table9"
        >
          Table #9
        </Button>
      </ThemeProvider>,
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          style={{ height: "55px", width: "50px" }}
          id="Table10"
        >
          Table #10
        </Button>
      </ThemeProvider>,
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          style={{ height: "55px", width: "50px" }}
          id="Table11"
        >
          Table #11
        </Button>
      </ThemeProvider>,
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          style={{ height: "55px", width: "50px" }}
          id="Table12"
        >
          Table #12
        </Button>
      </ThemeProvider>
    ),
    createData(
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          style={{ height: "55px", width: "50px" }}
          id="Table13"
        >
          Table #13
        </Button>
      </ThemeProvider>,
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          style={{ height: "55px", width: "50px" }}
          id="Table14"
        >
          Table #14
        </Button>
      </ThemeProvider>,
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          style={{ height: "55px", width: "50px" }}
          id="Table15"
        >
          Table #15
        </Button>
      </ThemeProvider>,
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          style={{ height: "55px", width: "50px" }}
          id="Table16"
        >
          Table #16
        </Button>
      </ThemeProvider>
    )
  ];
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.button}>
              <TableCell>{row.button}</TableCell>
              <TableCell>{row.button1}</TableCell>
              <TableCell>{row.button2}</TableCell>
              <TableCell>{row.button3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
