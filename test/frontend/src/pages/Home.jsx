import React from 'react'
import Winter from '../components/winter/Winter'
import Banner from '../components/banner/Banner'
import Products from '../components/products/Products'
import Email from '../components/emails/Email'

const Home = () => {
  return (
    <div>
       <Winter/>
       <Banner/>
       <Products/>
       <Email/>
    </div>
  )
}

export default Home