import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

// React component
class Number extends Component {

    state = {
        value: 1
    };
    addNum = () => {
        this.setState({
            value: this.state.value + 1
        })
    };
    decreaseNum = () => {
        this.setState({
            value: this.state.value - 1
        })
    };

    render() {
        return (
            <div>
                <span>{this.state.value}</span>
                <Add add={this.addNum}/>
                <Reduce reduce={this.decreaseNum}/>
            </div>
        )
    }
}

class Add extends Component {
    render() {
        return (
            <button onClick={this.props.add}>+</button>
        )
    }
}

class Reduce extends Component {
    render() {
        return (
            <button onClick={this.props.reduce}>-</button>
        )
    }
}

export default Number
