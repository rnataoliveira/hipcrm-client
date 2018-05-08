import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router'

const PrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route {...rest} render={(props) => {
        return !user || user.expired ? <Redirect to='/auth/login' /> : <Component {...props} />
    }} />
)

const mapStateToProps = state => ({
    user: state.oidc.user
})

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)