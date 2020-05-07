import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {withRouter} from 'react-router-dom';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


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
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    ready: {
        backgroundColor: 'green',
    },
    dirty: {
        backgroundColor: 'red',
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);


function SimpleTable() {
    const URI = 'http://127.0.0.1:5000';
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
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

    return (
        <>
            <Grid container style={{ margin: '0 4em', textAlign: 'center'}} spacing={5}>
                {state.rows.map(row => (
                    <Grid item xs={12} md={3} lg={3} key={row.id}>
                        <ExpansionPanel square expanded={expanded === `panel${row.id}`} onChange={handleChange(`panel${row.id}`)} >
                            <ExpansionPanelSummary aria-controls={`panel${row.id}d-content`} id={`panel${row.id}d-header`} className={row.status === 'clean' ? classes.ready : classes.dirty}>
                                <Typography>Table #{row.id}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        {/*<Button*/}
                        {/*    variant="contained"*/}
                        {/*    className={row.status === 'clean' ? classes.ready : classes.dirty}*/}
                        {/*    id="Table1"*/}
                        {/*    onClick={() => goToTable(row.id)}*/}
                        {/*>*/}
                        {/*    Table #{row.id}*/}
                        {/*</Button>*/}
                    </Grid>
                ))}
            </Grid>
         </>
    );
}

export default withRouter(SimpleTable);