import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { fetchAgreements, filterAgreements } from '../actions'
import { connect } from 'react-redux'
import { flashMessage } from '../../flash-messages/actions'

class AgreementList extends Component {
  componentDidMount() {
    this.props.fetchAgreements()
  }
  componentWillUnmount() {
    this.props.displaySuccess()
  }

  handleChange(event) {
    this.props.filterAgreements(event.target.value)
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
            {this.props.agreements.map(a => {
              <tr key={a.number}>
                <th scope="row">0009</th>
                <td>Renata Oliveira</td>
                <td className="text-right">
                  <Link className="m-2" to="">Detalhes</Link>
                  <button type="button" className="btn btn-primary m-2">Dar Baixa</button>
                </td>
              </tr>
            })}
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


const mapStateToProps = state => ({
  agreements: state.agreements.all,
})

const mapDispatchToProps = dispatch => ({
  fetchAgreements: () => dispatch(fetchAgreements()),
  filterAgreements: q => dispatch(filterAgreements(q)),
  displaySuccess: () => dispatch(flashMessage({ text: 'Dar Baixa executado com sucesso!' }))
})

export default connect(mapStateToProps, mapDispatchToProps)(AgreementList)