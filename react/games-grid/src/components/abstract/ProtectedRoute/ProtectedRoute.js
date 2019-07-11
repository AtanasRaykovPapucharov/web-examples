import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ isLogged, routePath, redirectionPath, component: Component }) => {
    if(!isLogged) {
        return <Redirect to={redirectionPath}/>
    }
    
    return <Route path={routePath} render={props => <Component {...props} />} />
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    routePath: PropTypes.string.isRequired,
    redirectionPath: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired
};