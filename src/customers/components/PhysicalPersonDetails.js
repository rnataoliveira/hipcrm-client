import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const PhysicalPersonDetails = ({ personalData }) => {
  return (
    <div>
      <h2 className="h2 mt-4">Cliente - Pessoa Fisíca</h2>
      <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
      <h5 className="h5 mt-4">Informações Pessoais</h5>
      <div className="row mt-2">
        <div className="col-sm-6">
          <label htmlFor="firstName">Nome</label>
        </div>
        <div className="col-sm-6">
          <label htmlFor="surname">Sobrenome</label>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-6">
          <p className="form-control">{personalData.firstName}</p>
        </div>
        <div className="col-sm-6">
          <p className="form-control">{personalData.surname}</p>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-sm-2">
          <label htmlFor="documentNumber">Cpf</label>s
        </div>
        <div className="col-sm-2">
          <label htmlFor="generalRegistration">Rg</label>
        </div>
        <div className="col-sm-2">
          <label htmlFor="birthDate">Data de Nascimento</label>
        </div>
        <div className="col-sm-2">
          <label htmlFor="age">Idade</label>
        </div>
        <div className="col-sm-2">
          <label htmlFor="sex">Sexo</label>
        </div>
        <div className="col-sm-2">
          <label htmlFor="maritalState">Estado Civil</label>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-2">
          <p className="form-control">{personalData.documentNumber}</p>
        </div>
        <div className="col-sm-2">
          <p className="form-control">{personalData.generalRegistration ? personalData.generalRegistration : 'RG'}</p>
        </div>
        <div className="col-sm-2">
          <p className="form-control">
            {moment(personalData.birthDate).format('MM.DD.YYYY')}
          </p>
        </div>
        <div className="col-sm-2">
          <p className="form-control">{personalData.age} anos</p>
        </div>
        <div className="col-sm-2">
          <p className="form-control">{personalData.sex}</p>
        </div>
        <div className="col-sm-2">
          <p className="form-control">{personalData.maritalState}</p>
        </div>
      </div>
    </div>
  )
}

PhysicalPersonDetails.propTypes = {
  personalData: PropTypes.object.isRequired
}

export default PhysicalPersonDetails