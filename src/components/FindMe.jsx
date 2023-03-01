import React from 'react'
import { Link } from 'react-router-dom'

const FindMe = () => {
  return (
    <div className='flex gap-5 text-sm'>
        <Link to='/addblog' className='underline'>Add Blog</Link>
        <Link to='/blogs' className='underline'>All Blogs</Link>
        <div className='underline'>I feel Lucky</div>
    </div>
  )
}

export default FindMe