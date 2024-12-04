// import React from 'react'
import './Team.css'

const Team = () => {
  return (
    <div className='team-container'>    
      <h2 className='team-title'>Our Team</h2>
      <p className='team-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere at delectus laudantium, deserunt, atque eveniet. Voluptatem, fuga quos rerum inventore.</p>
      <div className='cards'>
        <div className='card'>
            <img src="https://picsum.photos/200/300" alt="" />
            <h3>Jean Smith</h3>
            <p>Skateboard Trainer</p>
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
        </div>
        <div className='card'>
            <img src="https://picsum.photos/200/300" alt="" />
            <h3>Bob Carry</h3>
            <p>Skateboard Trainer</p>
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
        </div>
        <div className='card'>
            <img src="https://picsum.photos/200/300" alt="" />
            <h3>Ricky Fisher</h3>
            <p>Skateboard Trainer</p>
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default Team
