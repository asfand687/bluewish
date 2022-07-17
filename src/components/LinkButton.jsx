import React from 'react'
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg'


const LinkButton = ({ text, path }) => {
  return (
    <h2 className="border-b space-x-2 inline-flex items-center text-xl font-semibold">
      <span>{text}</span> <ArrowRight className='inline-block transform transition-all ease-in-out -rotate-45 w-6 hover:rotate-0 cta-icon' />
    </h2>
  )
}

export default LinkButton