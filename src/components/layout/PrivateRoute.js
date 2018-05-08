import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import userManager from '../../modules/userManager'

const PrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route {...rest} render={(props) => {
        return !user || user.expired ? userManager.signinRedirect() : <Component {...props} />
    }} />
)

const mapStateToProps = state => ({
    user: state.oidc.user
})

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)