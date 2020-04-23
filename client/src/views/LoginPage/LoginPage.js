import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import LoginForm from "./LoginForm";
import {withRouter} from 'react-router-dom'


const useStyles = (theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://restaurantengine.com/wp-content/uploads/2015/05/startup-restaurants-typically-overspend.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});


class SignInSide extends React.Component{
    submit = (username, password) => {
        fetch('http://127.0.0.1:5000/api/u/login', {
            method: 'POST',
            body: JSON.stringify({
                password, username
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(result => {
            console.log(result);
            if(result.Token){
                localStorage.setItem('jwtToken', result.Token);
                this.props.history.push('/')
            }
        }).catch(error => console.log(error))
    };

    render(){
        const { classes } = this.props;
        return(
            <Grid container component="main" style={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} style={{
                    backgroundImage: 'url(https://restaurantengine.com/wp-content/uploads/2015/05/startup-restaurants-typically-overspend.jpg)',
                    backgroundRepeat: 'no-repeat',
                    // backgroundColor:
                    //     theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center', }} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elecation={6} square>
                    <div style={{
                        margin: '8em 4em',
                        // margin: theme.spacing(8, 4),
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Avatar >
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <LoginForm submit={this.submit} />
                    </div>
                </Grid>
            </Grid>
        );
    }
}

// SignInSide.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withRouter(SignInSide)


