import React, {Component, Fragment} from 'react';
import {Route,Redirect} from "react-router-dom";
import {getToken} from "../../utils/session";

const PrivateRouter = ({ component: Component, ...rest }) => {
    console.log(getToken());
    return (
        <Route
            {...rest}
            render={routeProps => (
                getToken() ? <Component {...routeProps} /> : <Redirect to="/" />
            )}
        />
    );
}
export default PrivateRouter;