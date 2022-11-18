import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  username: "",
  email: "",
  isAuthorized: false,
  accessToken: "",
  loading: false,
};

export const signUpUser = createAsyncThunk("signupuser", async (body) => {
  const res = await axios.post("http://localhost:8081/api/auth/signup", body);
  return res.data;
});

export const signInUser = createAsyncThunk("signinuser", async (body) => {
  const res = await axios.post("http://localhost:8081/api/auth/signin", body);
  return res.data;
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("accessToken");
    },
    logOut: (state, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    [signInUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signInUser.fulfilled]: (
      state,
      { payload: { accessToken, username, email } }
    ) => {
      state.loading = false;
      state.isAuthorized = true;
      state.accessToken = accessToken;
      state.username = username;
      state.email = email;

      
      localStorage.setItem("items", JSON.stringify({username,email}));
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = true;
    },
    // ~~~~~~~~~~~~~~~~~signUp~~~~~~~~~~~~~~~~~~~~~
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { addToken, logOut } = authSlice.actions;
export default authSlice.reducer;
