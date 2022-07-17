import React from 'react'
import { Link } from 'react-router-dom'
import Showcase01 from '../assets/showcase-01.webp'
import Showcase02 from '../assets/showcase-02.webp'
import Showcase03 from '../assets/showcase-03.webp'
import LinkButton from '../components/LinkButton'

const Showcase = () => {
  return (
    <section className='w-full px-4 py-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-4'>
      <Link to="/product/category/tees">
        <div className="flex-1 text-center">
          <div className="overflow-hidden">
            <img className="transition-transform ease-in-out hover:scale-110" src={Showcase01} alt="jeans" />
          </div>
          <h2 className="py-4 text-3xl">Tees</h2>
          <LinkButton text="Discover Now" />
        </div>
      </Link>

      <Link to="/product/category/linen-collection">
        <div className="flex-1 text-center">
          <div className="overflow-hidden">
            <img className="transition-transform ease-in-out hover:scale-110" src={Showcase02} alt="jeans" />
          </div>
          <h2 className="py-4 text-3xl">Linen Collection</h2>
          <LinkButton text="Shop Now" />
        </div>
      </Link>

      <Link to="/product/category/blazer">
        <div className="flex-1 text-center">
          <div className="overflow-hidden">
            <img className="transition-transform ease-in-out hover:scale-110" src={Showcase03} alt="jeans" />
          </div>
          <h2 className="py-4 text-3xl">Blazers</h2>
          <LinkButton text="Shop This Trend" />
        </div>
      </Link>
    </section>
  )
}

export default Showcase