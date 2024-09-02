import React from 'react'
import Sidenav from './templates/Sidenav'
import Topnav from './templates/Topnav'

const Home = () => {
  return (
    <>
   <Sidenav/>
    <div className='w-[80%] h-full bg-gray-800'>
        <Topnav/>
    </div>
    </>
  )
}

export default Home