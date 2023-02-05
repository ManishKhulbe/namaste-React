import React from 'react'

const Shimmer = () => {
  return (
    Array(9).fill(null).map((_, index) => (
        <div key={index} className='h-52 w-80 bg-slate-300 m-2'/>
    ))
    
  )
}

export default Shimmer
