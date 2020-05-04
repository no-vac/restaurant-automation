import LogoutBtn from "./logoutBtn";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {withRouter} from 'react-router-dom';
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PeopleIcon from "@material-ui/icons/People";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import HomeIcon from '@material-ui/icons/Home';
import TabletIcon from '@material-ui/icons/Tablet';

class TopBar extends React.Component {
    render() {
        const homePage = () => {
            this.props.history.push('/');
        };

        const menuPage = () => {
            this.props.history.push('/menu');
        };

        const employeeProfiles = () => {
            this.props.history.push('/employeeProfiles')
        };

        return (
            <AppBar position="absolute" style={{boxShadow: 'none'}}>
                <Toolbar>
                    <Grid
                        justify="flex-start"
                        container
                    >
                        <Grid item>
                            <Typography component="h1" variant="h6" color="inherit" noWrap>
                                Restaurant Automation
                            </Typography>
                        </Grid>
                        <Grid item style={{marginLeft: '1em'}}>
                            <Button color="inherit" onClick={homePage}><HomeIcon/> &nbsp; Home</Button>
                        </Grid>
                        <Grid item style={{marginLeft: '1em'}}>
                            <Button color="inherit" onClick={employeeProfiles}><PeopleIcon/> &nbsp; Employees</Button>
                        </Grid>
                        <Grid item style={{marginLeft: '1em'}}>
                            <Button color="inherit"><MonetizationOnIcon/> &nbsp; Payroll</Button>
                        </Grid>
                        <Grid item style={{marginLeft: '1em'}}>
                            <Button color="inherit" onClick={menuPage}><FastfoodIcon/> &nbsp;Menu</Button>
                        </Grid>
                        <Grid item style={{marginLeft: '1em'}}>
                            <Button color="inherit"><TabletIcon/> &nbsp; Tables</Button>
                        </Grid>
                    </Grid>
                    <LogoutBtn/>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withRouter(TopBar);

