import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: true,
};

const LoginSlice = createSlice({
  name: 'loginSlice',
  initialState,

  reducers: {
    setIsLogin: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export default LoginSlice.reducer;

export const {setIsLogin} = LoginSlice.actions;
