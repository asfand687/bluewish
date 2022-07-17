import React from 'react'
import { urlFor } from '../client'

const Product = ({ product }) => {
  return (
    <article className="">
      <img className='w-64 h-[302px] object-cover border border-gray-200' src={urlFor(product.image[0])} alt="product" />
      <h2>{product.name}</h2>
      <p>PKR {product.price}</p>
    </article>
  )
}

export default Product