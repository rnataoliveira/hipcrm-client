import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchSales, deleteSale, filterSales } from '../actions'
import { Link } from 'react-router-dom'

class SalesList extends Component {
  componentDidMount() {
    this.props.fetchSales()
  }

  handleDeleteSale(saleId) {
    this.props.deleteSale(saleId)
  }

  handleChange(event) {
    this.props.filterSales(event.target.value)
  }

  render() {
    return (
      <div>
        <h1 className="mt-4">Vendas</h1>
        <div className="row justify-content-center mt-2 mb-4 mt-4">
          <form className="form-inline my-2 col-md-4 col-lg-4 col-sm-8">
            <input value={this.props.filter} onChange={this.handleChange.bind(this)} className="form-control col-12" type="search" placeholder="Buscar Venda" aria-label="Search" />
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
                  <Link className="m-2" to={`/sales/${sale.id}`}>Detalhes</Link>
                  <button onClick={() => this.handleDeleteSale(sale.id)} type="button" className="btn btn-primary m-2">Excluir</button>
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
  deleteSale: PropTypes.func.isRequired,
  filterSales: PropTypes.func.isRequired,
  filter: PropTypes.string
}

const getFilteredSales = (sales, q) => {
  return q ? sales.filter(sale => sale.code === q) : sales
}

const mapStateToProps = state => ({
  sales: getFilteredSales(state.salesPipeline.sales, state.salesPipeline.filter),
  filter: state.salesPipeline.filter
})

const mapDispatchToProps = dispatch => ({
  fetchSales: () => dispatch(fetchSales()),
  deleteSale: saleId => dispatch(deleteSale(saleId)),
  filterSales: q => dispatch(filterSales(q))
})

export default connect(mapStateToProps, mapDispatchToProps)(SalesList)