import React from 'react'
import PropTypes from 'prop-types'

const ContactDetails = ({ cellPhone, phone, email }) => (
  <div>
    <h5 className="h5 mt-4">Informações de Contato</h5>
    <div className="row mt-2">
      {cellPhone && (
        <div className="col-sm-1">
          <label htmlFor="cellPhoneAreaCode">DDD</label>
        </div>
      )}
      {cellPhone && (
        <div className="col-sm-2">
          <label htmlFor="cellPhoneNumber">Celular</label>
        </div>
      )}
      <div className="col-sm-1">
        <label htmlFor="phoneAreaCode">DDD</label>
      </div>
      <div className="col-sm-2">
        <label htmlFor="phoneNumber">Telefone</label>
      </div>
      <div className={cellPhone ? 'col-sm-6' : 'col-sm-9'}>
        <label htmlFor="email">E-mail</label>
      </div>
    </div>
    <div className="row mt-2">
      {cellPhone && (
        <div className="col-sm-1">
          <p className="form-control">{cellPhone.areaCode}</p>
        </div>
      )}
      {cellPhone && (
        <div className="col-sm-2">
          <p className="form-control">{cellPhone.number}</p>
        </div>
      )}
      <div className="col-sm-1">
        <p className="form-control">{phone.areaCode}</p>
      </div>
      <div className="col-sm-2">
        <p className="form-control">{phone.number}</p>
      </div>
      <div className={cellPhone ? 'col-sm-6' : 'col-sm-9'}>
        <p className="form-control">{email}</p>
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