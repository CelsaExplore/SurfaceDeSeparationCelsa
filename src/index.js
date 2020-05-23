import config from './config';
import move from './js/move';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';

require('./js/mousewheel.js')();

window.xtpage = config.tagId;
var statsads = require('./js/external/statsads.js');
statsads.init();
statsads.setTag();

onAppLoad();
function onAppLoad() {
    setTimeout(function() {
        document.body.classList.add('is-ready');
        checkTutorial();
        checkBookmark();
    }, 2000);
}

function checkTutorial() {
    var storage = localStorage.getItem('explorehr');
    var explorehr = JSON.parse(storage) || [];
    if (!storage || explorehr.indexOf(config.id) === -1) {
        document.body.classList.add('show-tutorial');
        explorehr.push(config.id);
        localStorage.setItem('explorehr', JSON.stringify(explorehr));
    }
}

function checkBookmark() {
    var storage = localStorage.getItem('explorehr_'+ config.id +'_bookmark');
    if (storage) {
        var bookmark = JSON.parse(storage);
        localStorage.removeItem('explorehr_'+ config.id +'_bookmark');
        document.body.classList.remove('show-cover');
        move.to(bookmark);
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app-root')
);
