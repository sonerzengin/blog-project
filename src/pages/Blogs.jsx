import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../features/blogSlice";
import Home from "./Home";
import BlogCard from "../components/BlogCard";
import { Audio } from "react-loader-spinner";

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlog());
  }, []);
  return (
    <Home>
      <div className="container mx-auto">
        <div className="text-2xl font-semibold my-2">Posts</div>
        <div className="grid grid-cols-4 gap-4 content-center">
          {blogs.loading && (
            <div className="flex h-screen justify-center items-center w-full">
              <Audio
                height="120"
                width="120"
                radius="9"
                color="gray"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            </div>
          )}
          {!blogs.loading && blogs.error ? (
            <div>Error: {blogs.error}</div>
          ) : null}
          {!blogs.loading && blogs.blogs
            ? blogs.blogs.map((blog) => (
                <div>
                  <BlogCard title={blog.title} id={blog.id} body={blog.body} />
                </div>
              ))
            : null}
        </div>
      </div>
    </Home>
  );
};

export default Blogs;
