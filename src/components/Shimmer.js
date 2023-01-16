import React from 'react'

const Shimmer = () => {
  return (
    Array(9).fill(null).map((_, index) => (
        <div key={index} className='shimmerCard'/>
    ))
    
  )
}

export default Shimmer
