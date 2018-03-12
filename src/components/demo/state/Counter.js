import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

// React component
class Counter extends Component {

    render() {
        const {value, onIncreaseClick, onDecreaseClick} = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>+</button>
                <button onClick={onDecreaseClick}>-</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    onDecreaseClick: PropTypes.func.isRequired
};

// Action
const increaseAction = {type: 'increase'};
const decreaseAction = {type: 'decrease'};


// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction),
        onDecreaseClick: () => dispatch(decreaseAction)
    }
}

// Connected Component
const Counters = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default Counters
