import React, {Component} from 'react'
import Menus from '../Main/index'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {children} = this.props;
        return (
            <div>
                <Menus/>
                <div>qq{children}</div>
            </div>
        )
    }
}
export default Home;