import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import login from "../Page/login"
import Home from "../Page/Home/home"

const Routes=()=>(
    <Router>
        <div>
            <Route path="/login" exact component={login}/>
            <Route path="/" component={Home}>
            </Route>
        </div>
    </Router>
)

export default Routes;
