import React, {Component} from "react";
import PropTypes from "prop-types";
import DicApi from "../../../api/dic/DicApi";

class Dic extends Component {

    state = {
        dicMap: new Map(),
    };

    componentDidMount() {
        let self = this;
        DicApi.all().then(data => {
            let dicMap = new Map();
            for (let it of data) {
                if (!dicMap.get(it.groupCode)) {
                    dicMap.set(it.groupCode, new Map().set(it.code, it.cnLabel))
                } else {
                    dicMap.get(it.groupCode).set(it.code, it.cnLabel)
                }
            }
            self.setState({dicMap: dicMap});
        })

    }

    mergeVal = () => {
        let group = this.state.dicMap.get(this.props.group);
        if (group) {
            return group.get(this.props.value)
        } else {
            return this.props.value
        }
    };

    render() {
        return (
            <span>{this.mergeVal()}</span>
        )
    }

}

Dic.propTypes = {
    value: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
};

export default Dic;