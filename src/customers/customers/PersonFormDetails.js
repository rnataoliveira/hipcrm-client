import React, { Component } from 'react'
var moment = require('moment');

class personFormDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const person = this.props
    const notes = this.props

    const birth = person.customer.personalData.birthDate
    return (
      <form action="" className="col-sm-12">
        <div>
          <h2 className="h2">Cliente - Pessoa Fisíca</h2>
          <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
          <h5 className="h5 mt-4">Informações Pessoais</h5>
          <div className="row form-group">
            <div className="col-sm-6">
              <p className="border-bottom">{person.customer.personalData.firstName}</p>
            </div>
            <div className="col-sm-6">
              <p className="border-bottom">{person.customer.personalData.surname}</p>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-sm-2">
              <p className="border-bottom">{person.customer.personalData.documentNumber}</p>
            </div>
            <div className="col-sm-2">
              <p className="border-bottom">{person.customer.personalData.generalRegistration? person.customer.personalData.generalRegistration : 'RG'}</p>
            </div>
            <div className="col-sm-2">
              <p className="border-bottom">
                {moment(birth).format('MM.DD.YYYY')}
              </p>
            </div>
            <div className="col-sm-2">
              <p className="border-bottom">{person.customer.personalData.age} anos</p>
            </div>
            <div className="col-sm-2">
              <p className="border-bottom">{person.customer.personalData.sex}</p>
            </div>
            <div className="col-sm-2">
              <p className="border-bottom">{person.customer.personalData.maritalState}</p>
            </div>
          </div>

          <h5 className="h5 mt-4">Informações de Contato</h5>
          <div className="row mt-2">
            <div className="col-sm-1">
              <p className="border-bottom">{person.customer.personalData.cellPhone.areaCode}</p>
            </div>
            <div className="col-sm-2">
              <p className="border-bottom">{person.customer.personalData.cellPhone.number}</p>
            </div>
            <div className="col-sm-1">
              <p className="border-bottom">{person.customer.personalData.phone.areaCode}</p>
            </div>
            <div className="col-sm-2">
              <p className="border-bottom">{person.customer.personalData.phone.number}</p>
            </div>
            <div className="col-sm-6">
              <p className="border-bottom">{person.customer.personalData.email}</p>
            </div>
          </div>


          <h5 className="h5 mt-4">Endereço</h5>
          <div className="row mt-2">
            <div className="col-sm-2">
              <p className="border-bottom">{person.customer.personalData.address.zipCode}</p>
            </div>
            <div className="col-sm-8">
              <p className="border-bottom">{person.customer.personalData.address.street}</p>
            </div>
            <div className="col-sm-2">
              <p className="border-bottom">{person.customer.personalData.address.number}</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-6">
              <p className="border-bottom">{person.customer.personalData.address.neighborhood}</p>
            </div>
            <div className="col-sm-4">
              <p className="border-bottom">{person.customer.personalData.address.city}</p>
            </div>
            <div className="col-sm-2">
              <p className="border-bottom">{person.customer.personalData.address.state}</p>
            </div>
          </div>
          {/*Te amo ❤️*/}
          <div className="row mt-4">
            <div className="col-sm-12">
              <p className="border-bottom" >{person.customer.personalData.address.complement}</p>
            </div>
          </div>

          <h5 className="h5 mt-4">Observações</h5>
          <div className="row mt-2">
            <div className="col-sm-12">
              <p className="border rounded">{notes.customer.notes}</p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end">
            <button type="button" className="btn btn-primary mt-5 mr-2 float-right">Iniciar Nova Venda</button>
            <button type="button" className="btn btn-primary mt-5 mr-2 float-right">Editar</button>
            <button type="button" className="btn btn-primary mt-5 mr-2 float-right">Excluir</button>
          </div>
        </div>
      </form >
    )
  }
}

export default personFormDetails