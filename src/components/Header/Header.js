import config from '../../config';
import move from '../../js/move';
import React, { Component } from 'react';
//import logo from '/img/logo-explore.png';
import './Header.css';

export default class Header extends Component {

    render() {

        function restart(e) {
            document.body.classList.add('show-cover');
            setTimeout(function() {
                move.to(0);
            }, 500);
            e.preventDefault();
        }

        function openSharing(e) {
            document.body.classList.add('is-sharing');
            document.body.classList.remove('show-tutorial');
            e.preventDefault();
        }

        function bookmark(e) {
            if (localStorage.getItem('explorehr_'+ config.id +'_bookmark')) {
                document.getElementById('bookmark').classList.remove('is-active');
                localStorage.removeItem('explorehr_'+ config.id +'_bookmark');
            } else {
                document.getElementById('bookmark').classList.add('is-active');
                var bookmarkOffset = parseInt(document.getElementById('board').style.left, 10);
                localStorage.setItem('explorehr_'+ config.id +'_bookmark', JSON.stringify(bookmarkOffset));
            }
            e.preventDefault();
        }

        return (
            <div className="Header">
                <div className="Header__wrapper">
                    <a href="/explore/" className="Header__logo">
                        <img src={process.env.PUBLIC_URL + "/img/logo-explore.png"} alt="logo" />
                        <img src={process.env.PUBLIC_URL + "/img/logo-prix-explore.png"} alt="logo" />
                    </a>

                    <div className="Header__icons">
                        <a href="#" className="Header__icon Header__icon--home" onClick={restart}></a>
                        <a href="#" className="Header__icon Header__icon--bookmarker" onClick={bookmark} id="bookmark"></a>
                        <a href="#" className="Header__icon Header__icon--sharer" onClick={openSharing}></a>
                    </div>
                </div>
            </div>
        );
    }
}
