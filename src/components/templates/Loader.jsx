import React from 'react'
import load from '/load.jpg'
const Loader = () => {
  return (
    <div className="w-screen h-screen"> hello
    <img className='w-full h-full' src={load} alt=''/>
    </div>
  )
}

export default Loader