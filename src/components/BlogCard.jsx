import React from 'react';
import { ImCancelCircle } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../features/blogSlice';


const BlogCard = ({ id, title, body }) => {

    const dispatch = useDispatch();

    

  return (
    <div className="border p-2 rounded bg-gray-100 h-36 overflow-hidden flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <div className="font-semibold uppercase max-h-12 overflow-hidden">{title}</div>
        <div className=" text-red-400 cursor-pointer" onClick={() => dispatch(deleteBlog(id))}><ImCancelCircle /></div>
      </div>
      <div className="text-xs text-gray-400">{body}</div>
    </div>
  );
};

export default BlogCard;
