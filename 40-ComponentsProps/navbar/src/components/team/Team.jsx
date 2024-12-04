// import React from 'react'
import './Team.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

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
            <a href=""><FaFacebook /></a>
            <a href=""><FaTwitter /></a>
            <a href=""><FaInstagram /></a>
        </div>
        <div className='card'>
            <img src="https://picsum.photos/200/300" alt="" />
            <h3>Bob Carry</h3>
            <p>Skateboard Trainer</p>
            <a href=""><FaFacebook /></a>
            <a href=""><FaTwitter /></a>
            <a href=""><FaInstagram /></a>
        </div>
        <div className='card'>
            <img src="https://picsum.photos/200/300" alt="" />
            <h3>Ricky Fisher</h3>
            <p>Skateboard Trainer</p>
            <a href=""><FaFacebook /></a>
            <a href=""><FaTwitter /></a>
            <a href=""><FaInstagram /></a>
        </div>
      </div>
    </div>
  )
}

export default Team
