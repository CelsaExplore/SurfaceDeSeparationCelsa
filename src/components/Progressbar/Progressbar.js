import React, { Component } from 'react';
// import './Progressbar.css';

export default class Element extends Component {

    render() {

        return (
            <div className="Progressbar">
                <div className="Progressbar__value" id="progressbar"></div>
            </div>
        );
    }
}
