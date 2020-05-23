import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import tutorialLandscape from './img/TUTORIAL-LANDSCAPE.png';
import tutorialPortrait from './img/TUTORIAL-PORTRAIT.png';
import './Tutorial.css';

export default class Tutorial extends Component {

    render() {

        function closeTutorial(e) {
            document.body.classList.remove('show-tutorial');
            e.preventDefault();
        }

        return (
            <div className="Tutorial" onClick={closeTutorial}>
                <div className="Tutorial__wrapper">
                    <MediaQuery maxWidth={640}>
                        <img src={tutorialPortrait} alt="" />
                    </MediaQuery>
                    <MediaQuery minWidth={641}>
                        <img src={tutorialLandscape} alt="" />
                    </MediaQuery>
                </div>
            </div>
        );
    }
}
