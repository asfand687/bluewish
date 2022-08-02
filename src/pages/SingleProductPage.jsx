import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { client, urlFor } from '../client'
import { useStateContext } from '../context/stateContext'

const SingleProductPage = () => {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [imageIndex, setImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { onAdd, cartItems } = useStateContext()

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug]{
          _id,
          name,
          slug,
          image,
          details,
          price
        }`,
        { slug }
      )
      .then((data) => {
        setProduct(data[0])
      })
      .catch(console.error)
  }, [slug])

  return (
    <section className="bg-blue-200">
      <div className="w-full px-4 py-10 lg:max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          <article className="flex-1">
            {product && <img className='rounded-lg aspect-square cursor-pointer' src={urlFor(product?.image[imageIndex]).url()} alt="product" />}
            <div className="flex py-4 justify-center lg:justify-start gap-3 mt-5">
              {product?.image?.map((image, idx) => (
                <img key={idx} className={`rounded-md w-20 h-20 cursor-pointer border-[4px] ${idx === imageIndex ? 'border-gray-400' : 'border-transparent'}`}
                  src={urlFor(image)}
                  alt="product"
                  onMouseEnter={() => setImageIndex(idx)}
                />
              ))}
            </div>
          </article>
          <article className="space-y-2 text-[#324d67] flex-[2]">
            <h2 className="text-3xl whitespace-nowrap font-normal">{product?.name}</h2>
            <h3 className="font-light text-xl text-[#324d67] pt-4">Rs {product?.price}</h3>
            <h3 className="font-semibold text-lg">Details:</h3>
            <p>{product?.details}</p>
            <div className="flex gap-4 items-center pb-6">
              <h2 className="text-lg font-semibold">Quantity:</h2>
              <div className="inline-flex px-2 border border-gray-300 justify-between text-lg h-10 items-center">
                <span onClick={() => setQuantity(prev => prev - 1)} className="cursor-pointer px-4">-</span>
                <span className="border-x border-gray-300 px-3">{quantity}</span>
                <span onClick={() => setQuantity(prev => prev + 1)} className="cursor-pointer px-4">+</span>
              </div>
            </div>
            <div className="flex gap-x-6">
              <button onClick={() => onAdd(product, quantity)} className="border border-gray-300 w-40 inline-flex justify-center items-center py-2 transition-all ease-out hover:bg-blue-700 hover:text-white hover:border-transparent">Add to Cart</button>
              <button className="border border-transparent bg-blue-700 text-white w-40 inline-flex justify-center items-center py-2 transition-all ease-out hover:bg-transparent hover:text-blue-700 hover:border-blue-700">Buy Now</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SingleProductPage