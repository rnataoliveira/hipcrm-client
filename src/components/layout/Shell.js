import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../Routes'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Shell = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="/">SGCPS</a>
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
                                    <Link to="/ping" className="dropdown-item">Ping</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* { props.userManager.currentUser ?  */}
                        <Link to="/login" className='btn btn-primary my-2 my-sm-0' >Entrar</Link>
                        {/* <span>Olá</span> */}
                    {/* } */}
                </div>
            </nav>
            <div className="container">
                <Routes />
            </div>
        </div>
    )
}

export default Shell