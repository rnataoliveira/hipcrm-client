import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Routes from './Routes'
import { UserProfile } from '../auth'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const Shell = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">{props.user ? 'SGCPS' : 'Lopes Corretora'}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {props.user &&
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
                    id="navbarDropdownMenuContracts"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    role='button'>
                    Financeiro
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuContracts">
                    <Link to="/ping" className="dropdown-item">Gerar Relatório</Link>
                    <Link to="/ping" className="dropdown-item">Ver Relatórios</Link>
                  </div>
                </li>
              </ul>
            </div>
            )
          }
          <UserProfile />
        </div>
      </nav>
      <div className="container">
        <Routes />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.oidc.user
})

export default connect(mapStateToProps)(Shell)