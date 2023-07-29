import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPostsService,
  createPostService,
  deletePostService,
  editPostService,
  likePostService,
  dislikePostService,
  addCommentPostService,
  editCommentPostService,
  deleteCommentPostService,
  getSinglePostService,
} from "../services/postService";
import { toastHandler } from "../utils";

const initialState = {
  allPosts: [],
  postsStatus: "",
  singlePost: "",
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    try {
      const response = await getPostsService();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getSinglePost = createAsyncThunk(
  "posts/getSinglePost",
  async (postId, thunkAPI) => {
    try {
      const response = await getSinglePostService(postId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ postData, token }, thunkAPI) => {
    try {
      const response = await createPostService({ postData, token });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId, token }, thunkAPI) => {
    try {
      const response = await deletePostService({ postId, token });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postId, postData, token }, thunkAPI) => {
    try {
      const response = await editPostService({ postId, postData, token });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, token }, thunkAPI) => {
    try {
      const response = await likePostService({ postId, token });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ postId, token }, thunkAPI) => {
    try {
      const response = await dislikePostService({ postId, token });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ postId, commentData, token }, thunkAPI) => {
    try {
      const response = await addCommentPostService({
        postId,
        commentData,
        token,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const editComment = createAsyncThunk(
  "posts/editComment",
  async ({ postId, commentId, commentData, token }, thunkAPI) => {
    try {
      const response = await editCommentPostService({
        postId,
        commentId,
        commentData,
        token,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async ({ postId, commentId, token }, thunkAPI) => {
    try {
      const response = await deleteCommentPostService({
        postId,
        commentId,
        token,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    //getAllPosts
    [getPosts.pending]: (state) => {
      state.postsStatus = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.allPosts = action.payload.posts;
    },
    [getPosts.rejected]: (state) => {
      state.postsStatus = "rejected";
    },

    //getSinglePost
    [getSinglePost.pending]: (state) => {
      state.postsStatus = "loading";
    },
    [getSinglePost.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.singlePost = action.payload.post;
    },
    [getSinglePost.rejected]: (state) => {
      state.postsStatus = "rejected";
    },

    //createPost
    [createPost.pending]: (state) => {
      state.postsStatus = "loading";
    },
    [createPost.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.allPosts = action.payload.posts;
      toastHandler("success", "Post Created");
    },
    [getPosts.rejected]: (state) => {
      state.postsStatus = "rejected";
    },

    //deletePost
    [deletePost.pending]: (state) => {
      state.postsStatus = "loading";
    },
    [deletePost.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.allPosts = action.payload.posts;
      toastHandler("error", "Post Deleted");
    },
    [deletePost.rejected]: (state) => {
      state.postsStatus = "rejected";
    },

    //editPost
    [editPost.pending]: (state) => {
      state.postsStatus = "loading";
    },
    [editPost.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.allPosts = action.payload.posts;
      toastHandler("info", "Post Updated Successfully!");
    },
    [editPost.rejected]: (state) => {
      state.postsStatus = "rejected";
    },

    //likePost

    [likePost.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.allPosts = action.payload.posts;
    },
    [likePost.rejected]: (state) => {
      state.postsStatus = "rejected";
    },

    //dislikePost
    [dislikePost.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.allPosts = action.payload.posts;
    },
    [dislikePost.rejected]: (state) => {
      state.postsStatus = "rejected";
    },

    //comment
    [addComment.fulfilled]: (state, action) => {
      state.allPosts = action.payload.posts;
      toastHandler("info", "Comment Added!");
    },
    [editComment.fulfilled]: (state, action) => {
      state.allPosts = action.payload.posts;
      toastHandler("info", "Comment Updated!");
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.allPosts = action.payload.posts;
      toastHandler("error", "Comment Deleted!");
    },
  },
});

export const postReducer = postSlice.reducer;
