import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {withRouter} from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();


const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    button: {
        backgroundColor: "#FAF84F"
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
    }
});

function SimpleTable(props) {
    const URI = 'http://127.0.0.1:5000';
    const classes = useStyles();
    const [count, setCount] = React.useState(0);
    const [state, setState] = React.useState({
        rows: []
    })

    useEffect(() => {
        setCount(0);
        console.log(URI);
        fetch(URI + '/api/t/', {
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

    const goToTable = (id) => {
        props.history.push(`/table/${id}`);
    };

    return (
        <Grid container style={{ margin: '0 4em', textAlign: 'center'}} spacing={5}>
            {state.rows.map(row => (
                <Grid item xs={12} md={3} lg={3} key={row.id}>
                    <Button
                        variant="contained"
                        className={row.status === 'clean' ? classes.ready : classes.dirty}
                        id="Table1"
                        onClick={() => goToTable(row.id)}
                    >
                        Table #{row.id}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
}

export default withRouter(SimpleTable)