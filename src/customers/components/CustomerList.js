import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCustomers, filterCustomers } from '../actions'

class CustomerList extends Component {
  componentDidMount() {
    this.props.fetchCustomers()
  }

  handleChange(event) {
    this.props.filterCustomers(event.target.value)
  }

  render() {
    return (
      <div>
        <h1 className="mt-4">Clientes</h1>
        <div className="row justify-content-center mt-2 mb-4 mt-4">
          <form className="form-inline my-2 col-4 my-lg-0">
            <input value={this.props.filter} onChange={this.handleChange.bind(this)} className="form-control col-12" type="search" placeholder="Filtrar Clientes" aria-label="Search" />
          </form>
        </div>
        <table className="table mt-2">
          <thead>
            <tr>
              <th scope="col">Documento</th>
              <th scope="col">Cliente</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.customers.map(customer => {
              return customer.type === 'PhysicalPerson' ?
                <tr key={customer.id}>
                  <th scope="row">{customer.personalData.documentNumber}</th>
                  <td>{customer.personalData.firstName + ' ' + customer.personalData.surname}</td>
                  <td className="text-right">
                    <Link className="m-2" to={`/customers/${customer.id}`}>Detalhes</Link>
                    <Link className="m-2" to={`/customers/${customer.id}/edit`}>Edit</Link>
                    <button type="button" className="btn btn-primary m-2">Excluir</button>
                  </td>
                </tr>
                :
                <tr key={customer.id}>
                  <th scope="row">{customer.personalData.companyRegistration}</th>
                  <td>{customer.personalData.companyName}</td>
                  <td className="text-right">
                    <Link className="m-2" to={`/customers/${customer.id}`}>Detalhes</Link>
                    <Link className="m-2" to={`/customers/${customer.id}/edit`}>Edit</Link>
                    <button type="button" className="btn btn-primary m-2">Excluir</button>
                  </td>
                </tr>
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

CustomerList.propTypes = {
  customers: PropTypes.array,
  filter: PropTypes.string,
  fetchCustomers: PropTypes.func.isRequired,
  filterCustomers: PropTypes.func.isRequired,
}

const getFilteredCustomers = (customers, q) => {
  return q ? customers.filter(customer => customer.personalData.documentNumber === q || customer.personalData.companyRegistration === q ||
    customer.personalData.firstName === q || customer.personalData.companyName === q) : customers
}

const mapStateToProps = state => ({
  customers: getFilteredCustomers(state.customers.all, state.customers.filter),
  filter: state.customers.filter
})

const mapDispatchToProps = dispatch => ({
  fetchCustomers: () => dispatch(fetchCustomers()),
  filterCustomers: q => dispatch(filterCustomers(q))
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)