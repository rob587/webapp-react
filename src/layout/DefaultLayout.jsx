import React from 'react'
import Links from '../components/Links'
import { Outlet } from 'react-router-dom'
import GlobalContext from '../contexts/globalContexts'
import { useContext } from 'react'
import Loader from '../components/Loader'




const DefaultLayout = () => {

  const {isLoading} = useContext(GlobalContext)

  return (
    <div>
      <Links/>
      <Outlet/>
      {isLoading&& <Loader/>}
    </div>
  )
}

export default DefaultLayout
