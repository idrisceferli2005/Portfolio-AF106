import React from 'react'
import Hero from '../../hero/Hero'
import Productour from '../../productsour/Productour'
import Aboutus from '../../aboutus/Aboutus'
import Leadership from '../../leadership/Leadership'
import Services from '../../services/Services'
import Follow from '../../follow/Follow'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Productour/>
      <Aboutus/>
      <Leadership/>
      <Services/>
      <Follow/>
    </div>
  )
}

export default Home
