import React, {Component} from "react";
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import "./App.css";
import Router from "./route/routes";
import counter from './components/demo/state/counterReducer'
const store = createStore(counter);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        )
    }
}
export default App;
