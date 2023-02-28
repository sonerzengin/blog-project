import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  loading: false,
  blogs: [],
  error: '',
};

export const getBlog = createAsyncThunk('blog/getblog', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.data);
});

export const addBlog = createAsyncThunk(
  'blog/addblog',
  ({ title, body, userId }) => {
    return axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId,
      })
      .then((response) => console.log(response.data));
  }
);
export const updateBlog = createAsyncThunk(
  'blog/updateblog',
  ({ id, title, body, userId }) => {
    return axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        id,
        title,
        body,
        userId,
      })
      .then((response) => response.data);
  }
);

export const deleteBlog = createAsyncThunk('blog/deleteblog', (id) => {
  return axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(() => id);
});

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBlog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
      state.error = '';
    });
    builder.addCase(getBlog.rejected, (state, action) => {
      state.loading = false;
      state.blogs = [];
      state.error = action.error.message;
    });
    builder.addCase(addBlog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = [...state.blogs, action.payload];
      state.error = '';
    });
    builder.addCase(addBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateBlog.fulfilled, (state, action) => {
      const blogIndex = state.blogs.findIndex(
        (blog) => blog.id === action.payload.id
      );
      if (blogIndex !== -1) {
        state.blogs[blogIndex] = action.payload;
      }
    });
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    });
    builder.addCase(deleteBlog.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default blogSlice.reducer;
