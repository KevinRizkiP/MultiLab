import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  ms: "",
  user: "",
  token: "",
  loading: false,
  error: "error",
};

export const signUpUser = createAsyncThunk("signupuser", async (body) => {
  const res = await fetch("http://localhost:8080/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

export const signInUser = createAsyncThunk("signinuser", async (body) => {
  const res = await fetch("http://localhost:8080/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("accessToken");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("username");
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
      { payload: { error, msg, token, user } }
    ) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
        state.token = token;
        state.user = user;

        localStorage.setItem("msg", msg);
        localStorage.setItem("username", JSON.stringify(user));
        localStorage.setItem("accessToken", token);
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
