import React, {Component} from "react";
import PropTypes from "prop-types";
import LabelApi from "../../../api/system/LabelApi";

class Label extends Component {

    static propTypes = {
        value: PropTypes.string.isRequired,
    };
    state = {
        dicMap: new Map(),
    };

    componentDidMount() {
        LabelApi.all().then(data => {
            let dicMap = new Map();
            data.forEach(it => {
                dicMap.set(it.code, it.enLabel)
            });
            this.setState({dicMap: dicMap});
        })

    }

    mergeVal = () => {
        console.log(this.state.dicMap);
        return this.state.dicMap.get(this.props.value) || this.props.value;
    };

    render() {
        return (
            <span>{this.mergeVal()}</span>
        )
    }

}


export default Label;