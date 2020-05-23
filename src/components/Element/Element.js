import React, { Component } from 'react';
import './Element.css';

export default class Element extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
			left: 0,
			right: 0,
            top: 0,
            heightImg: 0,
            idImg: "",
            hidde: false
        };
    }

    componentDidMount() {
        if (this.props.index) {
            this.setState({index: this.props.index});
        }
        if (this.props.positionLeft) {
            this.setState({left: this.props.positionLeft});
		} else if (this.props.positionRight) {
			this.setState({right: this.props.positionRight});
		}
        if (this.props.positionTop) {
            this.setState({top: this.props.positionTop});
        }
        if (this.props.heightImg) {
            this.setState({heightImg: this.props.heightImg});
        }
        if (this.props.idImg) {
            this.setState({idImg: this.props.idImg});
        }
        if (this.props.hidde) {
            this.setState({hidde: this.props.hidde});
        }
    }

    render() {
		var style = {marginLeft: this.state.left, marginTop: this.state.top};
		if (this.state.right) {
			style = {marginRight: this.state.right, left: 'auto', right: 0, marginTop: this.state.top}
		}
        var styleImg = {};

        if (this.state.heightImg) {
            styleImg = {height: this.state.heightImg};
        }
        return (
            <div id={"id" + this.props.name} className={"Element Element--z" + this.state.index + " js-element-z" + this.state.index}
                 style={style}>
                <img id={this.props.name} src={require("./img/" + this.props.name)} alt="" className="js-lazy" style={styleImg} hidden={this.state.hidde}/>
            </div>
        );
    }
}
