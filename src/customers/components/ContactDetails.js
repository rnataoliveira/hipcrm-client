import React from 'react'
import PropTypes from 'prop-types'

const ContactDetails = ({ cellPhone, phone, email }) => (
  <div>
    <h5 className="h5 mt-4">Informações de Contato</h5>
    <div className="row mt-2">
      {cellPhone && (
        <div className="col-sm-1">
          <label htmlFor="cellPhoneAreaCode">DDD</label>
          <p className="form-control">{cellPhone.areaCode ? cellPhone.areaCode : <br />}</p>
        </div>
      )}
      {cellPhone && (
        <div className="col-sm-2">
          <label htmlFor="cellPhoneNumber">Celular</label>
          <p className="form-control">{cellPhone.number ? cellPhone.number : <br />}</p>
        </div>
      )}
      <div className="col-sm-1">
        <label htmlFor="phoneAreaCode">DDD</label>
        <p className="form-control">{phone.areaCode ? phone.areaCode : <br />}</p>
      </div>
      <div className="col-sm-2">
        <label htmlFor="phoneNumber">Telefone</label>
        <p className="form-control">{phone.number ? phone.number : <br />}</p>
      </div>
      <div className={cellPhone ? 'col-sm-6' : 'col-sm-9'}>
        <label htmlFor="email">E-mail</label>
        <p className="form-control">{email ? email : <br />}</p>
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