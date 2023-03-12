import React from 'react'
import { useParams } from 'react-router-dom'
import { vanData } from "../components/data";
const VanDetail = () => {
    const params = useParams();
    const details = vanData.map(van => {
        if (van.id === params.id) {
            return <div> 
                <img src={ van.imageUrl} />
            </div>
        }
    })
  return (
      <div>{ details}</div>
  )
}

export default VanDetail