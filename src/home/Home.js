import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="row position-absolute"
        style={{
          left: '0',
          opacity: '0.8',
          padding: '0',
          width: '100%',
          height: '100%',
          marginTop: '-48px'
        }}>
        < div className="col-sm-12 col-md-8 col-lg-8 container-fluid full"
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url("img/bg.jpeg")`,
            backgroundSize: '100%',
            color: '#000000',
            marginRight: '-15px'
          }}>
          <h2 className="align-middle mt-5 text-center">A Lopes Corretora</h2>
          <p className="font-weight-bold text-center" style={{ width: '100%' }}>Está no mercado há mais de oito anos
              trabalhando com a venda e manutenção de planos de saúde.
              Localizada no bairro São Miguel, Rua Santa Davina em São Paulo – SP.
                 Oferecendo uma grande variedade de planos de saúde, com preços e opções acessíveis para você.</p>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 text-center align-middle mt-5">
          <div className="text-center">
            <img className="p-2" src="img/amil.png" width="150px" height="50px" />
            <img className="p-2" src="img/bradesco.png" width="150px" height="50px" />
          </div>
          <div className="text-center mt-2">
            <img className="p-2" src="img/sul_america.png" width="150px" height="50px" />
            <img className="p-2" src="img/unimed.png" width="150px" height="65px" />
          </div>
          <hr className="mt-4" />
          <h5 className="mt-4">Solicite um orçamento agora mesmo!</h5>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYckeqc33CElUM-o65IBVPLjwG9VAQVTsRio4IEZnku1y4zg/viewform" className="mb-5">
            <button type="button" className="btn btn-primary mt-2">Solicitar Orçamento</button>
          </a>
        </div>
      </div >
    )
  }
}

export default Home