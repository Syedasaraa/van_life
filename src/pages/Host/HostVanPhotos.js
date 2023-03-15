import React from 'react'
import { useOutletContext } from 'react-router-dom'
const HostVanPhotos = () => {
    const {imageUrl}= useOutletContext()
  return (
    <div>
        <img src={imageUrl} className="w-[6%] rounded-sm"/>
    </div>
  )
}

export default HostVanPhotos