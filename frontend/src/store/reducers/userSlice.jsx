import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};

const userSlice = createSlice({
  name: "users", 
  initialState,
  reducers: {
    loadUsers: (state, action) => {
      state.users = action.payload; // ✅ match key with initialState
    },
  },
});

export const { loadUsers } = userSlice.actions;
export default userSlice.reducer;
