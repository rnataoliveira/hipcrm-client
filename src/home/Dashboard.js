import React from 'react'

const Dashboard = props => {
  return (
    <div>
      <div className="row mt-4">
        <h1>Compromissos do dia</h1>
      </div>
      <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=3bml9bcuspor2r1qt2jf0j0gv0%40group.calendar.google.com&amp;color=%23B1365F&amp;src=bo527cmein5cgautvg3ipqfb94%40group.calendar.google.com&amp;color=%23AB8B00&amp;ctz=America%2FSao_Paulo"
        style={{ borderWidth: '0', width: '100%', height: '600px', frameborder: '0', scrolling: 'no' }}>
      </iframe>
    </div>)
}

export default Dashboard