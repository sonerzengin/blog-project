import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '../features/blogSlice';
import Home from './Home';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  console.log('blogs', blogs);
  useEffect(() => {
    dispatch(getBlog());
  }, []);
  return (
    <Home>
      <div className="text-2xl font-semibold my-2">Posts</div>
      <div className="grid grid-cols-4 gap-4 content-center">
        {blogs.loading && <div>Loading</div>}
        {!blogs.loading && blogs.error ? <div>Error: {blogs.error}</div> : null}
        {!blogs.loading && blogs.blogs
          ? blogs.blogs.map((blog) => (
              <div>
                <BlogCard title={blog.title} id={blog.id} body={blog.body} />
              </div>
            ))
          : null}
      </div>
    </Home>
  );
};

export default Blogs;
