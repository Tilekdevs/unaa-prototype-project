import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
    },
  },
  reducers: {
    loginAccount: (state, action) => {
      state.user = action.payload;
    },
    logOutAccount: (state, action) => {
      state.user = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: "",
      };
    },
  },
});

export const { loginAccount, logOutAccount } = userSlice.actions;
export default userSlice.reducer;
