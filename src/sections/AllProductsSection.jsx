import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { client } from '../client';
import Product from '../components/Product';


const AllProductsSection = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"]{
        _id,
        name,
        slug,
        category,
        price,
        image
      }`
      )
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
      .catch(console.error);
  }, [])
  return (
    <section className="min-h-[calc(100vh-176px)] bg-blue-200">

      <div className="w-full px-4 lg:max-w-7xl gap-8 mx-auto flex flex-col items-center flex-wrap lg:flex-row lg:gap-x-16 py-20">
        {
          products.map(product => (
            <Link key={product._id} to={`/product/${product.slug.current}`}>
              <Product product={product} />
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default AllProductsSection