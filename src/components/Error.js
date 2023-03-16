import React from 'react'
import { Link , useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div className='flex flex-col mx-auto gap-5'>
        <p className='text-[30px] font-bold'>{error.message}</p>
        <pre>{error.status}-{error.statusText}</pre>
        < Link to=".." className='bg-black text-white p-3 w-full text-center'> Return to homepage</Link>
    </div>
  )
}

export default Error