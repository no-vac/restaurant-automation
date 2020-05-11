import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";

class PaymentForm extends React.Component{
    render() {
        return (
            <Fragment>
                <Typography variant="h6" gutterBottom>
                    Payment method
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField required id="cardName" label="Name on card" fullWidth/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required id="cardNumber" label="Card number" fullWidth/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required id="expDate" label="Expiry date" fullWidth/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cvv"
                            label="CVV"
                            helperText="Last three digits on signature strip"
                            fullWidth
                        />
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={this.props.close}
                        style={{margin: '1em 0'}}
                    >
                        Cancel
                    </Button>
                </Grid>
            </Fragment>
        );
    }
}

export default PaymentForm;
