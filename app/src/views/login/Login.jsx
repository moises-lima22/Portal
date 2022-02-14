import React from "react";


import SvgComponent from "./svgs/animation"

import "./Login.css"
import FormLogin from "./Form";
import SvgWaves from "./svgs/waves";

const Login = () => {
    return (
        <div className="container">
            <div className="container-img fx-center" >
                <SvgComponent className="img" />
            </div>
            <div className="container-login fx-center">
                <div className="form-login fx-center">
                    <div className="div-logo">
                        <img src={require("../../assets/logo.png")} alt="" srcset="" />
                    </div>
                    <div className="div-form fx-center" >
                        <FormLogin />
                    </div>
                </div>
            </div>
            <span className="fundo">
            </span>
            <SvgWaves className="waves"/>
        </div>
    );
}

export default Login;