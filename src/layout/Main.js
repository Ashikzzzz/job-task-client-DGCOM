import React from 'react'
import Header from '../shared/Header'
import { Outlet } from 'react-router-dom'
import Chart from '../components/Chart'


const Main = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Chart></Chart>
    </div>
  )
}

export default Main