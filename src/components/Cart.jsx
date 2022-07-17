import React from 'react'
import { useStateContext } from '../context/stateContext'
import { TiShoppingCart } from 'react-icons/ti'
import { urlFor } from '../client'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'

const Cart = () => {
  const { showCart, setShowCart, cartItems, onRemove, totalPrice } = useStateContext()
  console.log(cartItems)
  return (
    <div className={`w-80 p-4 flex flex-col z-10 h-screen transition ease-in-out bg-white space-y-8 fixed top-0 right-0 ${showCart ? 'translate-x-full' : 'translate-x-0'} shadow-lg`}>
      <div className="flex justify-between">
        <TiShoppingCart className="text-3xl" />
        <div className="cursor-pointer" onClick={() => setShowCart(!showCart)}>
          <AiOutlineClose className="text-3xl" />
        </div>
      </div>
      {cartItems.length ? (
        <>
          {cartItems.map(item => (
            <div className="flex relative space-x-4" key={item._id}>
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
          <div>Total: PKR {totalPrice}</div>
        </>
      ) : (
        <p>No items to show</p>
      )}
    </div>
  )
}

export default Cart