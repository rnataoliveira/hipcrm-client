import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ type, heading, children }) => (
  <div className={`alert alert-${type} mt-5 mb-5`} role="alert">
    {heading && <h4 className="alert-heading">{heading}</h4>}
    {children}
  </div>
)

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  heading: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Alert