import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
};

const userSlise = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    removeUser(state) {
      state.email = initialState.email;
      state.password = initialState.password;
    },
  },
});

export const { setUser, removeUser } = userSlise.actions;

export default userSlise.reducer;
