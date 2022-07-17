import React from 'react'
import HeroImg from '../assets/hero-img.png'
import { Link } from 'react-router-dom'
import { CgShoppingBag } from 'react-icons/cg'

const Hero = () => {
  return (
    <section className=" overflow-clip bg-blue-200 font-primary">
      <div className="w-full px-4 pb-8 lg:max-w-7xl mx-auto lg:flex lg:space-x-14">
        <img className="w-[600px]" src={HeroImg} alt="hero" />
        <div className="flex-1 lg:self-center">
          <article className="w-20 h-20 flex justify-center items-center text-lg rounded-full bg-blue-400 text-white font-light">
            NEW IN
          </article>
          <h2 className="font-primary w-full pt-8 font-bold text-4xl lg:text-6xl tracking-wider lg:leading-[5rem] text-black">Women Jeans Collection</h2>
          <Link to={'/product'} className="font-primary bg-blue-400 px-12 uppercase py-4 text-white text-xl inline-flex items-center space-x-4 mt-10 transition-colors ease-in hover:bg-blue-500"><span>Shop This Collection</span><CgShoppingBag /> </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero