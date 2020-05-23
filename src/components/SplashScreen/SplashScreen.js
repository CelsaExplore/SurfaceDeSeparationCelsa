import React, { Component } from 'react';
import './SplashScreen.css';

export default class Splash extends Component {

    render() {

        return (
            <div className="SplashScreen">
                <div className="SplashScreen__logo">
                    <img src={process.env.PUBLIC_URL + "/img/logo-explore.png"} alt="logo" />
                </div>
            </div>
        );
    }
}
