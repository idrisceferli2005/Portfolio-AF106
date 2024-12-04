// import React from 'react'
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1 className='pricing-title'>Session Pricing</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quae temporibus tenetur vitae iusto suscipit alias, laudantium, porro unde tempora.</p>
      <div className='cards'>
        <div className='card'>
            <h2 className='card-title'>Basic</h2>
            <p className='card-price'>$29.99/year</p>
            <ul className='card-list'>
            <li>Officia quaerat eaque neque</li>
                <li>Possimus aut consequuntur incidunt</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li>Dolorum esse odio quas architecto sint</li>
            </ul>
            <button>But Now</button>
        </div>
        <div className='card'>
            <h2 className='card-title'>Premium</h2>
            <p className='card-price'>$29.99/year</p>
            <ul className='card-list'>
            <li>Officia quaerat eaque neque</li>
                <li>Possimus aut consequuntur incidunt</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li>Dolorum esse odio quas architecto sint</li>
            </ul>
            <button>But Now</button>
        </div>
        <div className='card'>
            <h2 className='card-title'>Professional</h2>
            <p className='card-price'>$29.99/year</p>
            <ul className='card-list'>
                <li>Officia quaerat eaque neque</li>
                <li>Possimus aut consequuntur incidunt</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li>Dolorum esse odio quas architecto sint</li>
            </ul>
            <button>But Now</button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
