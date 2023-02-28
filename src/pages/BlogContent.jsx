import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteBlog, getSingle } from "../features/blogSlice";
import Home from "./Home";

const BlogContent = () => {
  const blog = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getSingle(params.id));
  }, [dispatch, params.id]);

  return (
    <Home>
      <div>
        {blog.loading && <div>Loading</div>}
        {!blog.loading && blog.error ? <div>Error: {blog.error}</div> : null}
        {!blog.loading &&
          blog.blogs &&
          blog.blogs.map((blog) => (
            <div className="border p-2 rounded-lg bg-gray-100 max-w-[768px] mx-auto text-center">
              <div className="uppercase font-semibold mb-2">{blog.title}</div>
              <div className="text-sm mb-4">{blog.body}</div>
              <div className="flex justify-center">
                <div className="buttons bg-red-400 hover:bg-red-300" onClick={() => dispatch(deleteBlog(params.id))}>
                  Delete
                </div>
                <div className="buttons bg-teal-400 hover:bg-teal-300">
                  Edit
                </div>
              </div>
            </div>
          ))}
      </div>
    </Home>
  );
};

export default BlogContent;
