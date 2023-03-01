import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '../features/blogSlice';
import FindMe from './FindMe';

const Navbar = () => {

  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const count = blogs.blogs.length;

  useEffect(() => {
    
    dispatch(getBlog());
  }, [dispatch]);

 

  return (
    <div className="flex items-center">
      
      <div className="mx-2 flex items-center">
        <div className="text-sm">Posts</div>{' '}
        <span className="text-xs bg-blue-100 rounded-lg border p-1 ml-1 border-blue-500">
          {count}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
