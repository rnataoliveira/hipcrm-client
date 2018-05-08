import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import userManager from '../../modules/userManager'

const UserProfile = props => {
    const welcome = () => (
        <ul className="navbar-nav my-2 my-sm-0">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"
                    id="navbarDropdownUserProfile"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    href="#">
                    Olá! {props.user.profile.given_name}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownUserProfile">
                    <Link to='/auth/logout' className="dropdown-item">Sair</Link>
                </div>
            </li>
        </ul>
    )

    const login = () => (
        <Link to='/auth/login' className='btn btn-primary my-2 my-sm-0' >Entrar</Link>
    )

    return props.user ? welcome() : login()
}

const mapStateToProps = state => ({
    user: state.oidc.user
})

export default connect(mapStateToProps)(UserProfile)