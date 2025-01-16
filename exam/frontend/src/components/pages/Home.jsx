import React from 'react'
import Spring from '../spring/Spring'
import Womens from '../womens/Womens'
import Product from '../products/Product'
import Bestseller from '../bestseller/Bestseller'
import Blog from '../blog/Blog'

const Home = () => {
  return (
    <div>
       <Spring/>
        <Womens/>
        <Product/>
        <Bestseller/>
        <Blog/>
    </div>
  )
}

export default Home