import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Alert extends Component {
  static classes = {
    error: 'alert-danger',
    alert: 'alert-warning',
    notice: 'alert-info',
    success: 'alert-success'
  }

  alertClass(type) {
    return Alert.classes[type] || Alert.classes.success
  }

  render() {
    const { text, type } = this.props
    const alertClassName = `alert ${this.alertClass(type)}`
    return (
      <div className={alertClassName} role="alert">
        <button className='close' data-dismiss='alert'> &times; </button>
        {text}
      </div>
    )
  }
}

Alert.propTypes = {
  type: PropTypes.oneOf(Object.keys(Alert.classes)),
  text: PropTypes.string.isRequired
}

export default Alert