import config from '../../config';
import React, { Component } from 'react';
import './Video.css';

export default class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {
            top: '50%',
            bottom: 'initial',
            left: 'initial',
            width: Math.min(document.documentElement.clientWidth, config.ratio.width),
            height: Math.min(document.documentElement.clientHeight, config.ratio.height)
        };
    }

    componentDidMount() {
        let newHeight = this.state.height;
        let deviceRatio = document.documentElement.clientWidth
            / document.documentElement.clientHeight;

        if (this.props.positionTop) {
            this.setState({top: this.props.positionTop});
        }
        if (this.props.positionBottom) {
            this.setState({bottom: this.props.positionBottom});
        }
        if (this.props.positionLeft) {
            this.setState({left: this.props.positionLeft});
        }
        if (this.props.maxHeight) {
            newHeight = Math.min(this.props.maxHeight, this.state.height);
        }
        if (this.props.ratio) {
            if (deviceRatio >= this.props.ratio) {
                this.setState({width: newHeight * this.props.ratio});
            } else {
                newHeight = this.state.width / this.props.ratio;
            }
        }
        this.setState({height: newHeight});
    }

    render() {
        return (
            <div id={this.props.name} className="Video" style={{top: this.state.top, bottom: this.state.bottom, left: this.state.left}}>
                <iframe src={"https://www.youtube.com/embed/" + this.props.id} width={this.state.width} height={this.state.height} frameBorder="0" allowFullScreen/>
            </div>
        );
    }
}