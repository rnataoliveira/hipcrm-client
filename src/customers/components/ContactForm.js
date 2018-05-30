import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class ContactForm extends Component {
  state = {
    cellPhone: {
      areaCode: '',
      number: ''
    },
    phone: {
      areaCode: '',
      number: ''
    },
    email: ''
  }

  handleChangeCellPhoneAreaCode(event) {
    this.setState({
      cellPhone: {
        areaCode: event.target.value
      }
    })
  }

  handleChangeCellPhoneNumber(event) {
    this.setState({
      cellPhone: {
        number: event.target.value
      }
    })
  }

  handleChangePhoneAreaCode(event) {
    this.setState({
      phone: {
        areaCode: event.target.value
      }
    })
  }

  handleChangePhoneNumber(event) {
    this.setState({
      phone: {
        number: event.target.value
      }
    })
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }
  render() {
    console.log('opp', this.props)
    return (
      <div>
        <h5 className="h5 mt-4">Informações de Contato</h5>
        <div className="row mt-2">
          {this.state.cellPhone && (
            <div className="col-sm-1">
              <label htmlFor="cellinputhoneAreaCode">DDD</label>
            </div>
          )}
          {this.state.cellPhone && (
            <div className="col-sm-2">
              <label htmlFor="cellinputhoneNumber">Celular</label>
            </div>
          )}
          <div className="col-sm-1">
            <label htmlFor="inputhoneAreaCode">DDD</label>
          </div>
          <div className="col-sm-2">
            <label htmlFor="inputhoneNumber">Telefone</label>
          </div>
          <div className={this.state.cellPhone ? 'col-sm-6' : 'col-sm-9'}>
            <label htmlFor="email">E-mail</label>
          </div>
        </div>
        <div className="row mt-2">
          {this.state.cellPhone && (
            <div className="col-sm-1">
              <input className="form-control" onChange={this.handleChangeCellPhoneAreaCode.bind(this)} value={this.state.cellPhone.areaCode} placeholder={this.props.cellPhone.areaCode} />
            </div>
          )}
          {this.state.cellPhone && (
            <div className="col-sm-2">
              <input className="form-control" onChange={this.handleChangeCellPhoneNumber.bind(this)} value={this.state.cellPhone.number} placeholder={this.props.cellPhone.number} />
            </div>
          )}
          <div className="col-sm-1">
            <input className="form-control" onChange={this.handleChangePhoneAreaCode.bind(this)} value={this.state.phone.areaCode} placeholder={this.props.phone.areaCode} />
          </div>
          <div className="col-sm-2">
            <input className="form-control" onChange={this.handleChangePhoneNumber.bind(this)} value={this.state.phone.number} placeholder={this.props.phone.number} />
          </div>
          <div className={this.state.cellPhone ? 'col-sm-6' : 'col-sm-9'}>
            <input className="form-control" onChange={this.handleChangeEmail.bind(this)} value={this.state.email} placeholder={this.props.email} />
          </div>
        </div>
      </div>
    )
  }
}

ContactForm.propTypes = {
  phone: PropTypes.object,
  cellPhone: PropTypes.object,
  email: PropTypes.string
}


const mapStateToProps = state => ({
  cellPhone: {
    areaCode: state.areaCode,
    number: state.number
  },
  phone: {
    areaCode: state.areaCode,
    number: state.number
  },
  email: state.email
})

export default connect(mapStateToProps)(ContactForm)