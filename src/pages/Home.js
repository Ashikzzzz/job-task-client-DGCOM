import React from 'react'
import Header from '../shared/Header'
import Leftbar from '../components/Leftbar'
import Rightbar from '../components/Rightbar'
import Shop from '../components/Shop'
import Chart from '../components/Chart'

const Home = () => {
  return (
    <div>
        
        <div className='grid lg:grid-cols-3 grid-cols-1'>
          <Leftbar className="w-1/3"></Leftbar>
          <Shop className="w-1/3"></Shop>
          <Rightbar className="w-1/3"></Rightbar>
          
        </div>
        <Chart></Chart>
    </div>
  )
}

export default Home