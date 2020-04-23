import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withRouter} from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button, InputLabel, Input, FormControl, FormHelperText } from '@material-ui/core';
import Validator from 'validator';




function Copyright() {
    return(
        <Typography variant="body2" color="textSecondary" align="center">
            {' Copyright © '}
            <Link color="inherit" href="#">
                our restaurant name
            </Link>{ ' ' }
            {new Date().getFullYear() }
        </Typography>
    );
}

class LoginForm extends Component{
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            errors: {}
        }
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        const errors = this.validate(username, password);
        this.setState({ errors });
        if(Object.keys(this.state.errors).length === 0) {
            this.props.submit(username, password);
        }
    };

    validate = (username, password) => {
        const errors = {};
        if(!username) errors.username = "Can't be blank";
        if(!password) errors.password = "Can't be blank";
        return errors;
    };

    render() {
        return (
            <>
                <form style={{width: '100', marginTop: '1em'}} noValidate onSubmit={e => this.onSubmit(e)}>
                    <FormControl fullWidth error={!!this.state.errors.username} required>
                        {this.state.errors.username ?
                            <>
                                <TextField
                                    error
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                    autoComplete="username"
                                    autoFocus
                                />
                                <FormHelperText>Username is required</FormHelperText>
                            </>
                            :
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                autoComplete="username"
                                autoFocus
                            />
                        }
                    </FormControl>
                    <FormControl fullWidth error={!!this.state.errors.password} required>
                        {this.state.errors.username ?
                            <>
                                <TextField
                                    error
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <FormHelperText>Password is required</FormHelperText>
                            </>

                        :
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                id="password"
                                autoComplete="current-password"
                            />
                        }
                    </FormControl>

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" /> }
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ margin: '1em 0' }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item >
                            <Link href="#" variant="body2">
                                {"Dont have an account? Sign up"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </form>
            </>

        )
    }
}

export default withRouter(LoginForm)
