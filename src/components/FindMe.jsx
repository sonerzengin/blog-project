import React from 'react'
import { Link } from 'react-router-dom'

const FindMe = () => {
  return (
    <div className='flex text-sm justify-center underline gap-5'>
        <Link to='/addblog' className=''>Add Blog</Link>
        <Link to='/' className=''>All Blogs</Link>
        <div className=''>I feel Lucky</div>
    </div>
  )
}

export default FindMe