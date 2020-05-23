import React, { Component } from 'react';
import utils from '../../js/utils.js';
import './Text.css';

export default class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tit: false,
        };
    }

    componentDidMount() {
        if (this.props.tit) {
            this.setState({tit: this.props.tit});
        }
    }

    render() {
        var cn = "Text";
        if(this.props.tit) {
            cn = "Titre";
        }
        return (
            <div className={cn} dangerouslySetInnerHTML={{__html: utils.cleanText(this.props.content)}}/>
        );
    }
}
