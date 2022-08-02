import React, { useState, useRef } from 'react'
import { useStateContext } from '../context/stateContext'
import { urlFor } from '../client'
import emailjs from '@emailjs/browser'
import { TiChevronLeftOutline } from 'react-icons/ti'



const Checkout = () => {
  const { cartItems, totalPrice } = useStateContext()
  const [formData, setFormData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    postalcode: '',
    phone: ''
  })
  const form = useRef()


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      const mutations = {
        mutations: [
          {
            create: {
              _type: 'order',
              firstname,
              lastname,
              address,
              city,
              postalcode,
              phone
            }
          }
        ]
      }

      const apiEndpoint = `https://qifm40lk.api.sanity.io/v2022-06-03/data/mutate/production`

      const result = await fetch(apiEndpoint, {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer skgJrcEgheJ1xpIamDdnyIpbDWapJIZOHQwBQ9i1e1THXHMZGRL0WBXQuufNLEa5JGoDA2zCYg4dNPrV69NFe1PVgRmDoAexLdKH8scqdbouGDImoFAMMvsT6M0HO1PUJqGqPKKXCKj9hc6Zkgk5lXjdirzJsh1qU3tc815nW1me8IPtMYaf`
        },
        body: JSON.stringify(mutations),
        method: 'POST'
      })

      const json = await result.json()

      console.log(json)
    } catch (error) {
      console.log(error.message)
    }
  }
  const { firstname,
    lastname,
    address,
    city,
    postalcode,
    phone } = formData
  return (
    <section className="w-full px-4 lg:max-w-7xl min-h-[calc(100vh-177px)] space-y-8 lg:space-y-0 mx-auto flex flex-col flex-wrap lg:flex-row lg:gap-4">
      <article className="flex-1 lg:pt-24 px-4">
        <h2 className="text-3xl font-semibold">Bluewish.pk</h2>
        <form ref={form} onSubmit={handleSubmit} autoComplete='off' className="border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-xl font-medium py-4">Contact Information</h2>
            <input onChange={({ target }) => setFormData({ ...formData, email: target.value })} type="email" className="p-4 py-3 text-sm w-full transition-all ease-in duration-200 outline-0 rounded-lg border-gray-200 border focus:border-gray-400" placeholder='Email' required />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-medium pt-8">Shipping Information</h2>
            <div className="flex lg:space-x-4">
              <article className="flex-1">
                <input onChange={({ target }) => setFormData({ ...formData, firstname: target.value })} type="text" className="p-4 py-3 text-sm w-full transition-all ease-in duration-200 outline-0 rounded-lg border-gray-200 border focus:border-gray-400" placeholder='First Name' required />
              </article>
              <article className="flex-1">
                <input onChange={({ target }) => setFormData({ ...formData, lastname: target.value })} type="text" className="p-4 py-3 text-sm w-full transition-all ease-in duration-200 outline-0 rounded-lg border-gray-200 border focus:border-gray-400" placeholder='Last Name' required />
              </article>
            </div>
            <div>
              <input onChange={({ target }) => setFormData({ ...formData, address: target.value })} type="text" className="p-4 py-3 text-sm w-full transition-all ease-in duration-200 outline-0 rounded-lg border-gray-200 border focus:border-gray-400" placeholder='Address' required />
            </div>
            <div className="flex lg:space-x-4">
              <article className="flex-1">
                <input onChange={({ target }) => setFormData({ ...formData, city: target.value })} type="text" className="p-4 py-3 text-sm w-full transition-all ease-in duration-200 outline-0 rounded-lg border-gray-200 border focus:border-gray-400" placeholder='City' required />
              </article>
              <article className="flex-1">
                <input onChange={({ target }) => setFormData({ ...formData, postalcode: target.value })} type="text" className="p-4 py-3 text-sm w-full transition-all ease-in duration-200 outline-0 rounded-lg border-gray-200 border focus:border-gray-400" placeholder='Postal Code (Optional)' />
              </article>
            </div>
            <div>
              <input onChange={({ target }) => setFormData({ ...formData, phone: target.value })} type="tel" className="p-4 py-3 text-sm w-full transition-all ease-in duration-200 outline-0 rounded-lg border-gray-200 border focus:border-gray-400" placeholder='Phone' required />
            </div>
          </div>
          <button type="submit" className="w-full font-primary bg-black px-12 uppercase py-2 text-white text-xl flex items-center justify-center space-x-4 mt-10 transition-colors ease-in hover:opacity-90">Complete Order</button>
        </form>
        <p className="text-sm text-gray-500 pb-2">All Rights Reserved Bluewish.pk</p>
      </article>
      <article className="flex-1 bg-gray-100 px-4 lg:px-10 border-l pt-24 border-gray-300">
        <div className="w-[500px]">
          {cartItems.length ? (
            <>
              {cartItems.map(item => (
                <div className="flex items-center space-x-4 space-y-4 border-b border-gray-300 py-4" key={item._id}>
                  <img className="w-20 h-20 object-cover" src={urlFor(item.image[0])} alt="product" />
                  <div className="flex justify-between flex-1">
                    <p>{item.name}</p>
                    <p>Rs{item.price}</p>
                  </div>
                </div>
              ))}
              <div className=" flex items-center justify-between  py-2">
                <h2>Total:</h2>
                <p className="font-medium text-2xl">Rs{totalPrice}</p>
              </div>
            </>
          ) : (
            <p>No items to show</p>
          )}
        </div>
      </article>
    </section>
  )
}

export default Checkout