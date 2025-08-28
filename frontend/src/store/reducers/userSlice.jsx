import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsers: (state, action) => {
      state.users = action.payload;
    },
    removeuser: (state) => {
      state.users = null;
    }
  },
});

export const { loadUsers, removeuser } = userSlice.actions;
export default userSlice.reducer;