import React from 'react'
import Links from '../components/Links'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div>
      <Links/>
      <Outlet/>
    </div>
  )
}

export default DefaultLayout
