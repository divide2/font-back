import React from 'react'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Login from "../Page/Login"
import Home from "../Page/Home/Home"
const Routes = () => (
    <BrowserRouter>
        <div>
            <Route path="/login" exact component={Login}/>
            <PrivateRoute path="/index" component={Home}/>
        </div>
    </BrowserRouter>
);
const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};
const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);

export default Routes;
