import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const LinkContainer = props => {
    return (
        <Link to={props.to} 
            className={`nav-link ${props.location.pathname === props.to ? 'active': ''}`}>
            {props.children}
        </Link>
    )
}

LinkContainer.propTypes = {
    to: PropTypes.string.isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
}

export default LinkContainer