import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ReportsList extends Component {
  componentDidMount() {
    this.props.fetchReports()
  }

  handleChange(event) {
    this.props.filterReports(event.target.value)
  }

  render() {
    return (
      <div>
        <h1 className="mt-4">Relatórios</h1>
        <div className="row justify-content-center mt-2 mb-4 mt-4">
          <form className="form-inline my-2 col-4 my-lg-0">
            <input value={this.props.filter} onChange={this.handleChange.bind(this)} className="form-control col-12" type="search" placeholder="Filtrar Contratos" aria-label="Search" />
          </form>
        </div>
        <table className="table mt-2">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Relatório</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.reports.map(report => {
              <tr key={report.number}>
                <th scope="row">01</th>
                <td>Entradas Abril</td>
                <td className="text-right">
                  <Link to="">Detalhes</Link>
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



ReportsList.propTypes = {
  reports: PropTypes.array,
  filter: PropTypes.string,
  fetchReports: PropTypes.func.isRequired,
  filterReports: PropTypes.func.isRequired
}

export default ReportsList