import React from 'react'
import App from '../App'
import HeadCarousel from '../components/headCarousel/HeadCarousel'
import ListSquare from '../components/listSquare/ListSquare'
import ListSquareItemDetail from '../components/listSquare/ListSquareItemDetail'
import "./Home.scss"

const Home = () => {
  return (
    <div>
        <HeadCarousel></HeadCarousel>
        <div className='div--separator'></div>
        <h2 className='h2--title'>Product Detail</h2>
        <h3 className='h3--title'>My E-commerce</h3>
        <ListSquare></ListSquare>
    </div>
  )
}

export default Home