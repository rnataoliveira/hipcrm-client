import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class LegalPersonForm extends Component {
  state = {
    companyName: '',
    companyRegistration: '',
    stateRegistration: ''
  }

  handleChangeCompanyName(event) {
    this.setState({
      companyName: event.target.value
    })
  }

  handleChangeCompanyRegistration(event) {
    this.setState({
      companyRegistration: event.target.value
    })
  }

  handleChangeStateRegistration(event) {
    this.setState({
      stateRegistration: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h5 className="h5 mt-4">Informações da Empresa</h5>
        <div className="row mt-2">
          <div className="col-12">
            <label htmlFor="companyName">Nome da Empresa</label>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <input className="form-control" onChange={this.handleChangeCompanyName.bind(this)} value={this.state.companyName} placeholder={this.props.personalData.companyName}/>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <label htmlFor="companyRegistration">Cnpj</label>
          </div>
          <div className="col-8">
            <label htmlFor="stateRegistration">Inscrição Estadual</label>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <input className="form-control" onChange={this.handleChangeCompanyRegistration.bind(this)} value={this.state.companyRegistration} placeholder={this.props.personalData.companyRegistration}/>
          </div>
          <div className="col-8">
            <input className="form-control" onChange={this.handleChangeStateRegistration.bind(this)} value={this.state.stateRegistration} placeholder={this.props.personalData.stateRegistration}/>
          </div>
        </div>
      </div>

    )
  }
}

LegalPersonForm.propTypes = {
  personalData: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  companyName: state.companyName,
  companyRegistration: state.companyRegistration,
  stateRegistration: state.stateRegistration
})

export default connect(mapStateToProps)(LegalPersonForm)