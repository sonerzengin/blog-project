import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog } from '../features/blogSlice';
import Home from './Home';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';



const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  const dispatch = useDispatch();



  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addBlog({ title, body, }));
    setTitle('');
    setBody('');
    alert("Post added")
  };

  return (
    <Home>
      <div className='container mx-auto'>
        <Link to='/blogs' className='flex items-center'><BiArrowBack /> Geri </Link>
        <form onSubmit={onSubmit}>
          <div className='text-3xl font-bold my-3'>Add Post</div>
          <div className="mb-6">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
            />
          </div>

          <div className="mb-6">
            <textarea
              type="text"
              value={body}
              onChange={e => setBody(e.target.value)}
              rows="6"
              placeholder="Details"
              className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-teal-500 border-primary w-full rounded border p-3 text-gray font-semibold transition hover:bg-teal-400"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </Home>
  );
};

export default AddBlog;
