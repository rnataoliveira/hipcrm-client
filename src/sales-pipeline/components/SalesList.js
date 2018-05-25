import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchSales, deleteSale } from '../actions'
import { Link } from 'react-router-dom'

class SalesList extends Component {
  componentDidMount() {
    this.props.fetchSales()
  }

  handleDeleteSale(saleId) {
    this.props.deleteSale(saleId)
  }

  render() {
    return (
      <div>
        <h1 className="mt-4">Vendas</h1>
        <div className="row justify-content-center mt-2 mb-4 mt-4">
          <form className="form-inline my-2 col-4 my-lg-0">
            <input className="form-control col-12" type="search" placeholder="Buscar Venda" aria-label="Search" />
          </form>
        </div>
        <table className="table mt-2">
          <thead>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Cliente</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.sales.map(sale =>
              <tr key={sale.id}>
                <th scope="row">{sale.code}</th>
                {sale.customer.type === 'PhysicalPerson' ?
                  <td>{sale.customer.personalData.firstName + ' ' + sale.customer.personalData.surname}</td>
                  :
                  <td>{sale.customer.personalData.companyName}</td>
                }
                <td className="text-right">
                  <Link to={`/sales/${sale.id}`}>Detalhes</Link>
                  <button onClick={() => this.handleDeleteSale(sale.id)} type="button" className="btn btn-primary">Excluir</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

SalesList.propTypes = {
  sales: PropTypes.array,
  fetchSales: PropTypes.func.isRequired,
  deleteSale: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  sales: state.salesPipeline.sales
})

const mapDispatchToProps = dispatch => ({
  fetchSales: () => dispatch(fetchSales()),
  deleteSale: saleId => dispatch(deleteSale(saleId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SalesList)