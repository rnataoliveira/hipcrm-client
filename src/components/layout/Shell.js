import React from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

import Routes from '../Routes'

const Shell = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"
                                id="navbarDropdownMenuContracts"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-toggle="dropdown"
                                href="#">
                                Vendas
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuContracts">
                                <Link to="/sales/new" className="dropdown-item">Iniciar Venda</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
            <Routes />
        </div>
    </div>
)

export default Shell