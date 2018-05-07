import React from 'react'
import { Route, Redirect } from 'react-router'
import { withUserManager } from '../../modules/Auth'

const PrivateRoute = ({ component: Component, userManager, ...rest }) => (
    <Route {...rest} render={(props) => {
        return userManager.currentUser ? <Component {...props} /> : <Redirect to='/login' />
    }} />
)

export default withUserManager(PrivateRoute)