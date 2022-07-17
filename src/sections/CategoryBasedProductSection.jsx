import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { client } from '../client';
import Product from '../components/Product';


const CategoryBasedProductSection = ({ category }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product" && category == $category]{
        _id,
        name,
        slug,
        category,
        price,
        image
      }`, { category }
      )
      .then((data) => {
        setProducts(data)
      })
      .catch(console.error);
  }, [category])
  return (
    <section className="w-full px-4 lg:max-w-7xl space-y-8 lg:space-y-0 mx-auto flex flex-col items-center flex-wrap lg:flex-row lg:gap-4">
      {
        products.map(product => (
          <Link key={product._id} to={`/product/${product.slug.current}`}>
            <Product product={product} />
          </Link>
        ))
      }
    </section>
  )
}

export default CategoryBasedProductSection