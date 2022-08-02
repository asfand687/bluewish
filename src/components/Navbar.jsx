import React from 'react'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as Search } from '../assets/search.svg'
import { ReactComponent as User } from '../assets/user.svg'
import { ReactComponent as Bag } from '../assets/bag.svg'
import { Link } from 'react-router-dom'
import { useStateContext } from '../context/stateContext'
import Cart from './Cart'



const Navbar = () => {
  const { cartItems, setShowCart, showCart } = useStateContext()
  return (
    <nav className="border-b w-screen border-blue-400 bg-blue-200">
      <div className="w-full lg:max-w-7xl mx-auto flex flex-col lg:flex-row justify-center lg:justify-between py-2 items-center">
        <Link className="mb-4 lg:mb-0" to="/">
          <Logo className="w-40 h-40" />
        </Link>
        <ul className="flex w-full px-2 justify-between lg:justify-center lg:space-x-24">
          <article>
            <Search className="mx-auto" />
            <p>Search</p>
          </article>

          <article>
            <User className="mx-auto" />
            <p>Sign In</p>
          </article>

          <article onClick={() => setShowCart(!showCart)} className="relative">
            <Bag className="mx-auto" />
            <p>Bag</p>
            {cartItems.length > 0 && <div className='absolute top-1 -right-2 font-semibold text-white inline-flex justify-center items-center text-sm w-4 h-4 rounded-full bg-red-700'>{cartItems.length}</div>}
          </article>
        </ul>
      </div>
      <Cart />
    </nav>
  )
}

export default Navbar