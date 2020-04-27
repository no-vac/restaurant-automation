import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import LoginPage from "../views/LoginPage/LoginPage";
import Dashboard from "../views/AdminDashboard/Dashboard";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});


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
                <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/login" component={LoginPage} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}
export default withRouter(Main);

