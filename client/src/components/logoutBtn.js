import React from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from 'react-router-dom'
const { REACT_APP_API_URL } = process.env;

class LogoutBtn extends React.Component{
    logout = () => {
        fetch(REACT_APP_API_URL + '/api/u/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken'),
            }
        }).then(response => response.json()).then(result => {
            console.log(result);
            fetch( REACT_APP_API_URL + '/api/p/', {
                method: 'PUT',
                body: JSON.stringify(result.payrollId),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('jwtToken'),
                }
            }).then(response => {
                console.log(response);
                if(response.status === 200) {
                    // localStorage.removeItem('jwtToken');
                    // this.props.history.push('/login');
                }
            }).catch(e => console.log(e))
        }).catch(e => console.log(e))

    };

    render() {
        return(
            <Button
                color="inherit"
                onClick={this.logout}
            >
                Logout
            </Button>
        )
    }
}

export default withRouter(LogoutBtn);
