import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";

axios.defaults.baseURL = "http://localhost:4200/auth";
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("/register", async (credentials) => {
  try {
    const { data } = await axios.post("/register", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    const { response } = error;

    Notify.failure(
      `${response.status}: ${response.data.errors.password.message}`
    );
    throw error;
  }
});
const login = createAsyncThunk("/login", async (credentials) => {
  try {
    const { data } = await axios.post("/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    const { response } = error;
    console.log(response);
    Notify.failure(`${response.status}: ${response.statusText}`);
    throw error;
  }
});
const logout = createAsyncThunk("/logout", async () => {
  try {
    const { data } = await axios.get("/logout");
    token.unset();
    return data;
  } catch (error) {
    const { response } = error;

    Notify.failure(`${response.status}: ${response.statusText}`);
    throw error;
  }
});
const currentUser = createAsyncThunk("/current", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get("/current");
    return data;
  } catch (error) {
    const { response } = error;

    Notify.failure(`${response.status}: ${response.statusText}`);
    throw error;
  }
});

const operations = {
  register,
  login,
  logout,
  currentUser,
};
export default operations;
