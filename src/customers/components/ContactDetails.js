import React from 'react'
import PropTypes from 'prop-types'

const ContactDetails = ({ cellPhone, phone, email }) => (
  <div>
    <h5 className="h5 mt-4">Informações de Contato</h5>
    <div className="row mt-2">
      {cellPhone && (
        <div className="col-sm-1">
          <p className="border-bottom">{cellPhone.areaCode}</p>
        </div>
      )}
      {cellPhone && (
        <div className="col-sm-2">
          <p className="border-bottom">{cellPhone.number}</p>
        </div>
      )}
      <div className="col-sm-1">
        <p className="border-bottom">{phone.areaCode}</p>
      </div>
      <div className="col-sm-2">
        <p className="border-bottom">{phone.number}</p>
      </div>
      <div className="col-sm-6">
        <p className="border-bottom">{email}</p>
      </div>
    </div>
  </div>
)

ContactDetails.propTypes = {
  phone: PropTypes.object.isRequired,
  cellPhone: PropTypes.object,
  email: PropTypes.string.isRequired
}

export default ContactDetails