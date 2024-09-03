import React from 'react'

const Header = ({data}) => {
    console.log(data)
  return (

       
     <div style={{
         background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5) rgba(0,0,0,.8), url(https://image.tmdb.org/t/p/original/${
             data.backdrop_path ||data.profile_path
         })`, backgroundPosition : "center top 10%",
         backgroundSize:"cover",
     }} className='w-full h-[50vh] flex flex-col justify-end items-start p-[5%]'>
        header
    </div>
  )
}

export default Header