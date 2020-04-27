import React from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from 'react-router-dom'

class LogoutBtn extends React.Component{

    logout = () => {
        localStorage.removeItem('jwtToken');
        this.props.history.push('/login');
    };

    render() {
        return(
            <Button
                variant="contained"
                onClick={this.logout}
            >
                Sign Out
            </Button>
        )
    }
}

export default withRouter(LogoutBtn);
