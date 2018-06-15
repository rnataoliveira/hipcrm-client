import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class AgreementList extends Component {
  componentDidMount() {
    this.props.fetchAgreements()
  }

  handleChange(event) {
    this.props.filterAgreements(event.target.value)
  }

  render() {
    return (
      <div>
        <h1 className="mt-4">Contratos</h1>
        <div className="row justify-content-center mt-2 mb-4 mt-4">
          <form className="form-inline my-2 col-md-4 col-lg-4 col-sm-8">
            <input value={this.props.filter} onChange={this.handleChange.bind(this)} className="form-control col-12" type="search" placeholder="Filtrar Contratos" aria-label="Search" />
          </form>
        </div>
        <table className="table mt-2">
          <thead>
            <tr>
              <th scope="col">Número</th>
              <th scope="col">Código da Venda</th>
              <th scope="col">Cliente</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.agreements.map(a =>
              a.sale.customer.type === 'LegalPerson' ?
                <tr key={a.id}>
                  <th scope="row">{a.number}</th>
                  <td>{a.sale.code}</td>
                  <td>{a.sale.customer.personalData.companyName}</td>
                  <td className="text-right">
                    <Link className="m-2" to={`/agreements/${a.id}`}>Detalhes</Link>
                  </td>
                </tr>
                :
                <tr key={a.id}>
                  <th scope="row">{a.number}</th>
                  <td>{a.sale.code}</td>
                  <td>{a.sale.customer.personalData.firstName +' '+ a.sale.customer.personalData.surname}</td>
                  <td className="text-right">
                    <Link className="m-2" to={`/agreements/${a.id}`}>Detalhes</Link>
                  </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

AgreementList.propTypes = {
  agreements: PropTypes.array,
  filter: PropTypes.string,
  fetchAgreements: PropTypes.func.isRequired,
  filterAgreements: PropTypes.func.isRequired
}

export default AgreementList