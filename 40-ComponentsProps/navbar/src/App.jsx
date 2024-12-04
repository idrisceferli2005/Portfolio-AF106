// import React from 'react';
import Navbar from './components/navbar/Navbar';
import Service from './components/service/Service';
import Team from './components/team/Team';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Service/>
      <Team/>
      <Pricing/>
      <Contact/>
    </div>
  )
}

export default App;
