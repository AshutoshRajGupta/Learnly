import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllUsersService,
  getUserByUsernameService,
  getBookmarkPostHandlerService,
  addBookmarkPostService,
  removePostFromBookmarkService,
  followUserService,
  unFollowUserService,
  editUserDetailsService,
} from "../services/userService";
import { toastHandler, getSearchedUsers } from "../utils";

const initialState = {
  allUsers: [],
  singleUser: {},
  bookmarks: [],
  loadingStatus: "",
  searchedUsers: [],
};

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await getAllUsersService();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getSingleUserByUsername = createAsyncThunk(
  "users/getSingleUserByUsername",
  async (username, thunkAPI) => {
    try {
      const response = await getUserByUsernameService(username);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const editUserDetails = createAsyncThunk(
  "users/editUserDetails",
  async ({ userData, token }, thunkAPI) => {
    try {
      const response = await editUserDetailsService({ userData, token });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getBookmarkPosts = createAsyncThunk(
  "users/getBookmarkPosts",
  async (token, thunkAPI) => {
    try {
      const response = await getBookmarkPostHandlerService(token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addBookmarkPosts = createAsyncThunk(
  "users/addBookmarkPosts",
  async ({ postId, token }, thunkAPI) => {
    try {
      const response = await addBookmarkPostService({ token, postId });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const removePostFromBookmark = createAsyncThunk(
  "users/removePostfromBookmark",
  async ({ postId, token }, thunkAPI) => {
    try {
      const response = await removePostFromBookmarkService({ postId, token });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const followUser = createAsyncThunk(
  "users/followUser",
  async ({ followUserId, token }, thunkAPI) => {
    try {
      const response = await followUserService({
        followUserId,
        token,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const unFollowUser = createAsyncThunk(
  "users/unFollowUser",
  async ({ followUserId, token }, thunkAPI) => {
    try {
      const response = await unFollowUserService({
        followUserId,
        token,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const updateFollwingUser = (users, followingUser) => {
  const foundUser = users.find((user) => user._id === followingUser._id);

  if (foundUser) {
    users = [...users].map((user) =>
      user._id === foundUser._id ? followingUser : user
    );
  }
  return users;
};

const updateFollwedUser = (users, followedUser) => {
  const foundUser = users.find((user) => user._id === followedUser._id);

  if (foundUser) {
    users = [...users].map((user) =>
      user._id === foundUser._id ? followedUser : user
    );
  }
  return users;
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    searchedUsersHandler: (state, action) => {
      state.searchedUsers = getSearchedUsers(
        action.payload.searchedText,
        state.allUsers
      );
    },
  },
  extraReducers: {
    //getAllUsers
    [getAllUsers.fulfilled]: (state, action) => {
      state.allUsers = action.payload.users;
    },

    //getSingleUser
    [getSingleUserByUsername.fulfilled]: (state, action) => {
      state.singleUser = action.payload.user;
    },

    //editUserDetails
    [editUserDetails.pending]: (state) => {
      state.loadingStatus = "loading";
    },

    [editUserDetails.fulfilled]: (state, action) => {
      state.loadingStatus = "success";
      state.allUsers = state.allUsers.map((user) =>
        user.username === action.payload.user.username
          ? action.payload.user
          : user
      );
      toastHandler("success", "Your Profile Updated succesfully");
    },

    [editUserDetails.rejected]: (state) => {
      state.loadingStatus = "rejected";
    },

    //getBookmarks
    [getBookmarkPosts.pending]: (state) => {
      state.loadingStatus = "loading";
    },
    [getBookmarkPosts.fulfilled]: (state, action) => {
      state.loadingStatus = "success";
      state.bookmarks = action.payload.bookmarks;
    },
    [getBookmarkPosts.rejected]: (state) => {
      state.loadingStatus = "rejected";
    },

    //addBookmark
    [addBookmarkPosts.fulfilled]: (state, action) => {
      state.bookmarks = action.payload.bookmarks;
      toastHandler("success", "Post Added to Bookmark");
    },

    //removeBookmark
    [removePostFromBookmark.fulfilled]: (state, action) => {
      state.bookmarks = action.payload.bookmarks;
      toastHandler("warn", "Post Removed From Bookmark");
    },

    //followUser
    [followUser.fulfilled]: (state, action) => {
      const { user, followUser } = action.payload;
      state.allUsers = updateFollwingUser(state.allUsers, user);
      state.allUsers = updateFollwedUser(state.allUsers, followUser);
      toastHandler("success", `${followUser.username} followed`);
    },

    //unFollowUser
    [unFollowUser.fulfilled]: (state, action) => {
      const { user, followUser } = action.payload;
      state.allUsers = updateFollwingUser(state.allUsers, user);
      state.allUsers = updateFollwedUser(state.allUsers, followUser);
      toastHandler("info", `${followUser.username} unfollowed`);
    },
  },
});

export const userReducer = userSlice.reducer;
export const { searchedUsersHandler } = userSlice.actions;
