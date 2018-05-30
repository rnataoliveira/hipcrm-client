import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { connect } from 'react-redux'

class PhysicalPersonForm extends Component {
  state = {
    firstName: '',
    surname: '',
    documentNumber: '',
    generalRegistration: '',
    birthDate: '',
    age: '',
    sex: '',
    maritalState: '',
  }

  handleChangeFirstName(event) {
    this.setState({
      firstName: event.target.value
    })
  }

  handleChangeSurname(event) {
    this.setState({
      surname: event.target.value
    })
  }

  handleChangeDocumentNumber(event) {
    this.setState({
      documentNumber: event.target.value
    })
  }

  handleChangeGeneralRegistration(event) {
    this.setState({
      generalRegistration: event.target.value
    })
  }

  handleChangeBirthDate(event) {
    this.setState({
      birthDate: event.target.value
    })
  }

  handleChangeSex(event) {
    this.setState({
      sex: event.target.value
    })
  }

  handleChangeAge(event) {
    this.setState({
      age: event.target.value
    })
  }

  handleChangeMaritalState(event) {
    this.setState({
      maritalState: event.target.value
    })
  }

  render() {
    return (
      <div>
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
            <input className="form-control" onChange={this.handleChangeFirstName.bind(this)} value={this.state.firstName} placeholder={this.props.personalData.firstName} />
          </div>
          <div className="col-sm-6">
            <input className="form-control" onChange={this.handleChangeSurname.bind(this)} value={this.state.surname} placeholder={this.props.personalData.surname}/>
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
            <input className="form-control" onChange={this.handleChangeDocumentNumber.bind(this)} value={this.state.documentNumber}  placeholder={this.props.personalData.documentNumber} />
          </div>
          <div className="col-sm-2">
            <input className="form-control" onChange={this.handleChangeGeneralRegistration.bind(this)} value={this.state.generalRegistration}  placeholder={this.props.personalData.generalRegistration}/>
          </div>
          <div className="col-sm-2">
            <input className="form-control"
              onChange={this.handleChangeBirthDate.bind(this)}
              value={moment(this.state.birthDate).format('MM.DD.YYYY')}
            />
          </div>
          <div className="col-sm-2">
            <input className="form-control" onChange={this.handleChangeAge.bind(this)} value={this.state.age}  placeholder={this.props.personalData.age}/>
          </div>
          <div className="col-sm-2">
            <input className="form-control" onChange={this.handleChangeSex.bind(this)} value={this.state.sex}  placeholder={this.props.personalData.sex}/>
          </div>
          <div className="col-sm-2">
            <input className="form-control" onChange={this.handleChangeMaritalState.bind(this)} value={this.state.maritalState}  placeholder={this.props.personalData.maritalState}/>
          </div>
        </div>
      </div>
    )
  }
}

PhysicalPersonForm.propTypes = {
  personalData: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  firstName: state.firstName,
  surname: state.surname,
  documentNumber: state.documentNumber,
  generalRegistration: state.generalRegistration,
  birthDate: state.birthDate,
  age: state.age,
  sex: state.sex,
  maritalState: state.maritalState,
})

export default connect(mapStateToProps)(PhysicalPersonForm)