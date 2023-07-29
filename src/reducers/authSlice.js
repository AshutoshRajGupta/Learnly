import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, singupService } from "../services/authServices";

const initialState = {
  token: "" || JSON.parse(localStorage.getItem("authDetails"))?.token,
  user: "" || JSON.parse(localStorage.getItem("authDetails"))?.user,
  authStatus: "idle",
  loginError: "",
  signupError: "",
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await loginService({
        username,
        password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ firstName, lastName, email, username, password }, thunkAPI) => {
    try {
      const response = await singupService({
        username,
        password,
        email,
        firstName,
        lastName,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Username Already Exists. Please choose different username."
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutHandler: (state) => {
      localStorage.removeItem("authDetails");
      state.token = "";
      state.user = "";
    },
  },
  extraReducers: {
    //login
    [loginUser.pending]: (state) => {
      state.authStatus = "loading";
    },

    [loginUser.fulfilled]: (state, action) => {
      state.authStatus = "success";
      state.user = action.payload.foundUser;
      state.token = action.payload.encodedToken;
      localStorage.setItem(
        "authDetails",
        JSON.stringify({ token: state.token, user: state.user })
      );
    },

    [loginUser.rejected]: (state, action) => {
      state.authStatus = "rejected";
      state.loginError = action.payload.errors;
    },

    //signUp
    [signupUser.pending]: (state) => {
      state.authStatus = "loading";
    },

    [signupUser.fulfilled]: (state, action) => {
      state.authStatus = "success";
      state.user = action.payload.createdUser;
      state.token = action.payload.encodedToken;
      localStorage.setItem(
        "authDetails",
        JSON.stringify({ token: state.token, user: state.user })
      );
    },
    [signupUser.rejected]: (state, action) => {
      state.authStatus = "rejected";
      state.signupError = action.payload;
    },
  },
});

export const { logoutHandler } = authSlice.actions;
export const authReducer = authSlice.reducer;
