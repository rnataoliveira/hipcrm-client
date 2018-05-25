import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ContractsList extends Component {
  componentDidMount() {
    this.props.fetchContracts()
  }

  handleChange(event) {
    this.props.filterContracts(event.target.value)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1 className="mt-4">Contratos</h1>
        <div className="row justify-content-center mt-2 mb-4 mt-4">
          <form className="form-inline my-2 col-4 my-lg-0">
            <input value={this.props.filter} onChange={this.handleChange.bind(this)} className="form-control col-12" type="search" placeholder="Filtrar Contratos" aria-label="Search" />
          </form>
        </div>
        <table className="table mt-2">
          <thead>
            <tr>
              <th scope="col">Número</th>
              <th scope="col">Cliente</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.contracts.map(contract => {
              <tr key={contract.number}>
                <th scope="row">0009</th>
                <td>Renata Oliveira</td>
                <td className="text-right">
                  <Link to="">Detalhes</Link>
                  <button type="button" className="btn btn-primary">Inativar</button>
                </td>
              </tr>
            })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

ContractsList.propTypes = {
  contracts: PropTypes.array,
  filter: PropTypes.string,
  fetchContracts: PropTypes.func.isRequired,
  filterContracts: PropTypes.func.isRequired
}

export default ContractsList