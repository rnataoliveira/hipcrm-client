import React from 'react'
import PropTypes from 'prop-types'

const LegalPersonDetails = ({ personalData }) => {
  return <h1>Legal Person</h1>
}

LegalPersonDetails.propTypes = {
  personalData: PropTypes.object.isRequired
}

export default LegalPersonDetails