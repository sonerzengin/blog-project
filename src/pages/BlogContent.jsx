import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteBlog, getSingle, updateBlog } from '../features/blogSlice';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Home from './Home';

const BlogContent = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const blog = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getSingle(params.id));
  }, [dispatch, params.id]);

  const onOpenModal = () => {
    setOpen(true);
    if (blog.blogs.length > 0) {
      setTitle(blog.blogs[0].title);
      setBody(blog.blogs[0].body);
    }
  };
  const onCloseModal = () => setOpen(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    const id = params.id;
    const userId = 1;
    dispatch(updateBlog({ id, title, body, userId }));
  };

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
                <div
                  className="buttons bg-red-400 hover:bg-red-300"
                  onClick={() => dispatch(deleteBlog(params.id))}
                >
                  Delete
                </div>
                <div
                  className="buttons bg-teal-400 hover:bg-teal-300"
                  onClick={onOpenModal}
                >
                  Edit
                </div>
                <Modal open={open} onClose={onCloseModal} center>
                  <form
                    className="flex flex-col p-5 min-w-[400px]"
                    onSubmit={onSubmit}
                  >
                    <label htmlFor="title" className="font-semibold">
                      Edit Title
                    </label>
                    <input
                      id="title"
                      className="p-1 border rounded-lg uppercase mt-1 mb-3"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="body" className="font-semibold">
                      Edit Body
                    </label>
                    <textarea
                      id="body"
                      rows="10"
                      className="p-1 border rounded-lg mt-1 text-sm"
                      type="text"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                    />
                    <div className="flex justify-center mt-2">
                      <button
                        onClick={onCloseModal}
                        className="buttons bg-gray-300 hover:bg-gray-200 p-3 px-4"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="buttons bg-teal-300 hover:bg-teal-200 p-3 px-7"
                      >
                        OK
                      </button>
                    </div>
                  </form>
                </Modal>
              </div>
            </div>
          ))}
      </div>
    </Home>
  );
};

export default BlogContent;
