import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const FormLogin = () => {
    const classes = useStyles();

    return (
        <div>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">E-mail</InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle position="start" />
                        </InputAdornment>
                    }
                />
            </FormControl>
            {/* <Button variant="contained" color="primary"> */}

        </div>
    );
}
export default FormLogin;