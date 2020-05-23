import React, { Component } from 'react';
import Text from '../Text/Text';
import './Edito.css';


export default class Edito extends Component {

    constructor(props) {
        super(props);
        this.state = {
            top: 'initial',
            bottom: 'initial',
            left: 'initial',
            ti: false,
            tis: false
        };
    }

    componentDidMount() {
        if (this.props.positionTop) {
            this.setState({top: this.props.positionTop});
        }
        if (this.props.positionBottom) {
            this.setState({bottom: this.props.positionBottom});
        }
        if (this.props.positionLeft) {
            this.setState({left: this.props.positionLeft});
        }
        if (this.props.ti) {
            this.setState({ti: this.props.ti});
        }
        if (this.props.tis) {
            this.setState({tis: this.props.tis});
        }
    }

    render() {
        return (
            <div className="Edito">
                <div className="Edito__wrapper" style={{top: this.state.top, bottom: this.state.bottom, left: this.state.left}}>
                    <Text content={this.props.content} tit={this.state.ti}/>
                    <Text content={this.props.contents} tit={this.state.tis}/>
                </div>
            </div>
        );
    }
}
