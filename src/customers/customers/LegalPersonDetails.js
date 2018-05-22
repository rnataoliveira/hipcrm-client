import React, { Component } from 'react'

class LegalPersonDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('legal', this.props)
    return (
      <form className="col-sm-12">
        <div>
          <h2 className="h2">Cadastrar Cliente - Pessoa Juridíca</h2>
          <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
          <h5 className="h5 mt-4">Informações da Empresa</h5>
          <div className="row">
            <div className="col-sm-12">
              <p className="border-bottom">{this.props.customer.personalData.companyName}</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-4">
              <p className="border-bottom">{this.props.customer.personalData.companyRegistration}</p>
            </div>
            <div className="col-sm-8">
              <p className="border-bottom">{this.props.customer.personalData.stateRegistration}</p>
            </div>

          </div>

          <h5 className="h5 mt-4">Informações de Contato</h5>
          <div className="row mt-2">
            <div className="col-sm-2">
              <p className="border-bottom" >{this.props.customer.personalData.phone.areaCode}</p>
            </div>
            <div className="col-sm-2">
              <p className="border-bottom" >{this.props.customer.personalData.phone.number}</p>
            </div>
            <div className="col-sm-8">
              <p className="border-bottom">{this.props.customer.personalData.email}</p>
            </div>
          </div>

          <h5 className="h5 mt-4">Endereço Fiscal</h5>
          <div className="row mt-2">
            <div className="col-sm-2">
              <p className="border-bottom">{this.props.customer.personalData.address.zipCode}</p>
            </div>
            <div className="col-sm-8">
              <p className="border-bottom">{this.props.customer.personalData.address.street}</p>
            </div>
            <div className="col-sm-2">
              <p className="border-bottom">{this.props.customer.personalData.address.number}</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-6">
              <p className="border-bottom">{this.props.customer.personalData.address.neighborhood}</p>
            </div>
            <div className="col-sm-4">
              <p className="border-bottom">{this.props.customer.personalData.address.city}</p>
            </div>
            <div className="col-sm-2">
              <p className="border-bottom">{this.props.customer.personalData.address.state}</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-12">
              <p className="border-bottom" >{this.props.customer.personalData.address.complement}</p>
            </div>
          </div>

          <h5 className="h5 mt-4">Observações</h5>
          <div className="row mt-2">
            <div className="col-sm-12">
              <p className="border rounded">{this.props.customer.notes}</p>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end">
            <button type="button" className="btn btn-primary mt-5 mr-2 float-right">Iniciar Nova Venda</button>
            <button type="button" className="btn btn-primary mt-5 mr-2 float-right">Editar</button>
            <button type="button" className="btn btn-primary mt-5 mr-2 float-right">Excluir</button>
          </div>
        </div>
      </form>
    )
  }
}

export default LegalPersonDetails