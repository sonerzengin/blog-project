import React from 'react'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()


  return (
    <div className='flex'>
      <div className='mr-5'>
        <select>
          <option value="option">John Doe</option>
          <option value="option">Smith Doe</option>
        </select>
      </div>
      <div className='mx-2'>
        Posts 
      </div>
    </div>
  )
}

export default Navbar