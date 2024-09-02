import React from 'react'

const Topnav = () => {
  return (
    <div className='w-full h-[10vh] relative flex justify-center items-center'>
       <i class="text-3xl text-zinc-400 ri-search-line"></i>
<input className='w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent' type='text'placeholder='Enter your movie' />
<i class=" text-3xl text-zinc-500 ri-close-line"></i>

    </div>
  )
}

export default Topnav;