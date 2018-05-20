import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div style={{
        height: '750px',
        backgroundColor: '#eaebed',
        position: 'absolute',
        left: '0',
        display: 'flex',
        textAlign: 'center',
        opacity: '0.8'
      }}>
        <div
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url("img/bg.jpeg")`,
            backgroundSize: '100%',
          }}>
          <div className="col l12 m12 s12" style={{ textAlign: 'left', margin: '200px 20%', width: '60%' }}>
            <h2 style={{ color: '#eaebed' }}>A Lopes Corretora</h2>
            <p style={{ color: '#666363', fontWeight: 'bold' }}>Nós estamos no mercado há mais de oito anos
                trabalhando com a venda e manutenção de planos de saúde.
                Estamos localizados no bairro São Miguel, Rua Santa Davina em São Paulo – SP.
                Oferecemos uma grande variedade de planos de saúde, com preços e opções acessíveis para você.</p>
          </div>
        </div>
        <div
          style={{
            textAlign: 'center',
            margin: '200px 10%',
            position: 'relative',
          }}
          className="col l4 m4 s12">
          <button type="button" className="btn btn-primary"
            style={{ margin: '100px 0', height: '50px' }}>Solicitar Orçamento</button>

        </div>
      </div>
    )
  }
}

export default Home