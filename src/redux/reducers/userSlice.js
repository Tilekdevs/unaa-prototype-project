import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {}
  },
  reducers: {
    loginAccount: (state, action) => {
      state.userData = action.payload; 
    },
    logOutAccount: (state) => {
      state.userData = {}; 
    },
  },
});

export const { loginAccount, logOutAccount } = userSlice.actions;
export default userSlice.reducer;
