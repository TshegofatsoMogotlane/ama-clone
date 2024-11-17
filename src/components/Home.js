import React from 'react'
import "./Home.css"
import Products from './Products'
const Home = () => {
  return (
    <div>
      <div className='home'>
        <img className='home_image' src='https://m.media-amazon.com/images/I/71JMp10LhjL._SX3000_.jpg' alt='electronics img' />
      </div>
      <Products />
    </div>
  )
}

export default Home
