import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)

  let foundProduct
  let index

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(item => item._id === product._id)

    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity)
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity)

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map(cartProduct => {
        if (cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setCartItems(updatedCartItems)
    } else {
      product.quantity = quantity
      setCartItems([...cartItems, { ...product }])
    }
  }

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id)
    const newCartItems = cartItems.filter(item => item._id !== product._id)
    setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price * foundProduct.quantity)
    setTotalQuantities(prevTotalQuantites => prevTotalQuantites - foundProduct.quantity)
    setCartItems(newCartItems)
  }



  return (
    <Context.Provider
      value={{
        onAdd,
        cartItems,
        setCartItems,
        showCart,
        setShowCart,
        onRemove,
        totalPrice
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)