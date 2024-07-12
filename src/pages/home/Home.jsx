import React from 'react'
import Banner from '../../components/Banner';
import Categories from '../../pages/home/Categories'
import SpecialDishes from './SpecialDishes';
const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <SpecialDishes/>
    </div>
  )
}

export default Home