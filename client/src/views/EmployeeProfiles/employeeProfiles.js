import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/Button";
import TopBar from "../../components/TopBar";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AlertDialog from './addEmployee';

const columns = [
    {id: 'username', label: 'Username', align: 'left'},
    {id: 'email', label: 'Email', align: 'left'},
    {id: 'role', label: 'Role', align: 'left'},
];

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '4em 30em'
    },
    container: {
        maxHeight: 1000,
    },
    btn: {
        margin: '0 1em'
    },
    align: {
        textAlign: 'center'
    },
});

export default function StickyHeadTable() {
    const URI = 'http://127.0.0.1:5000';
    const classes = useStyles();
    const [count, setCount] = React.useState(0);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(25);
    const [state, setState] = React.useState({
        rows: [],
        edit: false
    })

    useEffect(() => {
        setCount(0);
        fetch(URI + '/api/u/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
        }).then(response => response.json()).then(result => {
            setState({...state, rows: result});
        }).catch(e => console.log(e))
    }, [count])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const editable = (id) => {
        // setState((prevState => {
        //     rows: prevState.rows.map((x, key) => (key === id ? {...x, edit: !x. edit } : x))
        // }))
        setState({...state, edit: true});
    }

    const cancelEditable = () => {
        setState({...state, edit: false})
    }

    const deleteUser = (id, username) => {
        console.log(id + " " + username);
        fetch(URI+'/api/u/', {
            method: 'DELETE',
            body: JSON.stringify({
                id, username
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
        }).then(response => response.json()).then(result => {
            if(result) {
                window.location.reload();
            }
        }).catch(error => console.log(error))
    }

    return (
        <>
            <TopBar/>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                    >
                                        <strong>{column.label}</strong>
                                    </TableCell>
                                ))}
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {state.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <>
                                                    {state.edit ?
                                                        <TableCell key={row.id} align={column.align}>
                                                            <FormControl style={{width: '100%'}}>
                                                                <TextField id={row.username} label={column.id} value={value} />
                                                            </FormControl>
                                                        </TableCell>
                                                        :
                                                        <TableCell key={row.id} align={column.align}>
                                                            {value}
                                                        </TableCell>
                                                    }
                                                </>
                                            );
                                        })}
                                        <TableCell className={classes.align}>
                                            {state.edit ?
                                                <Button variant="contained" color="primary" className={classes.btn} onClick={cancelEditable}>Cancel</Button>
                                                :
                                                <Button variant="contained" color="primary" className={classes.btn} onClick={() => editable(row.id)}>Edit</Button>
                                            }
                                            <Button variant="contained" color="secondary" className={classes.btn} onClick={() => deleteUser(row.id, row.username)}>Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            <TableRow>
                                <AlertDialog />
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={state.rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </>

    );
}