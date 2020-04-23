import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import LoginPage from "../views/LoginPage/LoginPage";
import Dashboard from "../views/AdminDashboard/Dashboard";


class Main extends Component{

    componentWillMount() {
        if (localStorage.getItem('jwtToken')) {
            const token = localStorage.getItem('jwtToken');
            fetch('http://127.0.0.1:5000/api/u/checkToken', {
                method: 'POST',
                body: JSON.stringify({
                    token
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
                .then(result => {
                    if(result.success === false){
                        localStorage.removeItem('jwtToken');
                        this.props.history.push('/login');
                    }
                    console.log(result);
                })
                .catch(e => console.log(e))
        } else {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/login" component={LoginPage} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default withRouter(Main);

