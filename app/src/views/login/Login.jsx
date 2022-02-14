import React from "react";
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';


import SvgComponent from "./animation"

import "./Login.css"

const Login = () => {
    return (
        <div className="container-login">
            <div className="form-login">
                <img src={require("../../assets/logo.png")} alt="" srcset="" />
                <AccountCircle />
                <TextField id="input-with-icon-grid" label="With a grid" />
                <TextField id="standard-basic" label="Standard" />

            </div>
            <div className="img-login">
                <SvgComponent className="img"/>
            </div>


        </div>
    );
}

export default Login;