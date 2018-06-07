import React from 'react'
import PropTypes from 'prop-types'

const LegalPersonDetails = ({ personalData }) => {
  return (
    <div>
      <h2 className="h2 mt-4">Cliente - Pessoa Juridíca</h2>
      <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
      <h5 className="h5 mt-4">Informações da Empresa</h5>
      <div className="row mt-2">
        <div className="col-12">
          <label htmlFor="companyName">Nome da Empresa</label>
          <p className="form-control">{personalData.companyName}</p>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-4">
          <label htmlFor="companyRegistration">Cnpj</label>
          <p className="form-control">{personalData.companyRegistration}</p>
        </div>
        <div className="col-8">
          <label htmlFor="stateRegistration">Inscrição Estadual</label>
          <p className="form-control">{personalData.stateRegistration ? personalData.stateRegistration : <br />}</p>
        </div>
      </div>
    </div>

  )
}

LegalPersonDetails.propTypes = {
  personalData: PropTypes.object.isRequired
}

export default LegalPersonDetails