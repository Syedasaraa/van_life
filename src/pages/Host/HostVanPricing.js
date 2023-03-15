import React from 'react'
import { useOutletContext } from 'react-router-dom'
const HostVanPricing = () => {
    const {price} = useOutletContext()
    console.log(price)
  return (
    <div>
        <span className='text-[40px]'>${price}</span> <span className='text-gray-600 text-[20px]'>/day</span>
    </div>
  )
}

export default HostVanPricing