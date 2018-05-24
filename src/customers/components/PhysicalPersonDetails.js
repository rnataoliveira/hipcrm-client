import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const PhysicalPersonDetails = ({ personalData }) => {
  return (
    <div>
      <h2 className="h2">Cliente - Pessoa Fisíca</h2>
      <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
      <h5 className="h5 mt-4">Informações Pessoais</h5>
      <div className="row form-group">
        <div className="col-sm-6">
          <p className="border-bottom">{personalData.firstName}</p>
        </div>
        <div className="col-sm-6">
          <p className="border-bottom">{personalData.surname}</p>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-sm-2">
          <p className="border-bottom">{personalData.documentNumber}</p>
        </div>
        <div className="col-sm-2">
          <p className="border-bottom">{personalData.generalRegistration ? personalData.generalRegistration : 'RG'}</p>
        </div>
        <div className="col-sm-2">
          <p className="border-bottom">
            {moment(personalData.birthDate).format('MM.DD.YYYY')}
          </p>
        </div>
        <div className="col-sm-2">
          <p className="border-bottom">{personalData.age} anos</p>
        </div>
        <div className="col-sm-2">
          <p className="border-bottom">{personalData.sex}</p>
        </div>
        <div className="col-sm-2">
          <p className="border-bottom">{personalData.maritalState}</p>
        </div>
      </div>
    </div>
  )
}

PhysicalPersonDetails.propTypes = {
  personalData: PropTypes.object.isRequired
}

export default PhysicalPersonDetails