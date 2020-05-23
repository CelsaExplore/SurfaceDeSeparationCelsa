import React, { Component } from 'react';
import Share from '../Share/Share';
import './ShareLayer.css';

export default class ShareLayer extends Component {

    render() {

        function closeSharing(e) {
            document.body.classList.remove('is-sharing');
            e.preventDefault();
        }

        return (
            <div className="ShareLayer">
                <a href="#" onClick={closeSharing} className="ShareLayer__close"></a>
                <div className="ShareLayer__wrapper">
                    <div className="ShareLayer__label">
                        Partagez
                    </div>
                    <div className="ShareLayer__icon">
                        <Share provider="facebook"></Share>
                    </div>
                    <div className="ShareLayer__icon">
                        <Share provider="twitter"></Share>
                    </div>
                </div>
            </div>
        );
    }
}
