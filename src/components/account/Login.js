import React, { Component } from 'react'
import { withUserManager } from '../../modules/Auth'

class Login extends Component {
    componentDidMount() {
        const { location: { hash } } = this.props
        
        if(!hash)
            this.props.userManager.signinRedirect()
        else
            this.props.userManager.signinRedirectCallback()
                .then(_ => this.props.history.push('/dashboard'))
    }

    render() {
        return (
            <h1>Login</h1>
        )
    }
}

export default withUserManager(Login)