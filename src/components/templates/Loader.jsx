import React from 'react'
import prev from '/prev.jpg'
import { GIF_LOADER } from '../../utils/constents'
const Loader = () => {
  return (
    <div className=" w-full h-full overflow-hidden border border-black bg-black ">
    <img className=' w-[700px] h-[450px] object-cover p-0 mb-8 mx-auto mt-28' src={GIF_LOADER} alt=''/>
    </div>
  )
}

export default Loader

