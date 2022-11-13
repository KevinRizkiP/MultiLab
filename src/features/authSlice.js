import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  ms: '',
  username: '',
  accessToken: '',
  loading: false,
  error: 'error',
};

export const signUpUser = createAsyncThunk('signupuser', async (body) => {
  const res = await axios.post('http://localhost:8081/api/auth/signup', body);
  return await res.json();
});

export const signInUser = createAsyncThunk('signinuser', async (body) => {
  const res = await axios.post('http://localhost:8081/api/auth/signin', body);
  return await res.json();
});

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem('accessToken');
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem('username');
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
    [signInUser.fulfilled]: (state, { payload: { error, msg, accessToken, username } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
        state.token = accessToken;
        state.user = username;

        localStorage.setItem('msg', msg);
        localStorage.setItem('username', JSON.stringify(username));
        localStorage.setItem('accessToken', JSON.stringify(accessToken));
      }
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = true;
    },
    // ~~~~~~~~~~~~~~~~~signUp~~~~~~~~~~~~~~~~~~~~~
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { addToken, addUser, logOut } = authSlice.actions;
export default authSlice.reducer;
