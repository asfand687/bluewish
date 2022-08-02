import React from 'react'
import { useStateContext } from '../context/stateContext'
import { TiShoppingCart } from 'react-icons/ti'
import { urlFor } from '../client'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { showCart, setShowCart, cartItems, onRemove, totalPrice } = useStateContext()
  return (
    <div className={`w-80 p-4 flex flex-col z-10 h-screen transition ease-in-out bg-white space-y-8 fixed top-0 right-0 ${showCart ? 'translate-x-0' : 'translate-x-full'} shadow-lg`}>
      <div className="flex justify-between">
        <TiShoppingCart className="text-3xl" />
        <div className="cursor-pointer" onClick={() => setShowCart(!showCart)}>
          <AiOutlineClose className="text-3xl" />
        </div>
      </div>
      {cartItems.length ? (
        <>
          {cartItems.map(item => (
            <div className="flex items-center relative space-x-4" key={item._id}>
              <img className="w-20 h-20 object-cover" src={urlFor(item.image[0])} alt="product" />
              <div>
                <p>{item.name}</p>
                <p>x{item.quantity}</p>
              </div>
              <div onClick={() => onRemove(item)} className="absolute top-0 right-0 text-2xl cursor-pointer">
                <MdOutlineDeleteOutline />
              </div>
            </div>
          ))}
          <div className="border-b flex items-center justify-between border-gray-300 py-2">
            <h2>Total:</h2>
            <p className="font-medium text-2xl">Rs{totalPrice}</p>
          </div>
          <Link to={'/checkout'} onClick={() => setShowCart(false)} className="font-primary bg-blue-400 px-12 uppercase py-2 text-white text-xl inline-flex items-center justify-center space-x-4 mt-10 transition-colors ease-in hover:bg-blue-500">Checkout</Link>
        </>
      ) : (
        <p>No items to show</p>
      )}
    </div>
  )
}

export default Cart