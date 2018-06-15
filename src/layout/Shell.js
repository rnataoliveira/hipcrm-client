import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Routes from './Routes'
import { UserProfile } from '../auth'
import { FlashMessages } from '../flash-messages'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

class Shell extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <a className="navbar-brand" href={this.props.user ? '/dashboard': '/'}>{this.props.user ? 'SGCPS' : 'Lopes Corretora'}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {this.props.user &&
              (<div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"
                      id="navbarDropdownMenuContracts"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-toggle="dropdown"
                      role='button'>
                      Vendas
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuContracts">
                      <Link to="/sales/new" className="dropdown-item">Iniciar Venda</Link>
                      <Link to="/sales" className="dropdown-item">Ver Vendas</Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"
                      id="navbarDropdownMenuCustomers"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-toggle="dropdown"
                      role='button'>
                      Clientes
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuCustomers">
                      <Link to="/customers/new" className="dropdown-item">Cadastrar Cliente</Link>
                      <Link to="/customers" className="dropdown-item">Ver Clientes</Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"
                      id="navbarDropdownMenuCustomers"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-toggle="dropdown"
                      role='button'>
                      Contratos
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuCustomers">
                      {/* <Link to="/contracts/new" className="dropdown-item">Cadastrar Contrato</Link> */}
                      <Link to="/agreements" className="dropdown-item">Ver Contratos</Link>
                    </div>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"
                      id="navbarDropdownMenuContracts"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-toggle="dropdown"
                      role='button'>
                      Financeiro
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuContracts">
                      <Link to="/reports" className="dropdown-item">Relatório de Faturamento</Link>
                    </div>
                  </li> */}
                </ul>
              </div>
              )
            }
            <UserProfile />
          </div>
        </nav>
        <div className="container">
          <FlashMessages />
          <Routes />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.oidc.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Shell)