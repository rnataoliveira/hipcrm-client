import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const LinkContainer = ({ to, location, children }) => (
    <Link to={to} className={`nav-link${location.pathname === to ? ' active' : ''}`}>
        {children}
    </Link>
)

LinkContainer.propTypes = {
    to: PropTypes.string.isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
}

export default LinkContainer