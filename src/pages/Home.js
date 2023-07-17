import React from 'react'
import Header from '../shared/Header'
import Leftbar from '../components/Leftbar'
import Rightbar from '../components/Rightbar'
import Shop from '../components/Shop'

const Home = () => {
  return (
    <div>
        <Header></Header>
        <div className='grid lg:grid-cols-3 grid-cols-1'>
          <Leftbar></Leftbar>
          <Shop></Shop>
          <Rightbar></Rightbar>
        </div>
    </div>
  )
}

export default Home