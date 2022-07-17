import React from 'react'
import Logo from '../assets/logo.svg'

const ComingSoon = () => {
  return (
    <div className="h-screen flex flex-col text-[#2374FC] text-center justify-center items-center">
      <img src={Logo} className="w-56 pb-8 drop-shadow-lg" alt="bluewish" />
      <h2 className=" leading-snug drop-shadow-xl text-5xl px-2 lg:tracking-[2rem] pt-8 uppercase">Coming Soon</h2>
      <p className="text-xl p-4">We are under construction, will be up and running soon!</p>
    </div >
  )
}

export default ComingSoon