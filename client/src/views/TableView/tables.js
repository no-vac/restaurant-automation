import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {withRouter} from 'react-router-dom';
const {REACT_APP_API_URL} = process.env;


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650
    },
    button: {
        backgroundColor: "#FAF84F"
    },
    root: {
        width: '100%',
    },
    ready: {
        backgroundColor: 'green',
        height: '100%',
        width: '100%'
    },
    dirty: {
        backgroundColor: 'red',
        height: '100%',
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));


function SimpleTable(props) {
    const classes = useStyles();
    const [count, setCount] = React.useState(0);
    const [state, setState] = React.useState({
        rows: []
    })

    useEffect(() => {
        setCount(0);
        fetch(REACT_APP_API_URL + '/api/t/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
        }).then(response => response.json()).then(result => {
            console.log(result);
            setState({...state, rows: result});
        }).catch(e => console.log(e))
    }, [count])

    return (
        <Grid container style={{ margin: '0 4em', textAlign: 'center'}} spacing={5}>
            {state.rows.map(row => (
                <Grid item xs={12} md={3} lg={3} key={row.id}>
                    <Button
                        variant="contained"
                        className={row.status === 'clean' ? classes.ready : classes.dirty}
                        id="Table1"
                        onClick={() => { props.history.push(`/tables/${row.id}`) }}
                    >
                        Table #{row.id}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
}

export default withRouter(SimpleTable);